---
id: assemblies
title: Templates and Assemblies
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The SkyCiv assembly library provides a series of functions that can be used to quickly model a structure. A multitude of functions are provided and can be sequentially invoked to create custom a structural model template.

---

## **Getting Started**
Include the <a href="https://api.skyciv.com/dist/v3/javascript/skyciv-parametric-dist.js">skyciv-parametric-dist.js</a> file on your page to get access to the parametric library. Download the sample file below and open it in a web browser to build a Gable Roof warehouse model using only the assembly library. 

[Sample Assemblies Functionality](/html/assembly.html)

### `SKYCIV.structure.parametric.init`
Pass in an assembly object or a model object and an assembly object into this function to build the overall assembly. This function will return a model object back

```js
SKYCIV.structure.parametric.init({
	"assembly_obj" : assembly_obj,
	"model_data": model_data // optional
})
```

---

## **The Assembly Object**
The functions in this library require a specific input object that will be discussed through out this document. The assembly object is made from three parts, the input structure and requirements are explained in greater detail below. A skeleton assembly object is also provided below.

```js
{
	"title" : "Assembly Title",
	"variables": {
		"variable_1" : {
			"value": , // float or truss_style
			"type": ,
		},
	},
	"steps": [
		{}, // defineCadLine obj, [Cad ID #1]
		{}, // defineCadTruss obj, [Cad ID #2]
		{}, // defineCadLine obj, [Cad ID #3]
		{}, // defineCadRepeat obj, [Cad ID #4]
		{}, // defineCadJoin obj, [Cad ID #5]
	]
}
```
#### Variable Types
Variable type can be either `"float"` or `"truss_style"`. 

The value of `"truss_style"` can be `"warren"`, `"gambrel"` ,`"straight"` ,`"cross"` or `"pratt"`

----

## **Steps**

The steps property governs how the model is built. Steps will be execute in the order they are provided. Each cad function generates a cad element. 

---

### Cad Line Function
The Cad Line function allows users to generate a member based on a certain set of inputs. This function can be called three ways and each way requires different set of inputs.

<Tabs
  defaultValue="option-1"
  values={[
    { label: 'By Vector', value: 'option-1', },
    { label: 'By Points', value: 'option-2', },
    { label: 'By Angle', value: 'option-3', },
  ]
}>
  <TabItem value="option-1">

```js title="cad-line-function.json"
const stepCadLine = {
	cad_type: 'cad_line',
	type: 'vector',
	ref_pt: [1, 2, 3], // or {x : 1, y: 1, z: 1} or {cad_id : "2_1", cad_perc: 33},
	vector: [0, 1, 0], // or {x : 0, y: 1, z: 0},
	supports: ['0', 'FFFFFF'], // or ["100", "FFFFFF"] or ["all", "FFFFFF"]
	segments: 3,
	length: 4,
	section_id: 1,
};
```

  </TabItem>
  <TabItem value="option-2">

```js title="cad-line-function.json"
const stepCadLine = {
	cad_type: 'cad_line',
	type: 'points',
	points: [
		[1, 2, 3], // or {x : 1, y: 2, z: 3} or {cad_id : "2_1", cad_perc: 33},
		[1, 3, 3], // or {x : 1, y: 3, z: 3} or {cad_id : "2_1", cad_perc: 33},
	],
	supports: ['0', 'FFFFFF'], // or ["100", "FFFFFF"] or ["all", "FFFFFF"]
	section_id: 1,
};
```

  </TabItem>
  <TabItem value="option-3">

```js title="cad-line-function.json"
const stepCadLine = {
	cad_type: 'cad_line',
	type: 'angle',
	plane: 'xy',
	angle: '30',
	start_pt: [1, 2, 3], // or {x : 1, y: 1, z: 1} or {cad_id : "2_1", cad_perc: 33},
	length: 4,
	segments: 3,
	supports: ['0', 'FFFFFF'], // or ["100", "FFFFFF"] or ["all", "FFFFFF"]
	section_id: 1,
};
```

  </TabItem>
</Tabs>

---

### Cad Plate Function

Users can add parametric plates that are dynamic and move with the rest of the structure. Cad Plates are built on points only.

```js title="cad-plate-function.json"
const stepCadPlate = {
	cad_type: 'cad_plate',
	type: 'points',
	points: [
		[0, 0, 0], // or {x : 0, y: 0, z: 0} or {cad_id : "2_1", cad_perc: 33},
		[0, 1, 0], // or {x : 0, y: 1, z: 0} or {cad_id : "2_1", cad_perc: 33},
		[1, 1, 0], // or {x : 1, y: 1, z: 0} or {cad_id : "2_1", cad_perc: 33},
		[1, 0, 0], // or {x : 1, y: 0, z: 0} or {cad_id : "2_1", cad_perc: 33},
	],
	thickness: 3,
};
```

---

### Cad Repeat Function
The Cad Repeat function allows users to repeat existing cad elements in a certain direction or based on the points given. Cad functions to be repeated must be set before this function in the array of steps.

