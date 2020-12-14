---
id: S3D.model
title: S3D.model
---

---

The `S3D.model` namespace provides functions which take action on the [`s3d_model`](docs-s3d-model.md) object.

<div class="banner info">
	To create a model object, see <a href="s3d-model"><code>s3d_model</code></a>.
</div>

---

## `S3D.model.set`

Setting a model is the first step to running any analysis, design or running any other functionality on a structural model.


| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |

#### Sample input for the `S3D.model.set` function
```json
{
  "function": "S3D.model.set",
  "arguments": {
    "s3d_model": S3D_MODEL_OBJECT
  }
}
```

#### Sample response for the `S3D.model.set` function

The response will confirm whether or not the model was successfully set.

```json
{
  "msg": "Model was successfully set.",
  "status": 0,
  "data": ""
}
```
<a class="sample-code-btn" target="_blank" href="https://platform.skyciv.com/api?f=S3D.model.set">Try <code>S3D.model.set</code></a>
<br/><br/>

----

## `S3D.model.get`

Once the model is set, you can request the model data at any time by calling the function `S3D.model.get`. This function takes no arguments, and will return the [`s3d_model`](docs-s3d-model.md) object.

<div class="banner info">
	<code>S3D.model.get</code> will only work if <code>S3D.model.set</code> has been called earlier in the session.
</div>

#### Sample input for the `S3D.model.get` function
```json
{
	"function": "S3D.model.get"
}
```


#### Sample response for the `S3D.model.get` function

The response will return the `s3d_model` object.

```json
{
  "data": S3D_MODEL_OBJECT,
  "status": 0,
  "function": "S3D.model.get",
  "msg": ""
}
```

<br/>

---

## `S3D.model.repair`

`S3D.model.repair` will run SkyCiv's repair model functionality. This will identify any issues with the model and repair them to help ensure the analysis model is built correctly.

<div class="banner info">
	<code>s3d_model</code> may be omitted if <code>S3D.model.set</code> has been called earlier in the session.
</div>

| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---    |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. | |
|  `checks` | `[string]` | `unused_nodes`<br/> `large_structure`<br/> `merge_nodes`<br/> `zero_members`<br/> `continuous_to_normal_members`<br/> `intersect_members`<br/> `default_section`<br/> `force_plate_mesh`  |  An array of strings defining the [checks](#checks) to be performed.  | `["unused_nodes", "large_structure", "merge_nodes", "zero_members", "continuous_to_normal_members", "intersect_members", "default_section", "force_plate_mesh"]` |

#### `checks`
* `unused_nodes` - scan model for nodes that are floating and disconnected.
* `large_structure` - detect extremely slender members (used to detect unit issues).
* `merge_nodes` - merge close nodes with a tolerance based on unit system.
* `zero_members` - detect members that have the same start/end node.
* `continuous_to_normal_members` - detect members with intermediate nodes. Change to continuous.
* `intersect_members` - detect and connect intersecting members.
* `default_section` - find any members with no section data, add a default section.
* `force_plate_mesh` - allow analysis to run without plates being meshed first.

#### Sample input for the `S3D.model.repair` function
```json
{
  "function": "S3D.model.repair",
  "arguments": {
    "s3d_model": S3D_MODEL_OBJECT,
    "checks": [
      "unused_nodes",
      "large_structure",
      "merge_nodes",
      "zero_members",
      "continuous_to_normal_members",
      "intersect_members",
      "default_section",
      "force_plate_mesh"
    ]
  }
}
```

#### Sample response for the `S3D.model.repair` function

The response will confirm whether or not the model was successfully repaired.

```json
{
  "data": S3D_MODEL_OBJECT, // The repaired s3d_model object
  "msg": "S3D model successfully repaired",
  "status": 0
}
```

<br/>

----

## `S3D.model.solve`

Runs a structural analysis on your [`s3d_model`](docs-s3d-model.md).

| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---    |
|  `analysis_type` | `string` | `linear`, `nonlinear`, `buckling`, `dynamic`, `response_spectrum` | The type of analysis to be performed. | `linear` |
|  `repair_model` | `boolean` | `true`, `false` | If [`S3D.model.repair`](#s3dmodelrepair) should be executed prior to solving. | `false` |
|  `return_results` | `boolean` | `true`, `false` | To minimize data downloaded, solve data will be removed. | `true` |
|  `format` | `string` | `json`, `csv` | Export results in particular file format. | `json` | 
|  `lc_filter` | `[string]` | `envelope`, `load_case`, `load_group`, `load_combo`, `envelope_abs_max` | Only return specific data in the response. You can also provide names you have applied to load combination. E.g. `LC1`.  | All cases | 
|  `result_filter` | `[string]` |  `reactions`, `member_displacements`, `member_forces`, `member_stresses`, `member_lengths`, `member_stations`, `member_discontinuities`, `member_minimums`, `member_maximums`, `member_peak_results`, `plate_displacements`, `plate_forces`, `plate_stresses`, `plate_minimums`, `plate_maximums`, `plate_peak_results`, `buckling`, `dynamic_frequency`  | Only return specific data in the response. | All results | 

<div class="banner tip">
	Using the <code>filter</code> property will drastically reduce the size of the response therefore saving on download data and time.
</div>

#### Sample input for the `S3D.model.solve` function
```json
{
  "function": "S3D.model.solve",
  "arguments": {
    "analysis_type": "nonlinear",
	"repair_model": true,
	"lc_filter": ["envelope_abs_max", "LC1"],
	"result_filter": ["member_peak_results", "member_discontinuities"]
  }
}
```

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.model.solve_repair" target="_blank" class="sample-code-btn">Try <code>S3D.model.solve</code></a>
<br/>

#### Sample response for the `S3D.model.solve` function

The analysis results will return an object of all the load combination results in the following format. If the solver fails to run, it will return with a `status: 1` and an error message to assist in debugging the issue.

```json
{
  "1": {
    "name": "LC1",
    "type": "user_defined",
    "reactions": {},
    "member_displacements": {},
    "member_forces": {},
    "member_stresses": {},
    "member_lengths": {},
    "member_stations": {},
    "member_discontinuities": {},
    "member_minimums": {},
    "member_maximums": {},
    "member_peak_results": {},
    "plate_displacements": {},
    "plate_forces": {},
    "plate_stresses": {},
    "plate_minimums": {},
    "plate_maximums": {},
    "plate_peak_results": {}
  },
  "2": {} // etc
}

```

<br/>

----

## `S3D.model.takeScreenshot`

Once [`S3D.model.set`](#s3dmodelset) has been executed, you can take various screenshots of the model.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `views` | `[string]` | `iso`, `front`, `side`, `top` |  Array of strings, defining the different perspectives to take a screenshot from. |
|  `is_renderer` | `boolean` | `true`, `false`  | Take screenshots of the structure in the 3D renderer.  |
|  `visibility_settings` | `object` | An object as defined in [`visibility_settings`](#visibility-settings) |  An object defining additional settings. Only applicable to wireframe display. |

#### `visibility_settings`
| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `show_nodes` | `boolean` | `true`, `false`  | If nodes should be visible.  |
|  `show_loads` | `boolean` | `true`, `false`  | If loads should be visible.  |
|  `show_plates`| `boolean` | `true`, `false`  | If plates should be visible.  |
|  `projection` | `string`  | `perspective`, `orthographic` | The projection of the model to the view-point.  |

#### Sample input for the `S3D.model.takeScreenshot` function

```json
{
  "function": "S3D.model.takeScreenshot",
  "arguments": {
    "views": ["iso", "front", "side", "top"],
    "is_renderer": false,
    "visibility_settings": {
      "show_nodes": true,
      "show_loads": false,
      "show_plates": true,
      "projection": "perspective"
    }
  }
}
```

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.model.takeScreenshot" target="_blank" class="sample-code-btn">Try <code>S3D.model.takeScreenshot</code></a>
<br/>

#### Sample response for the `S3D.model.takeScreenshot` function

<div class="banner info">
	The response will return an object of screenshots in base64 format.
</div>

```json
{
  "status": 0,
  "msg": "Screenshots successfully taken and returned in base64 format.",
  "data": {
    "iso": "data:image/png;base64,iVBORw0K...",
    "front": "data:image/png;base64,EACEpCABCQg....",
    "side": "data:image/png;base64,GABCQgAQlIQAI....",
    "top": "data:image/png;base64,CABCUhAAhKQgAQ...."
  }
}
```

The following is an example of the isometric screenshot from the above example:

<img src="/api-v3-docs/img/images/S3D-model-takeScreenshot.png"/>

<br/>

----

## `S3D.model.mesh`

Mesh the plates in the [`s3d_model`](docs-s3d-model.md) object.

| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---    |
|  `method` | `string`  | `frontal_quads`, `frontal`, `adapt`, `packing_parallelograms`, `delaunay` |  Specify what type of mesher to use.| `frontal` |
|  `granularity` | `integer` | `1`-`5` |  Integer between 1 and 5 for level of granularity of mesh (1 is coarse, 5 is fine). | `1`
|  `plate_ids` | `[integer]` | An array of plate ids. | Array of plates you wish to mesh.  | All plates if property is not provided. |

#### Sample input for the `S3D.model.mesh` function

```json
{
  "function": "S3D.model.mesh",
  "arguments": {
    "method": "delaunay",
    "granularity": 3,
    "plate_ids": [1, 3]
  }
}
```

<br/>

---

## `S3D.model.script`

Allows you to run custom JavaScript functions to access all S3D functionality such as intersecting or adding new nodes or members. Available functions can be [found here](apps-s3d-functions.md).

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `script` | `string`  | A string of JavaScript |  Define custom actions to run. Available functions can be [found here](apps-s3d-functions.md). |

#### Sample input for the `S3D.model.script` function

```js
const custom_script = `
  //splits members by intersecting nodes
  S3D.structure.members.intersect({ 
    "typ": "intersectingMembers",
    "memberNo": 343
  });

  //node already exists here, so will return existing node ID
  var new_node_id = S3D.structure.nodes.add({ 
    x: 32,
    y: 36,
    z: 104
  });

  var new_node_id2 = S3D.structure.nodes.add({ 
    x: 32,
    y: 0,
    z: 0
  });

  S3D.structure.supports.add({
    node_id:2, 
    fixity:"FFFFFR"
  });

  S3D.structure.members.add({
    nodeA: new_node_id,
    nodeB: new_node_id2,
    section_id: 1,
    type: "continuous", //normal, rigid, tension, compression, cable
    fixityA: "FFFFFF",
    fixityB: "FFFFFF",
    offsetsA: "0,0,0",
    offsetsB: "0,0,0",
  });

  S3D.UI.update({redraw:true});
`;

const functions = [
  {
    function: 'S3D.session.start',
    arguments: {
      keep_open: false,
    },
  },
  {
    function: 'S3D.model.set',
    arguments: {
      s3d_model: S3D_MODEL_OBJECT,
    },
  },
  {
    function: 'S3D.model.script',
    arguments: {
      script: custom_script,
    },
  },
  {
    function: 'S3D.file.save',
    arguments: {
      name: 'Script Testing',
      path: 'api',
    },
  }
]
```