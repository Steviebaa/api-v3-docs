---
id: S3D.member_design
title: S3D.member_design 
---

---

The `S3D.member_design` namespace provides functions that allow beam and column design for timber and steel sections to various design standards.

<div class="banner info">
	To design concrete sections, see <a href="S3D.rc_design"><code>S3D.rc_design</code></a>.
</div>

---

## `S3D.member_design.getInput`

Generates and returns member design input object. Engineers can then use this input object to change design parameters, materials or loads.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string` | `AISC_360-16_LRFD`, <br/>`AISC_360-16_ASD`, <br/>`AISC_360-10_LRFD`, <br/>`AISC_360-10_ASD`, <br/>`EN_1993-1-1-2005`, <br/>`BS_5950-1-2000`, <br/>` NDS_2018_ASD`, <br/>`NDS_2018_LRFD`, <br/>`CSA_S16-14`, <br/>`AS_4100-1998`,<br/>`AS_1720-2010`, <br/>`AS_4600-2005`, <br/>`AISI_S100-12_ASD`, <br/>`AISI_S100-12_LRFD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_ASD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_LRFD` | The design code for which the design object in the response should represent. |

#### Sample input for the `S3D.member_design.getInput` function

```json
{
  "function": "S3D.member_design.getInput",
  "arguments": {
    "design_code": "AISC_360-16_LRFD",
    "s3d_model": S3D_MODEL_OBJECT
  }
}
```


#### Sample response for the `S3D.member_design.getInput` function

<div class="banner info">
The <code>data</code> property in the response will represent the <code>design_obj</code> object which can be passed into <a href="#s3dmember_designcheck"><code>S3D.member_design.check</code></a>. It provides all necessary input to run a member design check.
</div>

```json
{
  "msg": "Design input object generated successfully for AISC_360-16_LRFD",
  "status": 0,
  "data": {}
}
```

<br/>

----

## `S3D.member_design.check`

Run a member design check from in accordance with various standards. The function will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string` | `AISC_360-16_LRFD`, <br/>`AISC_360-16_ASD`, <br/>`AISC_360-10_LRFD`, <br/>`AISC_360-10_ASD`, <br/>`EN_1993-1-1-2005`, <br/>`BS_5950-1-2000`, <br/>` NDS_2018_ASD`, <br/>`NDS_2018_LRFD`, <br/>`CSA_S16-14`, <br/>`AS_4100-1998`,<br/>`AS_1720-2010`, <br/>`AS_4600-2005`, <br/>`AISI_S100-12_ASD`, <br/>`AISI_S100-12_LRFD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_ASD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_LRFD` | The design code for which the design object in the response should represent. |
|  `design_obj` | `object` | An object | Optional design input object. This can be obtained via `S3D.member_design.getInput` and altered to adjust design parameters.<br/>   |

#### Sample input for the `S3D.member_design.check` function

```json
{
  "function": "S3D.member_design.check",
  "arguments": {
    "design_code": "AISC_360-16_LRFD",
    "s3d_model": S3D_MODEL_OBJECT,
    "design_obj": DESIGN_OBJECT
  }
}
```

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.member_design.check" target="_blank" class="sample-code-btn">Try <code>S3D.member_design.check</code></a>
<br/>

#### Sample response for the `S3D.member_design.check` function

The response will provide all member capacities, ratios, design reports and a summary for easy checking of pass/fail criteria. The format of this response may differ with the various `design_code` designations.

