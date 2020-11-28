/* ------ INPUT FUNCTIONS TO DISPLAY CERTAIN RESULTS -------- */

//this will build your file format, extract the data and load the data
var model_cases = [];
var assembly_object = {}; //core assembly object

function generateModelCases() {

	var cases = [];
	model_cases = [];
	for (var i=0; i < cases.length; i++) {

		//make some change to assembly_object
		assembly_object.variables["height"] = 10;

		var s3d_model = SKYCIV.structure.parametric.init({
			assembly_obj: assembly_object
		});

		model_cases.push(s3d_model);

	}


}


function animateCases() {

	for (var i = 0; i < model_cases.length; i++) {
		
		var this_model = model_cases[i];
		viewer.model.set(this_model);
		viewer.model.buildStructure();
		viewer.render();

	}


}



//everytime input field changes. For instance, Build your model and update the renderer.
function updateModelData() {

	//change model_data here
	var current_data = SkyCivAutoDesigner.getData();
	
	
	
	//update model
	SkyCivAutoDesigner.model_data = {
		"settings": {
			"units": "imperial",
		},
		"nodes": {
			"1": {
				"x": 0,
				"y": 0,
				"z": 0
			},
			"2": {
				"x": 0,
				"y": current_data.structure_height,
				"z": 0
			},
			"3": {
				"x": current_data.structure_width,
				"y": current_data.structure_height,
				"z": 0
			},
			"4": {
				"x": current_data.structure_width,
				"y": 0,
				"z": 0
			}
		},
		"members": {
			"1": {
				"node_A": 1,
				"node_B": 2,
				"section_id": 1
			},
			"2": {
				"node_A": 2,
				"node_B": 3,
				"section_id": 2
			},
			"3": {
				"node_A": 3,
				"node_B": 4,
				"section_id": 1
			}
		},
		"sections": {
			"1": {
				"load_section": [
					"American",
					"AISC",
					"W shapes",
					current_data.column_section
				],
				"material_id": 1
			},
			"2": {
				"load_section": [
					"American",
					"AISC",
					"Rectangular HSS",
					current_data.beam_section
				],
				"material_id": 1
			}
		},
		"materials": {
			"1": {
				"name": "Structural Steel",
				"density": 7850,
				"elasticity_modulus": 200000,
				"poissons_ratio": 0.27
			}
		},
		"supports": {
			"1": {
				"node": 1,
				"restraint_code": "FFFFFF"
			},
			"2": {
				"node": 4,
				"restraint_code": "FFFFFF"
			}			
		},
		"point_loads": {
			"1": {
				"type": "n",
				"node": 2,
				"x_mag": 0,
				"y_mag": -5,
				"z_mag": 0,
				"load_group": "Live_PL"
			}
		},
		"self_weight": {
			"1": {
				"LG": "SW1",
				"x": 0,
				"y": -1,
				"z": 0
			}
		}
	};

	console.log(SkyCivAutoDesigner.model_data);

	//update viewer
	SkyCivAutoDesigner.viewer.model.set(SkyCivAutoDesigner.model_data);
	SkyCivAutoDesigner.viewer.model.buildStructure();
	SkyCivAutoDesigner.viewer.render();
}

//main solve
function runSolve(callback) {

	//do whatever you need with your data
	var options = SkyCivAutoDesigner.options;
	
	// do something with data - like call API
	// can use skyciv resource:


	var api_object = {
		"auth": options.auth,
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
					"s3d_model": SkyCivAutoDesigner.model_data
				}
			},
			{
				"function": "S3D.model.solve",
				"arguments": {
					"analysis_type": "buckling", //linear, nonlinear, buckling
					"repair_model": true
				}
			}
		]
	}

	skyciv.request(api_object, function (res) {
		console.log(res.response.msg); // do something with response
		SkyCivAutoDesigner.updateStatus(res.response.msg, "grey");
		postProcess(res);

		//store session id for faster loading
		options.auth.session_id = res.response.session_id;
		SkyCivAutoDesigner.options = options;
	});


}
