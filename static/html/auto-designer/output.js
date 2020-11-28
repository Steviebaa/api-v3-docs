/* ------ OUTPUT FUNCTIONS TO DISPLAY CERTAIN RESULTS -------- */

//main results
function postProcess(data) {

	jQuery("#run-btn").removeClass("loading");

	debugger;
	var max_buckling = 0.989;

	var results = ["Check", "Result"];
	results.push("Buckling", max_buckling, "positive");
	results.push("Deflection Limit", max_buckling, "positive");


	SkyCivAutoDesigner.tabulateResults();



}

