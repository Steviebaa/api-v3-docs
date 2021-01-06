---
id: S3D.SB
title: S3D.SB 
---

---

The `S3D.SB` namespace exposes the functionality offered on SkyCiv's <a href="https://platform.skyciv.com/section-builder"> Section Builder</a> platform. This includes access to the section database, creating custom sections, analyzing sections and more.

---

## `S3D.SB.getLibraryTree`

Get the list of sections from a specific library. 

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `section_map` | `array` | An array of up to 3 strings | An array defining the keys of the map you wish to return. Use the <a href="https://platform.skyciv.com/section-builder"> Section Builder</a> UI for reference. <br/><br/>Some examples: <br/> `["American"]` - will return all American sections <br/>`["American", "AISC"]` - will return all sections from AISC library<br/>`["American", "AISC", "W shapes"]` - will return all W-Shapes <br/>`["Australian", "Cold Formed Steel (Lysaght)", "Angles"]` <br/>`["Canadian", "CISC", "M Shapes"]` - will return all M-Shapes from CISC catalog <br/>|

#### Sample input for the `S3D.SB.getLibraryTree` function

```json
{
  "function": "S3D.SB.getLibraryTree",
  "arguments": {
    "section_map": ["American", "AISC", "W shapes"]
  }
}
```
<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.SB.getLibraryTree" target="_blank" class="sample-code-btn">Try <code>S3D.SB.getLibraryTree</code></a>
<br/>


#### Sample response for the `S3D.SB.getLibraryTree` function

```json
{
  "msg": "",
  "status": 0,
  "data": [
    "W14x808",
    "W18x192",
    "W18x211",
    "W18x234",
    "W18x258",
    "W18x283",
    "W18x311",
    "W24x408",
    "W24x492",
    "W27x448",
    "W30x477",
    "W36x230",
    "etc..."
  ]
}
```

<br/>

----

## `S3D.SB.buildCustomShape` 

