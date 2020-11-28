---
id: s3d-functions
title: S3D Functions
---

Documentation on some functions used in S3D. Need additional functions, email us at support@skyciv.com and let us know!


## Basics

### Clear All

Clears all elements, drawing and starts a new project

```js
	S3D.structure.clear();
```

### Update UI

Syncs the data and UI. Updates the UI, redraws model. All keys are optional.

```js
	S3D.UI.update({
		redraw: true,
		update_undo_array: false,
		update_transformations: false,
		ignore_save_notification: false,
		refresh_open_datasheet: true,
		keep_highlight: false,
		refresh_left_menu: true
	});
```

### Get Current Model Data

Returns the model data in JSON format. Note: this format is slightly different to the API s3d_model format.

Users can access this data in two ways. (1) calling S3D.structure.get() or (2) directly access the global arrays which are storing this data. For example, the variable nodes is storing all the nodes in the model. The index in the array is that node's ID.

```js
	S3D.structure.get(); // (1) returns all nodes, elements etc...

	//(2) access global variables directly
	settings; //object of all settings

	nodes; //array of all nodes
	elements; //array of all members
	sections;
	supports;
	pointLoads;
	distributedLoads;
	moments;
	member_prestress_loads;
	pressures;
	area_loads;
	area_loads_DLs;
	area_loads_PLs;
	loadCombos;
	settlements;
	plates;
	meshedPlates;
	groups;
	filters;

```

### Set Model

Sets model data. Data format should be the same as S3D.structure.get();

```js
	S3D.structure.set(model_data, file_name, is_undo, callback);
```

### Get Analysis Results

If your model has been solved, users can download the analysis results. This will return an array of objects, containing all results from that analysis. If arg = true, the function will download all results. If false, it will only return what has already been downloaded. This prevents excessive downloading if not necessary. 

```js
	S3D.results.getAll(true); 
```



## Graphics


### Highlight an element

```js
	S3D.graphics.highlightElement("member", 12); //highlight member 12
```

### Locate an element

```js
	S3D.graphics.locator("node", 6); //locate node 6
```


### Refresh canvas

Offers a fast, lightweight redraw function. Useful for highlighting an any non-model changes that need re-rendering.

```js
	S3D.graphics.refreshAllCanvas(callback);
```

### Take Screenshot

Takes a screenshot of what is on the current viewer. Returns the screenshot_data in base64 format.

```js
	takeScreenshot("return", true, function (screenshot_data) {
			//callback after screenshot is taken										 
	}, 0.3);
```

	

## Modelling


### Add/remove a Node

Adds a node to the model data. Will not redraw by default [call S3D.UI.update({redraw:true}); to redraw]. We recommend only updating the UI after a lot of changes. 

The function will return the ID of the added node. If the ID exists, the node will be updated to this location. If a node already exists at this x,y,z location, the function will not another node, instead it will return the existsing node's ID.

```js
	S3D.structure.nodes.add({
		ID: 12, //optional
		x: 1.5,
		y: 3,
		z:0
	});

	S3D.structure.nodes.remove([2,21]); //removes nodes 2 and 21

	S3D.UI.update({redraw:true}); //will redraw model and refresh UI
```

### Add/Remove a Member

Adds a member to your model. NodeA & NodeB are the only required fields.

```js
	S3D.structure.members.add({
		ID: 3, //optional
		nodeA: 1,
		nodeB: 5,
		section_id: 1,
		type: "continuous", //normal, rigid, tension, compression, cable
		fixityA: "FFFFFF",
		fixityB: "FFFFFF",
		offsetsA: "0,0,0",
		offsetsB: "0,0,0",
	});

	S3D.structure.members.remove([2,21]); //removes members 2 and 21

	S3D.UI.update({redraw:true}); //will redraw model and refresh UI - showing the changes
```

### Split Member

Here are some sample split member functions of how you can split member 14:

```js
	S3D.structure.members.intersect({ //splits members by intersecting nodes
		"typ": "intersectingNodes",
		"memberNo": 14
	});

	S3D.structure.members.intersect({ //splits members by % or distance 
		"typ": "splitStr",
		"memberNo": 14,
		"splitStr": "50%", //or 1.34 for 1.34m from nodeA
		"split_nodes_only": false
	});

	S3D.structure.members.intersect({ //locates any intersecting members and splits them at their intersection
		"typ": "intersectingMembers",
		"memberNo": 14,
		"split_nodes_only": false
	});

	S3D.structure.members.intersect({
		"typ": "equalParts",
		"memberNo": 14,
		"inc": 4, //how many parts to split
		"split_nodes_only": true
	});

	S3D.UI.update({redraw:true}); //will redraw model and refresh UI - showing the changes

	
```

### Add Point Loads

```js

	S3D.structure.loads.point_loads.add(
		{
			node_id: "1", //add y = -1 force at node 1
			type: "node"
			xMag: 0,
			yMag: -1,
			zMag: 0, 
			LG: 'LG'
		}
	  // OR 
		{
			member_id: "3", //add y = -1.5 point load 50% along a member
			type: "member"
			xMag: 0,
			yMag: -1.5,
			zMag: 0, 
			pos: 50,
			LG: 'LG'
		}
	);

```

### Add Distributed Load

```js
	S3D.structure.loads.distributed_loads.add({ //apply a -0.5 force/length to member 2
		member_id: "2",
		start_xMag: 0,
		start_yMag: -0.5,
		start_zMag: 0, 	 
		end_xMag: 0,
		end_yMag: -0.5,
		end_zMag: 0, 
		LG: 'LG',
		axes: "local", //or global to apply loads to global X,Y,Z
		start_pos: 0,
		end_pos: 100
	})

```

### Meshing/Unmeshing Plates

```js
	S3D.mesher.meshPlates({
		plateIDs: [1,2,3],
		b_nDivisions: 5,
		h_nDivisions: 5,
		structuredMeshMethod: 0 //quads
	});

	S3D.mesher.unMeshPlates([3], true); //unmeshes plate 3 and updates the UI

```

## Section Builder

### Get Section Library

```js
	SB.library.getTree();
```

