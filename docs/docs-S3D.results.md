---
id: S3D.results
title: S3D.results
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

The `S3D.results` namespace provides post-processing functions to read and interpret analysis results produced by <a href="S3D.model#s3dmodelsolve"><code>S3D.model.solve</code></a>.

---

## `S3D.results.get`

Used to get the analysis results.

| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---    |
|  `lc_filter` | `[string]` | `envelope`, `load_case`, `load_group`, `load_combo`, `envelope_abs_max` | Only return specific data in the response. You can also provide names you have applied to load combination. E.g. `LC1`.  | All cases | 
|  `result_filter` | `[string]` |  `reactions`, `member_displacements`, `member_forces`, `member_stresses`, `member_lengths`, `member_stations`, `member_discontinuities`, `member_minimums`, `member_maximums`, `member_peak_results`, `plate_displacements`, `plate_forces`, `plate_stresses`, `plate_minimums`, `plate_maximums`, `plate_peak_results`, `buckling`, `dynamic_frequency`  | Only return specific data in the response. | All results | 


```json title="Sample input for S3D.results.get"
{
  "function": "S3D.results.get",
  "result_filter": ["member_peak_results", "member_discontinuities"],
  "lc_filter": ["envelope", "envelope_abs_max"]
}
```

The analysis results will return an object of all load combination results in the following format.

