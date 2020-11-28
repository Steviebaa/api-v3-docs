---
id: creating-the-api-object
title: Creating the API Object
sidebar_label: Creating the API Object
---

## API Object

In this example we are creating the entire payload object by supplying the following components:
* The [`auth`](the-request-object#auth) object
* The [`options`](the-request-object#options) object
* The [`functions`](the-request-object#functions) array - an array of objects defining which functions to run `[ {...}, {...}, ... ]`
    1. Starting a session - using function S3D.session.start
    2. Setting the model  - using function [S3D.model.set](docs-S3D.model.md#s3dmodelset) 
    3. Running an analysis - using function [S3D.model.solve](docs-S3D.model.md#s3dmodelsolve) 

```json
{
   "auth": {
      "username": "YOUR_SKYCIV_USERNAME",
      "key": "YOUR_SKYCIV_API_KEY"
   },
   "options": {
      "validate_input": true
   },
   "functions": [
      {
         "function": "S3D.session.start",
         "arguments": {
            "keep_open": false
         }
      },
      {
         "function": "S3D.model.set",
         "arguments": {
            "s3d_model": "S3D_MODEL_OBJECT_DATA"
         }
      },
      {
         "function": "S3D.model.solve",
         "arguments": {
            "analysis_type": "nonlinear",
            "repair_model": true
         }
      }
   ]
}
```

<br/>
<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.model.solve_repair" target="_blank" class="sample-code-btn">View this Sample in Action</a>
<br/>

---

<br/>

## Sample `s3d_model`

The model data is the JSON formatted object you create that describes your structure. The following is an example of a simple beam.

```json
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
   "evaluation_points": 5,
   "vertical_axis": "Z",
   "projection_system": "orthographic",
   "solver_timeout": 90,
   "accurate_buckling_shape": false,
   "buckling_johnson": false,
   "non_linear_tolerance": "1",
   "non_linear_theory": "small",
   "auto_stabilize_model": false,
   "only_solve_user_defined_load_combinations": false
   },
   "details": [],
   "nodes": {
   "1": {
      "x": 0,
      "y": 0,
      "z": 0
   },
   "2": {
      "x": 5,
      "y": 0,
      "z": 0
   }
   },
   "members": {
   "1": {
      "type": "normal",
      "cable_length": null,
      "node_A": 1,
      "node_B": 2,
      "section_id": 1,
      "rotation_angle": 90,
      "fixity_A": "FFFFFF",
      "fixity_B": "FFFFFF",
      "offset_Ax": "0",
      "offset_Ay": "0",
      "offset_Az": "0",
      "offset_Bx": "0",
      "offset_By": "0",
      "offset_Bz": "0"
   }
   },
   "plates": {},
   "meshed_plates": {},
   "sections": {
      "1": {
         "load_section": [
            "Australian",
            "Steel (300 Grade)",
            "Universal beams",
            "310 UB 32.0"
         ],
         "material_id": 1
      }
   },
   "materials": {
   "1": {
      "name": "Structural Steel",
      "density": 7850,
      "elasticity_modulus": 200000,
      "poissons_ratio": 0.27,
      "yield_strength": 350,
      "ultimate_strength": 470,
      "class": "steel",
      "id": 1
   }
   },
   "supports": {
   "1": {
      "direction_code": "BBBBBB",
      "tx": 0,
      "ty": 0,
      "tz": 0,
      "rx": 0,
      "ry": 0,
      "rz": 0,
      "node": 1,
      "restraint_code": "FFFFRF"
   },
   "2": {
      "direction_code": "BBBBBB",
      "tx": 0,
      "ty": 0,
      "tz": 0,
      "rx": 0,
      "ry": 0,
      "rz": 0,
      "node": 2,
      "restraint_code": "FFFFRF"
   }
   },
   "settlements": {},
   "point_loads": {
   "1": {
      "x_mag": 0,
      "y_mag": 0,
      "z_mag": -3,
      "load_group": "Live_Point_Load",
      "type": "M",
      "member": 1,
      "position": 50
   }
   },
   "moments": {},
   "distributed_loads": {
   "1": {
      "member": 1,
      "x_mag_A": 0,
      "y_mag_A": 0,
      "z_mag_A": -10,
      "x_mag_B": 0,
      "y_mag_B": 0,
      "z_mag_B": -10,
      "position_A": 0,
      "position_B": 100,
      "load_group": "Live_Dist_Load",
      "axes": "global"
   }
   },
   "pressures": {},
   "area_loads": {},
   "member_prestress_loads": {},
   "self_weight": {
   "1": {
      "LG": "SW1",
      "x": 0,
      "y": 0,
      "z": -1
   }
   },
   "load_combinations": {
   "1": {
      "name": "G + Q",
      "SW1": 1,
      "Live_Point_Load": 1,
      "Live_Dist_Load": 1
   }
   },
   "load_cases": {},
   "nodal_masses": {},
   "nodal_masses_conversion_map": {},
   "spectral_loads": {},
   "groups": [
   null,
   null
   ]
}
```

If the [`S3D.file.save`](docs-S3D.file.md#s3dfilesave) function is used, this model will be available on [SkyCiv's S3D platform](https://platform.skyciv.com/structural) for later viewing.

The following image is a visual representation of what the [JSON model object](#samples3dmodel) above will create.

<img src="/api/v3/img/images/sample-simple-beam.png"/>
