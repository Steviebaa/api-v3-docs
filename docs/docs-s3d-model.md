---
id: s3d-model
title: The s3d_model object
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

:::note
For modelling functions, see [`model`](S3D.model.md).
:::

Throughout the rest of the documentation, the SkyCiv Structural 3D model may be referred to as the `s3d_model` object. The `s3d_model` object is a JSON object that describes the structural model. This data contains all the necessary information to model and analyse the structure. 


A convenient way to examine what an existing model looks like as JSON, is to open the file in [SkyCiv Structural 3D](https://platform.skyciv.com/structural) and click:

<div style={{textAlign: "center"}}><code>File → Export → SkyCiv File (JSON for API)</code></div>
<br/>

This will download the JSON object of the current model, and may help as a guide to building the `s3d_model` object. Similarly, a JSON file can be tested directly through the UI by clicking: 

<div style={{textAlign: "center"}}><code>File → Import → SkyCiv File (JSON for API)</code></div>
<br/>


:::tip
By exporting from the S3D platform, the <code>sections</code> object may look complicated. If you would like to keep the <code>s3d_model</code> more compact, it can be substituted to use the <code>load_section</code> property as seen in <a href="#sections"><code>sections</code></a>. You can get all available sections by inspecting the <a href="https://platform.skyciv.com/section-builder">Section Builder Platform</a> or via the [`S3D.SB.getLibraryTree`](S3D.SB#s3dsbgetlibrarytree) function. 
:::


<a href="https://platform.skyciv.com/api/v3#model-header" target="_blank" class="sample-code-btn">Try <code>s3d_model</code></a>

<br/>

---

## `s3d_model`

The `s3d_model` property is comprised of the following properties:

* [`settings`](#settings)
* [`nodes`](#nodes)
* [`members`](#members)
* [`plates`](#plates)
* [`meshed_plates`](#meshed_plates)
* [`sections`](#sections)
* [`materials`](#materials)
* [`supports`](#supports)
* [`settlements`](#settlements)
* [`point_loads`](#point_loads)
* [`moments`](#moments)
* [`distributed_loads`](#distributed_loads)
* [`pressures`](#pressures)
* [`area_loads`](#area_loads)
* [`self_weight`](#self_weight)
* [`load_combinations`](#load_combinations)

<br/>

---

### `settings`

| Key | Type | Accepts | Description | Default |
| :-- | :--: | :------ | :---------- | :------ |
| `units` | `string` or `object` | `imperial`, `metric`, [`{...}`](#units) | Provide `imperial` or `metric` for default units. [See Units to set specific units.](#units) | Varies between design standard. |
| `precision` | `string` | `fixed`, `exponential` | Number format style. | `fixed` |
| `precision_values` | `integer` | Between `1` and `15` | Number of precision. | |
| `evaluation_points` | `integer` | Between `3` and `50` | number of evaluation points for each member. Higher evaluation points will (slightly) increase the accuracy but will increase the time taken to solve. | |
| `vertical_axis` | `string` | `Y`, `Z` | The axis which defines the vertical direction of the model. | `Y` |
| `solver_timeout` | `integer` | Any number. in seconds | How long until the solver timeouts and returns "Solve Failed" if model is not solving for an unknown reason. | |
| `accurate_buckling_shape` | `boolean` | `true`, `false` | If enabled when a buckling analysis is performed then the accuracy of the displayed buckled shape will be improved, however it will take longer to solve. The buckling factors and values should be very similar to when this option is not enabled. | |
| `buckling_johnson` | `boolean` | `true`, `false` | Use the parabolic or J.B. Johnson formula which is a more conservative approach for buckling of intermediate-length columns. The Johnson formula will be applied for critical stresses above half the yield strength. | |
| `non_linear_tolerance` | `string` | E.g. `1` = 1% | Non-Linear Analysis will continue to solve until this tolerance (relative error percentage) is met. A smaller number takes longer for convergence. | |
| `non_linear_theory` | `string` | `small`, `finite` || |
| `auto_stabilize_model` | `boolean` | `true`, `false` | Enable this if your model has stability issues, especially if the non-linear analysis will not converge. The solver will attempt to automatically stabilize nodes that are not restrained. Its is recommended to leave this disabled unless you are having issues with stability. | |
| `member_offsets_axis` | `string` | `global`, `local` | Specifies if member offsets should be relative to the local or global axis system. | `local` |

#### `units`

| Key  | Type   | Accepts  |      Description    |
| :------------- | :----------: | :----------- | :----------- |
|  `length` | `string`   |  `ft` `in` `mm` `m`  | Length for defining elements. |
|  `section_length` | `string`   |  `in`, `mm`   | Length for defining section properties. |
|  `material_strength` | `string`   | `ksi`, `psi`, `mpa`  | |
|  `density` | `string`   |  `lb/ft3`, `kg/m3`  | |
|  `force` | `string`   |  `kip`, `lb`, `kn`, `n`, `kg`  | |
|  `moment` | `string`   |  `kip-ft`, `lb-ft`, `lb-in`, `kn-m`, `n-m`, `kg-m`  | |
|  `pressure` | `string`   | `ksi`, `ksf`, `psi`, `psf`, `kpa`, `mpa`, `pa`   | |
|  `mass` | `string`   |   `kip`, `lb`, `kg` | |
|  `translation` | `string`   |  `mm`, `in`  | |
|  `stress` | `string`   |  `ksi`, `psi`, `mpa`, `kpa`  | |

:::important
Unit systems can not be mixed between Imperial/Metric.
:::

#### Sample code for the `settings` object

<Tabs
  defaultValue="option-1"
  values={[
    { label: 'Option 1 - Partially specify', value: 'option-1', },
    { label: 'Option 2 - Entirely specified', value: 'option-2', },
  ]
}>
  <TabItem value="option-1">

```json title="simple-settings.json"
{
    "settings": {
        "units": "imperial", // Will load default imperial units
        "vertical_axis": "Z" // Only change one setting
    }
}
```

  </TabItem>
  <TabItem value="option-2">

```json title="detailed-settings.json"
{
    "settings": {
        "units": {
            "length": "m",
            "section_length": "mm",
            "material_strength": "mpa",
            "density": "kg/m3",
            "force": "kn",
            "moment": "kn-m",
            "pressure": "kpa",
            "mass": "kg",
            "translation": "mm",
            "stress": "mpa"
        },
        "precision": "fixed",
        "precision_values": 3,
        "evaluation_points": 9,
        "vertical_axis": "Y",
        "solver_timeout": 600,
        "accurate_buckling_shape": false,
        "buckling_johnson": false,
        "non_linear_tolerance": "1",
        "non_linear_theory": "small",
        "auto_stabilize_model": false
        "member_offsets_axis" : "global"
    }
}
```

  </TabItem>
</Tabs>

<br/>

---

### `nodes`

Each node is defined by an object. The node key is the ID of that node in the structure.

The `x`, `y`, and `z` properties represent the coordinates in the global axes, respectively.

| Key  | Type    |      Description    |
| :---  | :---      |   :---                            |
|   `x`   |   `float` |   The x coordinate of the node    |
|   `y`   |   `float` |   The y coordinate of the node    |
|   `z`   |   `float` |   The z coordinate of the node    |

:::note
The coordinates must be entered in the units defined by the <code>length</code> property of the <a href="#units"><code>units</code></a> object.
:::

#### Sample code for the `nodes` object

The following JSON snippet describes 2 nodes, with IDs 1 & 2. 

Node 1 lies at the origin, Node 2 lies a distance of 1 (in the relevant units) from the origin, along the x axis.

```json title="nodes-sample.json"
{
    "nodes": {
        "1": {
            "x": 0,
            "y": 0,
            "z": 0
        },
        "2": {
            "x": 1,
            "y": 0,
            "z": 0
        }
    }
}
```

<br/>

---

### `members`

Similar to [`nodes`](#nodes), each member is defined by an object, and the object key is the ID of that member.

Members are defined by two `nodes`, the `section`, rotation angle, and `fixity` of the member at each node. Other optional properties may be specified.

| Key  | Type    | Accepts |  Description     | Default   |
| :--- | :---    |  :---            |  :---            |  :---            |
|   `type`   |   `string`<br/>\(optional) | `normal`, `normal_continuous`, `cable`  |  If `cable` is specified:<ul><li>`rotation_angle` defaults to `0`</li><li>`fixity_A` and `fixity_B` default to `FFFRRR`</li><li>All offset properties default to `0`.</li></ul> | `normal` |
|   `cable_length`   |   `float`<br/>\(optional) | Any non-negative number | Relevant only if `type` = `cable`, and even in this case, this is optional.<br/>A cable length can be specified to account for sagging or pre-tension.<br/>Do not set this property if you do not need to account for sagging or pre-tension.   |   |
|   `node_A`   |   `integer` | Any non-negative number |    The start node, identified by the node ID   |   |
|   `node_B`   |   `integer` | Any non-negative number |    The end node, identified by the node ID   |   |
|   `section_id`   |   `integer` | Any non-negative number |    The ID of the section to be applied to the member.<br/>Must be positive.<br/>[`sections`](#sections) are defined in their own object.   |   |
|   `rotation_angle`   |   `float` | Any non-negative number |    Rotation of the member about its own axis, in degrees.<br/>If "type" property = "cable", this value is ignored.   |   |
|   `fixity_A`   |   `string` | |  How the member is connected about node A, represented by a [restraint code](#restraint-code).<br/>If "type" property = "cable", this value is ignored.    |   |
|   `fixity_B`   |   `string` | |    How the member is connected about node B, represented by a [restraint code](#restraint-code).<br/>If "type" property = "cable", this value is ignored.   |   |
|   `offset_Ax`   |   `float` | Any number. |    The local x distance that the member is offset from its centroid at node A.<br/>If "type" property = "cable", this value is ignored.   | `0`  |
|   `offset_Ay`   |   `float` | Any number. |    The local y distance that the member is offset from its centroid at node A.<br/>If "type" property = "cable", this value is ignored.   | `0`  |
|   `offset_Az`   |   `float` | Any number. |    The local z distance that the member is offset from its centroid at node A.<br/>If "type" property = "cable", this value is ignored.   | `0`  |
|   `offset_Bx`   |   `float` | Any number. |    The local x distance that the member is offset from its centroid at node B.<br/>If "type" property = "cable", this value is ignored.   | `0`  |
|   `offset_By`   |   `float` | Any number. |    The local y distance that the member is offset from its centroid at node B.<br/>If "type" property = "cable", this value is ignored.   | `0`  |
|   `offset_Bz`   |   `float` | Any number. |    The local z distance that the member is offset from its centroid at node B.<br/>If "type" property = "cable", this value is ignored.   | `0`  |

:::note
The offsets must be entered in the units defined by the <code>section_length</code> property of the <a href="#units"><code>units</code></a> object.
:::

#### Sample code for the `members` object

The following JSON snippet describes 2 members.

The first member spans from node 1 to node 4, is not rotated about its own axis, is fully fixed, and is offset in the local x direction by the same amount at both ends. It uses the first [`section`](#sections) in the list of sections.

The second member is a cable, spanning from node 2 to 5, and uses the second `section` in the list of sections.

```json title="members-sample.json"
{
    "members": {
        "1": {
            "node_A": 1,
            "node_B": 4,
            "section_id": 1,
            "rotation_angle": 0,
            "fixity_A": "FFFFFF",
            "fixity_B": "FFFFFF",
            "offset_Ax": "101.6",
            "offset_Ay": "0",
            "offset_Az": "0",
            "offset_Bx": "101.6",
            "offset_By": "0",
            "offset_Bz": "0",
        },
        "2": {
            "type": "cable",				
            "node_A": 2,
            "node_B": 5,
            "section_id": 2
        }
    }
}
```

<br/>

---

### `plates`

Plates are 2D structural elements. Each plate is defined by an object which is contained within the `plates` object. Each plate inside the plates object should be identified by a unique positive integer.

| Key | Type | Accepts | Description | Default |
| :-- | :--- | :---------- | :---------- | :---------- |
| `nodes` | `[integer]` | An array of normal integers. | The nodes which make up the plate. A minimum of 3 nodes are required to specify a plate. |  |
| `thickness` | `float` | A normal number | The thickness of the plate. The units of the thickness are defined by the `section_length` property of the [`units`](#units) object |  |
| `material_id` | `integer` | A normal number | The material of the plate. Identified by the material ID defined in the [`materials`](#materials) object. |  |
| `rotZ` | `float` |  | Rotation of the plate about its local Z (normal) axis in degrees. | `0.0` |
| `type` | `string` | `mindlin` | Mindlin plates take into account shear deformations based on the Mindlin-Reissner Theory. *Kirchhoff Plates will be added in future* | `mindlin` |
| `offset` | `float` |  | Offset of the plate along its local z-axis |  |
| `state` | `string` | `stress`, `strain` | Denotes whether the plate is in a state of plane stress or plane strain. | `stress` |
| `is_meshed` | `boolean` | `true`, `false` | Indicates whether the plate is already meshed. If the plate is meshed, then the elements making up the mesh must be specified in the [`meshed_plates`](#meshed_plates) object, and have their `parent_plate` property set to the ID of this plate. | `false` |

:::note
Each plate defined is also known as a <code>parent_plate</code> as it can be further meshed into smaller plate elements.
:::

#### Sample code for the `plates` object

The following JSON snippet shows a meshed, plane stress, mindlin plate from nodes 4 to 7:

```json title="plates-sample.json"
{
    "plates": {
        "1": {
            "nodes": [4,5,7,6],
            "thickness": 50,
            "material_id": 1,
            "rotZ": 0,
            "type": "mindlin",
            "offset": 65.6,
            "state": "stress",
            "is_meshed": true
        }
    }
}
```

<br/>

---

### `meshed_plates`

Meshed Plates are the 2D elements (triangular or quadrilateral) that make up a plate. Every meshed plate has a `parent_plate` property defining where it originated from. Individual plates are defined by an object in the `meshed_plates` object. The object key is the plate ID, and must be a unique positive integer value.

| Key | Type | Description | Default |
| :-- | :--- | :---------- | :------ |
| `node_A` | `integer` | The first node of the meshed plate. |  |
| `node_B` | `integer` | The second node of the meshed plate. |  |
| `node_C` | `integer` | The third node of the meshed plate. |  |
| `node_D` | `integer` | The fourth node of the meshed plate.<br/>Set this to `null` (`None` for a Python dictionary) if the meshed plate is triangular. | |
| `parent_plate`| `integer` | The ID of the plate which this meshed plate originated from.<br/>Must refer to a plate in the [`plates`](#plates) object. | |
| `rotZ` | `float` | Rotation of this plate about the plate's local Z axis, in degrees. | `0.0` |

#### Sample code for the `meshed_plates` object
The following JSON snippet shows a triangular plate which originates from plate 1 as defined by the `parent_plate` property:

```json title="meshed_plates-sample.json"
{
    "meshed_plates": {
        "1": {
            "node_A": 39,
            "node_B": 51,
            "node_C": 65,
            "node_D": null,
            "parent_plate": 1,
            "rotZ": 166.43391070308
        }
    }
}
```

<br/>

---

### `sections`
Individual sections are stored in the sections object. Each section is defined by an object. The object key is the ID of the section, and should be a unique positive integer.

Sections can be specified in the following ways:

1. By providing the `load_section` property which contains the path to the section as seen in the <a href="https://platform.skyciv.com/section-builder">SkyCiv Section Builder</a>.
2. By providing the `load_custom` property which contains the name of a custom shape defined in <a href="https://platform.skyciv.com/section-builder">SkyCiv Section Builder</a>.
3. Using the output from the <a href="https://platform.skyciv.com/section-builder">SkyCiv Section Builder</a>, which includes geometric coordinates of the cross section shape. Sections specified using this format support design, stress calculation, and can be rendered in S3D.
4. As custom input: The geometric coordinates of the cross section shape are not considered, and only the essential section properties (Iz, Iy, J etc.) must be specified. Sections specified using this format do **not** support design, stress calculation, or rendering in S3D, making them appropriate for analysis, but not design.

:::note
The section builder format contains all the properties of the custom input format plus the <code>version</code> & <code>aux</code> properties.
:::


<Tabs
  defaultValue="option-1"
  values={[
    { label: 'load_section', value: 'option-1', },
    { label: 'load_custom', value: 'option-2', },
    { label: 'SB JSON format', value: 'option-3', },
    { label: 'Custom JSON format', value: 'option-4', },
  ]
}>
  <TabItem value="option-1">


Using the `load_section` property.


| Key  | Type    |  Description     |
| :--- | :---    |  :---            |
| `load_section`  |   `[string]` | Provided as an array of 4 strings (see example below). It is the path of the section in the section library, obtained by inspection from within <a href="https://platform.skyciv.com/section-builder">SkyCiv Section Builder</a> or by attaining the library tree via [S3D.SB.getLibraryTree](docs-S3D.SB.md#s3dsbgetlibrarytree)|
| `material_id`   |   `integer`   |   The ID of the material that is assigned to the section. [`materials`](#materials) are defined in their own object. |

Sample code for the `sections` object using the `load_section` property

```json title="sections-sample.json"
{
    "sections": {
        "1": {
            "load_section": ["American", "AISC", "W shapes", "W14x22"],
            "material_id": 1
        }
    }
}
```

  </TabItem>
  <TabItem value="option-2">

Using the `load_custom` property

| Key  | Type    |  Description     |
| :--- | :---    |  :---            |
| `load_custom`  |   `string` | The name of a custom shape defined in <a href="https://platform.skyciv.com/section-builder">SkyCiv Section Builder</a>.|
| `material_id`   |   `integer`   |   The ID of the material that is assigned to the section. [`materials`](#materials) are defined in their own object. |

Sample code for the `sections` object using the `load_custom` property

```json title="sections-sample.json"
{
    "sections": {
        "1": {
            "load_custom": "reinforced-channel",
            "material_id": 1
        }
    }
}
```

  </TabItem>
  <TabItem value="option-3">


Section Builder JSON format

| Key  | Type    |  Description     |
| :--- | :---    |  :---            |
| `version`  | `float`  |   The version of SkyCiv Section Builder that was used to construct this object.   |
| `name`  | `string`  |   The name of your section. If nothing is entered, the name will default to the (rounded) height x width dimensions.  |
| `area`  |   `float` |   Cross sectional area.   |
| `Iy`    |   `float` |   Area moment of inertia about the section y axis.    |
| `Iz`    |   `float` |   Area moment of inertia about the section z axis.    |
| `material_id`   |   `integer`   |   The ID of the material that is assigned to the section. [`materials`](#materials) are defined in their own object. |
| `shear_area_z`  |   `float`<br/>(optional) |   Shear Area in the section z-axis.<br/>To model Euler-Bernoulli beams (i.e. to ignore shear deformation - recommended), leave this value as Empty or Zero.<br/>To model Timoshenko Beams (i.e. to include the effect of shear deformation), specify a value.<br/>*This should not be confused with the property of the same name within the* `aux` *object.* |
| `shear_area_y`  |   `float`<br/>(optional) |   Shear Area in the section y-axis.<br/>To model Euler-Bernoulli beams (i.e. to ignore shear deformation - recommended), leave this value as Empty or Zero.<br/>To model Timoshenko Beams (i.e. to include the effect of shear deformation), specify a value.<br/>*This should not be confused with the property of the same name within the* `aux` *object.* |
| `aux`   |   `object`    |   The `aux` property is an object containing various section property values.<br/>It contains the geometric coordinates of the cross section, among other properties, which are calculated via the [Section Builder Platform](https://platform.skyciv.com/section-builder). For brevity, these individual properties are not detailed here.<br/>To understand how to create a section via the [Section Builder Platform](https://platform.skyciv.com/section-builder) and implement it into the API, please contact us at info@skyciv.com   |

Sample code for the `sections` object using the Section Builder format 

```json title="sections-sample.json"
{
    "sections": {
        "1": { 
          "version": 1,
          "name": "203 x 203",
          "area": 5894.42893,
          "Iy": 15391924.9909,
          "Iz": 45719276.66583,
          "J": 224234,
          "material_id": 1,
          "shear_area_z": 500,
          "shear_area_y": 800,
          "aux": {
            "composite": false,
            "Qz": 249151.30616,
            "Qy": 115057.81814,
            "centroid_point": [
              101.6,
              101.6
            ],
            "centroid_length": [
              101.6,
              101.6
            ],
            "depth": 203.2,
            "width": 203.2,
            "alpha": 0,
            "shear_area_z": 1380.153833546,
            "shear_area_y": 3889.4548957763,
            "torsion_radius": 16.5124
          }
        }
    }
}
```

  </TabItem>
  <TabItem value="option-4">

Custom Input JSON format

 Key  | Type    |  Description     |
| :--- | :---    |  :---            |
| `name`  | `string`  |   The name of your section. If nothing is entered, the name will default to the (rounded) height x width dimensions.  |
| `material_id`   |   `integer`   |   The ID of the material that is assigned to the section. [`materials`](#materials) are defined in their own object. |
| `shear_area_z`  |   `float`<br/>(optional) |   Shear Area in the section z-axis.<br/>To model Euler-Bernoulli beams (i.e. to ignore shear deformation - recommended), leave this value as Empty or Zero.<br/>To model Timoshenko Beams (i.e. to include the effect of shear deformation), specify a value.|
| `shear_area_y`  |   `float`<br/>(optional) |   Shear Area in the section y-axis.<br/>To model Euler-Bernoulli beams (i.e. to ignore shear deformation - recommended), leave this value as Empty or Zero.<br/>To model Timoshenko Beams (i.e. to include the effect of shear deformation), specify a value.|
| `area`  |   `float` |   Cross sectional area.   |
| `Iy`    |   `float` |   Area moment of inertia about the section y axis.    |
| `Iz`    |   `float` |   Area moment of inertia about the section z axis.    |
| `J`     |   `float` |   Torsion constant.    |

Sample code for the `sections` object using the Custom Input option
The following JSON Snippet shows both methods of specifying the section data:

```json title="sections-sample.json"
{
    "sections": {
        "1": { 
          "name": "CustomInputSection",
          "area": 6500,
          "Iy": 16000000,
          "Iz": 50000000,
          "J": 250000,
          "material_id": 3,
          "shear_area_z": 500,
          "shear_area_y": 800
        }
    }
}
```

  </TabItem>
</Tabs>

<br/>

---

### `materials`
Individual materials are stored in the materials object. Each material is defined by an object. The object key is the ID of the material, and should be a unique positive integer.

| Key  | Type    |  Description     |
| :--- | :---    |  :---            |
| `name` | `string` | The name of the material |
| `density` | `float` | The density of the material. |
| `elasticity_modulus` | `float` | The Modulus of Elasticity (or Young's Modulus) of the material. |
| `poissons_ratio` | `float` | The Poisson's Ratio for the material. |

#### Sample code for the `materials` object
The following JSON snippet adds two materials, Steel & Aluminium, to the model.

```json title="materials-sample.json"
{
    "materials": {
        "1": {
            "name": "Structural Steel",
            "density": 7850,
            "elasticity_modulus": 200000,
            "poissons_ratio": 0.27
        },
        "2": {
            "name": "Aluminium",
            "density": 2700,
            "elasticity_modulus": 69000,
            "poissons_ratio": 0.32
        }
    }
}
```

<br/>

---

### `supports`
Individual supports are stored in the supports object. Each support is defined by an object. The object key is the ID of the support, and should be a unique positive integer.

| Key  | Type    |  Description     |
| :--- | :---    |  :---            |
| `node` | `integer` | The ID of the node at which the support is located. |
| `restraint_code` | `string` | A 6 character [restraint code](#restraint-code). |
| `tx` | `float` | Spring stiffness for translation in the x axis. Applies only if the restraint code character for translation in x = `S`. |
| `ty` | `float` | Spring stiffness for translation in the y axis. Applies only if the restraint code character for translation in y = `S`. |
| `tz` | `float` | Spring stiffness for translation in the z axis. Applies only if the restraint code character for translation in z= `S`. |
| `rx` | `float` | Spring stiffness for rotation about the x axis. Applies only if the restraint code character for rotation about x = `S`. |
| `ry` | `float` | Spring stiffness for rotation about the y axis. Applies only if the restraint code character for rotation about y = `S`. |
| `rz` | `float` | Spring stiffness for rotation about the z axis. Applies only if the restraint code character for rotation about z = `S`. |

#### Sample code for the `supports` object
The following JSON snippet creates two supports: the first is fully fixed, the second is released in all rotational degrees of freedom, and has a spring in the translational y direction.

```json title="supports-sample.json"
{
    "supports": {
      "1": { // Add a fully fixed support
        "node": 1,
        "restraint_code": "FFFFFF",
        "tx": 0,
        "ty": 0,
        "tz": 0,
        "rx": 0,
        "ry": 0,
        "rz": 0
      },
      "2": { // Add a support with a spring for translation in y, and released rotationally
        "node": 2,
        "restraint_code": "FSFRRR",
        "tx": 0,
        "ty": 0.1,
        "tz": 0,
        "rx": 0,
        "ry": 0,
        "rz": 0
        }
    }
}
```

<br/>

---

### `settlements`
Settlement loads may be applied using the `settlements` object. Each settlement is defined by an object with properties within the `settlements` object. Individual settlements should be identified by a unique positive integer.

| Key | Type | Description |
| :-- | :--- | :---------- |
| `node` | `integer` | The node ID of the node to which the settlement is applied. |
| `tx` | `float` | Settlement displacement in the global x axis. |
| `ty` | `float` | Settlement displacement in the global y axis. |
| `tz` | `float` | Settlement displacement in the global z axis. |
| `rx` | `float` | Settlement rotation about the global x axis. |
| `ry` | `float` | Settlement rotation about the global y axis. |
| `rz` | `float` | Settlement rotation about the global z axis. |

#### Sample code for the `settlements` object
The following JSON snippet shows a settlement load applied to node 1, in the global translational x & y directions, and about the global y axis:

```json title="settlements-sample.json"
{
    "settlements": {
       "1": {
          "node": 1,
          "tx": 5,
          "ty": -0.1,
          "tz": 0,
          "rx": 0,
          "ry": -0.174533,
          "rz": 0,
       }
    }
}
```

<br/>

---

### `point_loads`
Individual point loads are stored in the `point_loads` object. Each point load is defined by an object. The object key is the ID of the point load, and should be a unique positive integer. Point loads may be applied to nodes, or at a position along a member, determined by the `type` property.

| Key | Type | Accepts | Description |
| :-- | :--- | :---    | :--
| `type` | `string` | `n`,`m` | The type of object to which the load is applied. **n**ode, **m**ember
| `node` | `integer` | A normal number | Include the property `node` only when applying the point load to a node. The value should be the node ID. |
| `member` | `integer` | A normal number | Include the property `member` only when applying the point load to a member. The value should be the member ID. |
| `position` | `float` | `0`-`100` | Include the property `position` only when applying the point load to a member. The value is the position of the point load along the member, from the start node of the member. It is defined as a percentage, and therefore has an acceptable value of 0 to 100. |
| `x_mag` | `float` | Any number. | The magnitude of the point load force along x axis. |
| `y_mag` | `float` | Any number. | The magnitude of the point load force along y axis. |
| `z_mag` | `float` | Any number. | The magnitude of the point load force along z axis. |
| `load_group` | `integer` | A normal number | The load group to which the point load will be grouped. |

#### Sample code for the `point_loads` object
The following JSON snippet will add two point loads to the S3D model, a nodal point load, and a member point load midway along the member:

```json title="point_loads-sample.json"
{
    "point_loads": {
        "1": {
           "type": "n",
           "node": 2,
           "x_mag": 0,
           "y_mag": -1,
           "z_mag": 0,
           "load_group": 1
        },
        "2": {
           "type": "m",
           "member": 1,
           "position": 50,
           "x_mag": 0,
           "y_mag": -2,
           "z_mag": 0,
           "load_group": 1
        }
    }
}
```

<br/>

---

### `moments`
Individual moments (moment loads) are stored in the `moments` object. Each moment is defined by an object. The object key is the ID of the moment, and should be a unique positive integer. Moments may be applied to nodes, or at a position along a member, determined by the property `type`.

| Key | Type | Accepts | Description |
| :-- | :--- | :---    | :--
| `type` | `string` | `n`,`m` | The type of object to which the load is applied. **n**ode, **m**ember
| `node` | `integer` | A normal number | Include the property `node` only when applying the moment to a node. The value should be the node ID. |
| `member` | `integer` | A normal number | Include the property `member` only when applying the moment to a member. The value should be the member ID. |
| `position` | `float` | `0`-`100` | Include the property `position` only when applying the moment to a member. The value is the position of the moment along the member, from the start node of the member. It is defined as a percentage, and therefore has an acceptable value of 0 to 100. |
| `x_mag` | `float` | Any number. | The magnitude of the moment about the x axis. Positive = counter-clockwise, negative = clockwise. |
| `y_mag` | `float` | Any number. | The magnitude of the moment about the y axis. Positive = counter-clockwise, negative = clockwise. |
| `z_mag` | `float` | Any number. | The magnitude of the moment about the z axis. Positive = counter-clockwise, negative = clockwise. |
| `load_group` | `integer` | A normal number | The load group to which the moment will be grouped. |

#### Sample code for the `moments` object
The following JSON snippet will add two moments to the S3D model, a nodal moment, and a point moment midway along a member:

```json title="moments-sample.json"
{
    "moments": {
       "1": {
          "type": "n",
          "node": 2,
          "x_mag": 0,
          "y_mag": -1,
          "z_mag": 0,
          "load_group": 1
       },
        "2": {
          "type": "m",
          "member": 1,
          "position": 50,
          "x_mag": 0,
          "y_mag": -2,
          "z_mag": 0,
          "load_group": 1
       }
    }
}
```

<br/>

---

### `distributed_loads`
Individual distributed loads are stored in the `distributed_loads` object. Each distributed load is defined by an object. The object key is the ID of the distributed load, and should be a unique positive integer.

| Key | Type | Accepts | Description |
| :-- | :--- | :---    | :--         |
| `member` | `integer` | A normal number | Member to which the distributed load will be applied. Identified by the member ID. |
| `x_mag_A` | `float` | Any number. | Magnitude of load in x direction at the starting position A. |
| `y_mag_A` | `float` | Any number. | Magnitude of load in y direction at the starting position A. |
| `z_mag_A` | `float` | Any number. | Magnitude of load in z direction at the starting position A. |
| `x_mag_B` | `float` | Any number. | Magnitude of load in x direction at the finish position B. |
| `y_mag_B` | `float` | Any number. | Magnitude of load in y direction at the finish position B. |
| `z_mag_B` | `float` | Any number. | Magnitude of load in z direction at the finish position B. |
| `position_A` | `float` | A normal number | Position along member where the distributed load starts. Expressed as a percentage. |
| `position_B` | `float` | A normal number | Position along member where the distributed load ends. Expressed as a percentage. |
| `load_group` | `integer` | Any number. | The load group to which the load belongs. |
| `axes` | `string` | `global`,`local` | The axes in which the distributed load will be applied. |

#### Sample code for the `distributed_loads` object
The following JSON snippet shows a trapezoidal load in the global y axis, applied to the middle 80% of member 9:

```json title="distributed_loads-sample.json"
{
    "distributed_loads": {
        "1": {
            "member": 9,
            "x_mag_A": 0,
            "y_mag_A": -5,
            "z_mag_A": 0,
            "x_mag_B": 0,
            "y_mag_B": -30,
            "z_mag_B": 0,
            "position_A": 10,
            "position_B": 90,
            "load_group": 4,
            "axes": "global"
        }
    }
}
```

<br/>

---

### `pressures`
Pressures are uniform loads applied to plates. Each pressure is an object contained within the `pressures` object, and should be identified by a unique positive integer.

| Key | Type | Accepts | Description |
| :-- | :--- | :---    | :--         |
| `plate_id` | `integer` | A normal number | The plate to which the pressure is applied. Identified by the plate ID. |
| `axes` | `string` | `global`,`local` | The axes in which the distributed load will be applied. |
| `x_mag` | `float` | Any number. | Magnitude of pressure in the x direction of the specified axes, in the units of  the `pressure` property of the [`units`](#units) object. |
| `y_mag` | `float` | Any number. | Magnitude of pressure in the y direction of the specified axes, in the units of  the `pressure` property of the [`units`](#units) object. |
| `z_mag` | `float` | Any number. | Magnitude of pressure in the z direction of the specified axes, in the units of  the `pressure` property of the [`units`](#units) object. |
| `load_group` | `integer` | A normal number | The group to which this load belongs. |

#### Sample code for the `pressures` object
The following JSON snippet shows a pressure in the global y axis, applied to plate 1:

```json title="pressures-sample.json"
{
    "pressures": {
        "1": {
            "plate_id": 1,
            "axes": "global",
            "x_mag": 0,
            "y_mag": -20,
            "z_mag": 0,
            "load_group": 3
        }
    }
}
```

<br/>

---

### `area_loads`
Area Loads are uniform loads applied to an area, that are distributed to the members surrounding that area. Each Area Load is an object contained with the `area_loads` object, and should be identified by a unique positive integer.

| Key | Type | Accepts | Description |
| :-- | :--- | :---    | :--         |
| `type` | `string` | `one_way`, `two_way`, `column_wind_load`, `open_structure` | How the area load should distribute the load. |
| `nodes` | `[integer]` | An array of integers. | The IDs of the nodes which define the area for loading. Specify 3 or 4 values, in sequential order (clockwise or counterclockwise direction). |
| `mag` | `float` | Any number. | The magnitude of the load, in the [units](#units) of pressure.  |
| `direction` | `string` | `X`, `Y`, `Z` | The direction of the load in the global axes. |
| `elevations` | `string` | A comma separated string of values. | Relevant only if `"type": "column_wind_load"`.<br/>The elevations between which the corresponding _pressure magnitudes_ (see next row in this table) should be applied.<br/>This property should have 1 more value than the corresponding _pressure magnitudes_ property. |
| `mags` | `string` | A comma separated string of values. | Relevant only if `"type": "column_wind_load"`.<br/>The magnitudes of pressures which should be applied between the corresponding _elevations_ (see above row in this table).<br/>This property should have 1 less value than the corresponding _elevations_ property.  |
| `column_direction` | `string` |  A comma separated string of 2 integers.  | Relevant only if `"type": "one_way"` or `"type": "column_wind_load"`.<br/>The span direction of the applied area load.<br/>The values must be the IDs of 2 nodes which are in the [`nodes`](#nodes) property. |
| `loaded_members_axis` | `string` | `all`, `major` | Relevant only if `"type": "open_structure"`.<br/>Whether to apply the open structure load to all members attaching to the nodes (indicated by `all`), or to only those members which lie along the global XYZ axes (indicated by `major`). |
| `LG` | `string` | Any string. | The load group to which this area load belongs. |

#### Sample code for the `area_loads` object
The following JSON snippet shows each type of Area Load, applied to the same nodes, 1, 2, 3 & 4:

```json title="area_loads-sample.json"
{
	"area_loads": {
		"1": {
			"type": "one_way",
			"nodes": [1, 2, 3, 4],
			"members": null,
			"mag": 10,
			"direction": "X",
			"elevations": null,
			"mags": null,
            // Loads will span parallel to the direction from node 1 to node 2
            "column_direction": "1,2", 
			"loaded_members_axis": null,
			"LG": "LG"
		},
		"2": {
			"type": "two_way",
			"nodes": [1, 2, 3, 4],
			"members": null,
			"mag": 10,
			"direction": "X",
			"elevations": null,
			"mags": null,
			"column_direction": null,
			"loaded_members_axis": null,
			"LG": "LG"
		},
		"3": {
			"type": "column_wind_load",
			"nodes": [1, 2, 3, 4],
			"members": null,
			"mag": null,
			"direction": null,
            // Pressure 1 (5 kPa) will apply from 0 to 1.5 m, Pressure 2 (10 kPa) will apply from 1.5 to 3 m
            "elevations": "0,1.5,3", 
			"mags": "5,10",
            // Loads will span parallel to the direction from node 1 to node 2
            "column_direction": "1,2", 
			"loaded_members_axis": null,
			"LG": "LG"
		},
		"4": {
			"type": "open_structure",
			"nodes": [1, 2, 3, 4],
			"members": null,
			"mag": 10,
			"direction": "Y",
			"elevations": null,
			"mags": null,
			"column_direction": null,
			"loaded_members_axis": "all",
			"LG": "LG"
		}
	}
}

```

<br/>

---

### `self_weight`
The self-weight for the whole model in S3D may be toggled on or off using the `self_weight` object.

It is also possible to apply a gravity multiplier in the global x, y or z axes.

| Key | Type | Accepts | Description |
| :-- | :--- | :---    | :--         |
| `enabled` | `boolean` | `true`, `false` | If the self weight is applied to the model or not. |
| `x` | `float` | Any number. | Acceleration due to gravity in the x axis, defined as a multiplier of the gravitational constant *g*. |
| `y` | `float` | Any number. | Acceleration due to gravity in the y axis, defined as a multiplier of the gravitational constant *g*. |
| `z` | `float` | Any number. | Acceleration due to gravity in the z axis, defined as a multiplier of the gravitational constant *g*. |

#### Sample code for the `self_weight` object
The following JSON snippet enables the self-weight, and indicates that gravity should act in the negative y axis, with g = 1 × g:

```json title="self_weight-sample.json"
{
   "self_weight": {
      "enabled": true,
      "x": 0,
      "y": -1,
      "z": 0
   }
}
```

<br/>

---

### `load_combinations`
Each object in the `load_combinations` array represents an individual combination. For a single combination, a property for each load group is included. This property comprises the load group name and the load factor for that load group. The load factor is the multiplier applied to all forces and moments within the load group.

| Key | Type | Description |
| :-- | :--- | :---------- |
| `SW` | `float` | Load factor for the Self Weight (SW) load group. |
| `LG1` | `float` | Load factor for (e.g.) the LG1 load group. |
| `LG2` | `float` | Load factor for (e.g.) the LG2 load group. |


#### Sample code for the `load_combinations` object
The following JSON snippet shows the creation of two load combinations. The first load combination contains 3 load groups, all with a factor of 1. The second load combination contains 2 load groups, the self-weight has a load factor of 1, and LG1 has a load factor of 1.5.

```json title="load_combinations-sample.json"
{
    "load_combinations": [
        {
            "SW": 1,
            "LG1": 1,
            "LG2": 1
        },
        {
            "SW": 1,
            "LG1": 1.5,
        }
    ]
}
```

<br/>

---

## Restraint code

The restraint code is a string made of 6 characters which describes how the member is connected to a `node`. The first three characters represent translational degrees of freedom in the local X, Y, and Z axes. The last 3 character represent rotational degrees of freedom about the local X, Y, and Z axes.

F = Fixed, R = Released and S = Spring.

Example: `"fixity_A": "FFFFFR"` denotes a connection that has fixed translation, fixed rotation about the local X and Y axes and released rotation about the Z axis.

<br/>

---

## How can I test my Structural JSON file?

There are a few simple and quick ways to test the file you have built:

1. Import - JSON from the SkyCiv Structural 3D Interface
2. Via the API - run [`S3D.file.save`](docs-S3D.file.md#s3dfilesave) and visit the URL in the response. After that you can simply re-run the API then refresh web browser to update your model

<br/>

---

## Other Sample files:

Simple Beam (Imperial): <a href="/api-v3-docs/json/sample-s3d-files/simple-beam-imperial.json">skyciv-sample-1</a>

AISC 3D Frame (exported from S3D): <a href="/api-v3-docs/json/sample-s3d-files/3d-frame-aisc.json">skyciv-sample-2</a>

2,000 Member Structure: <a href="/api-v3-docs/json/sample-s3d-files/2000mem-structure.json">skyciv-sample-3</a>

450 Member Structure with 32 Load Combos: <a href="/api-v3-docs/json/sample-s3d-files/450mem-32LCs.json">skyciv-sample-4</a>

<br/>
<a href="https://platform.skyciv.com/api/v3#model-header" target="_blank" class="sample-code-btn">Try <code>s3d_model</code></a>
<br/>
