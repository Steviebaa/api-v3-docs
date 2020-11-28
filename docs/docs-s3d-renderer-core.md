---
id: s3d-renderer-core
title: SKYCIV.renderer Core
---

<script src="https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src ="/api/v3/js/renderer-sample.js"></script>

SkyCiv 3D renderer is available to bring your models to 3D life. Use the SkyCiv Renderer to build your model and visualise the model to ensure the structure is built correctly, confirm member orientation and include in your reporting.

This client side renderer can be included in your applications so you can have a full rendering of your model in real-time. The viewer is fully functional on mobile and tablet devices.

<!--<img src="/api/v3/img/images/3d-renderer-viewer.png" style={{width: '80%'}}>--/>

Some of the functionality of this library includes:

* Initialising the renderer
* Updating your model data
* Displaying Results
* Mouse click events
* Take screenshots

## Getting Started

Simply include the [s3d-renderer.js file](https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist.js) on your page. Then run the following to initialize the renderer:

```js
	var viewer = new SKYCIV.renderer({
		container_selector: '#renderer-container',
		//background: '#DDD'
	});

	viewer.model.set(s3d_model);
	viewer.model.buildStructure();
	viewer.render();
```

This will initialise the viewer Object and display the following in your container:

<div id="render-div"><div id="renderer-container"></div><div>

<br/>
<a href="https://platform.skyciv.com/api/v3#model-header" target="_blank" class="sample-code-btn">Test our Renderer</a>
<br/>

<br/><br/>

----

### `viewer.setMode(mode)`

Toggle between the renderer mode, between either `"model"` or `"results"`


<br/><br/>

----

### `viewer.setView(view)`
Changes the camera view (front, side, top, iso)

<br/><br/>

----

### `viewer.render(callback, dont_call_model_update)`
Makes the 3D graphics perform a render of the current state. No changes are visible to the renderer until this function is called. This function will call SKYCIV.renderer.model.update by default unless told not to.

<br/><br/>

----

### `viewer.refresh()`
Refreshes the render completely (rebuilds the structure and renders again)


<br/><br/>

----

### `viewer.clear()`
Refreshes the render completely (rebuilds the structure and renders again)

<br/><br/>

----

### `viewer.screenshot.get(args)`
Gets screenshot and returns the base64 data of the image in the callback. Example:
```js
	viewer.screenshot.get({
		"axis": true,
		"background": "white",
		"callback": function(data) {
			console.log(data);
		}
	})
```


<br/><br/>

----

### `viewer.screenshot.save(args)`
Saves screenshot to device. Example:
```js
	viewer.screenshot.get({
		"axis": true,
		"background": "white",
		"filename": "my_screenshot.png"
	})
```
<!-- <a class="sample-code-btn" onclick='viewer.screenshot.get({"axis": true,"background": "white","filename": "my_screenshot.png"})' >Try Me!</a> -->


## Settings and Menu

### `viewer.settings.set(settings_object)`

Updates the settings of your renderer. Here are some of the options that can be passed in as settings_object:

```json
{
	"visibility": {
		"logo": true,
		"floor": false,
		"nodes": false,
		"members": true,
		"plates": true,
		"plates_mesh": false,
		"global_origin_axis": false,
		"global_axis": true,
		"local_axis": false,
	},
	"colors": true,
	"opacity": 1,
}
```

<!-- ## `viewer.menu.enable()` -->
<!-- The menu will show if its enabled. view.menu.disable() does opposite. -->

<!-- ## `viewer.menu.show()` -->
<!-- Display renderer default menu. view.menu.hide() hides the menu. -->


## Click Events

### `viewer.mouse.enable()`
Enable mouse interaction (on by default)

### `viewer.mouse.selectedObject(object_type, ID)`
Manually select/highlight an object in the scene ("node", "member, "plate") by its ID

### `viewer.mouse.getSelectedObjects(object_type)`
Gets all selected/highlighted objects in the scene. If object_type is specified then it will only return the highlighted objects of that type. Leave as null to get all selected elements.

### `viewer.mouse.setOnObjectClickFunction(function)`
Function to call when clicking/selecting an object

```js
	viewer.mouse.setOnObjectClickFunction(function(data) {
		console.log('You have an clicked Element', data);
		var element_id = data.id;
		var type = data.type // ("member", "node", "plate")
	});

```


