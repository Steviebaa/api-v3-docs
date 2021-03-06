var viewer;

$(document).ready(function () {

	var s3d_model = {
	"dataVersion": 22,
	"settings": {
		"units": {
			"length": "ft",
			"section_length": "in",
			"material_strength": "ksi",
			"density": "lb/ft3",
			"force": "kip",
			"moment": "kip-ft",
			"pressure": "ksf",
			"mass": "kip",
			"translation": "in",
			"stress": "ksi"
		},
		"precision": "fixed",
		"precision_values": 3,
		"evaluation_points": 9,
		"vertical_axis": "Y",
		"projection_system": "orthographic",
		"solver_timeout": 600,
		"accurate_buckling_shape": false,
		"buckling_johnson": false,
		"non_linear_tolerance": "1",
		"non_linear_theory": "small",
		"auto_stabilize_model": false
	},
	"details": {},
	"nodes": {
		"1": {
			"x": 0,
			"y": 0,
			"z": 0
		},
		"2": {
			"x": 47.5721784777,
			"y": 0,
			"z": 0
		},
		"3": {
			"x": 95.1443569554,
			"y": 0,
			"z": 0
		},
		"4": {
			"x": 142.716535433,
			"y": 0,
			"z": 0
		},
		"5": {
			"x": 190.288713911,
			"y": 0,
			"z": 0
		},
		"6": {
			"x": 237.860892388,
			"y": 0,
			"z": 0
		},
		"7": {
			"x": 285.433070866,
			"y": 0,
			"z": 0
		},
		"8": {
			"x": 0,
			"y": 19.7834645669,
			"z": 0
		},
		"9": {
			"x": 47.5721784777,
			"y": 19.7834645669,
			"z": 0
		},
		"10": {
			"x": 95.1443569554,
			"y": 19.7834645669,
			"z": 0
		},
		"11": {
			"x": 142.716535433,
			"y": 19.7834645669,
			"z": 0
		},
		"12": {
			"x": 190.288713911,
			"y": 19.7834645669,
			"z": 0
		},
		"13": {
			"x": 237.860892388,
			"y": 19.7834645669,
			"z": 0
		},
		"14": {
			"x": 285.433070866,
			"y": 19.7834645669,
			"z": 0
		},
		"15": {
			"x": 0,
			"y": 39.5669291339,
			"z": 0
		},
		"16": {
			"x": 47.5721784777,
			"y": 39.5669291339,
			"z": 0
		},
		"17": {
			"x": 95.1443569554,
			"y": 39.5669291339,
			"z": 0
		},
		"18": {
			"x": 142.716535433,
			"y": 39.5669291339,
			"z": 0
		},
		"19": {
			"x": 190.288713911,
			"y": 39.5669291339,
			"z": 0
		},
		"20": {
			"x": 237.860892388,
			"y": 39.5669291339,
			"z": 0
		},
		"21": {
			"x": 285.433070866,
			"y": 39.5669291339,
			"z": 0
		},
		"22": {
			"x": 0,
			"y": 60.0229658793,
			"z": 0
		},
		"23": {
			"x": 47.5721784777,
			"y": 60.0229658793,
			"z": 0
		},
		"24": {
			"x": 95.1443569554,
			"y": 60.0229658793,
			"z": 0
		},
		"25": {
			"x": 142.716535433,
			"y": 60.0229658793,
			"z": 0
		},
		"26": {
			"x": 190.288713911,
			"y": 60.0229658793,
			"z": 0
		},
		"27": {
			"x": 237.860892388,
			"y": 60.0229658793,
			"z": 0
		},
		"28": {
			"x": 285.433070866,
			"y": 60.0229658793,
			"z": 0
		},
		"29": {
			"x": 23.7860892388,
			"y": 60.0229658793,
			"z": 0
		},
		"30": {
			"x": 261.646981627,
			"y": 60.0229658793,
			"z": 0
		},
		"31": {
			"x": 71.3582677165,
			"y": 19.7834645669,
			"z": 0
		},
		"32": {
			"x": 71.3582677165,
			"y": 39.5669291339,
			"z": 0
		},
		"33": {
			"x": 71.3582677165,
			"y": 60.0229658793,
			"z": 0
		},
		"34": {
			"x": 118.930446194,
			"y": 60.0229658793,
			"z": 0
		},
		"35": {
			"x": 166.502624672,
			"y": 60.0229658793,
			"z": 0
		},
		"36": {
			"x": 214.07480315,
			"y": 19.7834645669,
			"z": 0
		},
		"37": {
			"x": 214.07480315,
			"y": 39.5669291339,
			"z": 0
		},
		"38": {
			"x": 214.07480315,
			"y": 60.0229658793,
			"z": 0
		},
		"39": {
			"x": 0,
			"y": 0,
			"z": -42.3228346457
		},
		"40": {
			"x": 47.5721784777,
			"y": 0,
			"z": -42.3228346457
		},
		"41": {
			"x": 95.1443569554,
			"y": 0,
			"z": -42.3228346457
		},
		"42": {
			"x": 142.716535433,
			"y": 0,
			"z": -42.3228346457
		},
		"43": {
			"x": 190.288713911,
			"y": 0,
			"z": -42.3228346457
		},
		"44": {
			"x": 237.860892388,
			"y": 0,
			"z": -42.3228346457
		},
		"45": {
			"x": 285.433070866,
			"y": 0,
			"z": -42.3228346457
		},
		"46": {
			"x": 0,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"47": {
			"x": 47.5721784777,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"48": {
			"x": 95.1443569554,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"49": {
			"x": 142.716535433,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"50": {
			"x": 190.288713911,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"51": {
			"x": 237.860892388,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"52": {
			"x": 285.433070866,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"53": {
			"x": 0,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"54": {
			"x": 47.5721784777,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"55": {
			"x": 95.1443569554,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"56": {
			"x": 142.716535433,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"57": {
			"x": 190.288713911,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"58": {
			"x": 237.860892388,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"59": {
			"x": 285.433070866,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"60": {
			"x": 0,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"61": {
			"x": 47.5721784777,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"62": {
			"x": 95.1443569554,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"63": {
			"x": 142.716535433,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"64": {
			"x": 190.288713911,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"65": {
			"x": 237.860892388,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"66": {
			"x": 285.433070866,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"67": {
			"x": 23.7860892388,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"68": {
			"x": 261.646981627,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"69": {
			"x": 71.3582677165,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"70": {
			"x": 71.3582677165,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"71": {
			"x": 71.3582677165,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"72": {
			"x": 118.930446194,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"73": {
			"x": 166.502624672,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"74": {
			"x": 214.07480315,
			"y": 19.7834645669,
			"z": -42.3228346457
		},
		"75": {
			"x": 214.07480315,
			"y": 39.5669291339,
			"z": -42.3228346457
		},
		"76": {
			"x": 214.07480315,
			"y": 60.0229658793,
			"z": -42.3228346457
		},
		"77": {
			"x": 0,
			"y": 0,
			"z": -84.6456692913
		},
		"78": {
			"x": 47.5721784777,
			"y": 0,
			"z": -84.6456692913
		},
		"79": {
			"x": 95.1443569554,
			"y": 0,
			"z": -84.6456692913
		},
		"80": {
			"x": 142.716535433,
			"y": 0,
			"z": -84.6456692913
		},
		"81": {
			"x": 190.288713911,
			"y": 0,
			"z": -84.6456692913
		},
		"82": {
			"x": 237.860892388,
			"y": 0,
			"z": -84.6456692913
		},
		"83": {
			"x": 285.433070866,
			"y": 0,
			"z": -84.6456692913
		},
		"84": {
			"x": 0,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"85": {
			"x": 47.5721784777,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"86": {
			"x": 95.1443569554,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"87": {
			"x": 142.716535433,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"88": {
			"x": 190.288713911,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"89": {
			"x": 237.860892388,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"90": {
			"x": 285.433070866,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"91": {
			"x": 0,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"92": {
			"x": 47.5721784777,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"93": {
			"x": 95.1443569554,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"94": {
			"x": 142.716535433,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"95": {
			"x": 190.288713911,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"96": {
			"x": 237.860892388,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"97": {
			"x": 285.433070866,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"98": {
			"x": 0,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"99": {
			"x": 47.5721784777,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"100": {
			"x": 95.1443569554,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"101": {
			"x": 142.716535433,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"102": {
			"x": 190.288713911,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"103": {
			"x": 237.860892388,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"104": {
			"x": 285.433070866,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"105": {
			"x": 23.7860892388,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"106": {
			"x": 261.646981627,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"107": {
			"x": 71.3582677165,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"108": {
			"x": 71.3582677165,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"109": {
			"x": 71.3582677165,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"110": {
			"x": 118.930446194,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"111": {
			"x": 166.502624672,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"112": {
			"x": 214.07480315,
			"y": 19.7834645669,
			"z": -84.6456692913
		},
		"113": {
			"x": 214.07480315,
			"y": 39.5669291339,
			"z": -84.6456692913
		},
		"114": {
			"x": 214.07480315,
			"y": 60.0229658793,
			"z": -84.6456692913
		},
		"115": {
			"x": 0,
			"y": 0,
			"z": -126.968503937
		},
		"116": {
			"x": 47.5721784777,
			"y": 0,
			"z": -126.968503937
		},
		"117": {
			"x": 95.1443569554,
			"y": 0,
			"z": -126.968503937
		},
		"118": {
			"x": 142.716535433,
			"y": 0,
			"z": -126.968503937
		},
		"119": {
			"x": 190.288713911,
			"y": 0,
			"z": -126.968503937
		},
		"120": {
			"x": 237.860892388,
			"y": 0,
			"z": -126.968503937
		},
		"121": {
			"x": 285.433070866,
			"y": 0,
			"z": -126.968503937
		},
		"122": {
			"x": 0,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"123": {
			"x": 47.5721784777,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"124": {
			"x": 95.1443569554,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"125": {
			"x": 142.716535433,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"126": {
			"x": 190.288713911,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"127": {
			"x": 237.860892388,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"128": {
			"x": 285.433070866,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"129": {
			"x": 0,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"130": {
			"x": 47.5721784777,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"131": {
			"x": 95.1443569554,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"132": {
			"x": 142.716535433,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"133": {
			"x": 190.288713911,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"134": {
			"x": 237.860892388,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"135": {
			"x": 285.433070866,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"136": {
			"x": 0,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"137": {
			"x": 47.5721784777,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"138": {
			"x": 95.1443569554,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"139": {
			"x": 142.716535433,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"140": {
			"x": 190.288713911,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"141": {
			"x": 237.860892388,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"142": {
			"x": 285.433070866,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"143": {
			"x": 23.7860892388,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"144": {
			"x": 261.646981627,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"145": {
			"x": 71.3582677165,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"146": {
			"x": 71.3582677165,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"147": {
			"x": 71.3582677165,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"148": {
			"x": 118.930446194,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"149": {
			"x": 166.502624672,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"150": {
			"x": 214.07480315,
			"y": 19.7834645669,
			"z": -126.968503937
		},
		"151": {
			"x": 214.07480315,
			"y": 39.5669291339,
			"z": -126.968503937
		},
		"152": {
			"x": 214.07480315,
			"y": 60.0229658793,
			"z": -126.968503937
		},
		"153": {
			"x": 285.433070866,
			"y": 60.0229658793,
			"z": -21.1614173228
		},
		"154": {
			"x": 285.433070866,
			"y": 19.7834645669,
			"z": -63.4842519685
		},
		"155": {
			"x": 285.433070866,
			"y": 39.5669291339,
			"z": -63.4842519685
		},
		"156": {
			"x": 285.433070866,
			"y": 60.0229658793,
			"z": -63.4842519685
		},
		"157": {
			"x": 285.433070866,
			"y": 60.0229658793,
			"z": -105.807086614
		},
		"158": {
			"x": 0,
			"y": 19.7834645669,
			"z": -63.4842519685
		},
		"159": {
			"x": 0,
			"y": 39.5669291339,
			"z": -63.4842519685
		},
		"160": {
			"x": 0,
			"y": 60.0229658793,
			"z": -21.1614173228
		},
		"161": {
			"x": 0,
			"y": 60.0229658793,
			"z": -105.807086614
		},
		"162": {
			"x": 0,
			"y": 60.0229658793,
			"z": -63.4842519685
		},
		"163": {
			"x": 237.860892388,
			"y": 19.7834645669,
			"z": -63.4842519685
		},
		"164": {
			"x": 237.860892388,
			"y": 39.5669291339,
			"z": -63.4842519685
		},
		"165": {
			"x": 237.860892388,
			"y": 60.0229658793,
			"z": -21.1614173228
		},
		"166": {
			"x": 237.860892388,
			"y": 60.0229658793,
			"z": -105.807086614
		},
		"167": {
			"x": 237.860892388,
			"y": 60.0229658793,
			"z": -63.4842519685
		},
		"168": {
			"x": 190.288713911,
			"y": 19.7834645669,
			"z": -63.4842519685
		},
		"169": {
			"x": 190.288713911,
			"y": 39.5669291339,
			"z": -63.4842519685
		},
		"170": {
			"x": 190.288713911,
			"y": 60.0229658793,
			"z": -21.1614173228
		},
		"171": {
			"x": 190.288713911,
			"y": 60.0229658793,
			"z": -105.807086614
		},
		"172": {
			"x": 190.288713911,
			"y": 60.0229658793,
			"z": -63.4842519685
		},
		"173": {
			"x": 142.716535433,
			"y": 19.7834645669,
			"z": -63.4842519685
		},
		"174": {
			"x": 142.716535433,
			"y": 39.5669291339,
			"z": -63.4842519685
		},
		"175": {
			"x": 142.716535433,
			"y": 60.0229658793,
			"z": -21.1614173228
		},
		"176": {
			"x": 142.716535433,
			"y": 60.0229658793,
			"z": -105.807086614
		},
		"177": {
			"x": 142.716535433,
			"y": 60.0229658793,
			"z": -63.4842519685
		},
		"178": {
			"x": 95.1443569554,
			"y": 19.7834645669,
			"z": -63.4842519685
		},
		"179": {
			"x": 95.1443569554,
			"y": 39.5669291339,
			"z": -63.4842519685
		},
		"180": {
			"x": 95.1443569554,
			"y": 60.0229658793,
			"z": -21.1614173228
		},
		"181": {
			"x": 95.1443569554,
			"y": 60.0229658793,
			"z": -105.807086614
		},
		"182": {
			"x": 95.1443569554,
			"y": 60.0229658793,
			"z": -63.4842519685
		},
		"183": {
			"x": 47.5721784777,
			"y": 19.7834645669,
			"z": -63.4842519685
		},
		"184": {
			"x": 47.5721784777,
			"y": 39.5669291339,
			"z": -63.4842519685
		},
		"185": {
			"x": 47.5721784777,
			"y": 60.0229658793,
			"z": -21.1614173228
		},
		"186": {
			"x": 47.5721784777,
			"y": 60.0229658793,
			"z": -105.807086614
		},
		"187": {
			"x": 47.5721784777,
			"y": 60.0229658793,
			"z": -63.4842519685
		}
	},
	"members": {
		"1": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 1,
			"node_B": 8,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"2": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 8,
			"node_B": 15,
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
		},
		"3": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 15,
			"node_B": 22,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"4": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 7,
			"node_B": 14,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"5": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 14,
			"node_B": 21,
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
		},
		"6": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 21,
			"node_B": 28,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"7": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 2,
			"node_B": 9,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"8": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 9,
			"node_B": 16,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"9": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 16,
			"node_B": 23,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"10": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 6,
			"node_B": 13,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"11": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 13,
			"node_B": 20,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"12": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 20,
			"node_B": 27,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"13": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 3,
			"node_B": 10,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"14": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 10,
			"node_B": 17,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"15": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 17,
			"node_B": 24,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"16": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 5,
			"node_B": 12,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"17": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 12,
			"node_B": 19,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"18": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 19,
			"node_B": 26,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"19": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 4,
			"node_B": 11,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"20": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 11,
			"node_B": 18,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"21": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 18,
			"node_B": 25,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"22": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 8,
			"node_B": 9,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"23": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 13,
			"node_B": 14,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"24": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 9,
			"node_B": 31,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"25": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 10,
			"node_B": 31,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"26": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 13,
			"node_B": 36,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"27": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 12,
			"node_B": 36,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"28": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 12,
			"node_B": 11,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"29": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 15,
			"node_B": 16,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"30": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 21,
			"node_B": 20,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"31": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 16,
			"node_B": 32,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"32": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 17,
			"node_B": 32,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"33": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 20,
			"node_B": 37,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"34": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 19,
			"node_B": 37,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"35": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 17,
			"node_B": 18,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"36": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 18,
			"node_B": 19,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"37": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 22,
			"node_B": 29,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"38": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 23,
			"node_B": 29,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"39": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 28,
			"node_B": 30,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"40": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 27,
			"node_B": 30,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"41": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 23,
			"node_B": 33,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"42": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 24,
			"node_B": 33,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"43": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 27,
			"node_B": 38,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"44": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 26,
			"node_B": 38,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"45": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 24,
			"node_B": 34,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"46": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 25,
			"node_B": 34,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"47": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 26,
			"node_B": 35,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"48": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 25,
			"node_B": 35,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"49": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 2,
			"node_B": 31,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"50": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 3,
			"node_B": 31,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"51": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 6,
			"node_B": 36,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"52": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 5,
			"node_B": 36,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"53": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 9,
			"node_B": 32,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"54": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 10,
			"node_B": 32,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"55": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 13,
			"node_B": 37,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"56": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 12,
			"node_B": 37,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"57": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 15,
			"node_B": 29,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"58": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 16,
			"node_B": 29,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"59": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 21,
			"node_B": 30,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"60": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 20,
			"node_B": 30,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"61": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 16,
			"node_B": 33,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"62": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 17,
			"node_B": 33,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"63": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 20,
			"node_B": 38,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"64": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 19,
			"node_B": 38,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"65": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 17,
			"node_B": 34,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"66": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 18,
			"node_B": 34,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"67": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 19,
			"node_B": 35,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"68": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 18,
			"node_B": 35,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"69": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 39,
			"node_B": 46,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"70": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 46,
			"node_B": 53,
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
		},
		"71": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 53,
			"node_B": 60,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"72": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 45,
			"node_B": 52,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"73": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 52,
			"node_B": 59,
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
		},
		"74": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 59,
			"node_B": 66,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"75": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 40,
			"node_B": 47,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"76": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 47,
			"node_B": 54,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"77": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 54,
			"node_B": 61,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"78": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 44,
			"node_B": 51,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"79": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 51,
			"node_B": 58,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"80": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 58,
			"node_B": 65,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"81": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 41,
			"node_B": 48,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"82": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 48,
			"node_B": 55,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"83": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 62,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"84": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 43,
			"node_B": 50,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"85": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 50,
			"node_B": 57,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"86": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 57,
			"node_B": 64,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"87": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 42,
			"node_B": 49,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"88": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 49,
			"node_B": 56,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"89": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 56,
			"node_B": 63,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"90": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 46,
			"node_B": 47,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"91": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 51,
			"node_B": 52,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"92": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 47,
			"node_B": 69,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"93": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 48,
			"node_B": 69,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"94": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 51,
			"node_B": 74,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"95": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 50,
			"node_B": 74,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"96": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 50,
			"node_B": 49,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"97": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 53,
			"node_B": 54,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"98": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 59,
			"node_B": 58,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"99": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 54,
			"node_B": 70,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"100": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 70,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"101": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 58,
			"node_B": 75,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"102": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 57,
			"node_B": 75,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"103": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 56,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"104": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 56,
			"node_B": 57,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"105": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 60,
			"node_B": 67,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"106": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 61,
			"node_B": 67,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"107": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 66,
			"node_B": 68,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"108": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 65,
			"node_B": 68,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"109": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 61,
			"node_B": 71,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"110": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 62,
			"node_B": 71,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"111": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 65,
			"node_B": 76,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"112": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 64,
			"node_B": 76,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"113": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 62,
			"node_B": 72,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"114": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 63,
			"node_B": 72,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"115": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 64,
			"node_B": 73,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"116": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 63,
			"node_B": 73,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"117": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 40,
			"node_B": 69,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"118": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 41,
			"node_B": 69,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"119": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 44,
			"node_B": 74,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"120": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 43,
			"node_B": 74,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"121": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 47,
			"node_B": 70,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"122": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 48,
			"node_B": 70,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"123": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 51,
			"node_B": 75,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"124": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 50,
			"node_B": 75,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"125": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 53,
			"node_B": 67,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"126": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 54,
			"node_B": 67,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"127": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 59,
			"node_B": 68,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"128": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 58,
			"node_B": 68,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"129": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 54,
			"node_B": 71,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"130": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 71,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"131": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 58,
			"node_B": 76,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"132": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 57,
			"node_B": 76,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"133": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 72,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"134": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 56,
			"node_B": 72,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"135": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 57,
			"node_B": 73,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"136": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 56,
			"node_B": 73,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"137": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 77,
			"node_B": 84,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"138": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 84,
			"node_B": 91,
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
		},
		"139": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 91,
			"node_B": 98,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"140": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 83,
			"node_B": 90,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"141": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 90,
			"node_B": 97,
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
		},
		"142": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 97,
			"node_B": 104,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"143": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 78,
			"node_B": 85,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"144": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 85,
			"node_B": 92,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"145": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 92,
			"node_B": 99,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"146": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 82,
			"node_B": 89,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"147": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 89,
			"node_B": 96,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"148": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 96,
			"node_B": 103,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"149": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 79,
			"node_B": 86,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"150": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 86,
			"node_B": 93,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"151": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 100,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"152": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 81,
			"node_B": 88,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"153": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 88,
			"node_B": 95,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"154": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 95,
			"node_B": 102,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"155": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 80,
			"node_B": 87,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"156": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 87,
			"node_B": 94,
			"section_id": 7,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"157": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 94,
			"node_B": 101,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"158": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 84,
			"node_B": 85,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"159": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 89,
			"node_B": 90,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"160": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 85,
			"node_B": 107,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"161": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 86,
			"node_B": 107,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"162": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 89,
			"node_B": 112,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"163": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 88,
			"node_B": 112,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"164": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 88,
			"node_B": 87,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"165": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 91,
			"node_B": 92,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"166": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 97,
			"node_B": 96,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"167": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 92,
			"node_B": 108,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"168": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 108,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"169": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 96,
			"node_B": 113,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"170": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 95,
			"node_B": 113,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"171": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 94,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"172": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 94,
			"node_B": 95,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"173": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 98,
			"node_B": 105,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"174": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 99,
			"node_B": 105,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"175": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 104,
			"node_B": 106,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"176": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 103,
			"node_B": 106,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"177": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 99,
			"node_B": 109,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"178": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 100,
			"node_B": 109,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"179": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 103,
			"node_B": 114,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"180": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 102,
			"node_B": 114,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"181": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 100,
			"node_B": 110,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"182": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 101,
			"node_B": 110,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"183": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 102,
			"node_B": 111,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"184": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 101,
			"node_B": 111,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"185": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 78,
			"node_B": 107,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"186": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 79,
			"node_B": 107,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"187": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 82,
			"node_B": 112,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"188": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 81,
			"node_B": 112,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"189": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 85,
			"node_B": 108,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"190": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 86,
			"node_B": 108,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"191": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 89,
			"node_B": 113,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"192": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 88,
			"node_B": 113,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"193": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 91,
			"node_B": 105,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"194": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 92,
			"node_B": 105,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"195": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 97,
			"node_B": 106,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"196": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 96,
			"node_B": 106,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"197": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 92,
			"node_B": 109,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"198": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 109,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"199": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 96,
			"node_B": 114,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"200": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 95,
			"node_B": 114,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"201": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 110,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"202": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 94,
			"node_B": 110,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"203": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 95,
			"node_B": 111,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"204": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 94,
			"node_B": 111,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"205": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 115,
			"node_B": 122,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"206": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 122,
			"node_B": 129,
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
		},
		"207": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 129,
			"node_B": 136,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"208": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 121,
			"node_B": 128,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"209": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 128,
			"node_B": 135,
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
		},
		"210": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 135,
			"node_B": 142,
			"section_id": 1,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"211": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 116,
			"node_B": 123,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"212": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 123,
			"node_B": 130,
			"section_id": 2,
			"rotation_angle": 90,
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
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 130,
			"node_B": 137,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"214": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 120,
			"node_B": 127,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"215": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 127,
			"node_B": 134,
			"section_id": 2,
			"rotation_angle": 90,
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
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 134,
			"node_B": 141,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"217": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 117,
			"node_B": 124,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"218": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 124,
			"node_B": 131,
			"section_id": 2,
			"rotation_angle": 90,
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
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 131,
			"node_B": 138,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"220": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 119,
			"node_B": 126,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"221": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 126,
			"node_B": 133,
			"section_id": 2,
			"rotation_angle": 90,
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
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 133,
			"node_B": 140,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"223": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 118,
			"node_B": 125,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"224": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 125,
			"node_B": 132,
			"section_id": 2,
			"rotation_angle": 90,
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
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 132,
			"node_B": 139,
			"section_id": 2,
			"rotation_angle": 90,
			"fixity_A": "FFFFFF",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"226": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 122,
			"node_B": 123,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"227": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 127,
			"node_B": 128,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"228": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 123,
			"node_B": 145,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"229": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 124,
			"node_B": 145,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"230": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 127,
			"node_B": 150,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"231": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 126,
			"node_B": 150,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"232": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 126,
			"node_B": 125,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"233": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 129,
			"node_B": 130,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"234": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 135,
			"node_B": 134,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"235": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 130,
			"node_B": 146,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"236": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 131,
			"node_B": 146,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"237": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 134,
			"node_B": 151,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"238": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 133,
			"node_B": 151,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"239": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 131,
			"node_B": 132,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"240": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 132,
			"node_B": 133,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"241": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 136,
			"node_B": 143,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"242": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 137,
			"node_B": 143,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"243": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 142,
			"node_B": 144,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"244": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 141,
			"node_B": 144,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"245": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 137,
			"node_B": 147,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"246": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 138,
			"node_B": 147,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"247": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 141,
			"node_B": 152,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"248": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 140,
			"node_B": 152,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"249": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 138,
			"node_B": 148,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"250": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 139,
			"node_B": 148,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"251": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 140,
			"node_B": 149,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"252": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 139,
			"node_B": 149,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"253": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 116,
			"node_B": 145,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"254": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 117,
			"node_B": 145,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"255": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 120,
			"node_B": 150,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"256": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 119,
			"node_B": 150,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"257": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 123,
			"node_B": 146,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"258": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 124,
			"node_B": 146,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"259": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 127,
			"node_B": 151,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"260": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 126,
			"node_B": 151,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"261": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 129,
			"node_B": 143,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"262": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 130,
			"node_B": 143,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"263": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 135,
			"node_B": 144,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"264": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 134,
			"node_B": 144,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"265": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 130,
			"node_B": 147,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"266": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 131,
			"node_B": 147,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"267": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 134,
			"node_B": 152,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"268": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 133,
			"node_B": 152,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"269": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 131,
			"node_B": 148,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"270": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 132,
			"node_B": 148,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"271": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 133,
			"node_B": 149,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"272": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 132,
			"node_B": 149,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"273": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 14,
			"node_B": 52,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"274": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 128,
			"node_B": 90,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"275": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 52,
			"node_B": 154,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"276": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 90,
			"node_B": 154,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"277": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 21,
			"node_B": 59,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"278": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 135,
			"node_B": 97,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"279": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 59,
			"node_B": 155,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"280": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 97,
			"node_B": 155,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"281": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 28,
			"node_B": 153,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"282": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 66,
			"node_B": 153,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"283": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 142,
			"node_B": 157,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"284": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 104,
			"node_B": 157,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"285": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 66,
			"node_B": 156,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"286": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 104,
			"node_B": 156,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"287": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 45,
			"node_B": 154,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"288": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 83,
			"node_B": 154,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"289": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 52,
			"node_B": 155,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"290": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 90,
			"node_B": 155,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"291": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 21,
			"node_B": 153,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"292": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 59,
			"node_B": 153,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"293": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 135,
			"node_B": 157,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"294": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 97,
			"node_B": 157,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"295": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 59,
			"node_B": 156,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"296": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 97,
			"node_B": 156,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"297": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 8,
			"node_B": 46,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"298": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 122,
			"node_B": 84,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"299": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 46,
			"node_B": 158,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"300": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 84,
			"node_B": 158,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"301": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 15,
			"node_B": 53,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"302": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 129,
			"node_B": 91,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"303": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 53,
			"node_B": 159,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"304": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 91,
			"node_B": 159,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"305": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 22,
			"node_B": 160,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"306": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 60,
			"node_B": 160,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"307": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 136,
			"node_B": 161,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"308": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 98,
			"node_B": 161,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"309": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 60,
			"node_B": 162,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"310": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 98,
			"node_B": 162,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"311": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 39,
			"node_B": 158,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"312": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 77,
			"node_B": 158,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"313": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 46,
			"node_B": 159,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"314": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 84,
			"node_B": 159,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"315": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 15,
			"node_B": 160,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"316": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 53,
			"node_B": 160,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"317": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 129,
			"node_B": 161,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"318": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 91,
			"node_B": 161,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"319": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 53,
			"node_B": 162,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"320": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 91,
			"node_B": 162,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"321": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 13,
			"node_B": 51,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"322": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 127,
			"node_B": 89,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"323": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 51,
			"node_B": 163,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"324": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 89,
			"node_B": 163,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"325": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 20,
			"node_B": 58,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"326": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 134,
			"node_B": 96,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"327": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 58,
			"node_B": 164,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"328": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 96,
			"node_B": 164,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"329": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 27,
			"node_B": 165,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"330": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 65,
			"node_B": 165,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"331": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 141,
			"node_B": 166,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"332": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 103,
			"node_B": 166,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"333": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 65,
			"node_B": 167,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"334": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 103,
			"node_B": 167,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"335": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 44,
			"node_B": 163,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"336": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 82,
			"node_B": 163,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"337": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 51,
			"node_B": 164,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"338": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 89,
			"node_B": 164,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"339": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 20,
			"node_B": 165,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"340": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 58,
			"node_B": 165,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"341": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 134,
			"node_B": 166,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"342": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 96,
			"node_B": 166,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"343": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 58,
			"node_B": 167,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"344": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 96,
			"node_B": 167,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"345": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 12,
			"node_B": 50,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"346": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 126,
			"node_B": 88,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"347": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 50,
			"node_B": 168,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"348": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 88,
			"node_B": 168,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"349": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 19,
			"node_B": 57,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"350": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 133,
			"node_B": 95,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"351": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 57,
			"node_B": 169,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"352": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 95,
			"node_B": 169,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"353": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 26,
			"node_B": 170,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"354": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 64,
			"node_B": 170,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"355": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 140,
			"node_B": 171,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"356": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 102,
			"node_B": 171,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"357": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 64,
			"node_B": 172,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"358": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 102,
			"node_B": 172,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"359": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 43,
			"node_B": 168,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"360": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 81,
			"node_B": 168,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"361": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 50,
			"node_B": 169,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"362": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 88,
			"node_B": 169,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"363": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 19,
			"node_B": 170,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"364": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 57,
			"node_B": 170,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"365": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 133,
			"node_B": 171,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"366": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 95,
			"node_B": 171,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"367": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 57,
			"node_B": 172,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"368": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 95,
			"node_B": 172,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"369": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 11,
			"node_B": 49,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"370": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 125,
			"node_B": 87,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"371": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 49,
			"node_B": 173,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"372": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 87,
			"node_B": 173,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"373": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 18,
			"node_B": 56,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"374": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 132,
			"node_B": 94,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"375": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 56,
			"node_B": 174,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"376": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 94,
			"node_B": 174,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"377": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 25,
			"node_B": 175,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"378": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 63,
			"node_B": 175,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"379": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 139,
			"node_B": 176,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"380": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 101,
			"node_B": 176,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"381": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 63,
			"node_B": 177,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"382": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 101,
			"node_B": 177,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"383": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 42,
			"node_B": 173,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"384": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 80,
			"node_B": 173,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"385": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 49,
			"node_B": 174,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"386": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 87,
			"node_B": 174,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"387": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 18,
			"node_B": 175,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"388": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 56,
			"node_B": 175,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"389": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 132,
			"node_B": 176,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"390": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 94,
			"node_B": 176,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"391": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 56,
			"node_B": 177,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"392": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 94,
			"node_B": 177,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"393": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 10,
			"node_B": 48,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"394": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 124,
			"node_B": 86,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"395": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 48,
			"node_B": 178,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"396": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 86,
			"node_B": 178,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"397": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 17,
			"node_B": 55,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"398": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 131,
			"node_B": 93,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"399": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 179,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"400": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 179,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"401": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 24,
			"node_B": 180,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"402": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 62,
			"node_B": 180,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"403": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 138,
			"node_B": 181,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"404": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 100,
			"node_B": 181,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"405": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 62,
			"node_B": 182,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"406": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 100,
			"node_B": 182,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"407": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 41,
			"node_B": 178,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"408": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 79,
			"node_B": 178,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"409": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 48,
			"node_B": 179,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"410": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 86,
			"node_B": 179,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"411": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 17,
			"node_B": 180,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"412": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 180,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"413": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 131,
			"node_B": 181,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"414": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 181,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"415": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 55,
			"node_B": 182,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"416": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 93,
			"node_B": 182,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"417": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 9,
			"node_B": 47,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"418": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 123,
			"node_B": 85,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"419": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 47,
			"node_B": 183,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"420": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 85,
			"node_B": 183,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"421": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 16,
			"node_B": 54,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"422": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 130,
			"node_B": 92,
			"section_id": 6,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"423": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 54,
			"node_B": 184,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"424": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 92,
			"node_B": 184,
			"section_id": 4,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"425": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 23,
			"node_B": 185,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"426": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 61,
			"node_B": 185,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"427": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 137,
			"node_B": 186,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"428": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 99,
			"node_B": 186,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"429": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 61,
			"node_B": 187,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"430": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 99,
			"node_B": 187,
			"section_id": 8,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFFF",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"431": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 40,
			"node_B": 183,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"432": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 78,
			"node_B": 183,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"433": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 47,
			"node_B": 184,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"434": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 85,
			"node_B": 184,
			"section_id": 5,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"435": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 16,
			"node_B": 185,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"436": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 54,
			"node_B": 185,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"437": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 130,
			"node_B": 186,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"438": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 92,
			"node_B": 186,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"439": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 54,
			"node_B": 187,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
			"offset_Ax": "0",
			"offset_Ay": "0",
			"offset_Az": "0",
			"offset_Bx": "0",
			"offset_By": "0",
			"offset_Bz": "0"
		},
		"440": {
			"type": "normal_continuous",
			"cable_length": null,
			"node_A": 92,
			"node_B": 187,
			"section_id": 3,
			"rotation_angle": 0,
			"fixity_A": "FFFFRR",
			"fixity_B": "FFFFRR",
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
			"name": "HW300x300",
			"area": 18.3675367351,
			"Iz": 485.306941226,
			"Iy": 162.169398677,
			"material_id": 1,
			"aux": {
				"composite": false,
				"Qz": 45.3307810881,
				"Qy": 20.8404891267,
				"centroid_point": [
					5.90551181102,
					5.90551181102
				],
				"centroid_length": [
					5.90551181102,
					5.90551181102
				],
				"depth": 11.811023622,
				"width": 11.811023622,
				"alpha": 0,
				"polygons": [
					{
						"name": "HW300x300",
						"group_id": 0,
						"points_calc": [
							[
								0,
								0,
								"regular"
							],
							[
								11.811023622,
								0,
								"regular"
							],
							[
								11.811023622,
								0.590551181102,
								"regular"
							],
							[
								6.61417322835,
								0.590551181102,
								"filletStartEnd"
							],
							[
								6.41831162909,
								0.629510475488,
								"dontShow"
							],
							[
								6.25226818287,
								0.740457159236,
								"dontShow"
							],
							[
								6.14132149909,
								0.906500605484,
								"dontShow"
							],
							[
								6.10236220472,
								1.10236220472,
								"filletStartEnd"
							],
							[
								6.10236220472,
								10.7086614173,
								"filletStartEnd"
							],
							[
								6.14132149909,
								10.9045230166,
								"dontShow"
							],
							[
								6.25226818287,
								11.0705664628,
								"dontShow"
							],
							[
								6.41831162909,
								11.1815131466,
								"dontShow"
							],
							[
								6.61417322835,
								11.2204724409,
								"filletStartEnd"
							],
							[
								11.811023622,
								11.2204724409,
								"regular"
							],
							[
								11.811023622,
								11.811023622,
								"regular"
							],
							[
								0,
								11.811023622,
								"regular"
							],
							[
								0,
								11.2204724409,
								"regular"
							],
							[
								5.1968503937,
								11.2204724409,
								"filletStartEnd"
							],
							[
								5.39271199295,
								11.1815131466,
								"dontShow"
							],
							[
								5.55875543917,
								11.0705664628,
								"dontShow"
							],
							[
								5.66970212295,
								10.9045230166,
								"dontShow"
							],
							[
								5.70866141732,
								10.7086614173,
								"filletStartEnd"
							],
							[
								5.70866141732,
								1.10236220472,
								"filletStartEnd"
							],
							[
								5.66970212295,
								0.906500605484,
								"dontShow"
							],
							[
								5.55875543917,
								0.740457159236,
								"dontShow"
							],
							[
								5.39271199295,
								0.629510475488,
								"dontShow"
							],
							[
								5.1968503937,
								0.590551181102,
								"filletStartEnd"
							],
							[
								0,
								0.590551181102,
								"regular"
							]
						],
						"points_custom_orig": [],
						"shape": "ibeam",
						"dimensions_show": true,
						"dimensions": {
							"TFw": {
								"value": 11.811023622,
								"locat": [
									[
										0,
										12.9921259843
									],
									[
										11.811023622,
										12.9921259843
									],
									{
										"placeholder": "Top Width",
										"dimension_id": "TFw",
										"dimension": 11.811023622
									}
								]
							},
							"TFt": {
								"value": 0.590551181102,
								"locat": [
									[
										-1.1811023622,
										11.811023622
									],
									[
										-1.1811023622,
										11.2204724409
									],
									{
										"placeholder": "Top Thickness",
										"dimension_id": "TFt",
										"dimension": 0.590551181102
									}
								]
							},
							"BFw": {
								"value": 11.811023622,
								"locat": [
									[
										0,
										-2.36220472441
									],
									[
										11.811023622,
										-2.36220472441
									],
									{
										"placeholder": "Bottom Width",
										"dimension_id": "BFw",
										"dimension": 11.811023622
									}
								]
							},
							"BFt": {
								"value": 0.590551181102,
								"locat": [
									[
										-1.1811023622,
										0.590551181102
									],
									[
										-1.1811023622,
										0
									],
									{
										"placeholder": "Bottom Thickness",
										"dimension_id": "BFt",
										"dimension": 0.590551181102
									}
								]
							},
							"h": {
								"value": 11.811023622,
								"locat": [
									[
										12.9921259843,
										0
									],
									[
										12.9921259843,
										11.811023622
									],
									{
										"placeholder": "Height",
										"dimension_id": "h",
										"dimension": 11.811023622
									}
								]
							},
							"Wt": {
								"value": 0.393700787402,
								"locat": [
									[
										5.70866141732,
										-1.1811023622
									],
									[
										6.10236220472,
										-1.1811023622
									],
									{
										"placeholder": "Web Thickness",
										"dimension_id": "Wt",
										"dimension": 0.393700787402
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
							"fillet_radius": 0.511811023622
						},
						"cutout": false,
						"material": {
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 11850,
							"J": 770000,
							"Iyp": 67500000,
							"Izp": 202000000,
							"Iy": 0,
							"Iz": 0,
							"Alpha": 0,
							"Cy": 0,
							"Cz": 0,
							"ry": 0,
							"rz": 0,
							"ryp": 0,
							"rzp": 0,
							"Iw": 1370000064510,
							"Syp": 682904.875,
							"Szp": 1484024
						},
						"points_centroid_shifted": [
							[
								-5.90551181102,
								-5.90551181102,
								"regular"
							],
							[
								5.90551181102,
								-5.90551181102,
								"regular"
							],
							[
								5.90551181102,
								-5.31496062992,
								"regular"
							],
							[
								0.708661417323,
								-5.31496062992,
								"filletStartEnd"
							],
							[
								0.196850393701,
								-4.8031496063,
								"filletStartEnd"
							],
							[
								0.196850393701,
								4.8031496063,
								"filletStartEnd"
							],
							[
								0.708661417323,
								5.31496062992,
								"filletStartEnd"
							],
							[
								5.90551181102,
								5.31496062992,
								"regular"
							],
							[
								5.90551181102,
								5.90551181102,
								"regular"
							],
							[
								-5.90551181102,
								5.90551181102,
								"regular"
							],
							[
								-5.90551181102,
								5.31496062992,
								"regular"
							],
							[
								-0.708661417323,
								5.31496062992,
								"filletStartEnd"
							],
							[
								-0.196850393701,
								4.8031496063,
								"filletStartEnd"
							],
							[
								-0.196850393701,
								-4.8031496063,
								"filletStartEnd"
							],
							[
								-0.708661417323,
								-5.31496062992,
								"filletStartEnd"
							],
							[
								-5.90551181102,
								-5.31496062992,
								"regular"
							]
						]
					}
				],
				"warping_constant": 53937010413.8,
				"shear_area_z": 4.29293002288,
				"shear_area_y": 12.0588789063,
				"torsion_radius": 0.874311023622
			},
			"J": 1.84993239972
		},
		"2": {
			"version": 2,
			"name": "HW350x350",
			"area": 26.6445532891,
			"Iz": 956.198824791,
			"Iy": 326.741306964,
			"material_id": 1,
			"aux": {
				"composite": false,
				"Qz": 76.8117972109,
				"Qy": 35.8947603494,
				"centroid_point": [
					6.88976377953,
					6.88976377953
				],
				"centroid_length": [
					6.88976377953,
					6.88976377953
				],
				"depth": 13.7795275591,
				"width": 13.7795275591,
				"alpha": 0,
				"polygons": [
					{
						"name": "HW350x350",
						"group_id": 0,
						"points_calc": [
							[
								0,
								0,
								"regular"
							],
							[
								13.7795275591,
								0,
								"regular"
							],
							[
								13.7795275591,
								0.748031496063,
								"regular"
							],
							[
								7.63779527559,
								0.748031496063,
								"filletStartEnd"
							],
							[
								7.44193367634,
								0.786990790449,
								"dontShow"
							],
							[
								7.27589023012,
								0.897937474197,
								"dontShow"
							],
							[
								7.16494354634,
								1.06398092044,
								"dontShow"
							],
							[
								7.12598425197,
								1.25984251969,
								"filletStartEnd"
							],
							[
								7.12598425197,
								12.5196850394,
								"filletStartEnd"
							],
							[
								7.16494354634,
								12.7155466386,
								"dontShow"
							],
							[
								7.27589023012,
								12.8815900848,
								"dontShow"
							],
							[
								7.44193367634,
								12.9925367686,
								"dontShow"
							],
							[
								7.63779527559,
								13.031496063,
								"filletStartEnd"
							],
							[
								13.7795275591,
								13.031496063,
								"regular"
							],
							[
								13.7795275591,
								13.7795275591,
								"regular"
							],
							[
								0,
								13.7795275591,
								"regular"
							],
							[
								0,
								13.031496063,
								"regular"
							],
							[
								6.14173228346,
								13.031496063,
								"filletStartEnd"
							],
							[
								6.33759388272,
								12.9925367686,
								"dontShow"
							],
							[
								6.50363732894,
								12.8815900848,
								"dontShow"
							],
							[
								6.61458401272,
								12.7155466386,
								"dontShow"
							],
							[
								6.65354330709,
								12.5196850394,
								"filletStartEnd"
							],
							[
								6.65354330709,
								1.25984251969,
								"filletStartEnd"
							],
							[
								6.61458401272,
								1.06398092044,
								"dontShow"
							],
							[
								6.50363732894,
								0.897937474197,
								"dontShow"
							],
							[
								6.33759388272,
								0.786990790449,
								"dontShow"
							],
							[
								6.14173228346,
								0.748031496063,
								"filletStartEnd"
							],
							[
								0,
								0.748031496063,
								"regular"
							]
						],
						"points_custom_orig": [],
						"shape": "ibeam",
						"dimensions_show": true,
						"dimensions": {
							"TFw": {
								"value": 13.7795275591,
								"locat": [
									[
										0,
										15.157480315
									],
									[
										13.7795275591,
										15.157480315
									],
									{
										"placeholder": "Top Width",
										"dimension_id": "TFw",
										"dimension": 13.7795275591
									}
								]
							},
							"TFt": {
								"value": 0.748031496063,
								"locat": [
									[
										-1.37795275591,
										13.7795275591
									],
									[
										-1.37795275591,
										13.031496063
									],
									{
										"placeholder": "Top Thickness",
										"dimension_id": "TFt",
										"dimension": 0.748031496063
									}
								]
							},
							"BFw": {
								"value": 13.7795275591,
								"locat": [
									[
										0,
										-2.75590551181
									],
									[
										13.7795275591,
										-2.75590551181
									],
									{
										"placeholder": "Bottom Width",
										"dimension_id": "BFw",
										"dimension": 13.7795275591
									}
								]
							},
							"BFt": {
								"value": 0.748031496063,
								"locat": [
									[
										-1.37795275591,
										0.748031496063
									],
									[
										-1.37795275591,
										0
									],
									{
										"placeholder": "Bottom Thickness",
										"dimension_id": "BFt",
										"dimension": 0.748031496063
									}
								]
							},
							"h": {
								"value": 13.7795275591,
								"locat": [
									[
										15.157480315,
										0
									],
									[
										15.157480315,
										13.7795275591
									],
									{
										"placeholder": "Height",
										"dimension_id": "h",
										"dimension": 13.7795275591
									}
								]
							},
							"Wt": {
								"value": 0.472440944882,
								"locat": [
									[
										6.65354330709,
										-1.37795275591
									],
									[
										7.12598425197,
										-1.37795275591
									],
									{
										"placeholder": "Web Thickness",
										"dimension_id": "Wt",
										"dimension": 0.472440944882
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
							"fillet_radius": 0.511811023622
						},
						"cutout": false,
						"material": {
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 17190,
							"J": 1791089,
							"Iyp": 136000000,
							"Izp": 398000000,
							"Iy": 0,
							"Iz": 0,
							"Alpha": 0,
							"Cy": 0,
							"Cz": 0,
							"ry": 0,
							"rz": 0,
							"ryp": 0,
							"rzp": 0,
							"Iw": 3720000045060,
							"Syp": 1176283,
							"Szp": 2515521
						},
						"points_centroid_shifted": [
							[
								-6.88976377953,
								-6.88976377953,
								"regular"
							],
							[
								6.88976377953,
								-6.88976377953,
								"regular"
							],
							[
								6.88976377953,
								-6.14173228346,
								"regular"
							],
							[
								0.748031496063,
								-6.14173228346,
								"filletStartEnd"
							],
							[
								0.236220472441,
								-5.62992125984,
								"filletStartEnd"
							],
							[
								0.236220472441,
								5.62992125984,
								"filletStartEnd"
							],
							[
								0.748031496063,
								6.14173228346,
								"filletStartEnd"
							],
							[
								6.88976377953,
								6.14173228346,
								"regular"
							],
							[
								6.88976377953,
								6.88976377953,
								"regular"
							],
							[
								-6.88976377953,
								6.88976377953,
								"regular"
							],
							[
								-6.88976377953,
								6.14173228346,
								"regular"
							],
							[
								-0.748031496063,
								6.14173228346,
								"filletStartEnd"
							],
							[
								-0.236220472441,
								5.62992125984,
								"filletStartEnd"
							],
							[
								-0.236220472441,
								-5.62992125984,
								"filletStartEnd"
							],
							[
								-0.748031496063,
								-6.14173228346,
								"filletStartEnd"
							],
							[
								-6.88976377953,
								-6.14173228346,
								"regular"
							]
						]
					}
				],
				"warping_constant": 146456694687,
				"shear_area_z": 5.98216916405,
				"shear_area_y": 17.6855057626,
				"torsion_radius": 1.03088188976
			},
			"J": 4.30310853492
		},
		"3": {
			"version": 2,
			"name": "CHS273x7",
			"area": 9.06696942788,
			"Iz": 124.449997799,
			"Iy": 124.449997799,
			"material_id": 1,
			"aux": {
				"composite": false,
				"Qz": 14.9611632224,
				"Qy": 14.9611756883,
				"centroid_point": [
					5.37401574803,
					5.37401574803
				],
				"centroid_length": [
					5.34644341114,
					5.36711823736
				],
				"depth": 10.7342364747,
				"width": 10.7204591592,
				"alpha": 0,
				"polygons": [
					{
						"name": "CHS273x7",
						"group_id": 0,
						"points_calc": [
							[
								10.7480314961,
								5.37401574803,
								"dontShow"
							],
							[
								10.638025078,
								6.45579716504,
								"dontShow"
							],
							[
								10.3125094994,
								7.49329032374,
								"dontShow"
							],
							[
								9.7848114065,
								8.44402013228,
								"dontShow"
							],
							[
								9.07653482102,
								9.26906360067,
								"dontShow"
							],
							[
								8.21667666969,
								9.93464335228,
								"dontShow"
							],
							[
								7.24043964618,
								10.4135104739,
								"dontShow"
							],
							[
								6.18779100902,
								10.6860600894,
								"dontShow"
							],
							[
								5.10182631709,
								10.7411339854,
								"dontShow"
							],
							[
								4.0270050924,
								10.5764774301,
								"dontShow"
							],
							[
								3.00733064222,
								10.1988314823,
								"dontShow"
							],
							[
								2.08454855835,
								9.6236570115,
								"dontShow"
							],
							[
								1.29643764773,
								8.87450172803,
								"dontShow"
							],
							[
								0.675263263634,
								7.9820361372,
								"dontShow"
							],
							[
								0.246456358322,
								6.98279788528,
								"dontShow"
							],
							[
								0.02757233689,
								5.91769590358,
								"dontShow"
							],
							[
								0.02757233689,
								4.83033559248,
								"dontShow"
							],
							[
								0.246456358322,
								3.76523361079,
								"dontShow"
							],
							[
								0.675263263634,
								2.76599535884,
								"dontShow"
							],
							[
								1.29643764773,
								1.87352976805,
								"dontShow"
							],
							[
								2.08454855835,
								1.12437448457,
								"dontShow"
							],
							[
								3.00733064222,
								0.549200013724,
								"dontShow"
							],
							[
								4.0270050924,
								0.171554065935,
								"dontShow"
							],
							[
								5.10182631709,
								0.00689751067524,
								"dontShow"
							],
							[
								6.18779100902,
								0.0619714066618,
								"dontShow"
							],
							[
								7.24043964618,
								0.334521022123,
								"dontShow"
							],
							[
								8.21667666969,
								0.81338814378,
								"dontShow"
							],
							[
								9.07653482102,
								1.4789678954,
								"dontShow"
							],
							[
								9.7848114065,
								2.30401136376,
								"dontShow"
							],
							[
								10.3125094994,
								3.25474117232,
								"dontShow"
							],
							[
								10.638025078,
								4.29223433102,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 10.7480314961,
								"locat": [
									[
										10.7480314961,
										11.8228346457
									],
									[
										0,
										11.8228346457
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 10.7480314961
									}
								]
							},
							"t": {
								"value": 0.275590551181,
								"locat": [
									[
										10.7480314961,
										12.8976377953
									],
									[
										10.4724409449,
										12.8976377953
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.275590551181
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 5849.64599609,
							"J": 104000000,
							"Iyp": 51800000,
							"Izp": 51800000,
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
							"Syp": 495406.3125,
							"Szp": 495406.3125
						},
						"points_centroid_shifted": [
							[
								5.37401574803,
								1.34275792585e-14,
								"dontShow"
							],
							[
								5.26400932996,
								1.08178141701,
								"dontShow"
							],
							[
								4.93849375142,
								2.11927457571,
								"dontShow"
							],
							[
								4.41079565846,
								3.07000438427,
								"dontShow"
							],
							[
								3.70251907298,
								3.89504785263,
								"dontShow"
							],
							[
								2.84266092164,
								4.56062760425,
								"dontShow"
							],
							[
								1.86642389816,
								5.03949472591,
								"dontShow"
							],
							[
								0.813775261,
								5.31204434138,
								"dontShow"
							],
							[
								-0.272189430964,
								5.36711823736,
								"dontShow"
							],
							[
								-1.34701065564,
								5.20246168209,
								"dontShow"
							],
							[
								-2.36668510581,
								4.82481573429,
								"dontShow"
							],
							[
								-3.28946718968,
								4.24964126346,
								"dontShow"
							],
							[
								-4.07757810031,
								3.50048597998,
								"dontShow"
							],
							[
								-4.69875248441,
								2.60802038919,
								"dontShow"
							],
							[
								-5.12755938972,
								1.60878213724,
								"dontShow"
							],
							[
								-5.34644341114,
								0.543680155563,
								"dontShow"
							],
							[
								-5.34644341114,
								-0.543680155563,
								"dontShow"
							],
							[
								-5.12755938972,
								-1.60878213724,
								"dontShow"
							],
							[
								-4.69875248441,
								-2.60802038919,
								"dontShow"
							],
							[
								-4.07757810031,
								-3.50048597998,
								"dontShow"
							],
							[
								-3.28946718968,
								-4.24964126346,
								"dontShow"
							],
							[
								-2.36668510581,
								-4.82481573429,
								"dontShow"
							],
							[
								-1.34701065564,
								-5.20246168209,
								"dontShow"
							],
							[
								-0.272189430964,
								-5.36711823736,
								"dontShow"
							],
							[
								0.813775261,
								-5.31204434138,
								"dontShow"
							],
							[
								1.86642389816,
								-5.03949472591,
								"dontShow"
							],
							[
								2.84266092164,
								-4.56062760425,
								"dontShow"
							],
							[
								3.70251907298,
								-3.89504785263,
								"dontShow"
							],
							[
								4.41079565846,
								-3.07000438427,
								"dontShow"
							],
							[
								4.93849375142,
								-2.11927457571,
								"dontShow"
							],
							[
								5.26400932996,
								-1.08178141701,
								"dontShow"
							]
						]
					},
					{
						"name": "CHS273x7",
						"group_id": 0,
						"points_calc": [
							[
								10.4724409449,
								5.37401574803,
								"dontShow"
							],
							[
								10.3680758816,
								6.40032119492,
								"dontShow"
							],
							[
								10.0592534096,
								7.38460957626,
								"dontShow"
							],
							[
								9.55861675732,
								8.28658401004,
								"dontShow"
							],
							[
								8.88666204803,
								9.06931755693,
								"dontShow"
							],
							[
								8.0708991865,
								9.70076501362,
								"dontShow"
							],
							[
								7.14472560012,
								10.155074847,
								"dontShow"
							],
							[
								6.14605894437,
								10.4136475591,
								"dontShow"
							],
							[
								5.11578474941,
								10.4658971527,
								"dontShow"
							],
							[
								4.09608256189,
								10.3096845233,
								"dontShow"
							],
							[
								3.12869910919,
								9.95140503441,
								"dontShow"
							],
							[
								2.25323918347,
								9.40572669028,
								"dontShow"
							],
							[
								1.50554421698,
								8.6949896265,
								"dontShow"
							],
							[
								0.9162249295,
								7.84829150189,
								"dontShow"
							],
							[
								0.509408121898,
								6.9002962372,
								"dontShow"
							],
							[
								0.301748922077,
								5.88981486996,
								"dontShow"
							],
							[
								0.301748922077,
								4.8582166261,
								"dontShow"
							],
							[
								0.509408121898,
								3.84773525886,
								"dontShow"
							],
							[
								0.9162249295,
								2.89973999418,
								"dontShow"
							],
							[
								1.50554421698,
								2.05304186959,
								"dontShow"
							],
							[
								2.25323918347,
								1.34230480577,
								"dontShow"
							],
							[
								3.12869910919,
								0.796626461638,
								"dontShow"
							],
							[
								4.09608256189,
								0.438346972709,
								"dontShow"
							],
							[
								5.11578474941,
								0.28213434336,
								"dontShow"
							],
							[
								6.14605894437,
								0.334383936989,
								"dontShow"
							],
							[
								7.14472560012,
								0.592956649094,
								"dontShow"
							],
							[
								8.0708991865,
								1.04726648246,
								"dontShow"
							],
							[
								8.88666204803,
								1.67871393913,
								"dontShow"
							],
							[
								9.55861675732,
								2.46144748603,
								"dontShow"
							],
							[
								10.0592534096,
								3.3634219198,
								"dontShow"
							],
							[
								10.3680758816,
								4.34771030114,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 10.7480314961,
								"locat": [
									[
										10.7480314961,
										11.8228346457
									],
									[
										0,
										11.8228346457
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 10.7480314961
									}
								]
							},
							"t": {
								"value": 0.275590551181,
								"locat": [
									[
										10.7480314961,
										12.8976377953
									],
									[
										10.4724409449,
										12.8976377953
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.275590551181
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 5849.64599609,
							"J": 104000000,
							"Iyp": 51800000,
							"Izp": 51800000,
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
							"Syp": 495406.3125,
							"Szp": 495406.3125
						},
						"cutout_parents": [
							0
						],
						"points_centroid_shifted": [
							[
								5.09842519685,
								1.34275792585e-14,
								"dontShow"
							],
							[
								4.99406013354,
								1.02630544691,
								"dontShow"
							],
							[
								4.68523766161,
								2.01059382824,
								"dontShow"
							],
							[
								4.18460100929,
								2.912568262,
								"dontShow"
							],
							[
								3.51264630001,
								3.69530180891,
								"dontShow"
							],
							[
								2.69688343848,
								4.32674926559,
								"dontShow"
							],
							[
								1.7707098521,
								4.78105909894,
								"dontShow"
							],
							[
								0.772043196331,
								5.03963181102,
								"dontShow"
							],
							[
								-0.258230998607,
								5.09188140469,
								"dontShow"
							],
							[
								-1.27793318612,
								4.93566877531,
								"dontShow"
							],
							[
								-2.24531663885,
								4.57738928638,
								"dontShow"
							],
							[
								-3.12077656456,
								4.03171094224,
								"dontShow"
							],
							[
								-3.86847153105,
								3.32097387844,
								"dontShow"
							],
							[
								-4.45779081854,
								2.47427575385,
								"dontShow"
							],
							[
								-4.86460762614,
								1.52628048918,
								"dontShow"
							],
							[
								-5.07226682594,
								0.515799121945,
								"dontShow"
							],
							[
								-5.07226682594,
								-0.515799121945,
								"dontShow"
							],
							[
								-4.86460762614,
								-1.52628048917,
								"dontShow"
							],
							[
								-4.45779081854,
								-2.47427575385,
								"dontShow"
							],
							[
								-3.86847153105,
								-3.32097387844,
								"dontShow"
							],
							[
								-3.12077656456,
								-4.03171094224,
								"dontShow"
							],
							[
								-2.24531663885,
								-4.57738928638,
								"dontShow"
							],
							[
								-1.27793318612,
								-4.93566877531,
								"dontShow"
							],
							[
								-0.258230998607,
								-5.09188140469,
								"dontShow"
							],
							[
								0.772043196331,
								-5.03963181102,
								"dontShow"
							],
							[
								1.7707098521,
								-4.78105909894,
								"dontShow"
							],
							[
								2.69688343848,
								-4.32674926559,
								"dontShow"
							],
							[
								3.51264630001,
								-3.69530180891,
								"dontShow"
							],
							[
								4.18460100929,
								-2.912568262,
								"dontShow"
							],
							[
								4.68523766161,
								-2.01059382824,
								"dontShow"
							],
							[
								4.99406013354,
								-1.02630544691,
								"dontShow"
							]
						]
					}
				],
				"warping_constant": 0,
				"shear_area_z": 4.53348434573,
				"shear_area_y": 4.53348434573,
				"torsion_radius": 5.23622047244
			},
			"J": 249.860999443
		},
		"4": {
			"name": "299 x 8",
			"material_id": 1,
			"area": 11.3361456073,
			"Iy": 186.132443729,
			"Iz": 186.132443729,
			"J": 372.264887457,
			"shear_area_y": null,
			"shear_area_z": null,
			"aux": {
				"composite": false,
				"Qz": 20.4639359503,
				"Qy": 20.463953001,
				"centroid_point": [
					5.88582677165,
					5.88582677165
				],
				"centroid_length": [
					5.85562849791,
					5.8782723552
				],
				"depth": 11.7565447104,
				"width": 11.7414552696,
				"alpha": 0,
				"polygons": [
					{
						"name": "Hollow Circular",
						"group_id": 0,
						"points_calc": [
							[
								11.7716535433,
								5.88582677165,
								"dontShow"
							],
							[
								11.6511703235,
								7.07063499028,
								"dontShow"
							],
							[
								11.2946532613,
								8.20693702122,
								"dontShow"
							],
							[
								10.7166982071,
								9.24821252587,
								"dontShow"
							],
							[
								9.94096670874,
								10.1518315626,
								"dontShow"
							],
							[
								8.99921730488,
								10.880799862,
								"dontShow"
							],
							[
								7.93000532677,
								11.4052733762,
								"dontShow"
							],
							[
								6.77710443846,
								11.7037800979,
								"dontShow"
							],
							[
								5.58771453776,
								11.7640991269,
								"dontShow"
							],
							[
								4.41052938689,
								11.5837609949,
								"dontShow"
							],
							[
								3.29374308433,
								11.1701487664,
								"dontShow"
							],
							[
								2.28307699248,
								10.5401957745,
								"dontShow"
							],
							[
								1.4199078999,
								9.71969236878,
								"dontShow"
							],
							[
								0.739574050646,
								8.74223005504,
								"dontShow"
							],
							[
								0.269928392448,
								7.64782625531,
								"dontShow"
							],
							[
								0.0301982737367,
								6.48128598965,
								"dontShow"
							],
							[
								0.0301982737367,
								5.29036755366,
								"dontShow"
							],
							[
								0.269928392448,
								4.12382728799,
								"dontShow"
							],
							[
								0.739574050646,
								3.02942348825,
								"dontShow"
							],
							[
								1.4199078999,
								2.05196117453,
								"dontShow"
							],
							[
								2.28307699248,
								1.23145776881,
								"dontShow"
							],
							[
								3.29374308433,
								0.601504776937,
								"dontShow"
							],
							[
								4.41052938689,
								0.187892548406,
								"dontShow"
							],
							[
								5.58771453776,
								0.00755441645386,
								"dontShow"
							],
							[
								6.77710443846,
								0.0678734453917,
								"dontShow"
							],
							[
								7.93000532677,
								0.366380167087,
								"dontShow"
							],
							[
								8.99921730488,
								0.89085368128,
								"dontShow"
							],
							[
								9.94096670874,
								1.61982198068,
								"dontShow"
							],
							[
								10.7166982071,
								2.52344101745,
								"dontShow"
							],
							[
								11.2946532613,
								3.56471652207,
								"dontShow"
							],
							[
								11.6511703235,
								4.70101855303,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 11.7716535433,
								"locat": [
									[
										11.7716535433,
										12.9488188976
									],
									[
										0,
										12.9488188976
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 11.7716535433
									}
								]
							},
							"t": {
								"value": 0.314960629921,
								"locat": [
									[
										11.7716535433,
										14.125984252
									],
									[
										11.4566929134,
										14.125984252
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.314960629921
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "standard",
						"points_centroid_shifted": [
							[
								5.88582677165,
								1.15253388635e-13,
								"dontShow"
							],
							[
								5.76534355185,
								1.18480821863,
								"dontShow"
							],
							[
								5.40882648965,
								2.32111024958,
								"dontShow"
							],
							[
								4.83087143543,
								3.3623857542,
								"dontShow"
							],
							[
								4.05513993709,
								4.26600479098,
								"dontShow"
							],
							[
								3.11339053322,
								4.99497309035,
								"dontShow"
							],
							[
								2.04417855513,
								5.51944660457,
								"dontShow"
							],
							[
								0.891277666807,
								5.81795332626,
								"dontShow"
							],
							[
								-0.298112233913,
								5.8782723552,
								"dontShow"
							],
							[
								-1.47529738475,
								5.69793422327,
								"dontShow"
							],
							[
								-2.59208368732,
								5.28432199472,
								"dontShow"
							],
							[
								-3.60274977917,
								4.65436900283,
								"dontShow"
							],
							[
								-4.46591887177,
								3.83386559713,
								"dontShow"
							],
							[
								-5.14625272102,
								2.8564032834,
								"dontShow"
							],
							[
								-5.61589837921,
								1.76199948364,
								"dontShow"
							],
							[
								-5.85562849791,
								0.595459217996,
								"dontShow"
							],
							[
								-5.85562849791,
								-0.595459217996,
								"dontShow"
							],
							[
								-5.61589837921,
								-1.76199948364,
								"dontShow"
							],
							[
								-5.14625272102,
								-2.8564032834,
								"dontShow"
							],
							[
								-4.46591887177,
								-3.83386559713,
								"dontShow"
							],
							[
								-3.60274977917,
								-4.65436900283,
								"dontShow"
							],
							[
								-2.59208368732,
								-5.28432199472,
								"dontShow"
							],
							[
								-1.47529738475,
								-5.69793422323,
								"dontShow"
							],
							[
								-0.298112233913,
								-5.8782723552,
								"dontShow"
							],
							[
								0.891277666807,
								-5.81795332626,
								"dontShow"
							],
							[
								2.04417855513,
								-5.51944660457,
								"dontShow"
							],
							[
								3.11339053322,
								-4.99497309035,
								"dontShow"
							],
							[
								4.05513993709,
								-4.26600479098,
								"dontShow"
							],
							[
								4.83087143543,
								-3.3623857542,
								"dontShow"
							],
							[
								5.40882648965,
								-2.32111024958,
								"dontShow"
							],
							[
								5.76534355185,
								-1.18480821863,
								"dontShow"
							]
						]
					},
					{
						"name": "Hollow Circular",
						"group_id": 0,
						"points_calc": [
							[
								11.4566929134,
								5.88582677165,
								"dontShow"
							],
							[
								11.3426569562,
								7.00723388161,
								"dontShow"
							],
							[
								11.0052177301,
								8.08273045272,
								"dontShow"
							],
							[
								10.4581900367,
								9.06828552898,
								"dontShow"
							],
							[
								9.7239692539,
								9.9235503698,
								"dontShow"
							],
							[
								8.83261446697,
								10.6135103321,
								"dontShow"
							],
							[
								7.82061784559,
								11.109918374,
								"dontShow"
							],
							[
								6.72941065028,
								11.3924514918,
								"dontShow"
							],
							[
								5.60366703185,
								11.4495427467,
								"dontShow"
							],
							[
								4.48947506634,
								11.2788548157,
								"dontShow"
							],
							[
								3.43244990372,
								10.887375683,
								"dontShow"
							],
							[
								2.47586627833,
								10.2911325503,
								"dontShow"
							],
							[
								1.65888683618,
								9.5145356813,
								"dontShow"
							],
							[
								1.01495881163,
								8.58937904323,
								"dontShow"
							],
							[
								0.570444693677,
								7.55353865752,
								"dontShow"
							],
							[
								0.343542942522,
								6.44942195122,
								"dontShow"
							],
							[
								0.343542942522,
								5.32223159209,
								"dontShow"
							],
							[
								0.570444693677,
								4.21811488579,
								"dontShow"
							],
							[
								1.01495881163,
								3.18227450007,
								"dontShow"
							],
							[
								1.65888683618,
								2.257117862,
								"dontShow"
							],
							[
								2.47586627833,
								1.48052099304,
								"dontShow"
							],
							[
								3.43244990372,
								0.884277860264,
								"dontShow"
							],
							[
								4.48947506634,
								0.492798727575,
								"dontShow"
							],
							[
								5.60366703185,
								0.322110796665,
								"dontShow"
							],
							[
								6.72941065028,
								0.379202051479,
								"dontShow"
							],
							[
								7.82061784559,
								0.661735169339,
								"dontShow"
							],
							[
								8.83261446697,
								1.1581432112,
								"dontShow"
							],
							[
								9.7239692539,
								1.84810317351,
								"dontShow"
							],
							[
								10.4581900367,
								2.70336801433,
								"dontShow"
							],
							[
								11.0052177301,
								3.68892309061,
								"dontShow"
							],
							[
								11.3426569562,
								4.76441966169,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 11.7716535433,
								"locat": [
									[
										11.7716535433,
										12.9488188976
									],
									[
										0,
										12.9488188976
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 11.7716535433
									}
								]
							},
							"t": {
								"value": 0.314960629921,
								"locat": [
									[
										11.7716535433,
										14.125984252
									],
									[
										11.4566929134,
										14.125984252
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.314960629921
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "standard",
						"cutout_parents": [
							0
						],
						"points_centroid_shifted": [
							[
								5.57086614173,
								1.15253388635e-13,
								"dontShow"
							],
							[
								5.45683018453,
								1.12140710994,
								"dontShow"
							],
							[
								5.11939095843,
								2.19690368104,
								"dontShow"
							],
							[
								4.572363265,
								3.18245875732,
								"dontShow"
							],
							[
								3.83814248225,
								4.03772359815,
								"dontShow"
							],
							[
								2.94678769533,
								4.72768356047,
								"dontShow"
							],
							[
								1.93479107392,
								5.22409160232,
								"dontShow"
							],
							[
								0.843583878618,
								5.50662472016,
								"dontShow"
							],
							[
								-0.282159739791,
								5.563715975,
								"dontShow"
							],
							[
								-1.3963517053,
								5.39302804409,
								"dontShow"
							],
							[
								-2.45337686793,
								5.00154891138,
								"dontShow"
							],
							[
								-3.40996049333,
								4.40530577862,
								"dontShow"
							],
							[
								-4.22693993547,
								3.62870890965,
								"dontShow"
							],
							[
								-4.87086796,
								2.70355227158,
								"dontShow"
							],
							[
								-5.31538207799,
								1.66771188585,
								"dontShow"
							],
							[
								-5.54228382913,
								0.563595179575,
								"dontShow"
							],
							[
								-5.54228382913,
								-0.563595179575,
								"dontShow"
							],
							[
								-5.31538207799,
								-1.66771188585,
								"dontShow"
							],
							[
								-4.87086796,
								-2.70355227158,
								"dontShow"
							],
							[
								-4.22693993547,
								-3.62870890965,
								"dontShow"
							],
							[
								-3.40996049333,
								-4.40530577862,
								"dontShow"
							],
							[
								-2.45337686793,
								-5.00154891138,
								"dontShow"
							],
							[
								-1.3963517053,
								-5.39302804409,
								"dontShow"
							],
							[
								-0.282159739791,
								-5.563715975,
								"dontShow"
							],
							[
								0.843583878618,
								-5.50662472016,
								"dontShow"
							],
							[
								1.93479107392,
								-5.22409160232,
								"dontShow"
							],
							[
								2.94678769533,
								-4.72768356047,
								"dontShow"
							],
							[
								3.83814248225,
								-4.03772359815,
								"dontShow"
							],
							[
								4.572363265,
								-3.18245875732,
								"dontShow"
							],
							[
								5.11939095843,
								-2.19690368104,
								"dontShow"
							],
							[
								5.45683018453,
								-1.12140710994,
								"dontShow"
							]
						]
					}
				],
				"warping_constant": 0,
				"shear_area_z": 5.66807280175,
				"shear_area_y": 5.66807280175,
				"torsion_radius": 5.72834645669
			},
			"version": 2
		},
		"5": {
			"version": 2,
			"name": "CHS273x8",
			"area": 10.323020646,
			"Iz": 140.546812187,
			"Iy": 140.546812187,
			"material_id": 1,
			"aux": {
				"composite": false,
				"Qz": 16.971391572,
				"Qy": 16.9714057131,
				"centroid_point": [
					5.37401574803,
					5.37401574803
				],
				"centroid_length": [
					5.34644341114,
					5.36711823736
				],
				"depth": 10.7342364747,
				"width": 10.7204591592,
				"alpha": 0,
				"polygons": [
					{
						"name": "CHS273x8",
						"group_id": 0,
						"points_calc": [
							[
								10.7480314961,
								5.37401574803,
								"dontShow"
							],
							[
								10.638025078,
								6.45579716504,
								"dontShow"
							],
							[
								10.3125094994,
								7.49329032374,
								"dontShow"
							],
							[
								9.7848114065,
								8.44402013228,
								"dontShow"
							],
							[
								9.07653482102,
								9.26906360067,
								"dontShow"
							],
							[
								8.21667666969,
								9.93464335228,
								"dontShow"
							],
							[
								7.24043964618,
								10.4135104739,
								"dontShow"
							],
							[
								6.18779100902,
								10.6860600894,
								"dontShow"
							],
							[
								5.10182631709,
								10.7411339854,
								"dontShow"
							],
							[
								4.0270050924,
								10.5764774301,
								"dontShow"
							],
							[
								3.00733064222,
								10.1988314823,
								"dontShow"
							],
							[
								2.08454855835,
								9.6236570115,
								"dontShow"
							],
							[
								1.29643764773,
								8.87450172803,
								"dontShow"
							],
							[
								0.675263263634,
								7.9820361372,
								"dontShow"
							],
							[
								0.246456358322,
								6.98279788528,
								"dontShow"
							],
							[
								0.02757233689,
								5.91769590358,
								"dontShow"
							],
							[
								0.02757233689,
								4.83033559248,
								"dontShow"
							],
							[
								0.246456358322,
								3.76523361079,
								"dontShow"
							],
							[
								0.675263263634,
								2.76599535884,
								"dontShow"
							],
							[
								1.29643764773,
								1.87352976805,
								"dontShow"
							],
							[
								2.08454855835,
								1.12437448457,
								"dontShow"
							],
							[
								3.00733064222,
								0.549200013724,
								"dontShow"
							],
							[
								4.0270050924,
								0.171554065935,
								"dontShow"
							],
							[
								5.10182631709,
								0.00689751067524,
								"dontShow"
							],
							[
								6.18779100902,
								0.0619714066618,
								"dontShow"
							],
							[
								7.24043964618,
								0.334521022123,
								"dontShow"
							],
							[
								8.21667666969,
								0.81338814378,
								"dontShow"
							],
							[
								9.07653482102,
								1.4789678954,
								"dontShow"
							],
							[
								9.7848114065,
								2.30401136376,
								"dontShow"
							],
							[
								10.3125094994,
								3.25474117232,
								"dontShow"
							],
							[
								10.638025078,
								4.29223433102,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 10.7480314961,
								"locat": [
									[
										10.7480314961,
										11.8228346457
									],
									[
										0,
										11.8228346457
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 10.7480314961
									}
								]
							},
							"t": {
								"value": 0.314960629921,
								"locat": [
									[
										10.7480314961,
										12.8976377953
									],
									[
										10.4330708661,
										12.8976377953
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.314960629921
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 6660,
							"J": 117000000,
							"Iyp": 58500000,
							"Izp": 58500000,
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
							"Syp": 562000,
							"Szp": 562000
						},
						"points_centroid_shifted": [
							[
								5.37401574803,
								-7.27327209835e-14,
								"dontShow"
							],
							[
								5.26400932996,
								1.08178141701,
								"dontShow"
							],
							[
								4.93849375142,
								2.11927457571,
								"dontShow"
							],
							[
								4.41079565846,
								3.07000438427,
								"dontShow"
							],
							[
								3.70251907298,
								3.89504785263,
								"dontShow"
							],
							[
								2.84266092164,
								4.56062760425,
								"dontShow"
							],
							[
								1.86642389816,
								5.03949472591,
								"dontShow"
							],
							[
								0.813775261,
								5.31204434138,
								"dontShow"
							],
							[
								-0.272189430964,
								5.36711823736,
								"dontShow"
							],
							[
								-1.34701065564,
								5.20246168209,
								"dontShow"
							],
							[
								-2.36668510581,
								4.82481573429,
								"dontShow"
							],
							[
								-3.28946718968,
								4.24964126346,
								"dontShow"
							],
							[
								-4.07757810031,
								3.50048597998,
								"dontShow"
							],
							[
								-4.69875248441,
								2.60802038919,
								"dontShow"
							],
							[
								-5.12755938972,
								1.60878213724,
								"dontShow"
							],
							[
								-5.34644341114,
								0.543680155563,
								"dontShow"
							],
							[
								-5.34644341114,
								-0.543680155563,
								"dontShow"
							],
							[
								-5.12755938972,
								-1.60878213724,
								"dontShow"
							],
							[
								-4.69875248441,
								-2.60802038919,
								"dontShow"
							],
							[
								-4.07757810031,
								-3.50048597998,
								"dontShow"
							],
							[
								-3.28946718968,
								-4.24964126346,
								"dontShow"
							],
							[
								-2.36668510581,
								-4.82481573429,
								"dontShow"
							],
							[
								-1.34701065564,
								-5.20246168209,
								"dontShow"
							],
							[
								-0.272189430964,
								-5.36711823736,
								"dontShow"
							],
							[
								0.813775261,
								-5.31204434138,
								"dontShow"
							],
							[
								1.86642389816,
								-5.03949472591,
								"dontShow"
							],
							[
								2.84266092164,
								-4.56062760425,
								"dontShow"
							],
							[
								3.70251907298,
								-3.89504785263,
								"dontShow"
							],
							[
								4.41079565846,
								-3.07000438427,
								"dontShow"
							],
							[
								4.93849375142,
								-2.11927457571,
								"dontShow"
							],
							[
								5.26400932996,
								-1.08178141701,
								"dontShow"
							]
						]
					},
					{
						"name": "CHS273x8",
						"group_id": 0,
						"points_calc": [
							[
								10.4330708661,
								5.37401574803,
								"dontShow"
							],
							[
								10.3295117107,
								6.39239605634,
								"dontShow"
							],
							[
								10.0230739682,
								7.3690837552,
								"dontShow"
							],
							[
								9.52630323602,
								8.26409313543,
								"dontShow"
							],
							[
								8.85953736618,
								9.04078240783,
								"dontShow"
							],
							[
								8.05007383177,
								9.66735382236,
								"dontShow"
							],
							[
								7.131052165,
								10.1181554717,
								"dontShow"
							],
							[
								6.14009722083,
								10.3747314833,
								"dontShow"
							],
							[
								5.11777881118,
								10.4265776052,
								"dontShow"
							],
							[
								4.10595077185,
								10.2715712509,
								"dontShow"
							],
							[
								3.14603746161,
								9.91605839902,
								"dontShow"
							],
							[
								2.2773378442,
								9.37459378724,
								"dontShow"
							],
							[
								1.53541658402,
								8.66934504055,
								"dontShow"
							],
							[
								0.950648024622,
								7.82918512539,
								"dontShow"
							],
							[
								0.546972659551,
								6.88851028748,
								"dontShow"
							],
							[
								0.340917005675,
								5.88583186516,
								"dontShow"
							],
							[
								0.340917005675,
								4.86219963091,
								"dontShow"
							],
							[
								0.546972659551,
								3.85952120858,
								"dontShow"
							],
							[
								0.950648024622,
								2.91884637066,
								"dontShow"
							],
							[
								1.53541658402,
								2.07868645552,
								"dontShow"
							],
							[
								2.2773378442,
								1.3734377088,
								"dontShow"
							],
							[
								3.14603746161,
								0.831973097055,
								"dontShow"
							],
							[
								4.10595077185,
								0.476460245106,
								"dontShow"
							],
							[
								5.11777881118,
								0.321453890887,
								"dontShow"
							],
							[
								6.14009722083,
								0.37330001275,
								"dontShow"
							],
							[
								7.131052165,
								0.629876024374,
								"dontShow"
							],
							[
								8.05007383177,
								1.0806776737,
								"dontShow"
							],
							[
								8.85953736618,
								1.70724908823,
								"dontShow"
							],
							[
								9.52630323602,
								2.48393836064,
								"dontShow"
							],
							[
								10.0230739682,
								3.37894774086,
								"dontShow"
							],
							[
								10.3295117107,
								4.35563543972,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 10.7480314961,
								"locat": [
									[
										10.7480314961,
										11.8228346457
									],
									[
										0,
										11.8228346457
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 10.7480314961
									}
								]
							},
							"t": {
								"value": 0.314960629921,
								"locat": [
									[
										10.7480314961,
										12.8976377953
									],
									[
										10.4330708661,
										12.8976377953
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.314960629921
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 6660,
							"J": 117000000,
							"Iyp": 58500000,
							"Izp": 58500000,
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
							"Syp": 562000,
							"Szp": 562000
						},
						"cutout_parents": [
							0
						],
						"points_centroid_shifted": [
							[
								5.05905511811,
								-7.27327209835e-14,
								"dontShow"
							],
							[
								4.95549596264,
								1.01838030832,
								"dontShow"
							],
							[
								4.6490582202,
								1.99506800717,
								"dontShow"
							],
							[
								4.15228748799,
								2.89007738739,
								"dontShow"
							],
							[
								3.48552161816,
								3.6667666598,
								"dontShow"
							],
							[
								2.67605808374,
								4.29333807433,
								"dontShow"
							],
							[
								1.75703641695,
								4.74413972366,
								"dontShow"
							],
							[
								0.766081472807,
								5.00071573528,
								"dontShow"
							],
							[
								-0.256236936842,
								5.05256185713,
								"dontShow"
							],
							[
								-1.26806497619,
								4.89755550291,
								"dontShow"
							],
							[
								-2.22797828643,
								4.54204265098,
								"dontShow"
							],
							[
								-3.09667790383,
								4.00057803921,
								"dontShow"
							],
							[
								-3.83859916402,
								3.29532929251,
								"dontShow"
							],
							[
								-4.42336772343,
								2.45516937737,
								"dontShow"
							],
							[
								-4.82704308846,
								1.51449453945,
								"dontShow"
							],
							[
								-5.03309874236,
								0.511816117142,
								"dontShow"
							],
							[
								-5.03309874236,
								-0.511816117142,
								"dontShow"
							],
							[
								-4.82704308846,
								-1.51449453945,
								"dontShow"
							],
							[
								-4.42336772343,
								-2.45516937737,
								"dontShow"
							],
							[
								-3.83859916402,
								-3.29532929251,
								"dontShow"
							],
							[
								-3.09667790383,
								-4.00057803921,
								"dontShow"
							],
							[
								-2.22797828643,
								-4.54204265098,
								"dontShow"
							],
							[
								-1.26806497619,
								-4.89755550291,
								"dontShow"
							],
							[
								-0.256236936842,
								-5.05256185713,
								"dontShow"
							],
							[
								0.766081472807,
								-5.00071573528,
								"dontShow"
							],
							[
								1.75703641695,
								-4.74413972366,
								"dontShow"
							],
							[
								2.67605808374,
								-4.29333807433,
								"dontShow"
							],
							[
								3.48552161816,
								-3.6667666598,
								"dontShow"
							],
							[
								4.15228748799,
								-2.89007738739,
								"dontShow"
							],
							[
								4.6490582202,
								-1.99506800717,
								"dontShow"
							],
							[
								4.95549596264,
								-1.01838030832,
								"dontShow"
							]
						]
					}
				],
				"warping_constant": 0,
				"shear_area_z": 5.16164705315,
				"shear_area_y": 5.16164705315,
				"torsion_radius": 5.21653543307
			},
			"J": 281.093624373
		},
		"6": {
			"version": 2,
			"name": "219 7",
			"area": 7.22630587761,
			"Iz": 62.9946796545,
			"Iy": 62.9946796545,
			"material_id": 1,
			"aux": {
				"composite": false,
				"Qz": 9.50454582834,
				"Qy": 9.50455374739,
				"centroid_point": [
					4.31102362205,
					4.31102362205
				],
				"centroid_length": [
					4.28890515398,
					4.30549045413
				],
				"depth": 8.61098090827,
				"width": 8.59992877602,
				"alpha": 0,
				"polygons": [
					{
						"name": "Hollow Circular",
						"group_id": 0,
						"points_calc": [
							[
								8.62204724409,
								4.31102362205,
								"dontShow"
							],
							[
								8.53380033728,
								5.17882629724,
								"dontShow"
							],
							[
								8.27267245559,
								6.01110102894,
								"dontShow"
							],
							[
								7.8493542052,
								6.77377439185,
								"dontShow"
							],
							[
								7.281176285,
								7.4356224489,
								"dontShow"
							],
							[
								6.59139996579,
								7.96954906283,
								"dontShow"
							],
							[
								5.80826477114,
								8.35369521535,
								"dontShow"
							],
							[
								4.96383234791,
								8.57233391787,
								"dontShow"
							],
							[
								4.09267385874,
								8.61651407618,
								"dontShow"
							],
							[
								3.23045463456,
								8.48442694945,
								"dontShow"
							],
							[
								2.41247403167,
								8.18148020012,
								"dontShow"
							],
							[
								1.67222027209,
								7.72007650374,
								"dontShow"
							],
							[
								1.0399994317,
								7.11910578181,
								"dontShow"
							],
							[
								0.541694705992,
								6.40317184634,
								"dontShow"
							],
							[
								0.197706748984,
								5.60158511677,
								"dontShow"
							],
							[
								0.0221184680546,
								4.74716264795,
								"dontShow"
							],
							[
								0.0221184680546,
								3.87488459616,
								"dontShow"
							],
							[
								0.197706748984,
								3.02046212734,
								"dontShow"
							],
							[
								0.541694705992,
								2.21887539775,
								"dontShow"
							],
							[
								1.0399994317,
								1.50294146228,
								"dontShow"
							],
							[
								1.67222027209,
								0.901970740366,
								"dontShow"
							],
							[
								2.41247403167,
								0.440567043976,
								"dontShow"
							],
							[
								3.23045463456,
								0.137620294652,
								"dontShow"
							],
							[
								4.09267385874,
								0.00553316790433,
								"dontShow"
							],
							[
								4.96383234791,
								0.0497133262232,
								"dontShow"
							],
							[
								5.80826477114,
								0.268352028736,
								"dontShow"
							],
							[
								6.59139996579,
								0.652498181272,
								"dontShow"
							],
							[
								7.281176285,
								1.18642479521,
								"dontShow"
							],
							[
								7.8493542052,
								1.84827285225,
								"dontShow"
							],
							[
								8.27267245559,
								2.61094621516,
								"dontShow"
							],
							[
								8.53380033728,
								3.44322094686,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 8.62204724409,
								"locat": [
									[
										8.62204724409,
										9.4842519685
									],
									[
										0,
										9.4842519685
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 8.62204724409
									}
								]
							},
							"t": {
								"value": 0.275590551181,
								"locat": [
									[
										8.62204724409,
										10.3464566929
									],
									[
										8.34645669291,
										10.3464566929
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.275590551181
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "standard",
						"points_centroid_shifted": [
							[
								4.31102362205,
								-6.15430716012e-15,
								"dontShow"
							],
							[
								4.22277671524,
								0.867802675185,
								"dontShow"
							],
							[
								3.96164883354,
								1.70007740689,
								"dontShow"
							],
							[
								3.53833058316,
								2.4627507698,
								"dontShow"
							],
							[
								2.97015266294,
								3.12459882683,
								"dontShow"
							],
							[
								2.28037634373,
								3.65852544078,
								"dontShow"
							],
							[
								1.49724114907,
								4.04267159331,
								"dontShow"
							],
							[
								0.652808725858,
								4.26131029583,
								"dontShow"
							],
							[
								-0.218349763301,
								4.30549045413,
								"dontShow"
							],
							[
								-1.08056898749,
								4.1734033274,
								"dontShow"
							],
							[
								-1.89854959038,
								3.87045657807,
								"dontShow"
							],
							[
								-2.63880334996,
								3.40905288168,
								"dontShow"
							],
							[
								-3.27102419035,
								2.80808215977,
								"dontShow"
							],
							[
								-3.76932891606,
								2.0921482243,
								"dontShow"
							],
							[
								-4.11331687307,
								1.29056149471,
								"dontShow"
							],
							[
								-4.28890515398,
								0.43613902589,
								"dontShow"
							],
							[
								-4.28890515398,
								-0.43613902589,
								"dontShow"
							],
							[
								-4.11331687307,
								-1.29056149471,
								"dontShow"
							],
							[
								-3.76932891606,
								-2.0921482243,
								"dontShow"
							],
							[
								-3.27102419035,
								-2.80808215977,
								"dontShow"
							],
							[
								-2.63880334996,
								-3.40905288168,
								"dontShow"
							],
							[
								-1.89854959038,
								-3.87045657807,
								"dontShow"
							],
							[
								-1.08056898749,
								-4.1734033274,
								"dontShow"
							],
							[
								-0.218349763301,
								-4.30549045413,
								"dontShow"
							],
							[
								0.652808725858,
								-4.26131029583,
								"dontShow"
							],
							[
								1.49724114907,
								-4.04267159331,
								"dontShow"
							],
							[
								2.28037634373,
								-3.65852544078,
								"dontShow"
							],
							[
								2.97015266294,
								-3.12459882683,
								"dontShow"
							],
							[
								3.53833058316,
								-2.4627507698,
								"dontShow"
							],
							[
								3.96164883354,
								-1.70007740689,
								"dontShow"
							],
							[
								4.22277671524,
								-0.867802675185,
								"dontShow"
							]
						],
						"saved_name": "219 7"
					},
					{
						"name": "Hollow Circular",
						"group_id": 0,
						"points_calc": [
							[
								8.34645669291,
								4.31102362205,
								"dontShow"
							],
							[
								8.26385114087,
								5.12335032713,
								"dontShow"
							],
							[
								8.01941636579,
								5.90242028146,
								"dontShow"
							],
							[
								7.62315955606,
								6.61633826957,
								"dontShow"
							],
							[
								7.09130351201,
								7.23587640516,
								"dontShow"
							],
							[
								6.44562248264,
								7.73567072413,
								"dontShow"
							],
							[
								5.71255072508,
								8.09525958839,
								"dontShow"
							],
							[
								4.92210028323,
								8.29992138756,
								"dontShow"
							],
							[
								4.1066322911,
								8.3412772435,
								"dontShow"
							],
							[
								3.29953210407,
								8.21763404268,
								"dontShow"
							],
							[
								2.53384249863,
								7.9340537522,
								"dontShow"
							],
							[
								1.8409108972,
								7.50214618252,
								"dontShow"
							],
							[
								1.24910600094,
								6.93959368028,
								"dontShow"
							],
							[
								0.782656371858,
								6.26942721098,
								"dontShow"
							],
							[
								0.460658512559,
								5.5190834687,
								"dontShow"
							],
							[
								0.296295053241,
								4.71928161433,
								"dontShow"
							],
							[
								0.296295053241,
								3.90276562978,
								"dontShow"
							],
							[
								0.460658512559,
								3.1029637754,
								"dontShow"
							],
							[
								0.782656371858,
								2.35262003309,
								"dontShow"
							],
							[
								1.24910600094,
								1.68245356382,
								"dontShow"
							],
							[
								1.8409108972,
								1.11990106157,
								"dontShow"
							],
							[
								2.53384249863,
								0.68799349189,
								"dontShow"
							],
							[
								3.29953210407,
								0.404413201425,
								"dontShow"
							],
							[
								4.1066322911,
								0.280770000589,
								"dontShow"
							],
							[
								4.92210028323,
								0.32212585655,
								"dontShow"
							],
							[
								5.71255072508,
								0.526787655705,
								"dontShow"
							],
							[
								6.44562248264,
								0.886376519953,
								"dontShow"
							],
							[
								7.09130351201,
								1.38617083894,
								"dontShow"
							],
							[
								7.62315955606,
								2.00570897452,
								"dontShow"
							],
							[
								8.01941636579,
								2.71962696263,
								"dontShow"
							],
							[
								8.26385114087,
								3.49869691696,
								"dontShow"
							]
						],
						"points_custom_orig": [],
						"shape": "hollow circle",
						"dimensions_show": true,
						"dimensions": {
							"D": {
								"value": 8.62204724409,
								"locat": [
									[
										8.62204724409,
										9.4842519685
									],
									[
										0,
										9.4842519685
									],
									{
										"placeholder": "Diameter",
										"dimension_id": "D",
										"dimension": 8.62204724409
									}
								]
							},
							"t": {
								"value": 0.275590551181,
								"locat": [
									[
										8.62204724409,
										10.3464566929
									],
									[
										8.34645669291,
										10.3464566929
									],
									{
										"placeholder": "Thickness",
										"dimension_id": "t",
										"dimension": 0.275590551181
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
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "standard",
						"cutout_parents": [
							0
						],
						"points_centroid_shifted": [
							[
								4.03543307087,
								-6.15430716012e-15,
								"dontShow"
							],
							[
								3.95282751882,
								0.812326705083,
								"dontShow"
							],
							[
								3.70839274374,
								1.59139665941,
								"dontShow"
							],
							[
								3.312135934,
								2.30531464753,
								"dontShow"
							],
							[
								2.78027988997,
								2.92485278311,
								"dontShow"
							],
							[
								2.13459886057,
								3.42464710209,
								"dontShow"
							],
							[
								1.40152710302,
								3.78423596634,
								"dontShow"
							],
							[
								0.611076661189,
								3.98889776551,
								"dontShow"
							],
							[
								-0.204391330944,
								4.03025362146,
								"dontShow"
							],
							[
								-1.01149151797,
								3.90661042062,
								"dontShow"
							],
							[
								-1.77718112341,
								3.62303013016,
								"dontShow"
							],
							[
								-2.47011272485,
								3.19112256048,
								"dontShow"
							],
							[
								-3.0619176211,
								2.62857005823,
								"dontShow"
							],
							[
								-3.52836725019,
								1.95840358895,
								"dontShow"
							],
							[
								-3.85036510949,
								1.20805984665,
								"dontShow"
							],
							[
								-4.01472856882,
								0.408257992272,
								"dontShow"
							],
							[
								-4.01472856882,
								-0.408257992272,
								"dontShow"
							],
							[
								-3.85036510949,
								-1.20805984665,
								"dontShow"
							],
							[
								-3.52836725019,
								-1.95840358895,
								"dontShow"
							],
							[
								-3.0619176211,
								-2.62857005823,
								"dontShow"
							],
							[
								-2.47011272485,
								-3.19112256048,
								"dontShow"
							],
							[
								-1.77718112341,
								-3.62303013016,
								"dontShow"
							],
							[
								-1.01149151797,
								-3.90661042062,
								"dontShow"
							],
							[
								-0.204391330944,
								-4.03025362146,
								"dontShow"
							],
							[
								0.611076661189,
								-3.98889776551,
								"dontShow"
							],
							[
								1.40152710302,
								-3.78423596634,
								"dontShow"
							],
							[
								2.13459886057,
								-3.42464710209,
								"dontShow"
							],
							[
								2.78027988997,
								-2.92485278311,
								"dontShow"
							],
							[
								3.312135934,
								-2.30531464753,
								"dontShow"
							],
							[
								3.70839274374,
								-1.59139665941,
								"dontShow"
							],
							[
								3.95282751882,
								-0.812326705083,
								"dontShow"
							]
						],
						"saved_name": "219 7"
					}
				],
				"warping_constant": 0,
				"shear_area_z": 3.61315293719,
				"shear_area_y": 3.61315293719,
				"torsion_radius": 4.17322834646
			},
			"J": 125.989359309
		},
		"7": {
			"version": 2,
			"name": "HW400x400",
			"area": 33.8985677971,
			"Iz": 1600.07140028,
			"Iy": 538.162152646,
			"material_id": 1,
			"aux": {
				"composite": false,
				"Qz": 112.255899874,
				"Qy": 51.8833818364,
				"centroid_point": [
					7.87401574803,
					7.87401574803
				],
				"centroid_length": [
					7.87401574803,
					7.87401574803
				],
				"depth": 15.7480314961,
				"width": 15.7480314961,
				"alpha": 0,
				"polygons": [
					{
						"name": "HW400x400",
						"group_id": 0,
						"points_calc": [
							[
								0,
								0,
								"regular"
							],
							[
								15.7480314961,
								0,
								"regular"
							],
							[
								15.7480314961,
								0.826771653543,
								"regular"
							],
							[
								8.99606299213,
								0.826771653543,
								"filletStartEnd"
							],
							[
								8.6646049011,
								0.892702767118,
								"dontShow"
							],
							[
								8.38360829976,
								1.08045869346,
								"dontShow"
							],
							[
								8.19585237343,
								1.3614552948,
								"dontShow"
							],
							[
								8.12992125984,
								1.69291338583,
								"filletStartEnd"
							],
							[
								8.12992125984,
								14.0551181102,
								"filletStartEnd"
							],
							[
								8.19585237343,
								14.3865762013,
								"dontShow"
							],
							[
								8.38360829976,
								14.6675728026,
								"dontShow"
							],
							[
								8.6646049011,
								14.8553287289,
								"dontShow"
							],
							[
								8.99606299213,
								14.9212598425,
								"filletStartEnd"
							],
							[
								15.7480314961,
								14.9212598425,
								"regular"
							],
							[
								15.7480314961,
								15.7480314961,
								"regular"
							],
							[
								0,
								15.7480314961,
								"regular"
							],
							[
								0,
								14.9212598425,
								"regular"
							],
							[
								6.75196850394,
								14.9212598425,
								"filletStartEnd"
							],
							[
								7.08342659496,
								14.8553287289,
								"dontShow"
							],
							[
								7.3644231963,
								14.6675728026,
								"dontShow"
							],
							[
								7.55217912264,
								14.3865762013,
								"dontShow"
							],
							[
								7.61811023622,
								14.0551181102,
								"filletStartEnd"
							],
							[
								7.61811023622,
								1.69291338583,
								"filletStartEnd"
							],
							[
								7.55217912264,
								1.3614552948,
								"dontShow"
							],
							[
								7.3644231963,
								1.08045869346,
								"dontShow"
							],
							[
								7.08342659496,
								0.892702767118,
								"dontShow"
							],
							[
								6.75196850394,
								0.826771653543,
								"filletStartEnd"
							],
							[
								0,
								0.826771653543,
								"regular"
							]
						],
						"points_custom_orig": [],
						"shape": "ibeam",
						"dimensions_show": true,
						"dimensions": {
							"TFw": {
								"value": 15.7480314961,
								"locat": [
									[
										0,
										17.3228346457
									],
									[
										15.7480314961,
										17.3228346457
									],
									{
										"placeholder": "Top Width",
										"dimension_id": "TFw",
										"dimension": 15.7480314961
									}
								]
							},
							"TFt": {
								"value": 0.826771653543,
								"locat": [
									[
										-1.57480314961,
										15.7480314961
									],
									[
										-1.57480314961,
										14.9212598425
									],
									{
										"placeholder": "Top Thickness",
										"dimension_id": "TFt",
										"dimension": 0.826771653543
									}
								]
							},
							"BFw": {
								"value": 15.7480314961,
								"locat": [
									[
										0,
										-3.14960629921
									],
									[
										15.7480314961,
										-3.14960629921
									],
									{
										"placeholder": "Bottom Width",
										"dimension_id": "BFw",
										"dimension": 15.7480314961
									}
								]
							},
							"BFt": {
								"value": 0.826771653543,
								"locat": [
									[
										-1.57480314961,
										0.826771653543
									],
									[
										-1.57480314961,
										0
									],
									{
										"placeholder": "Bottom Thickness",
										"dimension_id": "BFt",
										"dimension": 0.826771653543
									}
								]
							},
							"h": {
								"value": 15.7480314961,
								"locat": [
									[
										17.3228346457,
										0
									],
									[
										17.3228346457,
										15.7480314961
									],
									{
										"placeholder": "Height",
										"dimension_id": "h",
										"dimension": 15.7480314961
									}
								]
							},
							"Wt": {
								"value": 0.511811023622,
								"locat": [
									[
										7.61811023622,
										-1.57480314961
									],
									[
										8.12992125984,
										-1.57480314961
									],
									{
										"placeholder": "Web Thickness",
										"dimension_id": "Wt",
										"dimension": 0.511811023622
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
							"fillet_radius": 0.866141732283
						},
						"cutout": false,
						"material": {
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 21870,
							"J": 2747154,
							"Iyp": 224000000,
							"Izp": 666000000,
							"Iy": 0,
							"Iz": 0,
							"Alpha": 0,
							"Cy": 0,
							"Cz": 0,
							"ry": 0,
							"rz": 0,
							"ryp": 0,
							"rzp": 0,
							"Iw": 8039999995900,
							"Syp": 1699903,
							"Szp": 3672878
						},
						"points_centroid_shifted": [
							[
								-7.87401574803,
								-7.87401574803,
								"regular"
							],
							[
								7.87401574803,
								-7.87401574803,
								"regular"
							],
							[
								7.87401574803,
								-7.04724409449,
								"regular"
							],
							[
								1.12204724409,
								-7.04724409449,
								"filletStartEnd"
							],
							[
								0.255905511811,
								-6.1811023622,
								"filletStartEnd"
							],
							[
								0.255905511811,
								6.1811023622,
								"filletStartEnd"
							],
							[
								1.12204724409,
								7.04724409449,
								"filletStartEnd"
							],
							[
								7.87401574803,
								7.04724409449,
								"regular"
							],
							[
								7.87401574803,
								7.87401574803,
								"regular"
							],
							[
								-7.87401574803,
								7.87401574803,
								"regular"
							],
							[
								-7.87401574803,
								7.04724409449,
								"regular"
							],
							[
								-1.12204724409,
								7.04724409449,
								"filletStartEnd"
							],
							[
								-0.255905511811,
								6.1811023622,
								"filletStartEnd"
							],
							[
								-0.255905511811,
								-6.1811023622,
								"filletStartEnd"
							],
							[
								-1.12204724409,
								-7.04724409449,
								"filletStartEnd"
							],
							[
								-7.87401574803,
								-7.04724409449,
								"regular"
							]
						]
					}
				],
				"warping_constant": 316535432909,
				"shear_area_z": 7.58185814914,
				"shear_area_y": 22.7382637943,
				"torsion_radius": 1.18871259843
			},
			"J": 6.60006388523
		},
		"8": {
			"version": 2,
			"name": "HM340x250",
			"area": 15.4271808544,
			"Iz": 509.332037326,
			"Iy": 87.6916007661,
			"material_id": 1,
			"aux": {
				"composite": false,
				"Qz": 42.2370253054,
				"Qy": 13.5783186122,
				"centroid_point": [
					4.92125984252,
					6.69291338583
				],
				"centroid_length": [
					4.92125984252,
					6.69291338583
				],
				"depth": 13.3858267717,
				"width": 9.84251968504,
				"alpha": 0,
				"polygons": [
					{
						"name": "HM340x250",
						"group_id": 0,
						"points_calc": [
							[
								0,
								0,
								"regular"
							],
							[
								9.84251968504,
								0,
								"regular"
							],
							[
								9.84251968504,
								0.551181102362,
								"regular"
							],
							[
								5.61023622047,
								0.551181102362,
								"filletStartEnd"
							],
							[
								5.41437462122,
								0.590140396748,
								"dontShow"
							],
							[
								5.248331175,
								0.701087080496,
								"dontShow"
							],
							[
								5.13738449122,
								0.867130526744,
								"dontShow"
							],
							[
								5.09842519685,
								1.06299212598,
								"filletStartEnd"
							],
							[
								5.09842519685,
								12.3228346457,
								"filletStartEnd"
							],
							[
								5.13738449122,
								12.5186962449,
								"dontShow"
							],
							[
								5.248331175,
								12.6847396911,
								"dontShow"
							],
							[
								5.41437462122,
								12.7956863749,
								"dontShow"
							],
							[
								5.61023622047,
								12.8346456693,
								"filletStartEnd"
							],
							[
								9.84251968504,
								12.8346456693,
								"regular"
							],
							[
								9.84251968504,
								13.3858267717,
								"regular"
							],
							[
								0,
								13.3858267717,
								"regular"
							],
							[
								0,
								12.8346456693,
								"regular"
							],
							[
								4.23228346457,
								12.8346456693,
								"filletStartEnd"
							],
							[
								4.42814506382,
								12.7956863749,
								"dontShow"
							],
							[
								4.59418851004,
								12.6847396911,
								"dontShow"
							],
							[
								4.70513519382,
								12.5186962449,
								"dontShow"
							],
							[
								4.74409448819,
								12.3228346457,
								"filletStartEnd"
							],
							[
								4.74409448819,
								1.06299212598,
								"filletStartEnd"
							],
							[
								4.70513519382,
								0.867130526744,
								"dontShow"
							],
							[
								4.59418851004,
								0.701087080496,
								"dontShow"
							],
							[
								4.42814506382,
								0.590140396748,
								"dontShow"
							],
							[
								4.23228346457,
								0.551181102362,
								"filletStartEnd"
							],
							[
								0,
								0.551181102362,
								"regular"
							]
						],
						"points_custom_orig": [],
						"shape": "ibeam",
						"dimensions_show": true,
						"dimensions": {
							"TFw": {
								"value": 9.84251968504,
								"locat": [
									[
										0,
										14.7244094488
									],
									[
										9.84251968504,
										14.7244094488
									],
									{
										"placeholder": "Top Width",
										"dimension_id": "TFw",
										"dimension": 9.84251968504
									}
								]
							},
							"TFt": {
								"value": 0.551181102362,
								"locat": [
									[
										-1.33858267717,
										13.3858267717
									],
									[
										-1.33858267717,
										12.8346456693
									],
									{
										"placeholder": "Top Thickness",
										"dimension_id": "TFt",
										"dimension": 0.551181102362
									}
								]
							},
							"BFw": {
								"value": 9.84251968504,
								"locat": [
									[
										0,
										-2.67716535433
									],
									[
										9.84251968504,
										-2.67716535433
									],
									{
										"placeholder": "Bottom Width",
										"dimension_id": "BFw",
										"dimension": 9.84251968504
									}
								]
							},
							"BFt": {
								"value": 0.551181102362,
								"locat": [
									[
										-1.33858267717,
										0.551181102362
									],
									[
										-1.33858267717,
										0
									],
									{
										"placeholder": "Bottom Thickness",
										"dimension_id": "BFt",
										"dimension": 0.551181102362
									}
								]
							},
							"h": {
								"value": 13.3858267717,
								"locat": [
									[
										11.1811023622,
										0
									],
									[
										11.1811023622,
										13.3858267717
									],
									{
										"placeholder": "Height",
										"dimension_id": "h",
										"dimension": 13.3858267717
									}
								]
							},
							"Wt": {
								"value": 0.354330708661,
								"locat": [
									[
										4.74409448819,
										-1.33858267717
									],
									[
										5.09842519685,
										-1.33858267717
									],
									{
										"placeholder": "Web Thickness",
										"dimension_id": "Wt",
										"dimension": 0.354330708661
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
							"fillet_radius": 0.511811023622
						},
						"cutout": false,
						"material": {
							"id": 1,
							"name": "Structural Steel",
							"density": 7849.04705324,
							"elasticity_modulus": 199947.962086,
							"poissons_ratio": 0.27,
							"yield_strength": 262.000777906,
							"ultimate_strength": 413.685438798,
							"class": "steel"
						},
						"type": "library",
						"results": {
							"A": 9953,
							"J": 536551.3125,
							"Iyp": 36500000,
							"Izp": 212000000,
							"Iy": 0,
							"Iz": 0,
							"Alpha": 0,
							"Cy": 0,
							"Cz": 0,
							"ry": 0,
							"rz": 0,
							"ryp": 0,
							"rzp": 0,
							"Iw": 969000026112,
							"Syp": 444899.90625,
							"Szp": 1382363
						},
						"points_centroid_shifted": [
							[
								-4.92125984252,
								-6.69291338583,
								"regular"
							],
							[
								4.92125984252,
								-6.69291338583,
								"regular"
							],
							[
								4.92125984252,
								-6.14173228346,
								"regular"
							],
							[
								0.688976377953,
								-6.14173228346,
								"filletStartEnd"
							],
							[
								0.177165354331,
								-5.62992125984,
								"filletStartEnd"
							],
							[
								0.177165354331,
								5.62992125984,
								"filletStartEnd"
							],
							[
								0.688976377953,
								6.14173228346,
								"filletStartEnd"
							],
							[
								4.92125984252,
								6.14173228346,
								"regular"
							],
							[
								4.92125984252,
								6.69291338583,
								"regular"
							],
							[
								-4.92125984252,
								6.69291338583,
								"regular"
							],
							[
								-4.92125984252,
								6.14173228346,
								"regular"
							],
							[
								-0.688976377953,
								6.14173228346,
								"filletStartEnd"
							],
							[
								-0.177165354331,
								5.62992125984,
								"filletStartEnd"
							],
							[
								-0.177165354331,
								-5.62992125984,
								"filletStartEnd"
							],
							[
								-0.688976377953,
								-6.14173228346,
								"filletStartEnd"
							],
							[
								-4.92125984252,
								-6.14173228346,
								"regular"
							]
						]
					}
				],
				"warping_constant": 38149607327.2,
				"shear_area_z": 4.49747193397,
				"shear_area_y": 9.44900722153,
				"torsion_radius": 0.780255905512
			},
			"J": 1.28906968455
		}
	},
	"materials": {
		"1": {
			"name": "Structural Steel",
			"elasticity_modulus": 29000,
			"density": 490,
			"poissons_ratio": 0.27,
			"yield_strength": 36,
			"ultimate_strength": 60,
			"class": "steel"
		},
		"2": {
			"id": 2,
			"name": "Aluminium",
			"density": 167,
			"elasticity_modulus": 9999.99999999,
			"poissons_ratio": 0.32,
			"yield_strength": 15.0000000001,
			"ultimate_strength": 22,
			"class": "aluminium"
		},
		"3": {
			"id": 3,
			"name": "Carbon Fibre Reinforced Plastic",
			"density": 200,
			"elasticity_modulus": 21800,
			"poissons_ratio": 0.2,
			"yield_strength": null,
			"ultimate_strength": 460,
			"class": "other"
		},
		"4": {
			"id": 4,
			"name": "Concrete",
			"density": 150,
			"elasticity_modulus": 2500.00000001,
			"poissons_ratio": 0.2,
			"yield_strength": null,
			"ultimate_strength": 0.5,
			"class": "concrete"
		},
		"5": {
			"id": 5,
			"name": "Concrete High Strength",
			"density": 150,
			"elasticity_modulus": 4399.99999999,
			"poissons_ratio": 0.2,
			"yield_strength": null,
			"ultimate_strength": 0.75,
			"class": "concrete"
		},
		"6": {
			"id": 6,
			"name": "Oakwood",
			"density": 56,
			"elasticity_modulus": 1600,
			"poissons_ratio": 0.3,
			"yield_strength": 0.65,
			"ultimate_strength": 0.75,
			"class": "wood"
		},
		"7": {
			"id": 7,
			"name": "Glass",
			"density": 160,
			"elasticity_modulus": 9999.99999999,
			"poissons_ratio": 0.24,
			"yield_strength": null,
			"ultimate_strength": 4.80000000001,
			"class": "other"
		}
	},
	"supports": {
		"1": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 1,
			"restraint_code": "RFFRRR"
		},
		"2": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 7,
			"restraint_code": "RFFRRR"
		},
		"3": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 4,
			"restraint_code": "RFFRRR"
		},
		"4": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 2,
			"restraint_code": "FFFFRR"
		},
		"5": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 3,
			"restraint_code": "FFFFRR"
		},
		"6": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 5,
			"restraint_code": "FFFFRR"
		},
		"7": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 6,
			"restraint_code": "FFFFRR"
		},
		"8": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 39,
			"restraint_code": "RFFRRR"
		},
		"9": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 40,
			"restraint_code": "FFFFRR"
		},
		"10": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 41,
			"restraint_code": "FFFFRR"
		},
		"11": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 42,
			"restraint_code": "RFFRRR"
		},
		"12": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 43,
			"restraint_code": "FFFFRR"
		},
		"13": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 44,
			"restraint_code": "FFFFRR"
		},
		"14": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 45,
			"restraint_code": "RFFRRR"
		},
		"15": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 77,
			"restraint_code": "RFFRRR"
		},
		"16": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 78,
			"restraint_code": "FFFFRR"
		},
		"17": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 79,
			"restraint_code": "FFFFRR"
		},
		"18": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 80,
			"restraint_code": "RFFRRR"
		},
		"19": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 81,
			"restraint_code": "FFFFRR"
		},
		"20": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 82,
			"restraint_code": "FFFFRR"
		},
		"21": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 83,
			"restraint_code": "RFFRRR"
		},
		"22": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 115,
			"restraint_code": "RFFRRR"
		},
		"23": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 116,
			"restraint_code": "FFFFRR"
		},
		"24": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 117,
			"restraint_code": "FFFFRR"
		},
		"25": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 118,
			"restraint_code": "RFFRRR"
		},
		"26": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 119,
			"restraint_code": "FFFFRR"
		},
		"27": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 120,
			"restraint_code": "FFFFRR"
		},
		"28": {
			"tx": 0,
			"ty": 0,
			"tz": 0,
			"rx": 0,
			"ry": 0,
			"rz": 0,
			"node": 121,
			"restraint_code": "RFFRRR"
		}
	},
	"settlements": {},
	"point_loads": {
		"1": {
			"x_mag": 0,
			"y_mag": -117,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 28
		},
		"2": {
			"x_mag": 0,
			"y_mag": -176,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 66
		},
		"3": {
			"x_mag": 0,
			"y_mag": -176,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 104
		},
		"4": {
			"x_mag": 0,
			"y_mag": -116,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 142
		},
		"5": {
			"x_mag": 0,
			"y_mag": -27,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 28
		},
		"6": {
			"x_mag": 0,
			"y_mag": -38,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 66
		},
		"7": {
			"x_mag": 0,
			"y_mag": -38,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 104
		},
		"8": {
			"x_mag": 0,
			"y_mag": -28,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 142
		},
		"9": {
			"x_mag": 0,
			"y_mag": -29,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 28
		},
		"10": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 66
		},
		"11": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 104
		},
		"12": {
			"x_mag": 0,
			"y_mag": -29,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 142
		},
		"13": {
			"x_mag": 0,
			"y_mag": -100,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 22
		},
		"14": {
			"x_mag": 0,
			"y_mag": -158,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 60
		},
		"15": {
			"x_mag": 0,
			"y_mag": -158,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 98
		},
		"16": {
			"x_mag": 0,
			"y_mag": -100,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 136
		},
		"17": {
			"x_mag": 0,
			"y_mag": -28,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 22
		},
		"18": {
			"x_mag": 0,
			"y_mag": -38,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 60
		},
		"19": {
			"x_mag": 0,
			"y_mag": -38,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 98
		},
		"20": {
			"x_mag": 0,
			"y_mag": -28,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 136
		},
		"21": {
			"x_mag": 0,
			"y_mag": -29,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 22
		},
		"22": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 60
		},
		"23": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 98
		},
		"24": {
			"x_mag": 0,
			"y_mag": -29,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 136
		},
		"25": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 22
		},
		"26": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 28
		},
		"27": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 60
		},
		"28": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 66
		},
		"29": {
			"x_mag": 0,
			"y_mag": -211,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 27
		},
		"30": {
			"x_mag": 0,
			"y_mag": -315,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 65
		},
		"31": {
			"x_mag": 0,
			"y_mag": -315,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 103
		},
		"32": {
			"x_mag": 0,
			"y_mag": -200,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 141
		},
		"33": {
			"x_mag": 0,
			"y_mag": -44,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 27
		},
		"34": {
			"x_mag": 0,
			"y_mag": -47,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 65
		},
		"35": {
			"x_mag": 0,
			"y_mag": -47,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 103
		},
		"36": {
			"x_mag": 0,
			"y_mag": -44,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 141
		},
		"37": {
			"x_mag": 0,
			"y_mag": -58,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 27
		},
		"38": {
			"x_mag": 0,
			"y_mag": -85,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 65
		},
		"39": {
			"x_mag": 0,
			"y_mag": -85,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 103
		},
		"40": {
			"x_mag": 0,
			"y_mag": -58,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 141
		},
		"41": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 98
		},
		"42": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 104
		},
		"43": {
			"x_mag": 0,
			"y_mag": -202,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 26
		},
		"44": {
			"x_mag": 0,
			"y_mag": -302,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 64
		},
		"45": {
			"x_mag": 0,
			"y_mag": -301,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 102
		},
		"46": {
			"x_mag": 0,
			"y_mag": -191,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 140
		},
		"47": {
			"x_mag": 0,
			"y_mag": -42,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 26
		},
		"48": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 64
		},
		"49": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 102
		},
		"50": {
			"x_mag": 0,
			"y_mag": -42,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 140
		},
		"51": {
			"x_mag": 0,
			"y_mag": -55,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 26
		},
		"52": {
			"x_mag": 0,
			"y_mag": -81,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 64
		},
		"53": {
			"x_mag": 0,
			"y_mag": -81,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 102
		},
		"54": {
			"x_mag": 0,
			"y_mag": -55,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 140
		},
		"55": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 136
		},
		"56": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 0,
			"load_group": "WIND",
			"type": "N",
			"node": 142
		},
		"57": {
			"x_mag": 0,
			"y_mag": -198,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 25
		},
		"58": {
			"x_mag": 0,
			"y_mag": -295,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 63
		},
		"59": {
			"x_mag": 0,
			"y_mag": -295,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 101
		},
		"60": {
			"x_mag": 0,
			"y_mag": -187,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 139
		},
		"61": {
			"x_mag": 0,
			"y_mag": -42,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 25
		},
		"62": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 63
		},
		"63": {
			"x_mag": 0,
			"y_mag": -43,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 101
		},
		"64": {
			"x_mag": 0,
			"y_mag": -42,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 139
		},
		"65": {
			"x_mag": 0,
			"y_mag": -55,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 25
		},
		"66": {
			"x_mag": 0,
			"y_mag": -81,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 63
		},
		"67": {
			"x_mag": 0,
			"y_mag": -81,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 101
		},
		"68": {
			"x_mag": 0,
			"y_mag": -55,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 139
		},
		"69": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 63,
			"load_group": "WIND",
			"type": "N",
			"node": 39
		},
		"70": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": 63,
			"load_group": "WIND",
			"type": "N",
			"node": 28
		},
		"71": {
			"x_mag": 0,
			"y_mag": -189,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 24
		},
		"72": {
			"x_mag": 0,
			"y_mag": -294,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 62
		},
		"73": {
			"x_mag": 0,
			"y_mag": -294,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 100
		},
		"74": {
			"x_mag": 0,
			"y_mag": -187,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 138
		},
		"75": {
			"x_mag": 0,
			"y_mag": -41,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 24
		},
		"76": {
			"x_mag": 0,
			"y_mag": -42,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 62
		},
		"77": {
			"x_mag": 0,
			"y_mag": -42,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 100
		},
		"78": {
			"x_mag": 0,
			"y_mag": -41,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 138
		},
		"79": {
			"x_mag": 0,
			"y_mag": -55,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 24
		},
		"80": {
			"x_mag": 0,
			"y_mag": -81,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 62
		},
		"81": {
			"x_mag": 0,
			"y_mag": -81,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 100
		},
		"82": {
			"x_mag": 0,
			"y_mag": -55,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 138
		},
		"83": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -63,
			"load_group": "WIND",
			"type": "N",
			"node": 28
		},
		"84": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -63,
			"load_group": "WIND",
			"type": "N",
			"node": 142
		},
		"85": {
			"x_mag": 0,
			"y_mag": -195,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 23
		},
		"86": {
			"x_mag": 0,
			"y_mag": -304,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 61
		},
		"87": {
			"x_mag": 0,
			"y_mag": -304,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 99
		},
		"88": {
			"x_mag": 0,
			"y_mag": -193,
			"z_mag": 0,
			"load_group": "Dead",
			"type": "N",
			"node": 137
		},
		"89": {
			"x_mag": 0,
			"y_mag": -44,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 23
		},
		"90": {
			"x_mag": 0,
			"y_mag": -47,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 61
		},
		"91": {
			"x_mag": 0,
			"y_mag": -47,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 99
		},
		"92": {
			"x_mag": 0,
			"y_mag": -44,
			"z_mag": 0,
			"load_group": "LIVE",
			"type": "N",
			"node": 137
		},
		"93": {
			"x_mag": 0,
			"y_mag": -58,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 23
		},
		"94": {
			"x_mag": 0,
			"y_mag": -85,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 61
		},
		"95": {
			"x_mag": 0,
			"y_mag": -85,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 99
		},
		"96": {
			"x_mag": 0,
			"y_mag": -58,
			"z_mag": 0,
			"load_group": "SNOW",
			"type": "N",
			"node": 137
		},
		"97": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -94.3,
			"load_group": "WIND",
			"type": "N",
			"node": 22
		},
		"98": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -94.3,
			"load_group": "WIND",
			"type": "N",
			"node": 136
		},
		"99": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -162,
			"load_group": "WIND",
			"type": "N",
			"node": 27
		},
		"100": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -162,
			"load_group": "WIND",
			"type": "N",
			"node": 141
		},
		"101": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -167,
			"load_group": "WIND",
			"type": "N",
			"node": 26
		},
		"102": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -167,
			"load_group": "WIND",
			"type": "N",
			"node": 140
		},
		"103": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -166,
			"load_group": "WIND",
			"type": "N",
			"node": 25
		},
		"104": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -166,
			"load_group": "WIND",
			"type": "N",
			"node": 139
		},
		"105": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -166,
			"load_group": "WIND",
			"type": "N",
			"node": 24
		},
		"106": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -166,
			"load_group": "WIND",
			"type": "N",
			"node": 138
		},
		"107": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -155,
			"load_group": "WIND",
			"type": "N",
			"node": 23
		},
		"108": {
			"x_mag": 0,
			"y_mag": 0,
			"z_mag": -155,
			"load_group": "WIND",
			"type": "N",
			"node": 137
		}
	},
	"moments": {},
	"distributed_loads": {
		"1": {
			"member": 3,
			"x_mag_A": 1.193,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.193,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"2": {
			"member": 3,
			"x_mag_A": 1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"3": {
			"member": 207,
			"x_mag_A": 1.193,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.193,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"4": {
			"member": 207,
			"x_mag_A": 1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"5": {
			"member": 9,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"6": {
			"member": 9,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"7": {
			"member": 15,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"8": {
			"member": 21,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"9": {
			"member": 137,
			"x_mag_A": 1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"10": {
			"member": 138,
			"x_mag_A": 1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"11": {
			"member": 6,
			"x_mag_A": -0.689,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -0.689,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"12": {
			"member": 6,
			"x_mag_A": -1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"13": {
			"member": 210,
			"x_mag_A": -1.193,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -1.193,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"14": {
			"member": 210,
			"x_mag_A": -1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"15": {
			"member": 18,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"16": {
			"member": 12,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"17": {
			"member": 15,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"18": {
			"member": 21,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"19": {
			"member": 140,
			"x_mag_A": -1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"20": {
			"member": 141,
			"x_mag_A": -1.816,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -1.816,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"21": {
			"member": 18,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"22": {
			"member": 12,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"23": {
			"member": 19,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.317,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.317,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"24": {
			"member": 20,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.317,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.317,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"25": {
			"member": 213,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"26": {
			"member": 225,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"27": {
			"member": 223,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": 0.317,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": 0.317,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"28": {
			"member": 224,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": 0.317,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": 0.317,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"29": {
			"member": 219,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"30": {
			"member": 222,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"31": {
			"member": 216,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"32": {
			"member": 213,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"33": {
			"member": 3,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.735,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.735,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"34": {
			"member": 3,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.6,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.6,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"35": {
			"member": 207,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.735,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.735,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"36": {
			"member": 207,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.6,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.6,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"37": {
			"member": 6,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.735,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.735,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"38": {
			"member": 6,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.084,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.084,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"39": {
			"member": 210,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.735,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.735,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"40": {
			"member": 210,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.084,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.084,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"41": {
			"member": 219,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"42": {
			"member": 225,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"43": {
			"member": 222,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"44": {
			"member": 216,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"45": {
			"member": 137,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.405,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.405,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"46": {
			"member": 138,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.405,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.405,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"47": {
			"member": 140,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.405,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.405,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"48": {
			"member": 141,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.405,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.405,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"49": {
			"member": 143,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"50": {
			"member": 144,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"51": {
			"member": 149,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"52": {
			"member": 150,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"53": {
			"member": 155,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"54": {
			"member": 156,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"55": {
			"member": 152,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"56": {
			"member": 153,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"57": {
			"member": 146,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 5,
			"position_B": 100,
			"load_group": "WIND",
			"axes": "global"
		},
		"58": {
			"member": 147,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 0,
			"position_B": 59,
			"load_group": "WIND",
			"axes": "global"
		},
		"59": {
			"member": 213,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"60": {
			"member": 219,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"61": {
			"member": 225,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"62": {
			"member": 222,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"63": {
			"member": 216,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 0,
			"position_B": 30.24,
			"load_group": "WIND",
			"axes": "global"
		},
		"64": {
			"member": 213,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"65": {
			"member": 219,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"66": {
			"member": 225,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"67": {
			"member": 222,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"68": {
			"member": 216,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -1.444,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -1.444,
			"position_A": 30.24,
			"position_B": 93.4,
			"load_group": "WIND",
			"axes": "global"
		},
		"69": {
			"member": 2,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.735,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.735,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"70": {
			"member": 5,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.735,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.735,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"71": {
			"member": 2,
			"x_mag_A": 1.193,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.193,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"72": {
			"member": 5,
			"x_mag_A": -1.193,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -1.193,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"73": {
			"member": 8,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"74": {
			"member": 14,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"75": {
			"member": 20,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"76": {
			"member": 17,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"77": {
			"member": 11,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"78": {
			"member": 209,
			"x_mag_A": -1.193,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": -1.193,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"79": {
			"member": 206,
			"x_mag_A": 1.193,
			"y_mag_A": 0,
			"z_mag_A": 0,
			"x_mag_B": 1.193,
			"y_mag_B": 0,
			"z_mag_B": 0,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"80": {
			"member": 212,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"81": {
			"member": 218,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"82": {
			"member": 224,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"83": {
			"member": 221,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"84": {
			"member": 215,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.836,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.836,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		},
		"85": {
			"member": 206,
			"x_mag_A": 0,
			"y_mag_A": 0,
			"z_mag_A": -0.735,
			"x_mag_B": 0,
			"y_mag_B": 0,
			"z_mag_B": -0.735,
			"position_A": 65.9,
			"position_B": 100,
			"load_group": "LG",
			"axes": "global"
		}
	},
	"pressures": {},
	"area_loads": {},
	"member_prestress_loads": {},
	"self_weight": {},
	"load_combinations": {
		"1": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 1. D",
			"LG": 0
		},
		"2": {
			"Dead": 1,
			"LIVE": 1,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 2. D + L",
			"LG": 0
		},
		"3": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 1,
			"WIND": 0,
			"name": "ULS: 3. D + (S or Lr or R)",
			"LG": 0
		},
		"4": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 3. D + (S or Lr or R)",
			"LG": 0
		},
		"5": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 3. D + (S or Lr or R)",
			"LG": 0
		},
		"6": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0.75,
			"WIND": 0,
			"name": "ULS: 4. D + 0.75L + 0.75(S or Lr or R)",
			"LG": 0
		},
		"7": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 4. D + 0.75L + 0.75(S or Lr or R)",
			"LG": 0
		},
		"8": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 4. D + 0.75L + 0.75(S or Lr or R)",
			"LG": 0
		},
		"9": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0.6,
			"name": "ULS: 5a. D + 0.6W",
			"LG": 0
		},
		"10": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 5b. D + 0.7E",
			"LG": 0
		},
		"11": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0.75,
			"WIND": 0.45,
			"name": "ULS: 6a. D + 0.75L + 0.75(0.6)W + 0.75(S or Lr or R)",
			"LG": 0
		},
		"12": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0.45,
			"name": "ULS: 6a. D + 0.75L + 0.75(0.6)W + 0.75(S or Lr or R)",
			"LG": 0
		},
		"13": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0.45,
			"name": "ULS: 6a. D + 0.75L + 0.75(0.6)W + 0.75(S or Lr or R)",
			"LG": 0
		},
		"14": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0.75,
			"WIND": 0,
			"name": "ULS: 6b. D + 0.75L + 0.75(0.7)E + 0.75S",
			"LG": 0
		},
		"15": {
			"Dead": 0.6,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0.6,
			"name": "ULS: 7. 0.6D + 0.6W",
			"LG": 0
		},
		"16": {
			"Dead": 0.6,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 8. 0.6D + 0.7E",
			"LG": 0
		},
		"17": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 1. D",
			"LG": 0
		},
		"18": {
			"Dead": 1,
			"LIVE": 1,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 2. D + L",
			"LG": 0
		},
		"19": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 1,
			"WIND": 0,
			"name": "ULS: 3. D + (S or Lr or R)",
			"LG": 0
		},
		"20": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 3. D + (S or Lr or R)",
			"LG": 0
		},
		"21": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 3. D + (S or Lr or R)",
			"LG": 0
		},
		"22": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0.75,
			"WIND": 0,
			"name": "ULS: 4. D + 0.75L + 0.75(S or Lr or R)",
			"LG": 0
		},
		"23": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 4. D + 0.75L + 0.75(S or Lr or R)",
			"LG": 0
		},
		"24": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 4. D + 0.75L + 0.75(S or Lr or R)",
			"LG": 0
		},
		"25": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0.6,
			"name": "ULS: 5a. D + 0.6W",
			"LG": 0
		},
		"26": {
			"Dead": 1,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 5b. D + 0.7E",
			"LG": 0
		},
		"27": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0.75,
			"WIND": 0.45,
			"name": "ULS: 6a. D + 0.75L + 0.75(0.6)W + 0.75(S or Lr or R)",
			"LG": 0
		},
		"28": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0.45,
			"name": "ULS: 6a. D + 0.75L + 0.75(0.6)W + 0.75(S or Lr or R)",
			"LG": 0
		},
		"29": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0,
			"WIND": 0.45,
			"name": "ULS: 6a. D + 0.75L + 0.75(0.6)W + 0.75(S or Lr or R)",
			"LG": 0
		},
		"30": {
			"Dead": 1,
			"LIVE": 0.75,
			"SNOW": 0.75,
			"WIND": 0,
			"name": "ULS: 6b. D + 0.75L + 0.75(0.7)E + 0.75S",
			"LG": 0
		},
		"31": {
			"Dead": 0.6,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0.6,
			"name": "ULS: 7. 0.6D + 0.6W",
			"LG": 0
		},
		"32": {
			"Dead": 0.6,
			"LIVE": 0,
			"SNOW": 0,
			"WIND": 0,
			"name": "ULS: 8. 0.6D + 0.7E",
			"LG": 0
		}
	},
	"load_cases": {
		"AISC": {
			"Dead": "Dead: dead",
			"LIVE": "Live: live",
			"SNOW": "Snow: snow",
			"WIND": "Wind: wind"
		}
	},
	"nodal_masses": {},
	"nodal_masses_conversion_map": {},
	"spectral_loads": {}
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