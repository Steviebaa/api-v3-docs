---
id: loads
title: Loads
sidebar_label: Load Generator
---

---

Automate wind speed, wind design and snow calculations.

---

## `loads.getLoads`

Using the below variables, users can get the wind speed, snow loads and wind pressures from ASCE, AS1170, NBCC or Eurocode Design Standards.

#### Sample input

```json
	{
		"function": "loads.getLoads",
		"arguments": {
			"site_data": {},
			"building_data": {}
		}
	}
```
<a href="https://platform.skyciv.com/api/v3?preload_function=loads.getLoads_asce" target="_blank" class="sample-code-btn">Try <code>loads.getLoads</code></a><br/>

#### Relevant components
* The [`site_data`](#site_data) object
* The [`building_data`](#building_data) object

#### Sample response

The response will return design wind speed, elevations, topography, wind and snow pressures and confirm the address of the site location under the key `wind_speed`. In addition to this, if the terrain data is requested (user provides `wind_direction` and `exposure` keys) it will also return topography data:

```json
{
	"site_data": {
		"country": "United Kingdom",
		"lat": 51.501364,
		"lng": -0.14189,
		"elevation": 6.36,
		"formatted_address": "Westminster, London SW1A 1AA, UK"
	},
	"wind_data": {
		"uk_ireland_contour": 21.621648873984707,
		"distance_from_shore": {
			"0": {
				"distance": 233.92573712464545,
				"lat": 53.60510578995467,
				"lng": -0.1418899999999966
			},
			"30": {
				"distance": 174.5852678317777,
				"lat": 52.98168910830151,
				"lng": 0.7127760997660391
			}
			// etc
		},
		"wind_speed": 21.8
	},
	"snow_data": {
		"snow_region": "zone3",
		"snow_load": 0.5
	},
	"topography": {
		"code": "en1991",
		"topo_factor": 1,
		"comments": "",
		"location_of_peak": 1740,
		"elevation_of_peak": 26.6097240447998,
		"location_of_foot": -1580,
		"elevation_of_foot": 0,
		"elevation_of_midheight": 13.3048620223999,
		"slope": 0.008014977121927652,
		"H": 26.6097240447998,
		"x": -1740,
		"Lu": 3320,
		"Ld": 240,
		"terrain_type": "Flat",
		"elevation_image_base64": "**Base 64 Data**"
	},
	"snow_pressure": null,
	"wind_pressure": {
		"pressure_type": "building",
		"pressure_unit": "Pa",
		"elevation_or_location_unit": "m",
		"pressures": [
			{
				"dirn": "along_L",
				"surface": "windward_wall",
				"elevation": [3, 6, 9],
				"pos_Cpi": [204.49, 204.49, 204.49],
				"neg_Cpi": [425.75, 425.75, 425.75]
			},
			{
				"dirn": "along_L",
				"surface": "leeward_wall",
				"elevation": 21,
				"pos_Cpi": -325.11,
				"neg_Cpi": -103.85
			},
			{
				"dirn": "along_L",
				"surface": "sidewall",
				"location": [2, 10, 12.4],
				"pos_Cpi": [-619.531865399467, -442.5227609996193, -309.7659326997335],
				"neg_Cpi": [-398.27048489965733, -221.26138049980966, -88.50455219992386]
			},
			{
				"surface": "roof",
				"zone": "F",
				"pos_Cpi": 194.71,
				"neg_Cpi": -592.98
			},
			{
				"surface": "roof",
				"zone": "G",
				"pos_Cpi": 194.71,
				"neg_Cpi": -495.63
			},
			// etc
		],
		"forces": null
	}
}

```
Here is a sample of the elevation image that is returned when `elevation_img: true` :

<img src="/api-v3-docs/img/images/loads-elevation.png"/>

## `site_data`

Get wind speed from site location, based on ASCE 7-10, ASCE 7-16, AS/NZS 1170, NBCC and EN 1991.

| Key | Type | Description |
| :------------- | :----------: | :----------- |
| design_code* | `string` | Which design code is this based on: <br/>`as1170`, `asce7-10`, `asce7-16`, `en1991`, `nbcc2015`. |
| project_address* | `string` | The site location. This will use Google Maps to search the address and select the first option. |
| wind_direction | `string` | Wind direction (going to). `"N"`, `"NE"`, `"E"`, `"SE"`, `"S"`, `"SW"`, `"W"`, `"NW"`. |
| lat | `float` | Latitude of site location (used instead of project_address). E.g. 41.878100 for Chicago |
| lng | `float` | Longitude of site location (used instead of project_address). E.g. -87.629800 for Chicago |

Code specific variables

| Key | Type | Design Code | Description/Options |
| :------------- | :----------: | :----------: | :----------- |
| risk_category | `string` | ASCE 7 | `"I"`, `"II"`, `"III"`, `"IV"` |
| exposure | `string` | ASCE 7 | Required for topography result `"B"`, `"C"`, `"D"` |
| ari | `integer` | AS/NZS 1170 | Annual Recurrence Interval (in years)<br/> `"1"`, `"5"`, `"10"`, `"20"`, `"25"`, `"50"`, `"100"`, `"200"`, `"250"`, `"500"`, `"1000"`, `"2000"`, `"2500"`, `"5000"`, `"10000"` |
| sls_and_uls | `boolean` | AS/NZS 1170 | `true` or `false` |
| country | `string` | AS/NZS 1170 | `"australia"` or `"new_zealand"` <br/>Required for SLS and ULS wind speeds |
| design_working_life | `string` | AS/NZS 1170 | `"construction_equipment"`, `"10_years"`, `"25_years"`, `"50_years"`, `"100_years"`, `"less_than_6_months"` (NZ only) <br/>Required for SLS and ULS wind speeds |
| importance_level | `string` | AS/NZS 1170 | Number between `"1"`, `"5"` specifying importance level <br/>Required for SLS and ULS wind speeds |

Topography variables

| Key | Type | Design Code | Description/Options |
| :------------- | :----------: | :----------: | :----------- | 
| terrain_category | `string` | AS/NZS 1170 | `"CAT2"`, `"CAT3"`, `"CAT4"` |
| snow_region | `string` | AS/NZS 1170 | `"alpine"`, `"sub-alpine"` |
| snow_terrain_class | `integer` | AS/NZS 1170 | `1`, `2`, `3` |
| ari | `string` | NBCC 2015 | Annual Recurrence Interval: `"10_years"`, `"50_years"` |
| importance_level | `string` | NBCC 2015 | `"low"`, `"normal"`, `"high"`, `"post_disaster"` |
| limit_state | `string` | NBCC 2015 | `"SLS"`, `"ULS"` |
| snow_area_classification | `string` | NBCC 2015 | `"rural"`, `"exposed-north-treeline"` |
| country | `string` | EN 1991 | `"Germany"`, `"United Kingdom"`, `"France"`... <br/>Required for additional parameters (season_month, wind_direction, terrain_category |
| season_month | `string` | EN 1991 | For Belgium, France, UK, and Ireland <br/> 1 month: `"January"`, `"February"`, ... <br/> 2 months (UK and Ireland only): `"January-February"`, `"March-April"`, ...<br/> 4 months (UK and Ireland only): `"November-February"`, `"December-March"`, ... <br/> 6 months (UK and Ireland only): `"October-March"`, `"April-September"`, ...|
| wind_direction | `string` or `integer` | EN 1991 | The angle of which the wind is going to, referenced from N in clockwise direction. Use `Any` for worst case<br/>For Belgium, Poland, United Kingdom, Ireland, and France: (in degrees). Increments of 30° ranging from `0` - `360` <br/> For other countries: `"N"`, `"NE"`, `"E"`, `"SE"`, `"S"`, `"SW"`, `"W"`, `"NW"` |
| terrain_category | `string` | EN 1991 | For UK and Ireland:<br/> `0` for Sea <br/>`"I"` or `"II"` for Country <br/>`"III"` or `"IV"` for Town <br/><br/>For France: `"0"` `"II"` `"IIIa"` `"IIIb"` `"IV"` <br/> For Netherlands: `"0"` `"II"` `"III"` <br/> Other countries: `"I"` `"II"` `"III"` `"IV"`|
| distance_inside_town | `float` | EN 1991 | Required for UK and Ireland. Default value is `20`|
| distance_from_shore | `float` | EN 1991 | Required for UK and Ireland. Can be obtained from server if wind direction is **not** equal to `Any`. Default value is `100`|
| displacement_height | `float` | EN 1991 | Required for UK and Ireland. Default value is `0`|



#### Sample input:
<!--DOCUSAURUS_CODE_TABS-->
<!--ASCE 7-16-->
```json
{
	"design_code": "asce7-16", 
	"project_address": "Wacker Avenue, Chicago",
	"country": "United States",
	"risk_category": "III",
	//lat: 41.878100, //41°52"41.2"N 
	//lng: -87.629800, //87°37"47.3"W
	"topography": {
		"terrain_data": true,
		"wind_direction": "N",
		"exposure": "B",
		"topo_image": true,
	}
	
}
```
<!--AS/NZS 1170.2-->
```json
{
	"design_code": "as1170", 
	"project_address": "Cabramurra, NSW", 
	"ari": "200",
	"sls_and_uls": true, //requires below information
	"country": "australia", 
	"design_working_life": "25_years", 
	"importance_level": "3",
	"topography": {
		"terrain_data": true,
		"wind_direction": "E",
		"terrain_category": "CAT2",
		"topo_image": true,
		"country": "United States",
		"snow_region": "alpine", 
		"snow_terrain_class": "1",
	}

	
}
```
<!--NBCC 2015 -->
```json
{
	"design_code": "nbcc2015",
	"project_address": "Toronto",
	"ari": "10_years", //50_years 
	"importance_level": "low", //normal, high, post_disaster
	"limit_state": "SLS", //"ULS"
	"topography": {
		"terrain_data": true,
		"wind_direction": "N", //NE etc...
		"terrain_category": "A", //B
		"topo_image": true,
		"country": "Canada",
		"snow_area_classification" : "rural",
	}
}
```
<!--EN 1991 -->
```json
{
	"design_code": "en1991",
	"project_address": "Buckingham Palace",
	"topography": {
		"terrain_data": true,
		"season_month": "January-February", 
		"wind_direction": "30", //degrees
		"topo_image": true,
		"country": "United Kingdom",
		"season_month": "January-February",
		"terrain_category": "I",
		"distance_inside_town": 20,
		"distance_from_shore": 100,
		"displacement_height": 0
	}

}
```
<!--END_DOCUSAURUS_CODE_TABS-->

<a href="https://platform.skyciv.com/api/v3?preload_function=loads.getLoads_asce" target="_blank" class="sample-code-btn">Try <code>loads.getLoads</code></a><br/>

----

## `building_data`

Generate wind pressures or snow loads based on building parameters. These parameters have minor differences between design codes. If you need any assistance, please email us at support@skyciv.com.

#### Options for Structure
| structure | Remarks |
| :-------- | :------ |
| `building` | Default value |
| `freestanding_wall` | ASCE 7 only |
| `truss_tower` | ASCE 7 only|

#### Options for ASCE 7, NBCC 2015
| roof_profile | enclosure | wind_blockage |
| :----------- | :-------: | :------------ |
| `gable` | `enclosed, partially-enclosed, partially-open` | |
| `monoslope` | `enclosed, partially-enclosed, partially-open` | |
| `hip` | `enclosed, partially-enclosed, partially-open` | |
| `pitched` | `open` | For ASCE 7/NBCC 2015: `clear, obstructed` <br/> For AS/NZS 1170: `empty, blocked` |
| `troughed` | `open` | `string` |
| `open-monoslope` | `open` | `string` |

| structure_type | Description |
| :------------- | :---------- |
| `mwfrs` | Main Wind Force Resisting System |
| `cladding` | Components and Cladding |

#### Options for AS/NZS 1170 and EN 1991
| structure_type | roof_profile |
| :------------- | :---------- | 
| `building` | `gable, monoslope, hip` |
| `free_roof` | For EN 1991: `pitched, open-monoslope` <br/> For AS/NZS 1170: `pitched, open-monoslope, troughed`|
| For AS/NZS 1170: `cladding` | `gable, monoslope, hip, pitched, open-monoslope, troughed` |

<br/>
For more info on parameters used for wind or snow load calculation, please refer to our documentation and/or the load generator UI.
<br/>

#### Sample input

<!--DOCUSAURUS_CODE_TABS-->
<!--ASCE 7 Building-->
```json
{
  "function": "wind.getPressures",
  "arguments": {
    "design_code": "asce7-16", //asce7-10 or asce7-16
    "structure": "building", //building, freestandingwall, trusstower
    "roof_profile": "hip", //gable, hip, monoslope, pitched, troughed, open-monoslope
    "building_dimensions": {
      "length": 12.4,
      "width": 10,
      "mean_roof_height": 21,
      "roof_angle": 12
    },
    // "wind_parameters" can be an object or false if not considered
    "wind_parameters": {
      "structure_type": "mwfrs", // mwfrs or cladding
      "enclosure": "enclosed", //enclosed, partially_enclosed, open, partially-open
      "wind_blockage": "obstructed", // clear or obstructed
      // FOR CLADDING
      "wall_cladding_area": 1, //wall-cladding-area
      "roof_cladding_area": 1, //	roof-cladding-area
      "cladding_type": "permeable", // permeable or impermeable
      "structure_level": [
        { "floor_level": "2", "floor_elevation": 3 },
        { "floor_level": "3", "floor_elevation": 6 },
        { "floor_level": "roof", "floor_elevation": 9 }
      ]
    },
    // "snow_parameters" can be an object or false if not considered
    "snow_parameters": {
      "terrain_category": "B", // B, C, D, above-treeline, alaska-no-trees
      "exposure_condition_roof": "sheltered", // fully-exposed,  partially-exposed, sheltered
      "thermal_condition": "structure-above-freezing", // unheated-open,  structure-below-freezing, greenhouse, all-structures, structure-above-freezing
      "sloped_roof_surface_condition": "slippery", // slippery, all-other
      "unbalanced_snow_load": true, // true or false if unbalanced snow load is considered
      "snow_load_case": [
        {
          "snow_case_type": "symmetric_gable", // symmetric_gable , asymmetric_gable, lower_roof
          "W": 20 //horizontal dist from eav to ridge of symmetric gable
        },
        {
          "snow_case_type": "asymmetric_gable",
          "Wu": 22, // horizontal dist from eav to ridge on upwind side of gable roof
          "Wd": 18, // horizontal dist from eav to ridge on downwind side of gable roof
          "theta_u": 13, // roof angle on upwind side of gable roof
          "theta_d": 16 // roof angle on downwind side of gable roof
        },
        {
          "snow_case_type": "lower_roof",
          "lu": 8, // length of upper roof (upwind)
          "hr": 3, // height difference between upper and lower roof
          "ld": 6 // length of lower roof (downwind)
        }
      ]
    }
  }
}
```

<!--ASCE 7 Freestanding Wall/Solid Signs-->
```json
{
  "function": "wind.getPressures",
  "arguments": {
    "design_code": "asce7-16", //asce7-10 or asce7-16
    "structure": "freestandingwall", //building, freestandingwall, trusstower
    "freestandingwall_dimensions": {
      "ground_to_top": 20, //ground to top of wall
      "wall_width": 50,
      "wall_height": 10,
      "ratio_of_solid_area_to_gross": 0.9, // between 0 to 1.0
      "length_of_return_corner": 0
    },
    "wind_parameters": {
      "structure_type": "freestandingwall-asce7-16" //freestandingwall or freestandingwall-asce7-16
    },
    "snow_parameters": false // not available for freestandingwall and truss towers
  }
}
```

<!--ASCE 7 Truss Tower-->
```json
{
  "function": "wind.getPressures",
  "arguments": {
    "design_code": "asce7-16",
    "structure": "trusstower", //building, freestandingwall, trusstower
    "trusstower_dimensions": {
      "ground_to_top": "80", //ground to top of truss tower
      "ground_to_centroid": "33",
      "ratio_of_solid_area_to_gross": "0.23", // between 0 to 1.0
      "tower_cross_section": "square", //square or triangle
      "member_section": "round", //round or flat
      "tower_length": "20", //dimension of one side for square or triangle
      "truss_type": "cross", //warren cross pratt howe
      "base_column_height": "10", //column/pedestal height
      "top_base_ratio": "0.6" //ratio of top dimension to bottom dimension
    },
    "wind_parameters": {
      "structure_type": "trusstower-asce7-16", //trusstower or trusstower-asce7-16
      "structure_level": [
        {
          "node_level": "2",
          "node_elevation": 10
        },
        {
          "node_level": "3",
          "node_elevation": 20
        },
        {
          "node_level": "roof",
          "node_elevation": 30
        }
      ]
    },
    "snow_parameters": false
  }
}

```
<!--END_DOCUSAURUS_CODE_TABS-->

<br/>

<!--DOCUSAURUS_CODE_TABS-->
<!--AS/NZS 1170-->
```js
var bld_args = {
  design_code: "as1170",
  structure: "building",
  roof_profile: "gable", //gable, hip, monoslope, pitched, troughed, open-monoslope
  building_dimensions: {
    length: 12.4,
    width: 10,
    height: 21,
    roof_angle: 12,
    mean_roof_height: 22
  },
  // "wind_parameters" can be an object or false if not considered
  wind_parameters: {
    structure_type: "building", // building, free-roof, cladding
    wind_blockage: "blocked", // empty or blocked
    elevated_building: false, //true or false
    wind_blockage: "",
    wall_condition: "5", // 1 to 9
    action_combination_case: "1", // 1 to 8
    wall_type: "impermeable", // permeable or impermeable
    ratio_of_opening_to_total_area: "0",
    structure_level: [
      { floor_level: "2", floor_elevation: 3 },
      { floor_level: "3", floor_elevation: 6 },
      { floor_level: "roof", floor_elevation: 9 }
    ]

    // FOR CLADDING
    // "wall_cladding_area": 1, //wall-cladding-area
    // "roof_cladding_area": 1, //	roof-cladding-area
    // "cladding_type": "permeable", // permeable or impermeable
  },
  // "snow_parameters" can be an object or false if not considered
  snow_parameters: {
    exposure_category_as1170: "windswept", // sub-alpine, sheltered, semi-sheltered, windswept
    unbalanced_snow_load: true, // true/false if unbalanced snow load is considered
    snow_load_case: [
      {
        snow_case_type: "unbalanced_duopitched",
        theta1: 16,
        theta2: 18
      },
      {
        snow_case_type: "unbalanced_monopitched",
        theta: 16
      },
      {
        snow_case_type: "drifting_sheltered",
        l1: 20,
        l2: 20,
        hd: 3,
        theta1: 17,
        theta2: 17
      },
      {
        snow_case_type: "drifting_lower_upper",
        l1: 20,
        l2: 20,
        hd: 3,
        hr: 5,
        theta1: 17,
        theta2: 17
      },
      {
        snow_case_type: "drifting_projection_obstruction",
        h: 3,
        theta: 17
      },
      {
        snow_case_type: "obstructed_sloping_roof_subalpine_parapet",
        hp: 2,
        theta: 17
      },
      {
        snow_case_type: "obstructed_sloping_roof_subalpine_abutting",
        theta: 16
      },
      {
        snow_case_type: "drifting_lower_roof_subalpine",
        theta1: 20,
        theta2: 13,
        hd: 2.5
      }
    ]
  }
};

var functions = [
  {
    function: "wind.getWindSpeed",
    arguments: wind_speed_args //from above wind.getindSpeed
  },
  {
    function: "wind.getPressures",
    arguments: bld_args
  }
];

```

<!--NBCC 2015-->
```js
var bld_args = {
  design_code: "nbcc2015",
  structure: "building",
  roof_profile: "gable", //gable, hip, monoslope, pitched, troughed, open-monoslope
  building_dimensions: {
    length: 12.4,
    width: 10,
    reference_height: 21,
    roof_angle: 12
  },
  // "wind_parameters" can be an object or false if not considered
  wind_parameters: {
    structure_type: "cladding", // mwfrs or cladding
    enclosure: "enclosed", // enclosed, partially_enclosed, open, partially-open
    wind_blockage: "obstructed", // clear or obstructed,
    cladding_pressure_type: "external", // external, external_internal
    wall_cladding_area: 10, // wall cladding area
    roof_cladding_area: 12, // roof cladding area
    structure_level: [
      { floor_level: "2", floor_elevation: 3 },
      { floor_level: "3", floor_elevation: 6 },
      { floor_level: "roof", floor_elevation: 9 }
    ]
  },
  // "snow_parameters" can be an object or false if not considered
  snow_parameters: {
    sloped_roof_surface_condition: "slippery", //  slippery,  all-other//
    unbalanced_snow_load: true, //true  false
    snow_load_case: [
      {
        snow_case_type: "multilevel_roof_case1", // "multilevel_roof_case1"  "multilevel_roof_case2"  "multilevel_roof_case3"
        ls: 20,
        ws: 13,
        h: 13,
        hp: 13,
        alpha: 13,
        sliding: true, // true or false
        a: 13
      },
      {
        snow_case_type: "areas_adjacent_to_roof_projections",
        ls: 20,
        ws: 13,
        h: 13,
        lh10: 13
      },
      {
        snow_case_type: "gable_roof",
        ls: 20,
        ws: 13,
        alpha: 13
      }
    ]
  }
};
```

<!--EN 1991-->
```js
var bld_args = {
  design_code: "en1991",
  structure: "building",
  roof_profile: "gable", //gable, hip, monoslope, pitched, troughed, open-monoslope
  building_dimensions: {
    length: 12.4,
    width: 10,
    ground_to_top: 21,
    roof_angle: 12
  },
  //"wind_parameters" can be an object or false if not considered
  wind_parameters: {
    structure_type: "building", // building or free_roof
    // "wind_blockage": "obstructed", // clear or obstructed,
    flat_roof_type: "not-applicable", // not-applicable, sharp-eaves, with-parapet, curved-eaves, mansard-eaves
    structure_level: [
      { floor_level: "2", floor_elevation: 3 },
      { floor_level: "3", floor_elevation: 6 },
      { floor_level: "roof", floor_elevation: 9 }
    ],
    wall_area_en1991: 10, //optional - default value is 10. Ranging from 1 to 10 sqm if wall component/cladding is analyzed
    roof_area_en1991: 10 //optional - default value is 10. Ranging from 1 to 10 sqm if roof component/cladding is analyzed
  },
  // "snow_parameters" can be an object or false if not considered
  snow_parameters: false
};
```
<!--END_DOCUSAURUS_CODE_TABS-->

<a href="https://platform.skyciv.com/api/v3?preload_function=loads.getLoads_asce" target="_blank" class="sample-code-btn">Try <code>loads.getLoads</code></a><br/>