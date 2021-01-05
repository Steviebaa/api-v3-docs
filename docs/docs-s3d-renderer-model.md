---
id: s3d-renderer-model
title: SKYCIV.renderer Model
sidebar_label: SKYCIV.renderer cont.
---

import RendererSample from '../src/components/Renderer/RendererSample.js'

---

SkyCiv 3D renderer is available to bring 3D models to life. Use the SkyCiv Renderer to build and visualise the model ensuring the structure is built correctly it is built.

This client side renderer can be included in your applications enabling full rendering of the model in real-time.

<RendererSample/>

---

## `viewer.model`

The following methods are available through the `viewer.model` property.

---

### `set`

**Function**: `viewer.model.set(s3d_model, callback)`

**Description**: Sets/updates your S3D model in the viewer.

**Params**: An [s3d_model](docs-s3d-model.md) object and a callback function to run once the model has been set.

----

### `buildStructure`

Builds the object to be read by the renderer.

**Function**: `viewer.model.buildStructure(run_update)`

**Description**: Builds the object to be read by the renderer.

**Params**: A boolean indicating if `run_update` should be triggered following the build.

---

## `viewer.results`

The following methods are available through the `viewer.results` property.

---

### `set`

**Function**: `viewer.results.set(analysis_results, callback)`

**Description**: Set results to the model.

**Params**: The `analysis_results` object and a callback function to run once the results have been set.

:::note

The object `analysis_results` can be generated from a structural analysis via [`S3D.model.solve`](docs-S3D.model.md#s3dmodelsolve). Below is an example of a function to display some results data and to modify the deformation of the structure.

:::

```js title="Sample code of viewer.results.set"
function setResults() {
	viewer.results.set(analysis_results[1][0]); // set first LC only
	viewer.setMode('results');

	// Turn on deformed shape
	viewer.results.setDeformationScale(3); // 0-5
	viewer.results.deformedStructure();

	// Turn on member color results
	const resultSettings = viewer.results.getSettings();
	resultSettings.members = false; // member contours
	resultSettings.plates = false; // plate contours
	resultSettings.current_result_key = 'displacement';
	viewer.render();
}
```

----

### `setSettings`

**Function**: `viewer.results.setSettings(settings_object)`

**Description**: Set the results settings for the viewer.

**Params**: The `settings_object` object.

```js title="Sample code of viewer.results.setSettings"
function setResultsSettings() {
	viewer.results.setSettings({
		"deformation_scale": 0, // 0-5
		"members": false,
		"plates": false,
		"plate_elements": false, // elemental results
		"current_result_key": "displacement",
	})
}
```

----

### `runDeformationAnimation`

**Function**: `viewer.results.runDeformationAnimation(settings_object)`

**Description**: Runs an animation of the structure's deformation.

**Params**: The `settings_object` object.

```js title="Sample code of viewer.results.runDeformationAnimation"
function runDeformationAnimation() {
	viewer.results.runDeformationAnimation({
		"deformation_scale": 0, // 0-5
		"current_result_key": "displacement",
	})
}
```

---

## Examples

<!-- In these examples `S3D.renderer` is the new instance of where `SKYCIV.renderer()`. -->

### Switch vertical axis on the fly
```js title="Sample code to set the vertical axis"
// Create an instance of the renderer
viewer = new SKYCIV.renderer({
	container_selector: '#renderer-container',
});

const s3d_model = viewer.model.get();
s3d_model.settings.vertical_axis = "Z"; // or "Y"

viewer.model.set(s3d_model);
viewer.model.buildStructure();
viewer.render();
```

### Multiple Renderer Views
```js title="Sample code to create multiple views"
//====================================================
// Create instance for first view 
const viewer_1 = new SKYCIV.renderer({
	container_selector: '#renderer-container-1'
});

// Create an s3d_model for the first viewer
const s3d_model_1 = {...}

// Set the model data to the view, build and render it
viewer_1.model.set(s3d_model_1);
viewer_1.model.buildStructure();
viewer_1.render();
//====================================================
// Create instance for second view 
const viewer_2 = new SKYCIV.renderer({
	container_selector: '#renderer-container-2'
});

// Create an s3d_model for the second viewer
const s3d_model_2 = {...}

// Set the model data to the view, build and render it
viewer_2.model.set(s3d_model_2);
viewer_2.model.buildStructure();
viewer_2.render();
//====================================================

// Resize views
viewer_1.resize();
viewer_2.resize();
```

### Change opacity and colors
```js title="Sample code to set colors of the renderer"
// Create an instance of the renderer
viewer = new SKYCIV.renderer({
	container_selector: '#renderer-container',
});

const settingsObject = viewer.settings.get();
settingsObject.opacity = 0.5;
settingsObject.colors = false;
viewer.render();
```