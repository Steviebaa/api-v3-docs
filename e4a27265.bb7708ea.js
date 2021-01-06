(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),b=(a(0),a(119)),l=a(125),i=a(126),c={id:"S3D.results",title:"S3D.results"},s={unversionedId:"S3D.results",id:"S3D.results",isDocsHomePage:!1,title:"S3D.results",description:"---",source:"@site/docs/docs-S3D.results.md",slug:"/S3D.results",permalink:"/api-v3-docs/docs/S3D.results",version:"current",sidebar:"someSidebar",previous:{title:"S3D.model",permalink:"/api-v3-docs/docs/S3D.model"},next:{title:"S3D.design",permalink:"/api-v3-docs/docs/S3D.design"}},o=[{value:"<code>S3D.results.get</code>",id:"s3dresultsget",children:[]},{value:"<code>S3D.results.set</code>",id:"s3dresultsset",children:[]},{value:"<code>S3D.results.fetchMemberResult</code>",id:"s3dresultsfetchmemberresult",children:[]},{value:"<code>S3D.results.getAnalysisReport</code>",id:"s3dresultsgetanalysisreport",children:[]},{value:"<code>S3D.model.takeScreenshot</code>",id:"s3dmodeltakescreenshot",children:[]}],m={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("hr",null),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"S3D.results")," namespace provides post-processing functions to read and interpret analysis results produced by ",Object(b.b)("a",{href:"S3D.model#s3dmodelsolve"},Object(b.b)("code",null,"S3D.model.solve")),"."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsget"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.get")),Object(b.b)("p",null,"Used to get the analysis results."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"lc_filter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[string]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"envelope"),", ",Object(b.b)("inlineCode",{parentName:"td"},"load_case"),", ",Object(b.b)("inlineCode",{parentName:"td"},"load_group"),", ",Object(b.b)("inlineCode",{parentName:"td"},"load_combo"),", ",Object(b.b)("inlineCode",{parentName:"td"},"envelope_abs_max")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only return specific data in the response. You can also provide names you have applied to load combination. E.g. ",Object(b.b)("inlineCode",{parentName:"td"},"LC1"),"."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All cases")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"result_filter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[string]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"reactions"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_displacements"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_forces"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_stresses"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_lengths"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_stations"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_discontinuities"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_minimums"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_maximums"),", ",Object(b.b)("inlineCode",{parentName:"td"},"member_peak_results"),", ",Object(b.b)("inlineCode",{parentName:"td"},"plate_displacements"),", ",Object(b.b)("inlineCode",{parentName:"td"},"plate_forces"),", ",Object(b.b)("inlineCode",{parentName:"td"},"plate_stresses"),", ",Object(b.b)("inlineCode",{parentName:"td"},"plate_minimums"),", ",Object(b.b)("inlineCode",{parentName:"td"},"plate_maximums"),", ",Object(b.b)("inlineCode",{parentName:"td"},"plate_peak_results"),", ",Object(b.b)("inlineCode",{parentName:"td"},"buckling"),", ",Object(b.b)("inlineCode",{parentName:"td"},"dynamic_frequency")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only return specific data in the response."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"All results")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample input for S3D.results.get"',title:'"Sample',input:!0,for:!0,'S3D.results.get"':!0}),'{\n  "function": "S3D.results.get",\n  "result_filter": ["member_peak_results", "member_discontinuities"],\n  "lc_filter": ["envelope", "envelope_abs_max"]\n}\n')),Object(b.b)("p",null,"The analysis results will return an object of all load combination results in the following format."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample response for S3D.results.get"',title:'"Sample',response:!0,for:!0,'S3D.results.get"':!0}),'{\n  "1": {\n    "name": "LC1",\n    "type": "user_defined",\n    "reactions": {},\n    "member_displacements": {},\n    "member_forces": {},\n    "member_stresses": {},\n    "member_lengths": {},\n    "member_stations": {},\n    "member_discontinuities": {},\n    "member_minimums": {},\n    "member_maximums": {},\n    "member_peak_results": {},\n    "plate_displacements": {},\n    "plate_forces": {},\n    "plate_stresses": {},\n    "plate_minimums": {},\n    "plate_maximums": {},\n    "plate_peak_results": {}\n  },\n  "2": {} // etc\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsset"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.set")),Object(b.b)("p",null,"Sets the results data for further processing."),Object(b.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Analysis results from any source can be used. Simply provide the data in the same format that is returned from ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#s3dresultsget"}),"S3D.results.get.md"),"."))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"analysis_results")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Results of a structural analysis (from ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#s3dresultsget"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.results.get")),")")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample input for S3D.results.set"',title:'"Sample',input:!0,for:!0,'S3D.results.set"':!0}),'{\n  "function": "S3D.results.set",\n  "arguments": {\n    "analysis_results": {\n      "1": {\n        "name": "LC1",\n        "type": "user_defined",\n        "reactions": {},\n        "member_displacements": {},\n        "member_forces": {},\n        "member_stresses": {},\n        "member_lengths": {},\n        "member_stations": {},\n        "member_discontinuities": {},\n        "member_minimums": {},\n        "member_maximums": {},\n        "member_peak_results": {},\n        "plate_displacements": {},\n        "plate_forces": {},\n        "plate_stresses": {},\n        "plate_minimums": {},\n        "plate_maximums": {},\n        "plate_peak_results": {}\n      },\n      "2": {} // etc\n    }\n  }\n}\n')),Object(b.b)("p",null,"The response will confirm whether or not the model was successfully set."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample response for S3D.results.set"',title:'"Sample',response:!0,for:!0,'S3D.results.set"':!0}),'{\n  "msg": "Results were successfully set.",\n  "status": 0,\n  "data": ""\n}\n')),Object(b.b)("a",{class:"sample-code-btn",target:"_blank",href:"https://platform.skyciv.com/api?f=S3D.results.set"},"Try ",Object(b.b)("code",null,"S3D.results.set")),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsfetchmemberresult"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.fetchMemberResult")),Object(b.b)("p",null,"Fetches results data for a particular member."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"member_id")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"integer")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An integer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Fetch the results of the member with this ID. A value of ",Object(b.b)("inlineCode",{parentName:"td"},"null")," will return all."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LC")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[integer]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An array of integers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Load combinations to include. An empty array will return all load combinations."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"res_key")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bmd_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"bmd_y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"axial"),", ",Object(b.b)("inlineCode",{parentName:"td"},"sfd_y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"sfd_z"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"top_bending_stress_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"top_bending_stress_y"),",",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},"btm_bending_stress_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"btm_bending_stress_y"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"shear_stress_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"shear_stress_y"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"displacement"),", ",Object(b.b)("inlineCode",{parentName:"td"},"displacement_x"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"displacement_y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"displacement_z")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The type of results to be returned."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"array"),", ",Object(b.b)("inlineCode",{parentName:"td"},"x,y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"image")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Format of results. ",Object(b.b)("ul",null," ",Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},"array")," - array of results (no x location information)"),Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},"x,y")," - object of results with x location and result"),Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},"image")," - an image of the results."))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample input for S3D.results.fetchMemberResult"',title:'"Sample',input:!0,for:!0,'S3D.results.fetchMemberResult"':!0}),'{\n  "function": "S3D.results.fetchMemberResult",\n  "arguments": {\n    "member_id": 3,\n    "LC": [1],\n    "res_key": "bmd_z",\n    "type": "x,y"\n  }\n}\n')),Object(b.b)(l.a,{defaultValue:"array",values:[{label:"Array",value:"array"},{label:"X-Y",value:"x-y"},{label:"Image",value:"image"}],mdxType:"Tabs"},Object(b.b)(i.a,{value:"array",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample response for S3D.results.fetchMemberResult"',title:'"Sample',response:!0,for:!0,'S3D.results.fetchMemberResult"':!0}),'{\n  "data": [\n    [\n      -0.19113528489304113,\n      -0.15415709542934292,\n      -0.11717890596564516,\n      -0.08020071650194674,\n      -0.04322252703824829,\n      -0.006244337574548954,\n      0.0307338518891493,\n      0.06771204135284795,\n      0.10469023081654624\n    ]\n  ],\n  "status": 0,\n  "msg": ""\n}\n'))),Object(b.b)(i.a,{value:"x-y",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample response for S3D.results.fetchMemberResult"',title:'"Sample',response:!0,for:!0,'S3D.results.fetchMemberResult"':!0}),'{\n  "data": [\n    {\n      "x": 0,\n      "y": -0.19113528489304113\n    },\n    {\n      "x": 12.5,\n      "y": -0.15415709542934292\n    },\n    {\n      "x": 25,\n      "y": -0.11717890596564516\n    },\n    {\n      "x": 37.5,\n      "y": -0.08020071650194674\n    },\n    {\n      "x": 50,\n      "y": -0.04322252703824829\n    },\n    {\n      "x": 62.5,\n      "y": -0.006244337574548954\n    },\n    {\n      "x": 75,\n      "y": 0.0307338518891493\n    },\n    {\n      "x": 87.5,\n      "y": 0.06771204135284795\n    },\n    {\n      "x": 100,\n      "y": 0.10469023081654624\n    }\n  ],\n  "status": 0,\n  "msg": ""\n}\n'))),Object(b.b)(i.a,{value:"image",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample response for S3D.results.fetchMemberResult"',title:'"Sample',response:!0,for:!0,'S3D.results.fetchMemberResult"':!0}),'{\n  "data": ["data:image/png;base64,iVBORw0KGg..."],\n  "status": 0,\n  "msg": ""\n}\n')))),Object(b.b)("p",null,"If ",Object(b.b)("inlineCode",{parentName:"p"},'"type": "image"')," is provided, then an image will be returned in base64 format."),Object(b.b)("div",{style:{width:"100%",textAlign:"center"}},Object(b.b)("img",{src:"/api-v3-docs/img/images/api-generated-diagram.png",style:{backgroundColor:"white",justifyContent:"center",maxWidth:"700px"}})),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsgetanalysisreport"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.getAnalysisReport")),Object(b.b)("p",null,"Generates a structural analysis report and returns a download link to retrieve the report."),Object(b.b)("div",{className:"admonition admonition-important alert alert--info"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/api-v3-docs/docs/S3D.model#s3dmodelset"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.set"))," and ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/api-v3-docs/docs/S3D.model#s3dmodelsolve"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.solve"))," must be executed earlier in the session for the Analysis Report to be generated."))),Object(b.b)("h4",{id:"variables"},"Variables"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"job_name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Any string."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name of your project. This will be used as the analysis report name."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"file_type")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pdf"),", ",Object(b.b)("inlineCode",{parentName:"td"},"txt")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The report format to be returned."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"load_combinations")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[integer]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An array of integers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An array of load combination IDs to report on."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"sections")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Key-value pairs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The different type of analysis results to include in your report (see below)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample input for S3D.results.getAnalysisReport"',title:'"Sample',input:!0,for:!0,'S3D.results.getAnalysisReport"':!0}),'{\n  "function": "S3D.results.getAnalysisReport",\n  "arguments": {\n    "job_name": "Example Job Name",\n    "file_type": "pdf",\n    "load_combinations": [1, 2, 3],\n    "sections": {\n      "title_page": true,\n      "job_setup": true,\n      "bom": true, // Bill of Materials\n      "nodal_reactions": true,\n      "nodal_forces": false,\n      "nodal_displacements": true,\n      "member_forces": false,\n      "member_displacements": true,\n      "member_stresses": false,\n      "buckling": false,\n      "plate_nodal_forces": false,\n      "plate_element_forces": false,\n      "plate_nodal_moments": false,\n      "plate_element_moments": false,\n      "plate_displacements": false,\n      "plate_nodal_stresses": false,\n      "plate_element_stresses": false,\n      "plate_nodal_equiv_stresses": false,\n      "plate_element_equiv_stresses": false\n    }\n  }\n}\n')),Object(b.b)("p",null,"The function will return links to download and preview your analysis report in the format specified by the ",Object(b.b)("inlineCode",{parentName:"p"},"file_type")," property."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample response for S3D.results.getAnalysisReport"',title:'"Sample',response:!0,for:!0,'S3D.results.getAnalysisReport"':!0}),'{\n  "status": 0,\n  "msg": "Analysis report successfully generated.",\n  "data": {\n    "view_link": "https://solver.skyciv.com/temp/view_report_9rxLAlPHg0VXxrei.php",\n    "download_link": "https://solver.skyciv.com/temp/download_report_9rxLAlPHg0VXxrei.php",\n    "html_download_link": "https://solver.skyciv.com/temp/download_html_report_9rxLAlPHg0VXxrei.php",\n    "file_type": "pdf"\n  }\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dmodeltakescreenshot"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.model.takeScreenshot")),Object(b.b)("p",null,"Takes screenshots of the model from specified perspectives."),Object(b.b)("div",{className:"admonition admonition-important alert alert--info"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/api-v3-docs/docs/S3D.model#s3dmodelset"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.set"))," and ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/api-v3-docs/docs/S3D.file#s3dfileopen"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.file.open"))," must be executed earlier in the session for screenshots to be taken."))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"views")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[string]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"iso"),", ",Object(b.b)("inlineCode",{parentName:"td"},"front"),", ",Object(b.b)("inlineCode",{parentName:"td"},"side"),", ",Object(b.b)("inlineCode",{parentName:"td"},"top")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Array of strings, defining the different perspectives to take a screenshot from.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"is_renderer")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Take screenshots of the structure in the 3D renderer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"visibility_settings")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An object as defined in ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#visibility-settings"}),Object(b.b)("inlineCode",{parentName:"a"},"visibility_settings"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"An object defining additional settings. Only applicable to wireframe display.")))),Object(b.b)("h4",{id:"visibility_settings"},Object(b.b)("inlineCode",{parentName:"h4"},"visibility_settings")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"show_nodes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If nodes should be visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"show_loads")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If loads should be visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"show_plates")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If plates should be visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"projection")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"perspective"),", ",Object(b.b)("inlineCode",{parentName:"td"},"orthographic")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The projection of the model to the view-point.")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample input for S3D.results.takeScreenshot"',title:'"Sample',input:!0,for:!0,'S3D.results.takeScreenshot"':!0}),'{\n  "function": "S3D.model.takeScreenshot",\n  "arguments": {\n    "views": ["iso", "front", "side", "top"],\n    "is_renderer": false,\n    "visibility_settings": {\n      "show_nodes": true,\n      "show_loads": false,\n      "show_plates": true,\n      "projection": "perspective"\n    }\n  }\n}\n')),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"The response will return an object of screenshots in base64 format."))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Sample response for S3D.results.takeScreenshot"',title:'"Sample',response:!0,for:!0,'S3D.results.takeScreenshot"':!0}),'{\n  "status": 0,\n  "msg": "Screenshots successfully taken and returned in base64 format.",\n  "data": {\n    "iso": "data:image/png;base64,iVBORw0K...",\n    "front": "data:image/png;base64,EACEpCABCQg....",\n    "side": "data:image/png;base64,GABCQgAQlIQAI....",\n    "top": "data:image/png;base64,CABCUhAAhKQgAQ...."\n  }\n}\n')))}d.isMDXComponent=!0},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=o(a),p=n,j=m["".concat(l,".").concat(p)]||m[p]||d[p]||b;return a?r.a.createElement(j,i(i({ref:t},s),{},{components:a})):r.a.createElement(j,i({ref:t},s))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<b;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},120:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},123:function(e,t,a){"use strict";var n=a(0),r=a(124);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},124:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),b=a(123),l=a(120),i=a(55),c=a.n(i);const s=37,o=39;t.a=function(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:d,className:p}=e,{tabGroupChoices:j,setTabGroupChoices:O}=Object(b.a)(),[u,f]=Object(n.useState)(i),N=n.Children.toArray(e.children);if(null!=d){const e=j[d];null!=e&&e!==u&&m.some((t=>t.value===e))&&f(e)}const g=e=>{f(e),null!=d&&O(d,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},p)},m.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":u===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":u===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case o:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(n.cloneElement)(N.filter((e=>e.props.value===u))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==u})))))}},126:function(e,t,a){"use strict";var n=a(3),r=a(0),b=a.n(r);t.a=function({children:e,hidden:t,className:a}){return b.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}}}]);