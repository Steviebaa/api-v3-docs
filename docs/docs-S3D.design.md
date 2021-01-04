---
id: S3D.design
title: S3D.design
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

The `S3D.design` namespace provides functions that allow beam and column design for timber, steel and reinforced concrete sections to various design standards.

Standard member design namespace: [`S3D.design.member`](#member-design)

Reinforced concrete design namespace: [`S3D.design.rc`](#reinforced-concrete-design)

---

## **Member Design**

### `S3D.design.member.getInput`

Generates and returns member design input object. Engineers can then use this input object to change design parameters, materials or loads.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string` | `AISC_360-16_LRFD`, <br/>`AISC_360-16_ASD`, <br/>`AISC_360-10_LRFD`, <br/>`AISC_360-10_ASD`, <br/>`EN_1993-1-1-2005`, <br/>`BS_5950-1-2000`, <br/>` NDS_2018_ASD`, <br/>`NDS_2018_LRFD`, <br/>`CSA_S16-14`, <br/>`AS_4100-1998`,<br/>`AS_1720-2010`, <br/>`AS_4600-2005`, <br/>`AISI_S100-12_ASD`, <br/>`AISI_S100-12_LRFD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_ASD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_LRFD` | The design code for which the design object in the response should represent. |

```json title="Sample input for S3D.design.member.getInput"
{
  "function": "S3D.design.member.getInput",
  "arguments": {
    "design_code": "AISC_360-16_LRFD",
    "s3d_model": MODEL_OBJECT
  }
}
```

:::note
The `data` property in the response will represent the `design_obj` object which can be passed into [`S3D.design.member.check`](#s3ddesignmembercheck). It provides all necessary input to run a member design check.
:::

```json title="Sample response for S3D.design.member.getInput"
{
  "msg": "Design input object generated successfully for AISC_360-16_LRFD",
  "status": 0,
  "data": {}
}
```

<br/>

----

### `S3D.design.member.check`

Run a member design check from in accordance with various standards. The function will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string` | `AISC_360-16_LRFD`, <br/>`AISC_360-16_ASD`, <br/>`AISC_360-10_LRFD`, <br/>`AISC_360-10_ASD`, <br/>`EN_1993-1-1-2005`, <br/>`BS_5950-1-2000`, <br/>` NDS_2018_ASD`, <br/>`NDS_2018_LRFD`, <br/>`CSA_S16-14`, <br/>`AS_4100-1998`,<br/>`AS_1720-2010`, <br/>`AS_4600-2005`, <br/>`AISI_S100-12_ASD`, <br/>`AISI_S100-12_LRFD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_ASD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_LRFD` | The design code for which the design object in the response should represent. |
|  `design_obj` | `object` | An object | Optional design input object. This can be obtained via `S3D.design.member.getInput` and altered to adjust design parameters.<br/>   |



```json title="Sample input for S3D.design.member.check"
{
  "function": "S3D.design.member.check",
  "arguments": {
    "design_code": "AISC_360-16_LRFD",
    "s3d_model": MODEL_OBJECT,
    "design_obj": DESIGN_OBJECT
  }
}
```

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.member_design.check" target="_blank" class="sample-code-btn">Try <code>S3D.member_design.check</code></a>
<br/>
<br/>

The response will provide all member capacities, ratios, design reports and a summary for easy checking of pass/fail criteria. The format of this response may differ with the various `design_code` designations.

```json title="Sample response for S3D.design.member.check"
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

### `S3D.design.member.optimize`

This function will iterate through the [library of sections](docs-S3D.SB.md#s3dsbgetlibrarytree) to find the most efficient design section based on a given utility ratio and other settings. The sections in the model will be designed based on the input provided in the [`S3D.model.set`](docs-S3D.model.md#s3dmodelset) function. For instance, if HSS sections are used in `S3D.model.set`, the function will iterate the HSS sections catalog.

:::note
`S3D.design.member.optimize` should only be used if [`S3D.model.solve`](docs-S3D.model.md#s3dmodelsolve) has been executed earlier in the session.
:::

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `design_code` | `string` | `AISC_360-16_LRFD`, <br/>`AISC_360-16_ASD`, <br/>`AISC_360-10_LRFD`, <br/>`AISC_360-10_ASD`, <br/>`EN_1993-1-1-2005`, <br/>`BS_5950-1-2000`, <br/>` NDS_2018_ASD`, <br/>`NDS_2018_LRFD`, <br/>`CSA_S16-14`, <br/>`AS_4100-1998`,<br/>`AS_1720-2010`, <br/>`AS_4600-2005`, <br/>`AISI_S100-12_ASD`, <br/>`AISI_S100-12_LRFD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_ASD`, <br/>`DNV_2-7-1_2006_with_AISC_360-10_LRFD` | The design code for which the design object in the response should represent. |
|  `simplified` | `boolean` | `true`, `false` | Simplified results will give you the best result and it's corresponding utility ratio. For full results of each run, set simplified to `false`  |
|  `settings` | `object` | An object | Additional settings including maximum utility ratio and height/width settings. Section height/width units based on units in [s3d_model](docs-s3d-model.md) during [`S3D.model.set`](docs-S3D.model.md#s3dmodelset) <br/>   |



```json title="Sample input for S3D.design.member.optimize"
{
  "function": "S3D.design.member.optimize",
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

The response will provide the lightest section and it's corresponding utility ratio. From the above input, it is evident that the UR is limited to 0.8 and the section heights are limited to between 8 and 12 inches.

```json title="Sample response for S3D.design.member.optimize"
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

<br/>

----

### `standalone.member.check`

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


```json title="Sample input for standalone.member.check"
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
<br/>

---

## **Reinforced Concrete Design**

### `S3D.design.rc.getInput`

Generates and returns the RC member design input object (referred to as `design_obj` below) that will feed into the concrete design check calculations. The `design_obj` can then be adjusted to use preferred design parameters, reinforcement, materials or loads.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string`   |  `ACI_318`, <br/>`AS_3600`, <br/>`EN_2`, <br/>`CSA_A23`, <br/>`BS_8110`| Design code identifier. |


```json title="Sample input for S3D.design.rc.getInput"
{
  "function": "S3D.design.rc.getInput",
  "arguments": {
    "s3d_model": MODEL_OBJECT,
    "design_code": "ACI_318"
  }
}
```

The response will give a `design_obj` property that can be passed into [`S3D.design.rc.check`](#s3ddesign.rccheck). It provides all necessary input to run a member design check.

```json title="Sample response for S3D.design.rc.getInput"
{
  "msg": "Design input object generated successfully for aci318",
  "status": 0,
  "data": {} // design_obj containing parameters, sections and forces from analysis
}
```

A deeper dive into the returned design object:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Collapse', value: '1', },
    { label: 'Expand', value: '2', },
  ]
}>
  <TabItem value="1">

  </TabItem>
  <TabItem value="2">

```json title="Sample design object from S3D.design.rc.getInput response"
// Under the design_members property, each member has the following parameters:
{
  "section_shape": "round",
  "member_id": "1",
  "member_type": "column",
  "member_length": 177.2,
  "K_hor": "1",
  "K_vert": "1",
  "k": "0.104",
  "concrete_strength": "4000",
  "rebar_strength": "60000",
  "shear_rebar_strength": "50000",
  "lim_crack_width": "0.012",
  "section_prop": {
    "diameter": 18
  },
  "sec_position": [
    {"members": 1, "position": 0},
    {"members": 2, "position": 50},
    {"members": 3, "position": 100}
  ],
  "long_rebar": [
    {
      "cover": "2.5",
      "diameter": "0.625",
      "end": "100",
      "from": "bottom",
      "number": "10",
      "start": "0",
      "y": "2.5"
    }
  ],
  "shear_rebar": [
    {
      "number": "2",
      "diameter": "0.625",
      "spacing": "10",
      "start": "0",
      "end": "100"
    }
  ],
  "forces_data": {},
  "spans": [[177.2, 0, 177.2]],
  "defl_live_load_lim": "180",
  "defl_long_term_lim": "240",
  "defl_live_load_percent": "50",
  "spec_load": {
    "DL_sustained": "SW1",
    "DL_deflection": "SW1",
    "LL_deflection": "SW1"
  }
}	
```

  </TabItem>
</Tabs>

<br/>

----

### `S3D.design.rc.check`

Run an RC design check from various standards. The API will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string`   |  `ACI_318`, <br/>`AS_3600`, <br/>`EN_2`, <br/>`CSA_A23`, <br/>`BS_8110`| Design code identifier. |
|  `design_obj` | `object` | An object | Optional design input object. This can be obtained from [`S3D.design.rc.getInput`](#s3ddesign.rcgetinput) and altered to adjust design parameters. |

```json title="Sample input for S3D.design.rc.check"
{
  "function": "S3D.design.rc.check",
  "arguments": {
    "design_code": "AS_3600",
    "s3d_model": MODEL_OBJECT,
    "design_obj": DESIGN_OBJECT
  }
}
```

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.rc_design.check" target="_blank" class="sample-code-btn">Try <code>S3D.rc_design.check</code></a>
<br/>
<br/>

The response will provide all member capacities, ratios and design reports. The format of this response may depend on the different `design_code` designation.

<Tabs
  defaultValue="1"
  values={[
    { label: 'Beam Table Results', value: '1', },
    { label: 'Report Links', value: '2', },
  ]
}>
  <TabItem value="1">

```json title="Sample response for S3D.design.rc.check"
// Each beam or column member will return the following results
{
  "member_id": "2",
  "section_pos": 0,
  "pos_flexure": {
    "flexure_ratio": 0,
    "flexure_status": "OK",
    "as_ratio": 0.9534794309880812,
    "as_status": "OK"
  },
  "pos_crack_width": {
    "ratio": 0.9485182233116682,
    "status": "OK"
  },
  "pos_LTC": {
    "ratio": 0,
    "status": "OK"
  },
  "neg_flexure": {
    "flexure_ratio": 0,
    "flexure_status": "NG",
    "as_ratio": 0,
    "as_status": "NG"
  },
  "neg_crack_width": {
    "ratio": 0,
    "status": "NG"
  },
  "neg_LTC": {
    "ratio": 0,
    "status": "OK"
  },
  "shear": {
    "ratio": 3.7037037037037033,
    "status": "NG"
  },
  "pos_defl": {
    "ratio": 0,
    "status": "OK"
  }
}

```

  </TabItem>
  <TabItem value="2">

```json title="Sample response for S3D.design.rc.check"
// Each beam or column result will also include a link to a report
{
  "member_id": "2",
  "section_pos": 0,
  "html_summary_link": "https://solver.skyciv.com/temp/view_report_QCioViaPgrgeLgCK_beam_0.php",
  "html_download_link": "https://solver.skyciv.com/temp/download_html_report_QCioViaPgrgeLgCK_beam_0.php",
  "pdf_download_link": "https://solver.skyciv.com/temp/download_report_QCioViaPgrgeLgCK_beam_0.php"
}
```

  </TabItem>
</Tabs>

<br/>

---

### Custom sections

SkyCiv supports custom sections and reinforcement checks via SkyCiv's General Section Designer. Use [S3D.SB.runGSD](docs-S3D.SB.md#s3dsbrungsd) to run custom as seen in the image below.

<img src="https://skyciv.com/wp-content/uploads/2019/03/general-concrete-section-design-software.png"/>