```json title="Sample response for S3D.results.get"
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

## `S3D.results.set`

Sets the results data for further processing.

:::tip
Analysis results from any source can be used. Simply provide the data in the same format that is returned from [S3D.results.get.md](#s3dresultsget).
:::

| Key   | Type  | Description |
| :---  | :---: | :---        |
|  `analysis_results` | `object`   | Results of a structural analysis (from [`S3D.results.get`](#s3dresultsget))  |


```json title="Sample input for S3D.results.set"
{
  "function": "S3D.results.set",
  "arguments": {
    "analysis_results": {
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
  }
}
```



The response will confirm whether or not the model was successfully set.

```json title="Sample response for S3D.results.set"
{
  "msg": "Results were successfully set.",
  "status": 0,
  "data": ""
}
```
<a class="sample-code-btn" target="_blank" href="https://platform.skyciv.com/api?f=S3D.results.set">Try <code>S3D.results.set</code></a>
<br/>

<br/>

----

## `S3D.results.fetchMemberResult`

Fetches results data for a particular member.

| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---    |
|  `member_id` | `integer` | An integer | Fetch the results of the member with this ID. A value of `null` will return all. | |
|  `LC` | `[integer]` | An array of integers | Load combinations to include. An empty array will return all load combinations. | |
|  `res_key` | `string` | `bmd_z`, `bmd_y`, `axial`, `sfd_y`, `sfd_z`, <br/>`top_bending_stress_z`, `top_bending_stress_y`,<br/> `btm_bending_stress_z`, `btm_bending_stress_y`, <br/>`shear_stress_z`, `shear_stress_y`, <br/>`displacement`, `displacement_x`, <br/>`displacement_y`, `displacement_z` | The type of results to be returned. | |
|  `type` | `string` | `array`, `x,y`, `image`   | Format of results. <ul> <li>`array` - array of results (no x location information)</li><li>`x,y` - object of results with x location and result</li><li>`image` - an image of the results.</li></ul> | |

```json title="Sample input for S3D.results.fetchMemberResult"
{
  "function": "S3D.results.fetchMemberResult",
  "arguments": {
    "member_id": 3,
    "LC": [1],
    "res_key": "bmd_z",
    "type": "x,y"
  }
}
```

<Tabs
  defaultValue="array"
  values={[
    { label: 'Array', value: 'array', },
    { label: 'X-Y', value: 'x-y', },
    { label: 'Image', value: 'image', }
  ]
}>
  <TabItem value="array">

```json title="Sample response for S3D.results.fetchMemberResult"
{
  "data": [
    [
      -0.19113528489304113,
      -0.15415709542934292,
      -0.11717890596564516,
      -0.08020071650194674,
      -0.04322252703824829,
      -0.006244337574548954,
      0.0307338518891493,
      0.06771204135284795,
      0.10469023081654624
    ]
  ],
  "status": 0,
  "msg": ""
}
```

  </TabItem>
  <TabItem value="x-y">

```json title="Sample response for S3D.results.fetchMemberResult"
{
  "data": [
    {
      "x": 0,
      "y": -0.19113528489304113
    },
    {
      "x": 12.5,
      "y": -0.15415709542934292
    },
    {
      "x": 25,
      "y": -0.11717890596564516
    },
    {
      "x": 37.5,
      "y": -0.08020071650194674
    },
    {
      "x": 50,
      "y": -0.04322252703824829
    },
    {
      "x": 62.5,
      "y": -0.006244337574548954
    },
    {
      "x": 75,
      "y": 0.0307338518891493
    },
    {
      "x": 87.5,
      "y": 0.06771204135284795
    },
    {
      "x": 100,
      "y": 0.10469023081654624
    }
  ],
  "status": 0,
  "msg": ""
}
```

  </TabItem>
  <TabItem value="image">

```json title="Sample response for S3D.results.fetchMemberResult"
{
  "data": ["data:image/png;base64,iVBORw0KGg..."],
  "status": 0,
  "msg": ""
}
```

  </TabItem>
</Tabs>


If `"type": "image"` is provided, then an image will be returned in base64 format.

<div style={{ width: '100%', textAlign: 'center' }}>
  <img src="/api/v3/img/images/api-generated-diagram.png" style={{ backgroundColor: 'white', justifyContent: 'center', maxWidth: '700px'}}/>
</div>

<br/>

----

## `S3D.results.getAnalysisReport`

Generates a structural analysis report and returns a download link to retrieve the report.

:::important
[`S3D.model.set`](docs-S3D.model.md#s3dmodelset) and [`S3D.model.solve`](docs-S3D.model.md#s3dmodelsolve) must be executed earlier in the session for the Analysis Report to be generated.
:::

#### Variables
| Key  | Type  | Accepts | Description  | Default |
| :--- | :---: | :---    | :---         | :---    |
|  `job_name` | `string` | Any string. | The name of your project. This will be used as the analysis report name. | |
|  `file_type` | `string` | `pdf`, `txt` | The report format to be returned. |  |
|  `load_combinations` | `[integer]` | An array of integers | An array of load combination IDs to report on.  | |
|  `sections` | `object` | Key-value pairs  | The different type of analysis results to include in your report (see below) | |

```json title="Sample input for S3D.results.getAnalysisReport"
{
  "function": "S3D.results.getAnalysisReport",
  "arguments": {
    "job_name": "Example Job Name",
    "file_type": "pdf",
    "load_combinations": [1, 2, 3],
    "sections": {
      "title_page": true,
      "job_setup": true,
      "bom": true, // Bill of Materials
      "nodal_reactions": true,
      "nodal_forces": false,
      "nodal_displacements": true,
      "member_forces": false,
      "member_displacements": true,
      "member_stresses": false,
      "buckling": false,
      "plate_nodal_forces": false,
      "plate_element_forces": false,
      "plate_nodal_moments": false,
      "plate_element_moments": false,
      "plate_displacements": false,
      "plate_nodal_stresses": false,
      "plate_element_stresses": false,
      "plate_nodal_equiv_stresses": false,
      "plate_element_equiv_stresses": false
    }
  }
}
```

The function will return links to download and preview your analysis report in the format specified by the `file_type` property.

```json title="Sample response for S3D.results.getAnalysisReport"
{
  "status": 0,
  "msg": "Analysis report successfully generated.",
  "data": {
    "view_link": "https://solver.skyciv.com/temp/view_report_9rxLAlPHg0VXxrei.php",
    "download_link": "https://solver.skyciv.com/temp/download_report_9rxLAlPHg0VXxrei.php",
    "html_download_link": "https://solver.skyciv.com/temp/download_html_report_9rxLAlPHg0VXxrei.php",
    "file_type": "pdf"
  }
}
```

<br/>

----

## `S3D.model.takeScreenshot`

Takes screenshots of the model from specified perspectives.

:::important
[`S3D.model.set`](docs-S3D.model.md#s3dmodelset) and [`S3D.file.open`](docs-S3D.file.md#s3dfileopen) must be executed earlier in the session for screenshots to be taken.
:::

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



```json title="Sample input for S3D.results.takeScreenshot"
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

:::info
The response will return an object of screenshots in base64 format.
:::

```json title="Sample response for S3D.results.takeScreenshot"
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