<Tabs
  defaultValue="option-1"
  values={[
    { label: 'By Vector', value: 'option-1', },
    { label: 'By Points', value: 'option-2', },
  ]
}>
  <TabItem value="option-1">

```js title="cad-repeat-function.json"
const stepCadRepeat = {
	cad_type: 'cad_repeat',
	type: 'vector',
	repetitions: 3,
	ref_ids: ['1', '1_1'],
	vector: [0, 1, 0], // or {x: 1, y: 2, z: 1},
	length: 2,
};
```

  </TabItem>
  <TabItem value="option-2">

```js title="cad-repeat-function.json"
const stepCadRepeat = {
	cad_type: 'cad_repeat',
	type: 'points',
	repetitions: 3,
	ref_ids: ['1', '1_1'],
	points: [
		[0, 1, 0], // or {x: 1, y: 2, z: 1},
		[0, 1, 0], // or {x: 1, y: 2, z: 1},
		[0, 1, 0], // or {x: 1, y: 2, z: 1},
	],
};
```
  </TabItem>
</Tabs>

---

### Cad Rotate Function
The Cad Rotate function allows users to rotate existing cad elements. Similar to cad repeat, cad functions to be rotated must be set before this function in the array of steps.

```js title="cad-rotate-function.json"
const stepCadRotate = {
	cad_type: 'cad_rotate',
	axis: 'y',
	angle: '180',
	repetitions: 1,
	ref_ids: ['1', '1_1'],
};
```

---

### Cad Curve Function
The Cad Curve function allows users to generate curve members when given a certain inputs. This function can be called by specifying the arc to rotate about or the start and end points of the curve.

<Tabs
  defaultValue="option-1"
  values={[
    { label: 'By CenterArc', value: 'option-1', },
    { label: 'By StartEnd', value: 'option-2', },
  ]
}>
  <TabItem value="option-1">

```js title="cad-curve-function.json"
const stepCadCurve = {
	cad_type: 'cad_curve',
	type: 'centerarc',
	center_pt: [0, 1, 0], // or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},
	radius: 10,
	directions: ['x', 'y'], // Length then height direction
	angle: 360,
	segments: 3,
	section_id: 1,
};
```

  </TabItem>
  <TabItem value="option-2">

```js title="cad-curve-function.json"
const stepCadCurve = {
	// the two points have to be in the xy, xz, or yz plane
	cad_type: 'cad_curve',
	type: 'startend',
	start_pt: [0, 1, 0], // or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},
	end_pt: [0, 1, 0], // or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},
	direction: 'x',
	segments: 10,
	circle: false,
};
```

  </TabItem>
</Tabs>

---

### Cad Join Function
The Cad Join function allows users to join nodes and nodes of any existing cad elements to another set of nodes. 
```js title="cad-join-function.json"
const stepCadJoin = {
	cad_type: 'cad_join',
	style: 'straight',
	segments: 1,
	set_1: [
		[0, 0, 1], // or { x: 1, y: 2, z: 3 },
		[0, 0, 1], // or { x: 1, y: 2, z: 3 },
		[0, 0, 1], // or { x: 1, y: 2, z: 3 },
	],
	// or
	set_1: { cad_id: '1' },
	// or
	set_2: [
		[0, 0, 1], // or { x: 1, y: 2, z: 3 },
		[0, 0, 1], // or { x: 1, y: 2, z: 3 },
		[0, 0, 1], // or { x: 1, y: 2, z: 3 },
	],
	//or
	set_2: {
		cad_id: '2',
	},
	reverse: true,
	section_id: 1,
};
```

---

### Cad Truss Function
The Cad Truss function allows users to create trusses based on given input. It can generate 3D trusses when given nodes or 2D trusses when given parameters.

<Tabs
  defaultValue="option-1"
  values={[
    { label: 'By Nodes', value: 'option-1', },
    { label: 'By 2D', value: 'option-2', },
  ]
}>
  <TabItem value="option-1">

```js title="cad-truss-function.json"
const stepCadTruss = {
	cad_type: 'cad_truss',
	type: 'nodes',
	start_pts: [
		[0, 1, 0], // or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},
		[0, 1, 0], // or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},
	],
	end_pts: [
		[0, 1, 0], // or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},
		[0, 1, 0], // or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},
	],
	bays: 3,
	web_section_id: 1,
	chord_section_id: 2,
	style: 'straight',
};
```

  </TabItem>
  <TabItem value="option-2">

```js title="cad-truss-function.json"
const stepCadTruss = {
	cad_type: 'cad_truss',
	type: '2D',
	ref_pt: [1, 1, 1],
	length: ['x', 10],
	height: ['y', 10],
	offset: 30, // or [30,30],
	style: 'warren',
	web_section_id: 1,
	chord_section_id: 2,
	segments: 3,
};
```

  </TabItem>
</Tabs>
