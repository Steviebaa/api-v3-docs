---
id: s3d-renderer-core
title: SKYCIV.renderer
sidebar_label: SKYCIV.renderer
---

import RendererSample from '../src/components/Renderer/RendererSample.js'

---

SkyCiv 3D renderer is available to bring your models to 3D life. Use the SkyCiv Renderer to build your model and visualise the model to ensure the structure is built correctly, confirm member orientation and include in your reporting.

This client side renderer can be included in your applications so you can have a full rendering of your model in real-time. The viewer is fully functional on mobile and tablet devices.

---

Some of the functionality of this library includes:

* Initialising the renderer
* Updating your model data
* Displaying Results
* Mouse click events
* Take screenshots

## **Getting Started**

The following provides a walkthrough of how to set up the SkyCiv Renderer.

### Renderer file

The following versions of the renderer are available:
* [skyciv-renderer-dist-1.0.0.js](https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist-1.0.0.js)
* [skyciv-renderer-dist-1.0.1.js](https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist-1.0.1.js)
* [skyciv-renderer-dist.js](https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist.js)

#### Which one?

If the file will be hosted locally in the project, then choose the file with the latest version.

If the `src` of the html script element is set to one of the above urls, then it is also a good idea to select the file with the latest version.

The files with a version number will never change. The file named `skyciv-renderer-dist.js` will always be the latest version.

### Add the renderer file to the project

Simply add the [s3d-renderer.js file](https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist.js) to your project to then include it as a script in your HTML file. Create a div with an id of `renderer-container`.

```html title="Sample code of the HTML file"
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>SkyCiv Renderer</title>

		<script src="/path/to/skyciv-renderer-dist.js"></script>
		<script src="/path/to/initRenderer.js"></script>
	</head>

	<body>
		<div id='renderer-container' style= "width: 100%; height: 500px; position: relative;"></div>
	</body>
</html>
```

### Initialize

```js title="initRenderer.js"
const viewer = new SKYCIV.renderer({
	container_selector: '#renderer-container',
});

const s3d_model = {}; // Create an s3d_model

viewer.model.set(s3d_model);
viewer.model.buildStructure();
viewer.render();
```

This will initialize the viewer Object and display the following in the container assuming that the [`s3d_model`](docs-s3d-model.md) variable is a valid object.

<RendererSample />

<br/>
<a href="https://platform.skyciv.com/api/v3#model-header" target="_blank" className="sample-code-btn">Test our Renderer</a>
<br/>

<br/><br/>

----

## **Viewer Methods**

The following methods are available via the `viewer` variable created in the sample code above. The `viewer` variable is an instance of `SKYCIV.renderer` which will often be referred to as `viewer` throughout the documentation.

---

### `setMode`

**Function**: `viewer.setMode(mode)`

**Description**: Sets the viewer mode.

**Params**: The `mode` parameter can either be `model` or `results`.

```js title="Sample code for viewer.setMode"
function setViewerMode() {
	viewer.setMode("model");
}
```

---

### `setView`

**Function**: `viewer.setView(view)`

**Description**: Sets the view angle.

**Params**: The `view` parameter can either be `front`, `side`, `top` or `iso`.

```js title="Sample code for viewer.setView"
function setViewAngle() {
	viewer.setView("front");
}
```

---

### `render`

**Function**: `viewer.render(callback, dont_call_model_update)`

**Description**: Render the current state. Changes are not visible until this is called.

**Params**: The callback function to run one the render completes and whether the viewer.model.update function should be called on completion - this defaults to true.

```js title="Sample code for viewer.render"
function renderModel() {
	viewer.render(
		function() { 
			console.log("Render completed");
		}, 
		false);
}
```

---

### `refresh`

**Function**: `viewer.refresh()`

**Description**: Refreshes the render completely (rebuilds the structure and renders again).

**Params**: none

```js title="Sample code for viewer.refresh"
function refreshRenderer() {
	viewer.refresh()
}
```

---

### `clear`

**Function**: `viewer.clear()`

**Description**: Clear the render completely.

**Params**: none

```js title="Sample code for viewer.clear"
function clearRenderer() {
	viewer.clear()
}
```

---

### `screenshot.get`

**Function**: `viewer.screenshot.get(args)`

**Description**: Gets screenshot and returns the base64 data of the image in the callback.

**Params**: Arguments object. See sample.

```js title="Sample code for viewer.screenshot.get"
function getScreenshot() {
	viewer.screenshot.get({
		axis: true,
		background: 'white',
		callback: function (data) {
			console.log(data);
		},
	});
}
```

---

### `screenshot.save`

**Function**: `viewer.screenshot.save(args)`

**Description**: Saves screenshot to device.

**Params**: Arguments object. See sample.

```js title="Sample code for viewer.screenshot.save"
function saveScreenshot() {
	viewer.screenshot.save({
		axis: true,
		background: 'white',
		filename: 'my_screenshot.png',
	});
}
```

<a className="sample-code-btn" onClick={function() {window.viewer.screenshot.save({axis: true,background: "white",filename: "my_screenshot.png"});}} >Try Me!</a>

<br/>

---

### `settings.get`

**Function**: `viewer.settings.get()`

**Description**: Get the current renderer settings.

**Params**: none

```js title="Sample code for viewer.settings.get"
function getSettings() {
	viewer.settings.get();
}
```

---

### `settings.set`

**Function**: `viewer.settings.set(settings_object)`

**Description**: Update the renderer settings.

**Params**: Settings object. See sample.

```js title="Sample code for viewer.settings.set"
function setSettings() {
	viewer.settings.set({
		colors: true,
		opacity: 1,
		visibility: {
			logo: true,
			floor: false,
			nodes: false,
			members: true,
			plates: true,
			plates_mesh: false,
			global_origin_axis: false,
			global_axis: true,
			local_axis: false,
		},
	});
}
```

---

## **Viewer Click Events**

The following methods can be found under the `viewer.mouse` property.

---

### `enable`

**Function**: `viewer.mouse.enable()`

**Description**: Enable mouse interaction (on by default).

**Params**: none

```js title="Sample code for viewer.mouse.enable"
function enableMouse() {
	viewer.mouse.enable();
}
```

---

### `selectObject`

**Function**: `viewer.mouse.selectedObject(object_type, id)`

**Description**: Manually select/highlight an object in the scene.

**Params**: A string which accepts `node`, `member` or `plate` and the element ID as an integer.

```js title="Sample code for viewer.mouse.selectedObject"
function selectModelElement() {
	viewer.mouse.selectObject("plate", 3);
}
```

---

### `getSelectedObjects`

**Function**: `viewer.mouse.getSelectedObjects(object_type)`

**Description**: Get all selected elements in the scene. Specify type to only select a specific type. Provide no arguments to get all types.

**Params**: A string which accepts `node`, `member` or `plate`.

```js title="Sample code for viewer.mouse.getSelectedObjects"
function getSelected() {
	viewer.mouse.getSelectedObjects("member")
}
```

---

### `setOnObjectClickFunction`

**Function**: `viewer.mouse.setOnObjectClickFunction(function)`

**Description**: Function to call when clicking/selecting an object.

**Params**: The callback function to execute.

```js title="Sample code for viewer.mouse.setOnObjectClickFunction"
function setOnClickFunction() {
	viewer.mouse.setOnObjectClickFunction(function(data) {
		console.log('You have an clicked Element: ', data);
		const element_id = data.id;
		const type = data.type // ("member", "node", "plate")
	});
}
```