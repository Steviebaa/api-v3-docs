var viewer;

$(document).ready(function () {

	var s3d_model = {
		"dataVersion": 20,
		"settings": {
			"units": {
				"length": "m",
				"section_length": "mm",
				"material_strength": "mpa",
				"density": "kg/m3",
				"force": "kn",
				"moment": "kn-m",
				"pressure": "kpa",
				"translation": "mm",
				"stress": "mpa"
			},
			"precision": "fixed",
			"precision_values": 3,
			"evaluation_points": 5,
			"vertical_axis": "Y",
			"projection_system": "orthographic",
			"solver_timeout": 90,
			"accurate_buckling_shape": false,
			"buckling_johnson": false,
			"non_linear_tolerance": "3",
			"non_linear_theory": "small",
			"auto_stabilize_model": false
		},
		"details": {},
		"nodes": {
			"103": {
				"x": 0,
				"y": 0,
				"z": 31.6992
			},
			"104": {
				"x": 0,
				"y": 3.048,
				"z": 31.6992
			},
			"105": {
				"x": 19.5072,
				"y": 0,
				"z": 31.6992
			},
			"106": {
				"x": 19.5072,
				"y": 8.2296,
				"z": 31.6992
			},
			"107": {
				"x": 9.7536,
				"y": 0,
				"z": 31.6992
			},
			"108": {
				"x": 9.7536,
				"y": 3.048,
				"z": 31.6992
			},
			"109": {
				"x": 0,
				"y": 9.144,
				"z": 31.6992
			},
			"110": {
				"x": 2.4384,
				"y": 9.144,
				"z": 31.6992
			},
			"111": {
				"x": 4.8768,
				"y": 9.144,
				"z": 31.6992
			},
			"112": {
				"x": 7.3152,
				"y": 9.144,
				"z": 31.6992
			},
			"113": {
				"x": 9.7536,
				"y": 9.144,
				"z": 31.6992
			},
			"114": {
				"x": 12.192,
				"y": 9.144,
				"z": 31.6992
			},
			"115": {
				"x": 14.6304,
				"y": 9.144,
				"z": 31.6992
			},
			"116": {
				"x": 17.0688,
				"y": 9.144,
				"z": 31.6992
			},
			"117": {
				"x": 19.5072,
				"y": 9.144,
				"z": 31.6992
			},
			"118": {
				"x": 2.4384,
				"y": 9.6012,
				"z": 31.6992
			},
			"119": {
				"x": 4.8768,
				"y": 10.0584,
				"z": 31.6992
			},
			"120": {
				"x": 7.3152,
				"y": 10.5156,
				"z": 31.6992
			},
			"121": {
				"x": 9.7536,
				"y": 10.9728,
				"z": 31.6992
			},
			"122": {
				"x": 12.192,
				"y": 10.5156,
				"z": 31.6992
			},
			"123": {
				"x": 14.6304,
				"y": 10.0584,
				"z": 31.6992
			},
			"124": {
				"x": 17.0688,
				"y": 9.6012,
				"z": 31.6992
			},
			"125": {
				"x": 0,
				"y": 6.096,
				"z": 31.6992
			},
			"126": {
				"x": 9.7536,
				"y": 6.096,
				"z": 31.6992
			}
		},
		"members": {
			"1": {
				"type": "normal",
				"cable_length": null,
				"node_A": 103,
				"node_B": 104,
				"section_id": 1,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"2": {
				"type": "normal",
				"cable_length": null,
				"node_A": 105,
				"node_B": 106,
				"section_id": 11,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"3": {
				"type": "normal",
				"cable_length": null,
				"node_A": 107,
				"node_B": 108,
				"section_id": 2,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"4": {
				"type": "normal",
				"cable_length": null,
				"node_A": 109,
				"node_B": 110,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"5": {
				"type": "normal",
				"cable_length": null,
				"node_A": 110,
				"node_B": 111,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"201": {
				"type": "normal",
				"cable_length": null,
				"node_A": 111,
				"node_B": 112,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"202": {
				"type": "normal",
				"cable_length": null,
				"node_A": 112,
				"node_B": 113,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"203": {
				"type": "normal",
				"cable_length": null,
				"node_A": 113,
				"node_B": 114,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"204": {
				"type": "normal",
				"cable_length": null,
				"node_A": 114,
				"node_B": 115,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"205": {
				"type": "normal",
				"cable_length": null,
				"node_A": 115,
				"node_B": 116,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"206": {
				"type": "normal",
				"cable_length": null,
				"node_A": 116,
				"node_B": 117,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"207": {
				"type": "normal",
				"cable_length": null,
				"node_A": 109,
				"node_B": 118,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"208": {
				"type": "normal",
				"cable_length": null,
				"node_A": 118,
				"node_B": 119,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"209": {
				"type": "normal",
				"cable_length": null,
				"node_A": 119,
				"node_B": 120,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"210": {
				"type": "normal",
				"cable_length": null,
				"node_A": 120,
				"node_B": 121,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"211": {
				"type": "normal",
				"cable_length": null,
				"node_A": 121,
				"node_B": 122,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"212": {
				"type": "normal",
				"cable_length": null,
				"node_A": 122,
				"node_B": 123,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"213": {
				"type": "normal",
				"cable_length": null,
				"node_A": 123,
				"node_B": 124,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"214": {
				"type": "normal",
				"cable_length": null,
				"node_A": 124,
				"node_B": 117,
				"section_id": 5,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"215": {
				"type": "normal",
				"cable_length": null,
				"node_A": 111,
				"node_B": 118,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"216": {
				"type": "normal",
				"cable_length": null,
				"node_A": 112,
				"node_B": 119,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"217": {
				"type": "normal",
				"cable_length": null,
				"node_A": 113,
				"node_B": 120,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"218": {
				"type": "normal",
				"cable_length": null,
				"node_A": 113,
				"node_B": 122,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"219": {
				"type": "normal",
				"cable_length": null,
				"node_A": 114,
				"node_B": 123,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"220": {
				"type": "normal",
				"cable_length": null,
				"node_A": 115,
				"node_B": 124,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"221": {
				"type": "normal",
				"cable_length": null,
				"node_A": 110,
				"node_B": 118,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"222": {
				"type": "normal",
				"cable_length": null,
				"node_A": 111,
				"node_B": 119,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"223": {
				"type": "normal",
				"cable_length": null,
				"node_A": 112,
				"node_B": 120,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"224": {
				"type": "normal",
				"cable_length": null,
				"node_A": 113,
				"node_B": 121,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"225": {
				"type": "normal",
				"cable_length": null,
				"node_A": 114,
				"node_B": 122,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"226": {
				"type": "normal",
				"cable_length": null,
				"node_A": 115,
				"node_B": 123,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"227": {
				"type": "normal",
				"cable_length": null,
				"node_A": 116,
				"node_B": 124,
				"section_id": 6,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"228": {
				"type": "normal",
				"cable_length": null,
				"node_A": 104,
				"node_B": 108,
				"section_id": 10,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"229": {
				"type": "normal",
				"cable_length": null,
				"node_A": 104,
				"node_B": 125,
				"section_id": 1,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"230": {
				"type": "normal",
				"cable_length": null,
				"node_A": 108,
				"node_B": 126,
				"section_id": 2,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"231": {
				"type": "normal",
				"cable_length": null,
				"node_A": 125,
				"node_B": 126,
				"section_id": 8,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"232": {
				"type": "normal",
				"cable_length": null,
				"node_A": 125,
				"node_B": 109,
				"section_id": 1,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"233": {
				"type": "normal",
				"cable_length": null,
				"node_A": 126,
				"node_B": 113,
				"section_id": 2,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"307": {
				"type": "normal",
				"cable_length": null,
				"node_A": 106,
				"node_B": 117,
				"section_id": 1,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"343": {
				"type": "normal",
				"cable_length": null,
				"node_A": 107,
				"node_B": 117,
				"section_id": 7,
				"rotation_angle": 0,
				"fixity_A": "FFFFFF",
				"fixity_B": "FFFFFF",
				"offset_Ax": "0",
				"offset_Ay": "0",
				"offset_Az": "0",
				"offset_Bx": "0",
				"offset_By": "0",
				"offset_Bz": "0"
			},
			"344": {
				"type": "normal",
				"cable_length": null,
				"node_A": 113,
				"node_B": 105,
				"section_id": 7,
				"rotation_angle": 0,
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
				"version": 2,
				"name": "W16x67",
				"area": 12645.1362461,
				"Iz": 397084780.022,
				"Iy": 49531539.6464,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 1059815.48207,
					"Qy": 288605.87683,
					"centroid_point": [
						129.54,
						207.01
					],
					"centroid_length": [
						129.54,
						207.01
					],
					"depth": 414.02,
					"width": 259.08,
					"alpha": 0,
					"polygons": [
						{
							"name": "W16x67",
							"group_id": 0,
							"points_calc": [
								[
									0,
									0,
									"regular"
								],
								[
									259.08,
									0,
									"regular"
								],
								[
									259.08,
									16.891,
									"regular"
								],
								[
									144.9705,
									16.891,
									"filletStartEnd"
								],
								[
									140.985234735,
									17.6837185484,
									"dontShow"
								],
								[
									137.606689981,
									19.9411899807,
									"dontShow"
								],
								[
									135.349218548,
									23.3197347353,
									"dontShow"
								],
								[
									134.5565,
									27.305,
									"filletStartEnd"
								],
								[
									134.5565,
									386.715,
									"filletStartEnd"
								],
								[
									135.349218548,
									390.700265265,
									"dontShow"
								],
								[
									137.606689981,
									394.078810019,
									"dontShow"
								],
								[
									140.985234735,
									396.336281452,
									"dontShow"
								],
								[
									144.9705,
									397.129,
									"filletStartEnd"
								],
								[
									259.08,
									397.129,
									"regular"
								],
								[
									259.08,
									414.02,
									"regular"
								],
								[
									0,
									414.02,
									"regular"
								],
								[
									0,
									397.129,
									"regular"
								],
								[
									114.1095,
									397.129,
									"filletStartEnd"
								],
								[
									118.094765265,
									396.336281452,
									"dontShow"
								],
								[
									121.473310019,
									394.078810019,
									"dontShow"
								],
								[
									123.730781452,
									390.700265265,
									"dontShow"
								],
								[
									124.5235,
									386.715,
									"filletStartEnd"
								],
								[
									124.5235,
									27.305,
									"filletStartEnd"
								],
								[
									123.730781452,
									23.3197347353,
									"dontShow"
								],
								[
									121.473310019,
									19.9411899807,
									"dontShow"
								],
								[
									118.094765265,
									17.6837185484,
									"dontShow"
								],
								[
									114.1095,
									16.891,
									"filletStartEnd"
								],
								[
									0,
									16.891,
									"regular"
								]
							],
							"points_custom_orig": [],
							"shape": "ibeam",
							"dimensions_show": true,
							"dimensions": {
								"TFw": {
									"value": 259.08,
									"locat": [
										[
											0,
											455.422
										],
										[
											259.08,
											455.422
										],
										{
											"placeholder": "Top Width",
											"dimension_id": "TFw",
											"dimension": 259.08
										}
									]
								},
								"TFt": {
									"value": 16.891,
									"locat": [
										[
											-41.402,
											414.02
										],
										[
											-41.402,
											397.129
										],
										{
											"placeholder": "Top Thickness",
											"dimension_id": "TFt",
											"dimension": 16.891
										}
									]
								},
								"BFw": {
									"value": 259.08,
									"locat": [
										[
											0,
											-82.804
										],
										[
											259.08,
											-82.804
										],
										{
											"placeholder": "Bottom Width",
											"dimension_id": "BFw",
											"dimension": 259.08
										}
									]
								},
								"BFt": {
									"value": 16.891,
									"locat": [
										[
											-41.402,
											16.891
										],
										[
											-41.402,
											0
										],
										{
											"placeholder": "Bottom Thickness",
											"dimension_id": "BFt",
											"dimension": 16.891
										}
									]
								},
								"h": {
									"value": 414.02,
									"locat": [
										[
											300.482,
											0
										],
										[
											300.482,
											414.02
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 414.02
										}
									]
								},
								"Wt": {
									"value": 10.033,
									"locat": [
										[
											124.5235,
											-41.402
										],
										[
											134.5565,
											-41.402
										],
										{
											"placeholder": "Web Thickness",
											"dimension_id": "Wt",
											"dimension": 10.033
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 10.414
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 12645.1362461,
								"J": 994793.150848,
								"Iyp": 49531539.6464,
								"Izp": 397084780.022,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 1960311825740,
								"Syp": 581740.772,
								"Szp": 83870.8
							},
							"points_centroid_shifted": [
								[
									-129.54,
									-207.01,
									"regular"
								],
								[
									129.54,
									-207.01,
									"regular"
								],
								[
									129.54,
									-190.119,
									"regular"
								],
								[
									15.4305,
									-190.119,
									"filletStartEnd"
								],
								[
									5.0165,
									-179.705,
									"filletStartEnd"
								],
								[
									5.0165,
									179.705,
									"filletStartEnd"
								],
								[
									15.4305,
									190.119,
									"filletStartEnd"
								],
								[
									129.54,
									190.119,
									"regular"
								],
								[
									129.54,
									207.01,
									"regular"
								],
								[
									-129.54,
									207.01,
									"regular"
								],
								[
									-129.54,
									190.119,
									"regular"
								],
								[
									-15.4305,
									190.119,
									"filletStartEnd"
								],
								[
									-5.0165,
									179.705,
									"filletStartEnd"
								],
								[
									-5.0165,
									-179.705,
									"filletStartEnd"
								],
								[
									-15.4305,
									-190.119,
									"filletStartEnd"
								],
								[
									-129.54,
									-190.119,
									"regular"
								]
							]
						}
					],
					"warping_constant": 1960311825740,
					"shear_area_z": 3939.35342241,
					"shear_area_y": 7517.44517232,
					"torsion_radius": 22.6743
				},
				"J": 994793.150848
			},
			"2": {
				"version": 2,
				"name": "W14x90",
				"area": 17096.74,
				"Iz": 415815194.174,
				"Iy": 150675776.067,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 1280699.89578,
					"Qy": 617544.17544,
					"centroid_point": [
						184.15,
						177.8
					],
					"centroid_length": [
						184.15,
						177.8
					],
					"depth": 355.6,
					"width": 368.3,
					"alpha": 0,
					"polygons": [
						{
							"name": "W14x90",
							"group_id": 0,
							"points_calc": [
								[
									0,
									0,
									"regular"
								],
								[
									368.3,
									0,
									"regular"
								],
								[
									368.3,
									18.034,
									"regular"
								],
								[
									204.978,
									18.034,
									"filletStartEnd"
								],
								[
									199.145904491,
									19.1940759245,
									"dontShow"
								],
								[
									194.201692655,
									22.4976926547,
									"dontShow"
								],
								[
									190.898075925,
									27.4419044908,
									"dontShow"
								],
								[
									189.738,
									33.274,
									"filletStartEnd"
								],
								[
									189.738,
									322.326,
									"filletStartEnd"
								],
								[
									190.898075925,
									328.158095509,
									"dontShow"
								],
								[
									194.201692655,
									333.102307345,
									"dontShow"
								],
								[
									199.145904491,
									336.405924075,
									"dontShow"
								],
								[
									204.978,
									337.566,
									"filletStartEnd"
								],
								[
									368.3,
									337.566,
									"regular"
								],
								[
									368.3,
									355.6,
									"regular"
								],
								[
									0,
									355.6,
									"regular"
								],
								[
									0,
									337.566,
									"regular"
								],
								[
									163.322,
									337.566,
									"filletStartEnd"
								],
								[
									169.154095509,
									336.405924075,
									"dontShow"
								],
								[
									174.098307345,
									333.102307345,
									"dontShow"
								],
								[
									177.401924075,
									328.158095509,
									"dontShow"
								],
								[
									178.562,
									322.326,
									"filletStartEnd"
								],
								[
									178.562,
									33.274,
									"filletStartEnd"
								],
								[
									177.401924075,
									27.4419044908,
									"dontShow"
								],
								[
									174.098307345,
									22.4976926547,
									"dontShow"
								],
								[
									169.154095509,
									19.1940759245,
									"dontShow"
								],
								[
									163.322,
									18.034,
									"filletStartEnd"
								],
								[
									0,
									18.034,
									"regular"
								]
							],
							"points_custom_orig": [],
							"shape": "ibeam",
							"dimensions_show": true,
							"dimensions": {
								"TFw": {
									"value": 368.3,
									"locat": [
										[
											0,
											392.43
										],
										[
											368.3,
											392.43
										],
										{
											"placeholder": "Top Width",
											"dimension_id": "TFw",
											"dimension": 368.3
										}
									]
								},
								"TFt": {
									"value": 18.034,
									"locat": [
										[
											-36.83,
											355.6
										],
										[
											-36.83,
											337.566
										],
										{
											"placeholder": "Top Thickness",
											"dimension_id": "TFt",
											"dimension": 18.034
										}
									]
								},
								"BFw": {
									"value": 368.3,
									"locat": [
										[
											0,
											-73.66
										],
										[
											368.3,
											-73.66
										],
										{
											"placeholder": "Bottom Width",
											"dimension_id": "BFw",
											"dimension": 368.3
										}
									]
								},
								"BFt": {
									"value": 18.034,
									"locat": [
										[
											-36.83,
											18.034
										],
										[
											-36.83,
											0
										],
										{
											"placeholder": "Bottom Thickness",
											"dimension_id": "BFt",
											"dimension": 18.034
										}
									]
								},
								"h": {
									"value": 355.6,
									"locat": [
										[
											405.13,
											0
										],
										[
											405.13,
											355.6
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 355.6
										}
									]
								},
								"Wt": {
									"value": 11.176,
									"locat": [
										[
											178.562,
											-36.83
										],
										[
											189.738,
											-36.83
										],
										{
											"placeholder": "Web Thickness",
											"dimension_id": "Wt",
											"dimension": 11.176
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 15.24
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 17096.74,
								"J": 1689899.56412,
								"Iyp": 150675776.067,
								"Izp": 415815194.174,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 4296573864640,
								"Syp": 1238862.0134,
								"Szp": 101290.12
							},
							"points_centroid_shifted": [
								[
									-184.15,
									-177.8,
									"regular"
								],
								[
									184.15,
									-177.8,
									"regular"
								],
								[
									184.15,
									-159.766,
									"regular"
								],
								[
									20.828,
									-159.766,
									"filletStartEnd"
								],
								[
									5.588,
									-144.526,
									"filletStartEnd"
								],
								[
									5.588,
									144.526,
									"filletStartEnd"
								],
								[
									20.828,
									159.766,
									"filletStartEnd"
								],
								[
									184.15,
									159.766,
									"regular"
								],
								[
									184.15,
									177.8,
									"regular"
								],
								[
									-184.15,
									177.8,
									"regular"
								],
								[
									-184.15,
									159.766,
									"regular"
								],
								[
									-20.828,
									159.766,
									"filletStartEnd"
								],
								[
									-5.588,
									144.526,
									"filletStartEnd"
								],
								[
									-5.588,
									-144.526,
									"filletStartEnd"
								],
								[
									-20.828,
									-159.766,
									"filletStartEnd"
								],
								[
									-184.15,
									-159.766,
									"regular"
								]
							]
						}
					],
					"warping_constant": 4296573864640,
					"shear_area_z": 3677.89523118,
					"shear_area_y": 11441.8888308,
					"torsion_radius": 25.4245
				},
				"J": 1689899.56412
			},
			"3": {
				"version": 2,
				"name": "W18x65",
				"area": 12322.5562461,
				"Iz": 445367625.392,
				"Iy": 22809481.8053,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 1096773.85723,
					"Qy": 184408.04571,
					"centroid_point": [
						96.393,
						233.68
					],
					"centroid_length": [
						96.393,
						233.68
					],
					"depth": 467.36,
					"width": 192.786,
					"alpha": 0,
					"polygons": [
						{
							"name": "W18x65",
							"group_id": 0,
							"points_calc": [
								[
									0,
									0,
									"regular"
								],
								[
									192.786,
									0,
									"regular"
								],
								[
									192.786,
									19.05,
									"regular"
								],
								[
									112.268,
									19.05,
									"filletStartEnd"
								],
								[
									108.379936327,
									19.8233839497,
									"dontShow"
								],
								[
									105.083795103,
									22.0257951031,
									"dontShow"
								],
								[
									102.88138395,
									25.3219363272,
									"dontShow"
								],
								[
									102.108,
									29.21,
									"filletStartEnd"
								],
								[
									102.108,
									438.15,
									"filletStartEnd"
								],
								[
									102.88138395,
									442.038063673,
									"dontShow"
								],
								[
									105.083795103,
									445.334204897,
									"dontShow"
								],
								[
									108.379936327,
									447.53661605,
									"dontShow"
								],
								[
									112.268,
									448.31,
									"filletStartEnd"
								],
								[
									192.786,
									448.31,
									"regular"
								],
								[
									192.786,
									467.36,
									"regular"
								],
								[
									0,
									467.36,
									"regular"
								],
								[
									0,
									448.31,
									"regular"
								],
								[
									80.518,
									448.31,
									"filletStartEnd"
								],
								[
									84.4060636728,
									447.53661605,
									"dontShow"
								],
								[
									87.7022048969,
									445.334204897,
									"dontShow"
								],
								[
									89.9046160503,
									442.038063673,
									"dontShow"
								],
								[
									90.678,
									438.15,
									"filletStartEnd"
								],
								[
									90.678,
									29.21,
									"filletStartEnd"
								],
								[
									89.9046160503,
									25.3219363272,
									"dontShow"
								],
								[
									87.7022048969,
									22.0257951031,
									"dontShow"
								],
								[
									84.4060636728,
									19.8233839497,
									"dontShow"
								],
								[
									80.518,
									19.05,
									"filletStartEnd"
								],
								[
									0,
									19.05,
									"regular"
								]
							],
							"points_custom_orig": [],
							"shape": "ibeam",
							"dimensions_show": true,
							"dimensions": {
								"TFw": {
									"value": 192.786,
									"locat": [
										[
											0,
											514.096
										],
										[
											192.786,
											514.096
										],
										{
											"placeholder": "Top Width",
											"dimension_id": "TFw",
											"dimension": 192.786
										}
									]
								},
								"TFt": {
									"value": 19.05,
									"locat": [
										[
											-46.736,
											467.36
										],
										[
											-46.736,
											448.31
										],
										{
											"placeholder": "Top Thickness",
											"dimension_id": "TFt",
											"dimension": 19.05
										}
									]
								},
								"BFw": {
									"value": 192.786,
									"locat": [
										[
											0,
											-93.472
										],
										[
											192.786,
											-93.472
										],
										{
											"placeholder": "Bottom Width",
											"dimension_id": "BFw",
											"dimension": 192.786
										}
									]
								},
								"BFt": {
									"value": 19.05,
									"locat": [
										[
											-46.736,
											19.05
										],
										[
											-46.736,
											0
										],
										{
											"placeholder": "Bottom Thickness",
											"dimension_id": "BFt",
											"dimension": 19.05
										}
									]
								},
								"h": {
									"value": 467.36,
									"locat": [
										[
											239.522,
											0
										],
										[
											239.522,
											467.36
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 467.36
										}
									]
								},
								"Wt": {
									"value": 11.43,
									"locat": [
										[
											90.678,
											-46.736
										],
										[
											102.108,
											-46.736
										],
										{
											"placeholder": "Web Thickness",
											"dimension_id": "Wt",
											"dimension": 11.43
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 10.16
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 12322.5562461,
								"J": 1136311.79983,
								"Iyp": 22809481.8053,
								"Izp": 445367625.392,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 1138592074130,
								"Syp": 368708.94,
								"Szp": 85806.28
							},
							"points_centroid_shifted": [
								[
									-96.393,
									-233.68,
									"regular"
								],
								[
									96.393,
									-233.68,
									"regular"
								],
								[
									96.393,
									-214.63,
									"regular"
								],
								[
									15.875,
									-214.63,
									"filletStartEnd"
								],
								[
									5.715,
									-204.47,
									"filletStartEnd"
								],
								[
									5.715,
									204.47,
									"filletStartEnd"
								],
								[
									15.875,
									214.63,
									"filletStartEnd"
								],
								[
									96.393,
									214.63,
									"regular"
								],
								[
									96.393,
									233.68,
									"regular"
								],
								[
									-96.393,
									233.68,
									"regular"
								],
								[
									-96.393,
									214.63,
									"regular"
								],
								[
									-15.875,
									214.63,
									"filletStartEnd"
								],
								[
									-5.715,
									204.47,
									"filletStartEnd"
								],
								[
									-5.715,
									-204.47,
									"filletStartEnd"
								],
								[
									-15.875,
									-214.63,
									"filletStartEnd"
								],
								[
									-96.393,
									-214.63,
									"regular"
								]
							]
						}
					],
					"warping_constant": 1138592074130,
					"shear_area_z": 5111.04948594,
					"shear_area_y": 6386.34036347,
					"torsion_radius": 25.539
				},
				"J": 1136311.79983
			},
			"4": {
				"version": 2,
				"name": "W4x13",
				"area": 2470.96275078,
				"Iz": 4703415.18867,
				"Iy": 1606653.25915,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 51495.12483,
					"Qy": 23950.51456,
					"centroid_point": [
						51.562,
						52.832
					],
					"centroid_length": [
						51.562,
						52.832
					],
					"depth": 105.664,
					"width": 103.124,
					"alpha": 0,
					"polygons": [
						{
							"name": "W4x13",
							"group_id": 0,
							"points_calc": [
								[
									0,
									0,
									"regular"
								],
								[
									103.124,
									0,
									"regular"
								],
								[
									103.124,
									8.763,
									"regular"
								],
								[
									61.468,
									8.763,
									"filletStartEnd"
								],
								[
									59.0379602045,
									9.24636496855,
									"dontShow"
								],
								[
									56.9778719395,
									10.6228719395,
									"dontShow"
								],
								[
									55.6013649686,
									12.6829602045,
									"dontShow"
								],
								[
									55.118,
									15.113,
									"filletStartEnd"
								],
								[
									55.118,
									90.551,
									"filletStartEnd"
								],
								[
									55.6013649686,
									92.9810397955,
									"dontShow"
								],
								[
									56.9778719395,
									95.0411280605,
									"dontShow"
								],
								[
									59.0379602045,
									96.4176350314,
									"dontShow"
								],
								[
									61.468,
									96.901,
									"filletStartEnd"
								],
								[
									103.124,
									96.901,
									"regular"
								],
								[
									103.124,
									105.664,
									"regular"
								],
								[
									0,
									105.664,
									"regular"
								],
								[
									0,
									96.901,
									"regular"
								],
								[
									41.656,
									96.901,
									"filletStartEnd"
								],
								[
									44.0860397955,
									96.4176350314,
									"dontShow"
								],
								[
									46.1461280605,
									95.0411280605,
									"dontShow"
								],
								[
									47.5226350314,
									92.9810397955,
									"dontShow"
								],
								[
									48.006,
									90.551,
									"filletStartEnd"
								],
								[
									48.006,
									15.113,
									"filletStartEnd"
								],
								[
									47.5226350314,
									12.6829602045,
									"dontShow"
								],
								[
									46.1461280605,
									10.6228719395,
									"dontShow"
								],
								[
									44.0860397955,
									9.24636496855,
									"dontShow"
								],
								[
									41.656,
									8.763,
									"filletStartEnd"
								],
								[
									0,
									8.763,
									"regular"
								]
							],
							"points_custom_orig": [],
							"shape": "ibeam",
							"dimensions_show": true,
							"dimensions": {
								"TFw": {
									"value": 103.124,
									"locat": [
										[
											0,
											116.2304
										],
										[
											103.124,
											116.2304
										],
										{
											"placeholder": "Top Width",
											"dimension_id": "TFw",
											"dimension": 103.124
										}
									]
								},
								"TFt": {
									"value": 8.763,
									"locat": [
										[
											-10.5664,
											105.664
										],
										[
											-10.5664,
											96.901
										],
										{
											"placeholder": "Top Thickness",
											"dimension_id": "TFt",
											"dimension": 8.763
										}
									]
								},
								"BFw": {
									"value": 103.124,
									"locat": [
										[
											0,
											-21.1328
										],
										[
											103.124,
											-21.1328
										],
										{
											"placeholder": "Bottom Width",
											"dimension_id": "BFw",
											"dimension": 103.124
										}
									]
								},
								"BFt": {
									"value": 8.763,
									"locat": [
										[
											-10.5664,
											8.763
										],
										[
											-10.5664,
											0
										],
										{
											"placeholder": "Bottom Thickness",
											"dimension_id": "BFt",
											"dimension": 8.763
										}
									]
								},
								"h": {
									"value": 105.664,
									"locat": [
										[
											113.6904,
											0
										],
										[
											113.6904,
											105.664
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 105.664
										}
									]
								},
								"Wt": {
									"value": 7.112,
									"locat": [
										[
											48.006,
											-10.5664
										],
										[
											55.118,
											-10.5664
										],
										{
											"placeholder": "Web Thickness",
											"dimension_id": "Wt",
											"dimension": 7.112
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 6.35
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 2470.96275078,
								"J": 62850.9423877,
								"Iyp": 1606653.25915,
								"Izp": 4703415.18867,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 3759502131.56,
								"Syp": 47850.2281302,
								"Szp": 4051.60493536
							},
							"points_centroid_shifted": [
								[
									-51.562,
									-52.832,
									"regular"
								],
								[
									51.562,
									-52.832,
									"regular"
								],
								[
									51.562,
									-44.069,
									"regular"
								],
								[
									9.906,
									-44.069,
									"filletStartEnd"
								],
								[
									3.556,
									-37.719,
									"filletStartEnd"
								],
								[
									3.556,
									37.719,
									"filletStartEnd"
								],
								[
									9.906,
									44.069,
									"filletStartEnd"
								],
								[
									51.562,
									44.069,
									"regular"
								],
								[
									51.562,
									52.832,
									"regular"
								],
								[
									-51.562,
									52.832,
									"regular"
								],
								[
									-51.562,
									44.069,
									"regular"
								],
								[
									-9.906,
									44.069,
									"filletStartEnd"
								],
								[
									-3.556,
									37.719,
									"filletStartEnd"
								],
								[
									-3.556,
									-37.719,
									"filletStartEnd"
								],
								[
									-9.906,
									-44.069,
									"filletStartEnd"
								],
								[
									-51.562,
									-44.069,
									"regular"
								]
							]
						}
					],
					"warping_constant": 3759502131.56,
					"shear_area_z": 680.345893342,
					"shear_area_y": 1601.36684589,
					"torsion_radius": 12.9059
				},
				"J": 62850.9423877
			},
			"5": {
				"version": 2,
				"name": "HSS6x6x5/16",
				"area": 4148.3788,
				"Iz": 14276737.8981,
				"Iy": 14276737.8981,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 110925.1792,
					"Qy": 110925.1792,
					"centroid_point": [
						76.2,
						76.2
					],
					"centroid_length": [
						76.2,
						76.2
					],
					"depth": 152.4,
					"width": 152.4,
					"alpha": 0,
					"polygons": [
						{
							"name": "HSS6x6x5/16",
							"group_id": 0,
							"points_calc": [
								[
									0,
									14.782,
									"filletStartEnd"
								],
								[
									1.12521275042,
									9.12517350278,
									"dontShow"
								],
								[
									4.3295475605,
									4.3295475605,
									"dontShow"
								],
								[
									9.12517350278,
									1.12521275042,
									"dontShow"
								],
								[
									14.782,
									1.7763568394e-15,
									"filletStartEnd"
								],
								[
									137.618,
									0,
									"filletStartEnd"
								],
								[
									143.274826497,
									1.12521275042,
									"dontShow"
								],
								[
									148.07045244,
									4.3295475605,
									"dontShow"
								],
								[
									151.27478725,
									9.12517350278,
									"dontShow"
								],
								[
									152.4,
									14.782,
									"filletStartEnd"
								],
								[
									152.4,
									137.618,
									"filletStartEnd"
								],
								[
									151.27478725,
									143.274826497,
									"dontShow"
								],
								[
									148.07045244,
									148.07045244,
									"dontShow"
								],
								[
									143.274826497,
									151.27478725,
									"dontShow"
								],
								[
									137.618,
									152.4,
									"filletStartEnd"
								],
								[
									14.782,
									152.4,
									"filletStartEnd"
								],
								[
									9.12517350278,
									151.27478725,
									"dontShow"
								],
								[
									4.3295475605,
									148.07045244,
									"dontShow"
								],
								[
									1.12521275042,
									143.274826497,
									"dontShow"
								],
								[
									-3.5527136788e-15,
									137.618,
									"filletStartEnd"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow rectangle",
							"dimensions_show": true,
							"dimensions": {
								"h": {
									"value": 152.4,
									"locat": [
										[
											167.64,
											0
										],
										[
											167.64,
											152.4
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 152.4
										}
									]
								},
								"b": {
									"value": 152.4,
									"locat": [
										[
											0,
											-15.24
										],
										[
											152.4,
											-15.24
										],
										{
											"placeholder": "Width",
											"dimension_id": "b",
											"dimension": 152.4
										}
									]
								},
								"t": {
									"value": 7.391,
									"locat": [
										[
											76.2,
											152.4
										],
										[
											76.2,
											145.009
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 7.391
										}
									]
								},
								"tb": {
									"value": 7.391,
									"locat": [
										[
											0,
											76.2
										],
										[
											7.391,
											76.2
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "tb",
											"dimension": 7.391
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 7.391
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 4148.3788,
								"J": 23059220.9782,
								"Iyp": 14276737.8981,
								"Izp": 14276737.8981,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 0,
								"Syp": 222864.0704,
								"Szp": 8774.176
							},
							"points_centroid_shifted": [
								[
									-76.2,
									-61.418,
									"filletStartEnd"
								],
								[
									-61.418,
									-76.2,
									"filletStartEnd"
								],
								[
									61.418,
									-76.2,
									"filletStartEnd"
								],
								[
									76.2,
									-61.418,
									"filletStartEnd"
								],
								[
									76.2,
									61.418,
									"filletStartEnd"
								],
								[
									61.418,
									76.2,
									"filletStartEnd"
								],
								[
									-61.418,
									76.2,
									"filletStartEnd"
								],
								[
									-76.2,
									61.418,
									"filletStartEnd"
								]
							]
						},
						{
							"name": "HSS6x6x5/16",
							"group_id": 0,
							"points_calc": [
								[
									7.391,
									14.782,
									"filletStartEnd"
								],
								[
									7.95360637521,
									11.9535867514,
									"dontShow"
								],
								[
									9.55577378025,
									9.55577378025,
									"dontShow"
								],
								[
									11.9535867514,
									7.95360637521,
									"dontShow"
								],
								[
									14.782,
									7.391,
									"filletStartEnd"
								],
								[
									137.618,
									7.391,
									"filletStartEnd"
								],
								[
									140.446413249,
									7.95360637521,
									"dontShow"
								],
								[
									142.84422622,
									9.55577378025,
									"dontShow"
								],
								[
									144.446393625,
									11.9535867514,
									"dontShow"
								],
								[
									145.009,
									14.782,
									"filletStartEnd"
								],
								[
									145.009,
									137.618,
									"filletStartEnd"
								],
								[
									144.446393625,
									140.446413249,
									"dontShow"
								],
								[
									142.84422622,
									142.84422622,
									"dontShow"
								],
								[
									140.446413249,
									144.446393625,
									"dontShow"
								],
								[
									137.618,
									145.009,
									"filletStartEnd"
								],
								[
									14.782,
									145.009,
									"filletStartEnd"
								],
								[
									11.9535867514,
									144.446393625,
									"dontShow"
								],
								[
									9.55577378025,
									142.84422622,
									"dontShow"
								],
								[
									7.95360637521,
									140.446413249,
									"dontShow"
								],
								[
									7.391,
									137.618,
									"filletStartEnd"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow rectangle",
							"dimensions_show": true,
							"dimensions": {
								"h": {
									"value": 152.4,
									"locat": [
										[
											167.64,
											0
										],
										[
											167.64,
											152.4
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 152.4
										}
									]
								},
								"b": {
									"value": 152.4,
									"locat": [
										[
											0,
											-15.24
										],
										[
											152.4,
											-15.24
										],
										{
											"placeholder": "Width",
											"dimension_id": "b",
											"dimension": 152.4
										}
									]
								},
								"t": {
									"value": 7.391,
									"locat": [
										[
											76.2,
											152.4
										],
										[
											76.2,
											145.009
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 7.391
										}
									]
								},
								"tb": {
									"value": 7.391,
									"locat": [
										[
											0,
											76.2
										],
										[
											7.391,
											76.2
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "tb",
											"dimension": 7.391
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 7.391
							},
							"cutout": true,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 4148.3788,
								"J": 23059220.9782,
								"Iyp": 14276737.8981,
								"Izp": 14276737.8981,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 0,
								"Syp": 222864.0704,
								"Szp": 8774.176
							},
							"cutout_parents": [
								0
							],
							"points_centroid_shifted": [
								[
									-68.809,
									-61.418,
									"filletStartEnd"
								],
								[
									-61.418,
									-68.809,
									"filletStartEnd"
								],
								[
									61.418,
									-68.809,
									"filletStartEnd"
								],
								[
									68.809,
									-61.418,
									"filletStartEnd"
								],
								[
									68.809,
									61.418,
									"filletStartEnd"
								],
								[
									61.418,
									68.809,
									"filletStartEnd"
								],
								[
									-61.418,
									68.809,
									"filletStartEnd"
								],
								[
									-68.809,
									61.418,
									"filletStartEnd"
								]
							]
						}
					],
					"warping_constant": 18352000000,
					"shear_area_z": 1815.03763361,
					"shear_area_y": 1815.03763361,
					"torsion_radius": 82.1336
				},
				"J": 23059220.9782
			},
			"6": {
				"version": 2,
				"name": "HSS3x3x1/4",
				"area": 1574.1904,
				"Iz": 1257018.90531,
				"Iy": 1257018.90531,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 20160.6756,
					"Qy": 20160.6756,
					"centroid_point": [
						38.1,
						38.1
					],
					"centroid_length": [
						38.1,
						38.1
					],
					"depth": 76.2,
					"width": 76.2,
					"alpha": 0,
					"polygons": [
						{
							"name": "HSS3x3x1/4",
							"group_id": 0,
							"points_calc": [
								[
									0,
									11.836,
									"filletStartEnd"
								],
								[
									0.900961853196,
									7.30655889453,
									"dontShow"
								],
								[
									3.46668413788,
									3.46668413788,
									"dontShow"
								],
								[
									7.30655889453,
									0.900961853196,
									"dontShow"
								],
								[
									11.836,
									1.7763568394e-15,
									"filletStartEnd"
								],
								[
									64.364,
									0,
									"filletStartEnd"
								],
								[
									68.8934411055,
									0.900961853196,
									"dontShow"
								],
								[
									72.7333158621,
									3.46668413788,
									"dontShow"
								],
								[
									75.2990381468,
									7.30655889453,
									"dontShow"
								],
								[
									76.2,
									11.836,
									"filletStartEnd"
								],
								[
									76.2,
									64.364,
									"filletStartEnd"
								],
								[
									75.2990381468,
									68.8934411055,
									"dontShow"
								],
								[
									72.7333158621,
									72.7333158621,
									"dontShow"
								],
								[
									68.8934411055,
									75.2990381468,
									"dontShow"
								],
								[
									64.364,
									76.2,
									"filletStartEnd"
								],
								[
									11.836,
									76.2,
									"filletStartEnd"
								],
								[
									7.30655889453,
									75.2990381468,
									"dontShow"
								],
								[
									3.46668413788,
									72.7333158621,
									"dontShow"
								],
								[
									0.900961853196,
									68.8934411055,
									"dontShow"
								],
								[
									-1.7763568394e-15,
									64.364,
									"filletStartEnd"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow rectangle",
							"dimensions_show": true,
							"dimensions": {
								"h": {
									"value": 76.2,
									"locat": [
										[
											83.82,
											0
										],
										[
											83.82,
											76.2
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 76.2
										}
									]
								},
								"b": {
									"value": 76.2,
									"locat": [
										[
											0,
											-7.62
										],
										[
											76.2,
											-7.62
										],
										{
											"placeholder": "Width",
											"dimension_id": "b",
											"dimension": 76.2
										}
									]
								},
								"t": {
									"value": 5.918,
									"locat": [
										[
											38.1,
											76.2
										],
										[
											38.1,
											70.282
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 5.918
										}
									]
								},
								"tb": {
									"value": 5.918,
									"locat": [
										[
											0,
											38.1
										],
										[
											5.918,
											38.1
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "tb",
											"dimension": 5.918
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 5.918
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 1574.1904,
								"J": 2114455.64205,
								"Iyp": 1257018.90531,
								"Izp": 1257018.90531,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 0,
								"Syp": 40639.91872,
								"Szp": 1599.9968
							},
							"points_centroid_shifted": [
								[
									-38.1,
									-26.264,
									"filletStartEnd"
								],
								[
									-26.264,
									-38.1,
									"filletStartEnd"
								],
								[
									26.264,
									-38.1,
									"filletStartEnd"
								],
								[
									38.1,
									-26.264,
									"filletStartEnd"
								],
								[
									38.1,
									26.264,
									"filletStartEnd"
								],
								[
									26.264,
									38.1,
									"filletStartEnd"
								],
								[
									-26.264,
									38.1,
									"filletStartEnd"
								],
								[
									-38.1,
									26.264,
									"filletStartEnd"
								]
							]
						},
						{
							"name": "HSS3x3x1/4",
							"group_id": 0,
							"points_calc": [
								[
									5.918,
									11.836,
									"filletStartEnd"
								],
								[
									6.3684809266,
									9.57127944726,
									"dontShow"
								],
								[
									7.65134206894,
									7.65134206894,
									"dontShow"
								],
								[
									9.57127944726,
									6.3684809266,
									"dontShow"
								],
								[
									11.836,
									5.918,
									"filletStartEnd"
								],
								[
									64.364,
									5.918,
									"filletStartEnd"
								],
								[
									66.6287205527,
									6.3684809266,
									"dontShow"
								],
								[
									68.5486579311,
									7.65134206894,
									"dontShow"
								],
								[
									69.8315190734,
									9.57127944726,
									"dontShow"
								],
								[
									70.282,
									11.836,
									"filletStartEnd"
								],
								[
									70.282,
									64.364,
									"filletStartEnd"
								],
								[
									69.8315190734,
									66.6287205527,
									"dontShow"
								],
								[
									68.5486579311,
									68.5486579311,
									"dontShow"
								],
								[
									66.6287205527,
									69.8315190734,
									"dontShow"
								],
								[
									64.364,
									70.282,
									"filletStartEnd"
								],
								[
									11.836,
									70.282,
									"filletStartEnd"
								],
								[
									9.57127944726,
									69.8315190734,
									"dontShow"
								],
								[
									7.65134206894,
									68.5486579311,
									"dontShow"
								],
								[
									6.3684809266,
									66.6287205527,
									"dontShow"
								],
								[
									5.918,
									64.364,
									"filletStartEnd"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow rectangle",
							"dimensions_show": true,
							"dimensions": {
								"h": {
									"value": 76.2,
									"locat": [
										[
											83.82,
											0
										],
										[
											83.82,
											76.2
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 76.2
										}
									]
								},
								"b": {
									"value": 76.2,
									"locat": [
										[
											0,
											-7.62
										],
										[
											76.2,
											-7.62
										],
										{
											"placeholder": "Width",
											"dimension_id": "b",
											"dimension": 76.2
										}
									]
								},
								"t": {
									"value": 5.918,
									"locat": [
										[
											38.1,
											76.2
										],
										[
											38.1,
											70.282
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 5.918
										}
									]
								},
								"tb": {
									"value": 5.918,
									"locat": [
										[
											0,
											38.1
										],
										[
											5.918,
											38.1
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "tb",
											"dimension": 5.918
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 5.918
							},
							"cutout": true,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 1574.1904,
								"J": 2114455.64205,
								"Iyp": 1257018.90531,
								"Izp": 1257018.90531,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 0,
								"Syp": 40639.91872,
								"Szp": 1599.9968
							},
							"cutout_parents": [
								0
							],
							"points_centroid_shifted": [
								[
									-32.182,
									-26.264,
									"filletStartEnd"
								],
								[
									-26.264,
									-32.182,
									"filletStartEnd"
								],
								[
									26.264,
									-32.182,
									"filletStartEnd"
								],
								[
									32.182,
									-26.264,
									"filletStartEnd"
								],
								[
									32.182,
									26.264,
									"filletStartEnd"
								],
								[
									26.264,
									32.182,
									"filletStartEnd"
								],
								[
									-26.264,
									32.182,
									"filletStartEnd"
								],
								[
									-32.182,
									26.264,
									"filletStartEnd"
								]
							]
						}
					],
					"warping_constant": 116531000,
					"shear_area_z": 711.3748341,
					"shear_area_y": 711.3748341,
					"torsion_radius": 42.6557
				},
				"J": 2114455.64205
			},
			"7": {
				"version": 2,
				"name": "HSS8x8x3/16",
				"area": 3464.5092,
				"Iz": 22642989.5526,
				"Iy": 22642989.5526,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 128240.77117,
					"Qy": 128240.77117,
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
					"polygons": [
						{
							"name": "HSS8x8x3/16",
							"group_id": 0,
							"points_calc": [
								[
									0,
									8.84,
									"filletStartEnd"
								],
								[
									0.6729049326,
									5.45707845789,
									"dontShow"
								],
								[
									2.58917605431,
									2.58917605431,
									"dontShow"
								],
								[
									5.45707845789,
									0.6729049326,
									"dontShow"
								],
								[
									8.84,
									1.7763568394e-15,
									"filletStartEnd"
								],
								[
									194.36,
									0,
									"filletStartEnd"
								],
								[
									197.742921542,
									0.6729049326,
									"dontShow"
								],
								[
									200.610823946,
									2.58917605431,
									"dontShow"
								],
								[
									202.527095067,
									5.45707845789,
									"dontShow"
								],
								[
									203.2,
									8.84,
									"filletStartEnd"
								],
								[
									203.2,
									194.36,
									"filletStartEnd"
								],
								[
									202.527095067,
									197.742921542,
									"dontShow"
								],
								[
									200.610823946,
									200.610823946,
									"dontShow"
								],
								[
									197.742921542,
									202.527095067,
									"dontShow"
								],
								[
									194.36,
									203.2,
									"filletStartEnd"
								],
								[
									8.84,
									203.2,
									"filletStartEnd"
								],
								[
									5.45707845789,
									202.527095067,
									"dontShow"
								],
								[
									2.58917605431,
									200.610823946,
									"dontShow"
								],
								[
									0.6729049326,
									197.742921542,
									"dontShow"
								],
								[
									-1.7763568394e-15,
									194.36,
									"filletStartEnd"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow rectangle",
							"dimensions_show": true,
							"dimensions": {
								"h": {
									"value": 203.2,
									"locat": [
										[
											223.52,
											0
										],
										[
											223.52,
											203.2
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 203.2
										}
									]
								},
								"b": {
									"value": 203.2,
									"locat": [
										[
											0,
											-20.32
										],
										[
											203.2,
											-20.32
										],
										{
											"placeholder": "Width",
											"dimension_id": "b",
											"dimension": 203.2
										}
									]
								},
								"t": {
									"value": 4.42,
									"locat": [
										[
											101.6,
											203.2
										],
										[
											101.6,
											198.78
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 4.42
										}
									]
								},
								"tb": {
									"value": 4.42,
									"locat": [
										[
											0,
											101.6
										],
										[
											4.42,
											101.6
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "tb",
											"dimension": 4.42
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 4.42
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 3464.5092,
								"J": 35171555.4632,
								"Iyp": 22642989.5526,
								"Izp": 22642989.5526,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 0,
								"Syp": 257276.9048,
								"Szp": 10129.012
							},
							"points_centroid_shifted": [
								[
									-101.6,
									-92.76,
									"filletStartEnd"
								],
								[
									-92.76,
									-101.6,
									"filletStartEnd"
								],
								[
									92.76,
									-101.6,
									"filletStartEnd"
								],
								[
									101.6,
									-92.76,
									"filletStartEnd"
								],
								[
									101.6,
									92.76,
									"filletStartEnd"
								],
								[
									92.76,
									101.6,
									"filletStartEnd"
								],
								[
									-92.76,
									101.6,
									"filletStartEnd"
								],
								[
									-101.6,
									92.76,
									"filletStartEnd"
								]
							]
						},
						{
							"name": "HSS8x8x3/16",
							"group_id": 0,
							"points_calc": [
								[
									4.42,
									8.84,
									"filletStartEnd"
								],
								[
									4.7564524663,
									7.14853922895,
									"dontShow"
								],
								[
									5.71458802716,
									5.71458802716,
									"dontShow"
								],
								[
									7.14853922895,
									4.7564524663,
									"dontShow"
								],
								[
									8.84,
									4.42,
									"filletStartEnd"
								],
								[
									194.36,
									4.42,
									"filletStartEnd"
								],
								[
									196.051460771,
									4.7564524663,
									"dontShow"
								],
								[
									197.485411973,
									5.71458802716,
									"dontShow"
								],
								[
									198.443547534,
									7.14853922895,
									"dontShow"
								],
								[
									198.78,
									8.84,
									"filletStartEnd"
								],
								[
									198.78,
									194.36,
									"filletStartEnd"
								],
								[
									198.443547534,
									196.051460771,
									"dontShow"
								],
								[
									197.485411973,
									197.485411973,
									"dontShow"
								],
								[
									196.051460771,
									198.443547534,
									"dontShow"
								],
								[
									194.36,
									198.78,
									"filletStartEnd"
								],
								[
									8.84,
									198.78,
									"filletStartEnd"
								],
								[
									7.14853922895,
									198.443547534,
									"dontShow"
								],
								[
									5.71458802716,
									197.485411973,
									"dontShow"
								],
								[
									4.7564524663,
									196.051460771,
									"dontShow"
								],
								[
									4.42,
									194.36,
									"filletStartEnd"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow rectangle",
							"dimensions_show": true,
							"dimensions": {
								"h": {
									"value": 203.2,
									"locat": [
										[
											223.52,
											0
										],
										[
											223.52,
											203.2
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 203.2
										}
									]
								},
								"b": {
									"value": 203.2,
									"locat": [
										[
											0,
											-20.32
										],
										[
											203.2,
											-20.32
										],
										{
											"placeholder": "Width",
											"dimension_id": "b",
											"dimension": 203.2
										}
									]
								},
								"t": {
									"value": 4.42,
									"locat": [
										[
											101.6,
											203.2
										],
										[
											101.6,
											198.78
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 4.42
										}
									]
								},
								"tb": {
									"value": 4.42,
									"locat": [
										[
											0,
											101.6
										],
										[
											4.42,
											101.6
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "tb",
											"dimension": 4.42
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 4.42
							},
							"cutout": true,
							"material": {
								"name": "Structural Steel",
								"density": 7850,
								"elasticity_modulus": 200000,
								"poissons_ratio": 0.27,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"id": 1
							},
							"type": "library",
							"results": {
								"A": 3464.5092,
								"J": 35171555.4632,
								"Iyp": 22642989.5526,
								"Izp": 22642989.5526,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"Iw": 0,
								"Syp": 257276.9048,
								"Szp": 10129.012
							},
							"cutout_parents": [
								0
							],
							"points_centroid_shifted": [
								[
									-97.18,
									-92.76,
									"filletStartEnd"
								],
								[
									-92.76,
									-97.18,
									"filletStartEnd"
								],
								[
									92.76,
									-97.18,
									"filletStartEnd"
								],
								[
									97.18,
									-92.76,
									"filletStartEnd"
								],
								[
									97.18,
									92.76,
									"filletStartEnd"
								],
								[
									92.76,
									97.18,
									"filletStartEnd"
								],
								[
									-92.76,
									97.18,
									"filletStartEnd"
								],
								[
									-97.18,
									92.76,
									"filletStartEnd"
								]
							]
						}
					],
					"warping_constant": 327358000000,
					"shear_area_z": 1474.7418769,
					"shear_area_y": 1474.7418769,
					"torsion_radius": 114.32
				},
				"J": 35171555.4632
			},
			"8": {
				"version": 2,
				"name": "L203x152x22",
				"area": 7390,
				"Iz": 36540105,
				"Iy": 7801521,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 207601.05673,
					"Qy": 137400.02995,
					"centroid_point": [
						40.74183,
						66.24183
					],
					"centroid_length": [
						40.7418269231,
						66.2418269231
					],
					"depth": 203,
					"width": 152,
					"alpha": -28.59129,
					"polygons": [
						{
							"name": "L203x152x22",
							"group_id": 0,
							"points_calc": [
								[
									0,
									0,
									"regular"
								],
								[
									152,
									0,
									"regular"
								],
								[
									152,
									22.2,
									"regular"
								],
								[
									22.2,
									22.2,
									"regular"
								],
								[
									22.2,
									203,
									"regular"
								],
								[
									-1.06581410364e-14,
									203,
									"regular"
								]
							],
							"points_custom_orig": [],
							"shape": "lbeam",
							"dimensions_show": true,
							"dimensions": {
								"BFw": {
									"value": 152,
									"locat": [
										[
											0,
											-20.3
										],
										[
											152,
											-20.3
										],
										{
											"placeholder": "Bottom Width",
											"dimension_id": "BFw",
											"dimension": 152
										}
									]
								},
								"BFt": {
									"value": 22.2,
									"locat": [
										[
											172.3,
											22.2
										],
										[
											172.3,
											0
										],
										{
											"placeholder": "Bottom Thickness",
											"dimension_id": "BFt",
											"dimension": 22.2
										}
									]
								},
								"h": {
									"value": 203,
									"locat": [
										[
											-20.3,
											203
										],
										[
											-20.3,
											0
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 203
										}
									]
								},
								"LFt": {
									"value": 22.2,
									"locat": [
										[
											-1.06581410364e-14,
											223.3
										],
										[
											22.2,
											223.3
										],
										{
											"placeholder": "Left Thickness",
											"dimension_id": "LFt",
											"dimension": 22.2
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 0
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"elasticity_modulus": 199950,
								"density": 7850,
								"poissons_ratio": 0.3,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"class": "steel"
							},
							"type": "library",
							"results": {
								"A": 7390,
								"J": 1210000,
								"Iyp": 7801521,
								"Izp": 36540105,
								"Iy": 14400000,
								"Iz": 30000000,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"ry": 0,
								"rz": 0,
								"ryp": 0,
								"rzp": 0,
								"Iw": 3000000000,
								"Syp": 0,
								"Szp": 0
							},
							"points_centroid_shifted": [
								[
									-40.7418269231,
									-66.2418269231,
									"regular"
								],
								[
									111.258173077,
									-66.2418269231,
									"regular"
								],
								[
									111.258173077,
									-44.0418269231,
									"regular"
								],
								[
									-18.5418269231,
									-44.0418269231,
									"regular"
								],
								[
									-18.5418269231,
									136.758173077,
									"regular"
								],
								[
									-40.7418269231,
									136.758173077,
									"regular"
								]
							]
						}
					],
					"warping_constant": 3000000000,
					"shear_area_z": 3518.00390458,
					"shear_area_y": 2905.76144797,
					"torsion_radius": 29.0306
				},
				"J": 1210000
			},
			"9": {
				"version": 2,
				"name": "C380x50",
				"area": 6430,
				"Iz": 131000000,
				"Iy": 3390000,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 426643.09467,
					"Qy": 68118.48236,
					"centroid_point": [
						21.75789,
						190.5
					],
					"centroid_length": [
						21.7578918196,
						190.5
					],
					"depth": 381,
					"width": 86,
					"alpha": 0,
					"polygons": [
						{
							"name": "C380x50",
							"group_id": 0,
							"points_calc": [
								[
									0,
									0,
									"regular"
								],
								[
									86,
									0,
									"regular"
								],
								[
									86,
									16.5,
									"regular"
								],
								[
									28.7,
									16.5,
									"filletStartEnd"
								],
								[
									21.6203565012,
									17.9082286485,
									"dontShow"
								],
								[
									15.618524548,
									21.918524548,
									"dontShow"
								],
								[
									11.6082286485,
									27.9203565012,
									"dontShow"
								],
								[
									10.2,
									35,
									"filletStartEnd"
								],
								[
									10.2,
									346,
									"filletStartEnd"
								],
								[
									11.6082286485,
									353.079643499,
									"dontShow"
								],
								[
									15.618524548,
									359.081475452,
									"dontShow"
								],
								[
									21.6203565012,
									363.091771351,
									"dontShow"
								],
								[
									28.7,
									364.5,
									"filletStartEnd"
								],
								[
									86,
									364.5,
									"regular"
								],
								[
									86,
									381,
									"regular"
								],
								[
									0,
									381,
									"regular"
								]
							],
							"points_custom_orig": [],
							"shape": "channel",
							"dimensions_show": true,
							"dimensions": {
								"h": {
									"value": 381,
									"locat": [
										[
											-38.1,
											381
										],
										[
											-38.1,
											0
										],
										{
											"placeholder": "Height",
											"dimension_id": "h",
											"dimension": 381
										}
									]
								},
								"TFw": {
									"value": 86,
									"locat": [
										[
											0,
											419.1
										],
										[
											86,
											419.1
										],
										{
											"placeholder": "Top Width",
											"dimension_id": "TFw",
											"dimension": 86
										}
									]
								},
								"TFt": {
									"value": 16.5,
									"locat": [
										[
											124.1,
											381
										],
										[
											124.1,
											364.5
										],
										{
											"placeholder": "Top Thickness",
											"dimension_id": "TFt",
											"dimension": 16.5
										}
									]
								},
								"BFw": {
									"value": 86,
									"locat": [
										[
											0,
											-76.2
										],
										[
											86,
											-76.2
										],
										{
											"placeholder": "Bottom Width",
											"dimension_id": "BFw",
											"dimension": 86
										}
									]
								},
								"BFt": {
									"value": 16.5,
									"locat": [
										[
											124.1,
											0
										],
										[
											124.1,
											16.5
										],
										{
											"placeholder": "Bottom Thickness",
											"dimension_id": "BFt",
											"dimension": 16.5
										}
									]
								},
								"Wt": {
									"value": 10.2,
									"locat": [
										[
											0,
											-38.1
										],
										[
											10.2,
											-38.1
										],
										{
											"placeholder": "Web Thickness",
											"dimension_id": "Wt",
											"dimension": 10.2
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 18.5
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"elasticity_modulus": 199950,
								"density": 7850,
								"poissons_ratio": 0.3,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"class": "steel"
							},
							"type": "library",
							"results": {
								"A": 6430,
								"J": 421000,
								"Iyp": 3390000,
								"Izp": 131000000,
								"Iy": 0,
								"Iz": 0,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"ry": 0,
								"rz": 0,
								"ryp": 0,
								"rzp": 0,
								"Iw": 95200000000,
								"Syp": 101436,
								"Szp": 832463
							},
							"points_centroid_shifted": [
								[
									-21.7578918196,
									-190.5,
									"regular"
								],
								[
									64.2421081804,
									-190.5,
									"regular"
								],
								[
									64.2421081804,
									-174,
									"regular"
								],
								[
									6.94210818038,
									-174,
									"filletStartEnd"
								],
								[
									-11.5578918196,
									-155.5,
									"filletStartEnd"
								],
								[
									-11.5578918196,
									155.5,
									"filletStartEnd"
								],
								[
									6.94210818038,
									174,
									"filletStartEnd"
								],
								[
									64.2421081804,
									174,
									"regular"
								],
								[
									64.2421081804,
									190.5,
									"regular"
								],
								[
									-21.7578918196,
									190.5,
									"regular"
								]
							]
						}
					],
					"warping_constant": 95200000000,
					"shear_area_z": 3642.42724279,
					"shear_area_y": 1043.35488065,
					"torsion_radius": 20.6598
				},
				"J": 421000
			},
			"10": {
				"version": 2,
				"name": "WT460x223",
				"area": 28500,
				"Iz": 511000000,
				"Iy": 270000000,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 1567899.74984,
					"Qy": 985583.1375,
					"centroid_point": [
						211.5,
						361.46689
					],
					"centroid_length": [
						211.5,
						361.46688989
					],
					"depth": 467,
					"width": 423,
					"alpha": 0,
					"polygons": [
						{
							"name": "WT460x223",
							"group_id": 0,
							"points_calc": [
								[
									199.5,
									0,
									"regular"
								],
								[
									223.5,
									0,
									"regular"
								],
								[
									223.5,
									424.3,
									"regular"
								],
								[
									423,
									424.3,
									"regular"
								],
								[
									423,
									467,
									"regular"
								],
								[
									0,
									467,
									"regular"
								],
								[
									0,
									424.3,
									"regular"
								],
								[
									199.5,
									424.3,
									"regular"
								]
							],
							"points_custom_orig": [],
							"shape": "tbeam",
							"dimensions_show": true,
							"dimensions": {
								"TFw": {
									"value": 423,
									"locat": [
										[
											0,
											513.7
										],
										[
											423,
											513.7
										],
										{
											"placeholder": "Top Width",
											"dimension_id": "TFw",
											"dimension": 423
										}
									]
								},
								"TFt": {
									"value": 42.7,
									"locat": [
										[
											-46.7,
											467
										],
										[
											-46.7,
											424.3
										],
										{
											"placeholder": "Top Thickness",
											"dimension_id": "TFt",
											"dimension": 42.7
										}
									]
								},
								"h": {
									"value": 467,
									"locat": [
										[
											469.7,
											467
										],
										[
											469.7,
											0
										],
										{
											"placeholder": "Total Height",
											"dimension_id": "h",
											"dimension": 467
										}
									]
								},
								"Wt": {
									"value": 24,
									"locat": [
										[
											199.5,
											-46.7
										],
										[
											223.5,
											-46.7
										],
										{
											"placeholder": "Web Thickness",
											"dimension_id": "Wt",
											"dimension": 24
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 0
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"elasticity_modulus": 199950,
								"density": 7850,
								"poissons_ratio": 0.3,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"class": "steel"
							},
							"type": "library",
							"results": {
								"A": 28500,
								"J": 13300000,
								"Iyp": 270000000,
								"Izp": 511000000,
								"Iy": 0,
								"Iz": 0,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"ry": 0,
								"rz": 0,
								"ryp": 0,
								"rzp": 0,
								"Iw": 74900000000,
								"Syp": 0,
								"Szp": 0
							},
							"points_centroid_shifted": [
								[
									-12,
									-361.46688989,
									"regular"
								],
								[
									12,
									-361.46688989,
									"regular"
								],
								[
									12,
									62.8331101104,
									"regular"
								],
								[
									211.5,
									62.8331101104,
									"regular"
								],
								[
									211.5,
									105.53311011,
									"regular"
								],
								[
									-211.5,
									105.53311011,
									"regular"
								],
								[
									-211.5,
									62.8331101104,
									"regular"
								],
								[
									-12,
									62.8331101104,
									"regular"
								]
							]
						}
					],
					"warping_constant": 74900000000,
					"shear_area_z": 9135.64074947,
					"shear_area_y": 15276.8958673,
					"torsion_radius": 46.5086
				},
				"J": 13300000
			},
			"11": {
				"version": 2,
				"name": "HS406x9.5",
				"area": 11900,
				"Iz": 234000000,
				"Iy": 233364416.024,
				"material_id": 1,
				"aux": {
					"composite": false,
					"Qz": 741484.63055,
					"Qy": 741485.24838,
					"centroid_point": [
						203,
						203
					],
					"centroid_length": [
						201.958472649,
						202.739450956
					],
					"depth": 405.478901911,
					"width": 404.958472649,
					"alpha": 0,
					"polygons": [
						{
							"name": "HS406x9.5",
							"group_id": 0,
							"points_calc": [
								[
									406,
									203,
									"dontShow"
								],
								[
									401.844578074,
									243.863599578,
									"dontShow"
								],
								[
									389.548435759,
									283.054238588,
									"dontShow"
								],
								[
									369.614978565,
									318.967447664,
									"dontShow"
								],
								[
									342.860284572,
									350.132935808,
									"dontShow"
								],
								[
									310.379694096,
									375.274784271,
									"dontShow"
								],
								[
									273.502966327,
									393.363682826,
									"dontShow"
								],
								[
									233.739838833,
									403.659069839,
									"dontShow"
								],
								[
									192.718218726,
									405.739450956,
									"dontShow"
								],
								[
									152.117535951,
									399.51965513,
									"dontShow"
								],
								[
									113.599987234,
									385.254321533,
									"dontShow"
								],
								[
									78.7424855428,
									363.527474598,
									"dontShow"
								],
								[
									48.9721010934,
									335.228613993,
									"dontShow"
								],
								[
									25.5076369226,
									301.516298394,
									"dontShow"
								],
								[
									9.30973095079,
									263.770713964,
									"dontShow"
								],
								[
									1.04152735145,
									223.537169363,
									"dontShow"
								],
								[
									1.04152735145,
									182.462830637,
									"dontShow"
								],
								[
									9.30973095079,
									142.229286036,
									"dontShow"
								],
								[
									25.5076369226,
									104.483701606,
									"dontShow"
								],
								[
									48.9721010934,
									70.7713860074,
									"dontShow"
								],
								[
									78.7424855428,
									42.4725254016,
									"dontShow"
								],
								[
									113.599987234,
									20.7456784671,
									"dontShow"
								],
								[
									152.117535951,
									6.48034487016,
									"dontShow"
								],
								[
									192.718218726,
									0.260549044276,
									"dontShow"
								],
								[
									233.739838833,
									2.34093016139,
									"dontShow"
								],
								[
									273.502966327,
									12.6363171741,
									"dontShow"
								],
								[
									310.379694096,
									30.7252157286,
									"dontShow"
								],
								[
									342.860284572,
									55.8670641925,
									"dontShow"
								],
								[
									369.614978565,
									87.0325523358,
									"dontShow"
								],
								[
									389.548435759,
									122.945761412,
									"dontShow"
								],
								[
									401.844578074,
									162.136400422,
									"dontShow"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow circle",
							"dimensions_show": true,
							"dimensions": {
								"D": {
									"value": 406,
									"locat": [
										[
											406,
											446.6
										],
										[
											0,
											446.6
										],
										{
											"placeholder": "Diameter",
											"dimension_id": "D",
											"dimension": 406
										}
									]
								},
								"t": {
									"value": 9.53,
									"locat": [
										[
											406,
											487.2
										],
										[
											396.47,
											487.2
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 9.53
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 0
							},
							"cutout": false,
							"material": {
								"name": "Structural Steel",
								"elasticity_modulus": 199950,
								"density": 7850,
								"poissons_ratio": 0.3,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"class": "steel"
							},
							"type": "library",
							"results": {
								"A": 11900,
								"J": 468000000,
								"Iyp": 0,
								"Izp": 234000000,
								"Iy": 0,
								"Iz": 0,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"ry": 0,
								"rz": 0,
								"ryp": 0,
								"rzp": 0,
								"Iw": 0,
								"Syp": 1500000,
								"Szp": 1500000
							},
							"points_centroid_shifted": [
								[
									203,
									3.66640051652e-12,
									"dontShow"
								],
								[
									198.844578074,
									40.863599578,
									"dontShow"
								],
								[
									186.548435759,
									80.054238588,
									"dontShow"
								],
								[
									166.614978565,
									115.967447664,
									"dontShow"
								],
								[
									139.860284572,
									147.132935808,
									"dontShow"
								],
								[
									107.379694096,
									172.274784271,
									"dontShow"
								],
								[
									70.5029663275,
									190.363682826,
									"dontShow"
								],
								[
									30.7398388334,
									200.659069839,
									"dontShow"
								],
								[
									-10.2817812743,
									202.739450956,
									"dontShow"
								],
								[
									-50.8824640485,
									196.51965513,
									"dontShow"
								],
								[
									-89.4000127662,
									182.254321533,
									"dontShow"
								],
								[
									-124.257514457,
									160.527474598,
									"dontShow"
								],
								[
									-154.027898907,
									132.228613993,
									"dontShow"
								],
								[
									-177.492363077,
									98.5162983938,
									"dontShow"
								],
								[
									-193.690269049,
									60.7707139636,
									"dontShow"
								],
								[
									-201.958472649,
									20.5371693635,
									"dontShow"
								],
								[
									-201.958472649,
									-20.5371693634,
									"dontShow"
								],
								[
									-193.690269049,
									-60.7707139636,
									"dontShow"
								],
								[
									-177.492363077,
									-98.5162983938,
									"dontShow"
								],
								[
									-154.027898907,
									-132.228613993,
									"dontShow"
								],
								[
									-124.257514457,
									-160.527474598,
									"dontShow"
								],
								[
									-89.4000127662,
									-182.254321533,
									"dontShow"
								],
								[
									-50.8824640485,
									-196.51965513,
									"dontShow"
								],
								[
									-10.2817812743,
									-202.739450956,
									"dontShow"
								],
								[
									30.7398388334,
									-200.659069839,
									"dontShow"
								],
								[
									70.5029663275,
									-190.363682826,
									"dontShow"
								],
								[
									107.379694096,
									-172.274784271,
									"dontShow"
								],
								[
									139.860284572,
									-147.132935808,
									"dontShow"
								],
								[
									166.614978565,
									-115.967447664,
									"dontShow"
								],
								[
									186.548435759,
									-80.054238588,
									"dontShow"
								],
								[
									198.844578074,
									-40.863599578,
									"dontShow"
								]
							]
						},
						{
							"name": "HS406x9.5",
							"group_id": 0,
							"points_calc": [
								[
									396.47,
									203,
									"dontShow"
								],
								[
									392.509657734,
									241.945224682,
									"dontShow"
								],
								[
									380.790767814,
									279.296027289,
									"dontShow"
								],
								[
									361.79310297,
									313.523261574,
									"dontShow"
								],
								[
									336.294429834,
									343.225660545,
									"dontShow"
								],
								[
									305.338667078,
									367.187204498,
									"dontShow"
								],
								[
									270.193147268,
									384.426905006,
									"dontShow"
								],
								[
									232.296732114,
									394.238966708,
									"dontShow"
								],
								[
									193.200905305,
									396.221682642,
									"dontShow"
								],
								[
									154.506254584,
									390.293880187,
									"dontShow"
								],
								[
									117.796943498,
									376.698244271,
									"dontShow"
								],
								[
									84.5758555565,
									355.991381825,
									"dontShow"
								],
								[
									56.2030660026,
									329.021034232,
									"dontShow"
								],
								[
									33.8401601745,
									296.891370691,
									"dontShow"
								],
								[
									18.4026780643,
									260.917783402,
									"dontShow"
								],
								[
									10.5226320034,
									222.573035255,
									"dontShow"
								],
								[
									10.5226320034,
									183.426964745,
									"dontShow"
								],
								[
									18.4026780643,
									145.082216598,
									"dontShow"
								],
								[
									33.8401601745,
									109.108629309,
									"dontShow"
								],
								[
									56.2030660026,
									76.9789657677,
									"dontShow"
								],
								[
									84.5758555565,
									50.0086181747,
									"dontShow"
								],
								[
									117.796943498,
									29.3017557292,
									"dontShow"
								],
								[
									154.506254584,
									15.706119813,
									"dontShow"
								],
								[
									193.200905305,
									9.77831735762,
									"dontShow"
								],
								[
									232.296732114,
									11.7610332922,
									"dontShow"
								],
								[
									270.193147268,
									21.5730949935,
									"dontShow"
								],
								[
									305.338667078,
									38.8127955025,
									"dontShow"
								],
								[
									336.294429834,
									62.7743394548,
									"dontShow"
								],
								[
									361.79310297,
									92.4767384256,
									"dontShow"
								],
								[
									380.790767814,
									126.703972711,
									"dontShow"
								],
								[
									392.509657734,
									164.054775318,
									"dontShow"
								]
							],
							"points_custom_orig": [],
							"shape": "hollow circle",
							"dimensions_show": true,
							"dimensions": {
								"D": {
									"value": 406,
									"locat": [
										[
											406,
											446.6
										],
										[
											0,
											446.6
										],
										{
											"placeholder": "Diameter",
											"dimension_id": "D",
											"dimension": 406
										}
									]
								},
								"t": {
									"value": 9.53,
									"locat": [
										[
											406,
											487.2
										],
										[
											396.47,
											487.2
										],
										{
											"placeholder": "Thickness",
											"dimension_id": "t",
											"dimension": 9.53
										}
									]
								}
							},
							"operations": {
								"rotation": 0,
								"translation": [
									0,
									0
								],
								"mirror_z": false,
								"mirror_y": false,
								"fillet_radius": 0
							},
							"cutout": true,
							"material": {
								"name": "Structural Steel",
								"elasticity_modulus": 199950,
								"density": 7850,
								"poissons_ratio": 0.3,
								"yield_strength": 260,
								"ultimate_strength": 410,
								"class": "steel"
							},
							"type": "library",
							"results": {
								"A": 11900,
								"J": 468000000,
								"Iyp": 0,
								"Izp": 234000000,
								"Iy": 0,
								"Iz": 0,
								"Alpha": 0,
								"Cy": 0,
								"Cz": 0,
								"ry": 0,
								"rz": 0,
								"ryp": 0,
								"rzp": 0,
								"Iw": 0,
								"Syp": 1500000,
								"Szp": 1500000
							},
							"cutout_parents": [
								0
							],
							"points_centroid_shifted": [
								[
									193.47,
									3.66640051652e-12,
									"dontShow"
								],
								[
									189.509657734,
									38.9452246816,
									"dontShow"
								],
								[
									177.790767814,
									76.2960272888,
									"dontShow"
								],
								[
									158.79310297,
									110.523261574,
									"dontShow"
								],
								[
									133.294429834,
									140.225660545,
									"dontShow"
								],
								[
									102.338667078,
									164.187204498,
									"dontShow"
								],
								[
									67.1931472679,
									181.426905006,
									"dontShow"
								],
								[
									29.2967321138,
									191.238966708,
									"dontShow"
								],
								[
									-9.79909469522,
									193.221682642,
									"dontShow"
								],
								[
									-48.4937454161,
									187.293880187,
									"dontShow"
								],
								[
									-85.2030565019,
									173.698244271,
									"dontShow"
								],
								[
									-118.424144443,
									152.991381825,
									"dontShow"
								],
								[
									-146.796933997,
									126.021034232,
									"dontShow"
								],
								[
									-169.159839825,
									93.8913706909,
									"dontShow"
								],
								[
									-184.597321936,
									57.9177834017,
									"dontShow"
								],
								[
									-192.477367997,
									19.5730352549,
									"dontShow"
								],
								[
									-192.477367997,
									-19.5730352549,
									"dontShow"
								],
								[
									-184.597321936,
									-57.9177834017,
									"dontShow"
								],
								[
									-169.159839825,
									-93.8913706909,
									"dontShow"
								],
								[
									-146.796933997,
									-126.021034232,
									"dontShow"
								],
								[
									-118.424144443,
									-152.991381825,
									"dontShow"
								],
								[
									-85.2030565019,
									-173.698244271,
									"dontShow"
								],
								[
									-48.4937454161,
									-187.293880187,
									"dontShow"
								],
								[
									-9.79909469522,
									-193.221682642,
									"dontShow"
								],
								[
									29.2967321138,
									-191.238966708,
									"dontShow"
								],
								[
									67.1931472679,
									-181.426905006,
									"dontShow"
								],
								[
									102.338667078,
									-164.187204498,
									"dontShow"
								],
								[
									133.294429834,
									-140.225660545,
									"dontShow"
								],
								[
									158.79310297,
									-110.523261574,
									"dontShow"
								],
								[
									177.790767814,
									-76.2960272888,
									"dontShow"
								],
								[
									189.509657734,
									-38.9452246815,
									"dontShow"
								]
							]
						}
					],
					"warping_constant": 0,
					"shear_area_z": 5935.03259559,
					"shear_area_y": 5935.03259559,
					"torsion_radius": 198.235
				},
				"J": 468000000
			}
		},
		"materials": {
			"1": {
				"name": "Structural Steel",
				"elasticity_modulus": 199950,
				"density": 7850,
				"poissons_ratio": 0.3,
				"yield_strength": 260,
				"ultimate_strength": 410,
				"class": "steel"
			},
			"2": {
				"name": "Aluminium",
				"elasticity_modulus": 69000,
				"density": 2700,
				"poissons_ratio": 0.32,
				"yield_strength": 100,
				"ultimate_strength": 150,
				"class": "aluminium"
			},
			"3": {
				"name": "Carbon Fibre Reinforced Plastic",
				"elasticity_modulus": 150000,
				"density": 3500,
				"poissons_ratio": 0.2,
				"yield_strength": null,
				"ultimate_strength": 2705,
				"class": "other"
			},
			"4": {
				"name": "Concrete",
				"elasticity_modulus": 17000,
				"density": 2500,
				"poissons_ratio": 0.2,
				"yield_strength": null,
				"ultimate_strength": 3.5,
				"class": "concrete"
			},
			"5": {
				"name": "Concrete High Strength",
				"elasticity_modulus": 30000,
				"density": 2500,
				"poissons_ratio": 0.2,
				"yield_strength": null,
				"ultimate_strength": 5,
				"class": "concrete"
			},
			"6": {
				"name": "Oakwood",
				"elasticity_modulus": 11000,
				"density": 900,
				"poissons_ratio": 0.3,
				"yield_strength": 4.5,
				"ultimate_strength": 5,
				"class": "wood"
			},
			"7": {
				"name": "Glass",
				"elasticity_modulus": 70000,
				"density": 2500,
				"poissons_ratio": 0.24,
				"yield_strength": null,
				"ultimate_strength": 33,
				"class": "other"
			}
		},
		"supports": {
			"10": {
				"tx": 0,
				"ty": 0,
				"tz": 0,
				"rx": 0,
				"ry": 0,
				"rz": 0,
				"node": 103,
				"restraint_code": "FFFRRR"
			},
			"11": {
				"tx": 0,
				"ty": 0,
				"tz": 0,
				"rx": 0,
				"ry": 0,
				"rz": 0,
				"node": 105,
				"restraint_code": "FFFRRR"
			},
			"12": {
				"tx": 0,
				"ty": 0,
				"tz": 0,
				"rx": 0,
				"ry": 0,
				"rz": 0,
				"node": 107,
				"restraint_code": "FFFRRR"
			}
		},
		"settlements": {},
		"point_loads": {},
		"moments": {},
		"distributed_loads": {
			"15": {
				"member": 228,
				"x_mag_A": 0,
				"y_mag_A": -6.324,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -6.324,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "DL",
				"axes": "global"
			},
			"16": {
				"member": 231,
				"x_mag_A": 0,
				"y_mag_A": -6.324,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -6.324,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "DL",
				"axes": "global"
			},
			"41": {
				"member": 228,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "LL",
				"axes": "global"
			},
			"42": {
				"member": 231,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "LL",
				"axes": "global"
			},
			"89": {
				"member": 207,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"90": {
				"member": 208,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"91": {
				"member": 209,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"92": {
				"member": 210,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"93": {
				"member": 211,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"94": {
				"member": 212,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"95": {
				"member": 213,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"96": {
				"member": 214,
				"x_mag_A": 0,
				"y_mag_A": -4,
				"z_mag_A": 0,
				"x_mag_B": 0,
				"y_mag_B": -4,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "RLL",
				"axes": "global"
			},
			"141": {
				"member": 229,
				"x_mag_A": 1.4594,
				"y_mag_A": 0,
				"z_mag_A": 0,
				"x_mag_B": 1.4594,
				"y_mag_B": 0,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "WX",
				"axes": "global"
			},
			"142": {
				"member": 232,
				"x_mag_A": 1.4594,
				"y_mag_A": 0,
				"z_mag_A": 0,
				"x_mag_B": 1.4594,
				"y_mag_B": 0,
				"z_mag_B": 0,
				"position_A": 0,
				"position_B": 100,
				"load_group": "WX",
				"axes": "global"
			}
		},
		"pressures": {},
		"member_prestress_loads": {},
		"self_weight": {
			"1": {
				"x": 0,
				"y": -1,
				"z": 0,
				"LG": "SW1"
			}
		},
		"load_combinations": {
			"1": {
				"name": "LC1",
				"SW1": 1,
				"DL": 1,
				"LL": 1,
				"RLL": 1,
				"WX": 1
			}
		},
		"load_cases": {
			"AISC": {
				"SW1": "Snow: snow",
				"DL": "Dead: dead",
				"LL": "Live: live",
				"RLL": "Snow: Rain",
				"WX": "Wind: wind"
			}
		}
	}

	viewer = new SKYCIV.renderer({ 
		container_selector: '#renderer-container',

	});
	viewer.model.set(s3d_model);

	var sett = viewer.settings.get();
	sett.visibility.global_axis = false;

	//event
	viewer.mouse.enable()

	viewer.mouse.setOnObjectClickFunction(function (data) {
		var id = data.id;
		var type = data.type // ("member", "node", "plate")

		alert("You clicked " + type + " " + id)
	});

	viewer.model.buildStructure();
	viewer.render();


});