```json
{
  "data": {
    "capacity": {
      "axial_tension": {},
      "axial_compression": {},
      "moment_z": {},
      "moment_y": {},
      "shear_y": {},
      "shear_z": {}
    },
    "ratio": {
      "axial": {},
      "moment_z": {},
      "moment_y": {},
      "shear_y": {},
      "shear_z": {},
      "combined": {},
      "worstlc": {},
      "slender": {},
      "displacement": {}
    },
    "grouping": {},
    "html_summary_link": "https://solver.skyciv.com/temp/view_report_tdhqyoWvwDkCy8xC.php",
    "html_download_link": "https://solver.skyciv.com/temp/download_html_report_tdhqyoWvwDkCy8xC.php",
    "pdf_download_link": "https://solver.skyciv.com/temp/download_report_tdhqyoWvwDkCy8xC.php",
    "reports": {
      "1": {
        "html_summary_link": "https://solver.skyciv.com/temp/view_report_tdhqyoWvwDkCy8xC_0.php",
        "html_download_link": "https://solver.skyciv.com/temp/download_html_report_tdhqyoWvwDkCy8xC_0.php",
        "pdf_download_link": "https://solver.skyciv.com/temp/download_report_tdhqyoWvwDkCy8xC_0.php"
      }
    },
    "summary": {
      "failed_members": ["3", "5"],
      "passed_members": ["1", "2", "4"],
      "critical": {
        "utility_ratio": 2.2396984679650362,
        "member_id": "5",
        "action": "combined",
        "load_case": "#1",
        "status": "FAIL"
      }
    }
  },
  "msg": "Member Design check for AISC_360-16_LRFD was run successfully.",
  "status": 0
}
```

<br/>

----

## `S3D.member_design.optimize`

