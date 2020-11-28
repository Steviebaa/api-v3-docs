---
id: s3d-renderer-model
title: SKYCIV.renderer Model
---

<!-- <script>function bringToRenderer() {location.hash = "#renderer-container"}</script> -->


SkyCiv 3D renderer is available to bring your models to 3D life. Use the SkyCiv Renderer to build your model and visualise the model to ensure the structure is built correctly, confirm member orientation and include in your reporting.

This client side renderer can be included in your applications so you can have a full rendering of your model in real-time.

<div id="renderer-container"></div>

# Model Class

## `viewer.model.set(s3d_model, callback)`

Sets/updates your S3D model in the viewer.


<br/><br/>

----
## `viewer.model.buildStructure(run_update)`

Builds the object to be read by the renderer. `run_update` is a boolean



# Results Class

## `viewer.results.set(analysis_results, callback)`

The object `analysis_results` can be generated from our structural analysis via S3D.model.solve. Below is an example of a function to display some results data and modifying the deformation of the structure.

```js
	function setResults() {
		viewer.results.set(analysis_results[1][0]); // set first LC only
		viewer.setMode('results');

		// Turn on deformed shape
		viewer.results.setDeformationScale(3); // 0-5
		viewer.results.deformedStructure();

		// Turn on member color results
		var sett = viewer.results.getSettings();
		sett.members = false; // member contours
		sett.plates = false; // plate contours
		sett.current_result_key = 'displacement';
		viewer.render();
	}

```

<br/><br/>

----
## `viewer.results.set(settings_object)`
Set the results settings. Format of the result settings is as follows:
```json
{
	"deformation_scale": 0, // 0-5
	"members": false,
	"plates": false,
	"plate_elements": false, // elemental results
	"current_result_key": "displacement",
}
```


<!-- <br/><br/> -->

<!-- ---- -->
<!-- ## `viewer.results.setCurrentResultKey(key)` -->

<!-- TODO: list keys -->
<!-- Documentation coming soon. -->

<br/><br/>

----
## `viewer.results.runDeformationAnimation(settings_object)`

Runs an animation of the structure's deformation.


## Examples

In these examples S3D.renderer is the new instance of where SKYCIV.renderer().

### Switch vertical axis on the fly
```js
	var s3d_model = S3D.renderer.model.get();
	s3d_model.settings.vertical_axis = "Z"; // or "Y"

	my_viewer.model.set(s3d_model);
	my_viewer.model.buildStructure();
	my_viewer.render();
```

### Multi-Renderer Views
```js

	var viewer_1 = new SKYCIV.renderer({
		for_use_in_S3D: true, // local dev must use S3D format as we don't have S3D.API script
		container_selector: '#renderer-container2'
	});

	viewer_1.model.set(s3d_data.model[1]);

	viewer_1.model.buildStructure();
	viewer_1.render();

	var viewer_2 = new SKYCIV.renderer({
		for_use_in_S3D: true, // local dev must use S3D format as we don't have S3D.API script
		container_selector: '#renderer-container2'
	});

	viewer_2.model.set(s3d_data.model[2]);

	viewer_2.model.buildStructure();
	viewer_2.render();

	viewer_1.resize();
	viewer_2.resize();
```

### Change opacity and colors
```js
	var sett = S3D.renderer.settings.get();
	sett.opacity = 0.5;
	sett.colors = false;
	S3D.renderer.render();
```



