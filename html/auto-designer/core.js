
SkyCivAutoDesigner = function() {

	var functions = {};
	var options = {};
	functions.viewer;
	functions.input_variables;
	functions.model_data;
	functions.section_library = {};
	functions.options = {
		heading: "Example Auto Designer",
		msg: "Include some message for the input form.",
		logo: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/07/logo-2.png?auto=format&q=60&fit=max&w=930",
		auth: {
			username: "sam@skyciv.com",
			key: "sZFl0x6w7iq53bub7sFzhpZuDVMiPJEyVNNaXN6Kb5DfuJl5RIuUTnzK6HwKx4k6"
		},
		left_set: {
			save_button: true,
			solve_button: true,
			share_button: true,
		},
		right_set: {
			order_button: true,
			send_to_s3d: true,
		},
		section_library: "american"//leave null/false for no section library

	}

	functions.input_variables = {
		project_name: {
			type: "text",
			label: "Project Name",
			run_change: false, //true by default
		},
		structure_height: {
			type: "number",
			label: "Height",
			units: "m",
			default: 12
		},
		structure_width: {
			type: "number",
			label: "Width",
			units: "m",
			default: 10
		},
		column_section: {
			type: "section",
			label: "Beam Section",
			default: "W14x808"
		},
		beam_section: {
			type: "section",
			label: "Column Section",
			default: "HSS3-1/2x1-1/2x3/16"
		},
	}

	functions.init = function () {

		var opts = functions.options;

		//click events
		$("#run-btn").click(function() {
			SkyCivAutoDesigner.runSolve();
		});

		$("#save-file-btn").click(function () {
			SkyCivAutoDesigner.saveFile();
		})

		$("#load-file-btn").click(function () {
			$("#myFile").click();
			//var myUploadedFile = document.getElementById("myFile").files[0];
			//var data = JSON.parse(myUploadedFile);
			//SkyCivAutoDesigner.loadData(data)
			
		});

		$(".send-to-s3d-btn").click(function () {

			jQuery(this).addClass("loading");
			var data = SkyCivAutoDesigner.getData();
			var filename = "New File";
			if (data.filename && data.functions != "") filename = data.function;

			var api_object = {
				"auth": SkyCivAutoDesigner.options.auth,
				"functions": [
					{
						"function": "S3D.session.start",
						"arguments": {
							"keep_open": true
						}
					},
					{
						"function": "S3D.model.set",
						"arguments": {
							"s3d_model": functions.model_data
						}
					},
					{
						"function": "S3D.file.save",
						"arguments": {
							"name": filename,
							"path": "api/auto-designer/"
						}
					}
				]
			}

			skyciv.request(api_object, function (res) {
				console.log(res.response.msg); // do something with response
				jQuery(".send-to-s3d-btn").removeClass("loading");
				var win = window.open(res.response.data, '_blank');
				win.focus();

				//store session id for faster loading
				options.auth.session_id = res.response.session_id;
				SkyCivAutoDesigner.options = options;
			});

		});

		$(".order-btn").click(function() {
			$('#order-alert').modal('show');
		});

		if (opts.heading) $("#main-heading").html(opts.heading);
		if (opts.msg) $("#main-description").html(opts.msg);
		if (opts.logo) $(".company-logo").attr("src", opts.logo);
		
		//init variables
		initInputVariables();
		if (opts.section_library) pullSectionLibraries(opts.section_library);
		
		

		//init viewer
		functions.viewer = new SKYCIV.renderer({
			container_selector: '#renderer-container',
			//background: '#DDD'
		});
		updateModelData();


		functions.options = opts;


	}

	functions.getData = function () {

		var current_data = {};

		$(".design-input").each(function (index) {
			console.log(index + ": " + $(this).text());
			var key = $(this).attr("data-key");
			var val = $(this).val();
			var type = $(this).attr("data-type");

			if (type == "number" || type =="float" || type=="int") {
				val = parseFloat(val);
				if (isNaN(val)) return {status: 1, msg: "Value must be a number", obj: $(this)};
			}


			current_data[key] = val;
		});

		return current_data;

	}

	functions.loadData = function(data) {
		console.log(data)
	}

	functions.saveFile = function() {

		var filename = "New File";
		var type= "json";
		var data = functions.getData();

		if (data.project_name) filename = data.project_name;

		var str_data = JSON.stringify(data)

		var file = new Blob([str_data], { type: type });
		if (window.navigator.msSaveOrOpenBlob) // IE10+
			window.navigator.msSaveOrOpenBlob(file, filename);
		else { // Others
			var a = document.createElement("a"),
				url = URL.createObjectURL(file);
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			setTimeout(function () {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 0);
		}

	}

	functions.runSolve = function() {
		jQuery("#run-btn").addClass("loading");
		runSolve(); //custom function in my-script.js
		
	}

	functions.updateStatus = function(msg, colour) {
		jQuery("#api-status-msg").show().html(msg);
		jQuery("#api-status-msg").attr("class", "ui message "+ colour);
	}

	functions.tabulateResults = function (results) {
		var results = [
			["Check", "Result"],
			["Deflection Limit", "0.352", "positive"],
			["Stress Limit", "0.952", "positive"],
			["Stress Limit", "1.152", "negative"],
			["Load Capacity", "245 kN", null],
			["Material Usage", "234 m<sup>3</sup>", null],
		]

		
		var table_html = "";
		
		table_html += '<table class="ui celled table very compact"><thead><tr><th>' + results[0][0] + '</th><th>' + results[0][1] +'</th></tr></thead><tbody>';

		for (var i = 1; i < results.length; i++) {
			var this_row = results[i];
			var status_icon = "";
			var row_colour = "";

			if (this_row[2] == "positive") status_icon = '<i class="green checkmark icon"></i>';
			if (this_row[2] == "negative") status_icon = '<i class="red close icon"></i>';
			if (this_row[2] == "warning") status_icon = '<i class="yellow attention icon"></i>';

			table_html += '<tr><td>' + this_row[0] + '</td><td>' + this_row[1] + '  ' +status_icon+'</td>';	
		}

		table_html += '</tbody></table>';


		jQuery("#results-output").html(table_html)

	}
		


	function initInputVariables(input_variables, html_container) {
		if (!input_variables) input_variables = functions.input_variables;
		if (!html_container) html_container = "#input-form";

		var html_form = "";
		for (var i in input_variables) {
			var inp = input_variables[i];
			var label = inp.label;
			var units = inp.units;
			var type = inp.type;
			var default_val = "";
			if (inp.default) default_val = inp.default;

			if (type == "input" || type == "number" || type == "text") {
				html_form += '<div class="ui right labeled input small design-input-div"><label>'+label+': </label><input data-key="' + i + '" data-type="' + type + '" class="design-input" type="' + type + '" placeholder="Enter ' + label + '" value="' + default_val+'">';
				if (units) html_form += '<div class="ui basic label">' + units +'</div>';
				html_form += '</div><br>';
			} if (type == "section" || type == "search") {
				if (type == "section") {
					type = "text";
					html_form += '<div class="ui search section-search abeled input small design-input-div"><label>' + label +': </label><div class="ui icon input"><input data-key="' + i + '" data-type="' + type + '" class="prompt design-input" type="' + type + '" placeholder="Loading Sections..."><i class="search icon"></i></div><div class="results"></div></div>';
				}
			}
		}


		jQuery(html_container).html(html_form);

		$(".design-input").change(function () {
			updateModelData();
		});



	}

	function orderAction() {

	}

	function pullSectionLibraries(library) {

		if (library == "american") section_map = ["American"]
		var api_object = {
			"auth": SkyCivAutoDesigner.options.auth,
			"functions": [
				{
					'function': "S3D.session.start",
					'arguments': {},
				},
				{
					'function': "S3D.SB.getLibraryTree",
					'arguments': {
						'section_map': section_map
					},
				}
			]
		}

		jQuery(".section-search").addClass("loading");

		skyciv.request(api_object, function (res) {
			if (res.response.status ==0) {
				functions.section_library = res.response.data;
				functions.options.auth.session_id = res.response.session_id;

				if (functions.section_library) {
					var full_list = [];
					for (var n in functions.section_library) {
						var section_library = functions.section_library[n]; //"AISC", "NDS" etc...

						for (var s in section_library) {
							var this_section_type = section_library[s]; //3C, W shapes....
							
							for (var i in this_section_type) {
								var desc_str = n + " - " + s;
								var this_section_name = this_section_type[i];
								full_list.push({
									title: this_section_name,
									description: desc_str,
								});
							}

						}

					}
				}

				$('.ui.search').search({
					source: full_list
				});

				jQuery(".section-search").removeClass("loading");
				jQuery(".section-search input").attr("placeholder", "Search Sections");
			}
			
		});
	}

	return functions;

}();