This function will iterate through the [library of sections](docs-S3D.SB.md#s3dsbgetlibrarytree) to find the most efficient design section based on a given utility ratio and other settings. The sections in the model will be designed based on the input provided in the [`S3D.model.set`](docs-S3D.model.md#s3dmodelset) function. For instance, if HSS sections are used in `S3D.model.set`, the function will iterate the HSS sections catalog.

<div class="banner info">
<code>S3D.member_design.optimize</code> should only be used if <a href="S3D.model#s3dmodelsolve"><code>S3D.model.solve</code></a> has been executed earlier in the session.
</div>

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `design_code` | `string` | `AISC_360-16_LRFD`, <br/>`AISC_360-16_ASD`, <br/>`AISC_360-10_LRFD`, <br/>`AISC_360-10_ASD`, <br/>`EN_1993-1-1-2005`, <br/>`BS_5950-1-2000`, <br/>` NDS_2018_ASD`, <br/>`NDS_2018_LRFD`, <br/>`CSA_S16-14`, <br/>`AS_4100-1998`,<br/>`AS_1720-2010`, <br/>`AS_4600-2005`, <br/>`AISI_S100-12_ASD`, <br/>`AISI_S100-12_LRFD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_ASD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_LRFD` | The design code for which the design object in the response should represent. |
|  `simplified` | `boolean` | `true`, `false` | Simplified results will give you the best result and it's corresponding utility ratio. For full results of each run, set simplified to `false`  |
|  `settings` | `object` | An object | Additional settings including maximum utility ratio and height/width settings. Section height/width units based on units in [s3d_model](docs-s3d-model.md) during [`S3D.model.set`](docs-S3D.model.md#s3dmodelset) <br/>   |

#### Sample input for the `S3D.member_design.optimize` function

```json title="/src/components/HelloCodeTitle.js"
{
  "function": "S3D.member_design.optimize",
  "arguments": {
    "design_code": "AISC_360-10_ASD",
    "simplified": true,
    "settings": {           //optional
      "max_ur": 0.8,
      "optimize_by": {
        "item": "sections",
        "ids": [1, 2, 3, 4] // sections to optimize (null for all)
      },
      "section_height": {
        "min": 8,
        "max": 12
      },
      "section_width": {
        "min": null,
        "max": null
      }
    }
  }
}
```

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.member_design.optimize" target="_blank" class="sample-code-btn">Try <code>S3D.member_design.optimize</code></a>

<br/>
<br/>

#### Sample response for the `S3D.member_design.optimize` function

The response will provide the lightest section and it's corresponding utility ratio. From the above input, it is evident that the UR is limited to 0.8 and the section heights are limited to between 8 and 12 inches.

<!--DOCUSAURUS_CODE_TABS-->
<!--Simplified-->
```json
{
  "data": [
    {
      "section_height": "W10x30",
      "max_UR_ratio": 0.6899964867988755
    },
    {
      "section_height": "W10x30",
      "max_UR_ratio": 0.6841870893192245
    },
    {
      "section_height": "HSS8x8x1/8",
      "max_UR_ratio": 0.38940934639494307
    },
    {
      "section_height": "HSS8x8x1/8",
      "max_UR_ratio": 0.13969293754291115
    }
  ],
  "msg": "Optimizer successfully ran",
  "status": 0
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

----

## `standalone.member.check`

Simplified design checks can be performed without the need to run an analysis first. Provide loads, members, sections and parameters to run design checks. The API will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `units` | `string` | `imperial`, `metric` | The units system to be used. |
|  `design_code` | `string` | `AISC_360-16_LRFD`, <br/>`AISC_360-16_ASD`, <br/>`AISC_360-10_LRFD`, <br/>`AISC_360-10_ASD`, <br/>`EN_1993-1-1-2005`, <br/>`BS_5950-1-2000`, <br/>` NDS_2018_ASD`, <br/>`NDS_2018_LRFD`, <br/>`CSA_S16-14`, <br/>`AS_4100-1998`,<br/>`AS_1720-2010`, <br/>`AS_4600-2005`, <br/>`AISI_S100-12_ASD`, <br/>`AISI_S100-12_LRFD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_ASD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_LRFD` | The design code for which the design object in the response should represent. |
| `sections` | `[[string]]` | An array of string arrays | Section maps as defined in <a href="S3D.SB#s3dsbgetlibrarytree"><code>S3D.SB.getLibraryTree</code></a>. |
| `materials` | `[object]` | An array of objects | Material definitions. |
| `forces` | `[object]` | An array of objects | Forces to apply. |
| `design_members` | `[object]` | An array of objects | Design member definitions. |
| `design_factors` | `object` | An object | Design factors to use. |


#### Sample input for the `standalone.member.check` function

```json
{
  "function": "standalone.member.check",
  "arguments": {
    "units": "imperial",
    "design_code": "AISC_360-10_ASD",
    "sections": [
      ["American", "AISC", "W shapes", "W14x808"],
      ["American", "AISC", "Rectangular HSS", "HSS2x1-1/2x3/16"]
    ],
    "materials": [
      {
        "id": 1,
        "name": "Some Custom Structural Steel",
        "density": 450,
        "elasticity_modulus": 29000,
        "poissons_ratio": 0.27,
        "yield_strength": 33,
        "ultimate_strength": 52,
        "class": "steel"
      }
    ],
    "forces": [
      {
        "axial": 10,
        "Fz": 10,
        "Fy": 15,
        "torsion": 3,
        "Mz": -0.5,
        "My": -0.5
      }
    ],
    "design_members": [
      {
        "L": 12,
        "Lb": 10,
        "Cb": 1,
        "Ky": 1,
        "Kz": 1,
        "sr_c": 200,
        "sr_t": 300,
        "element_id": 1,
        "section_id": 2,
        "material_id": 1
      },
      {
        "L": 8,
        "Lb": 6,
        "Cb": 1,
        "Ky": 1,
        "Kz": 1,
        "sr_c": 200,
        "sr_t": 300,
        "element_id": 1,
        "section_id": 1,
        "material_id": 1
      }
    ],
    "design_factors": {
      "omega_t": 1.67,
      "omega_c": 2.0,
      "omega_b": 1.7,
      "omega_v": 1.67
    }
  }
}

```

<a href="https://platform.skyciv.com/api/v3?preload_function=standalone.member.check" target="_blank" class="sample-code-btn">Try <code>standalone.member.check</code></a>
<br/>