SkyCiv <a href="https://platform.skyciv.com/section-builder"> Section Builder</a> uses a powerful FEM solver to calculate section properties such as area, moment of inertia, centroids, section moduli, shear properties and torsion properties. Users can use the API to calculate these properties via custom points and line data using [`S3D.SB.buildCustomShape`](#s3dsbbuildcustomshape).

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `type` | `string` | `points`, `line` |  The type of custom shape being built, either:<br/> • `points` - a shape defined by 2 points and the radius;<br/> • `line` - 2 points and the line thickness. |
|  `points` | `[[integer]]` | An array of integer arrays | Array of points.<br/> For `"type": "points"`, this is in format [x,y,radius]<br/>For `"type": line"`, this is in the format [x,y] |
|  `run_solve` | `boolean` | `true`, `false` | If solve should be executed following the build. |
|  `material_id` | `integer` | A material id | Material id of shape. Use Structural 3D default materials as a guide. |

:::tip

To add multiple shapes or to use <a href="#s3dsbrungsd"><code>S3D.SB.runGSD</code></a>, set  <code>"run_solve": false</code>.

:::

#### Sample input for the `S3D.SB.buildCustomShape` function

<!--DOCUSAURUS_CODE_TABS-->
<!--Sample 1-->
```json
{
  "function": "S3D.SB.buildCustomShape",
  "arguments": {
    "type": "points",
    "points": [
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0]
    ],
    "run_solve": false,
    "material_id": 1
  }
}
```

<!--Sample 2: Composites-->
```json
[
  {
    "function": "S3D.SB.buildCustomShape",
    "arguments": {
      "type": "points",
      "material_id": 1,
      "run_solve": false,
      "points": [
        [0, 1, 0],
        [0.5, 2, 0],
        [1, 1, 0],
        [1, 0, 0],
        [0, 0, 0]
      ]
    }
  },
  {
    "function": "S3D.SB.buildCustomShape",
    "arguments": {
      "type": "points",
      "material_id": 4,
      "run_solve": false,
      "points": [
        [10, 11, 0],
        [10.5, 12, 0],
        [11, 11, 0],
        [11, 0, 0],
        [0, 0, 0]
      ]
    }
  }
]
```
<!--END_DOCUSAURUS_CODE_TABS-->

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.SB.runGSD" target="_blank" class="sample-code-btn">Try <code>S3D.SB.buildCustomShape</code></a>
<br/>

#### Sample response for the `S3D.SB.buildCustomShape` function

```json
{
  "status": 0,
  "msg": "",
  "data": {
    "version": 2,
    "name": "1 x 1",
    "area": 1,
    "Iz": 0.08333,
    "Iy": 0.08333,
    "material_id": 1,
    "aux": {
      "composite": false,
      "Qz": 0.125,
      "Qy": 0.125,
      "centroid_point": [0.5, 0.5],
      "centroid_length": [0.5, 0.5],
      "depth": 1,
      "width": 1,
      "alpha": 0,
      "Zy": 0.25,
      "Zz": 0.25,
      "polygons": [], //array of polygon data used in S3D rendering
      "warping_constant": 0.000134425,
      "shear_area_z": 0.8333333333333334,
      "shear_area_y": 0.8333333333333334,
      "torsion_radius": 0.675467
    },
    "J": 0.14058
  }
}
```

<br/>

----

## `S3D.SB.solve` 

Submit section and calculate section properties. This may already be included in some functions such as [`S3D.SB.buildCustomShape`](#s3dsbbuildcustomshape) where the `run_solve` property has been set to `true`.


:::info

Section should already be set via one of the earlier functions.

:::

```json
{
  "function": "S3D.SB.solve"
}
```

<br/>

----

## `S3D.SB.runGSD`

After a section is set via [`S3D.SB.buildCustomShape`](#s3dsbbuildcustomshape), further analysis may be performed on the section using the General Section Designer (GSD). This uses FEA to calculate the capacity of reinforced concrete sections. Provide loads, reinforcement and select from material databases to run FEA analysis and receive basic pass/fail results for complex concrete sections.

| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---:   |
|  `design_code` | `string` |  `ACI 318`, `AS 3600`, `EN` | Design code used to select material properties. ||
|  `concrete_class` | `string` | • **AS:** `C20`, `C25`, `C32`, `C40`, `C50`, `C65`, `C80`, `C100` <br/><br/>• **ACI 318:** `C2500`, `C3000`, `C3500`, `C4000`, `C4500`, `C5000`, `C6000`, `C7000`, `C8000`, `C9000`, `C10000` <br/><br/>• **EN:** `C20/25`, `C25/30`, `C30/37`, `C35/45`, `C40/50`, `C45/55`, `C50/60`, `C20/25`, `C60/75`, `C70/85`, `C80/95`, `C90/105` | <em>Concrete Class Code</em> - this will determine the values used for Young's Modulus and Stress/Strain data of the concrete.  | |
|  `steel_grade` | `string` | • **AS:** `R250N`, `D500N`, `D500L` <br/><br/>• **ACI 318:** `Grade 40`, `Grade 50`, `Grade 60`, `Grade 75` <br/><br/>• **EN:** `Class A`, `Class B`, `Class C` | <em>Steel Grade</em> - this will determine the values used for Young's Modulus and Stress/Strain data of the steel reinforcement. ||
|  `reinforcement` | `[object]` | An array of objects |  An array of objects where each object contains the properties `z`, `y` and `diam` for reinforcement position and diameters. ||
|  `loads` | `[object]` | An array of objects |  An array of objects where each object contains design loads. ||
|  `return_stress_results` | `boolean` | `true`, `false`  |  Set this to true for detailed results of the mesh and material stresses/strains. | `false` | 


#### Sample input for the `S3D.SB.runGSD` function

```json
{
  "function": "S3D.SB.runGSD",
  "arguments": {
    "design_code": "AS 3600",
    "concrete_class": "C50",
    "steel_grade": "R250N",
    "return_stress_results": false,
    "reinforcement": [
      { "z": -500, "y": 500, "diam": 16 },
      { "z": 0, "y": 500, "diam": 16 },
      { "z": 500, "y": 500, "diam": 16 }
    ],
    "loads": [
      { "N": 120, "Mz": 20, "My": 25 },
      { "N": 150, "Mz": -20, "My": -25 }
    ]
  }
}
```
<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.SB.runGSD" target="_blank" class="sample-code-btn">Try <code>S3D.SB.runGSD</code></a>
<br/>

#### Sample response for the `S3D.SB.runGSD` function

```json
{
  "msg": "General Section Designer run successfully",
  "data": [
    {
      "result": "PASS",
      "limRatioForce": 0.4335716625759198,
      "limForce": {
        "Nz": 276770.85556528415,
        "Mx": 46128475.92754736,
        "My": 57660594.90943419
      }
    },
    {
      "result": "PASS",
      "limRatioForce": 0.43381624422203574,
      "limForce": {
        "Nz": 345768.51834812126,
        "Mx": -46102469.11308283,
        "My": -57628086.39135354
      }
    }
  ],
  "status": 0
}
```

<br/>

The following image is an example of a complex section that may be analyzed using GSD.

<div style={{ width: '100%', textAlign: 'center' }}>
  <img src="https://skyciv.com/wp-content/uploads/2019/03/general-concrete-section-design-software.png"/>
</div>





<!-- `S3D.SB.detectLibraryShape` -->

<!-- This function allows users to detect the shape and closest library section of a polygon. Useful for importing CAD model data. -->

<!-- This function is not available on the current API. If you need this function now, [let us know](../help.html) and we'll get it implemented!  -->
