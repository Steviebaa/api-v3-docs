---
id: S3D.rc_design
title: S3D.rc_design (deprecated)
---

---

:::warning

This namespace is now deprecated. Please use [`S3D.design`](s3d.design) instead.

:::

---

The `S3D.rc_design` namespace provides functions that allow beam and column design for reinforced concrete to various design standards.

<div class="banner info">
	To design steel and timber sections, see <a href="S3D.member_design"><code>S3D.member_design</code></a>.
</div>

---

## `S3D.rc_design.getInput`

Generates and returns the RC member design input object (referred to as `design_obj` below) that will feed into the concrete design check calculations. The `design_obj` can then be adjusted to use preferred design parameters, reinforcement, materials or loads.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string`   |  `ACI_318`, <br/>`AS_3600`, <br/>`EN_2`, <br/>`CSA_A23`, <br/>`BS_8110`| Design code identifier. |


#### Sample input for the `S3D.rc_design.getInput` function

```json
{
  "function": "S3D.rc_design.getInput",
  "arguments": {
    "s3d_model": S3D_MODEL_OBJECT,
    "design_code": "ACI_318"
  }
}
```

#### Sample response for the `S3D.rc_design.getInput` function

The response will give a `design_obj` object that can be passed into [`S3D.rc_design.check`](#s3drc_designcheck). It provides all necessary input to run a member design check.

<!--DOCUSAURUS_CODE_TABS-->
<!--Output-->
```json
{
  "msg": "Design input object generated successfully for aci318",
  "status": 0,
  "data": {} // design_obj containing parameters, sections and forces from analysis
}
```
<!--Member Input Example-->
```json
// Under the "design_members" property, each member has the following parameters:
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
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

----

## `S3D.rc_design.check`

Run an RC design check from US, Australian, European, Canadian and British standards. The API will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports.

| Key  | Type  | Accepts | Description  |
| :--- | :---: | :---    | :---         |
|  `s3d_model` | `object` | A [s3d_model](docs-s3d-model.md) object  | An object containing information that represents a Structural 3D model. |
|  `design_code` | `string`   |  `ACI_318`, <br/>`AS_3600`, <br/>`EN_2`, <br/>`CSA_A23`, <br/>`BS_8110`| Design code identifier. |
|  `design_obj` | `object` | An object | Optional design input object. This can be obtained from [`S3D.rc_design.getInput`](#s3drc_designgetinput) and altered to adjust design parameters. |

#### Sample input for the `S3D.rc_design.check` function

```json
{
  "function": "S3D.rc_design.check",
  "arguments": {
    "design_code": "AS_3600",
    "s3d_model": S3D_MODEL_OBJECT,
    "design_obj": DESIGN_OBJECT
  }
}
```

<br/>
<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.rc_design.check" target="_blank" class="sample-code-btn">Try <code>S3D.rc_design.check</code></a>
<br/>

#### Sample response for the `S3D.rc_design.check` function

The response will provide all member capacities, ratios and design reports. The format of this response may depend on the different `design_code` designation.

<!--DOCUSAURUS_CODE_TABS-->
<!--Beam Table Results-->
```json
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

<!--Beam Results-->
```json
// Each beam or column result will also include a link to a report
{
  "member_id": "2",
  "section_pos": 0,
  "html_summary_link": "https://solver.skyciv.com/temp/view_report_QCioViaPgrgeLgCK_beam_0.php",
  "html_download_link": "https://solver.skyciv.com/temp/download_html_report_QCioViaPgrgeLgCK_beam_0.php",
  "pdf_download_link": "https://solver.skyciv.com/temp/download_report_QCioViaPgrgeLgCK_beam_0.php"
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Custom sections

SkyCiv supports custom sections and reinforcement checks via SkyCiv's General Section Designer. Use [S3D.SB.runGSD](docs-S3D.SB.md#s3dsbrungsd) to run custom as seen in the image below.

<img src="https://skyciv.com/wp-content/uploads/2019/03/general-concrete-section-design-software.png"/>