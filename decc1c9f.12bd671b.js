(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),b=(n(0),n(126)),c={id:"S3D.SB",title:"S3D.SB"},i={unversionedId:"S3D.SB",id:"S3D.SB",isDocsHomePage:!1,title:"S3D.SB",description:"---",source:"@site/docs/docs-S3D.SB.md",slug:"/S3D.SB",permalink:"/api-v3-docs/docs/S3D.SB",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-S3D.SB.md",version:"current",sidebar:"someSidebar",previous:{title:"S3D.rc_design",permalink:"/api-v3-docs/docs/S3D.rc_design"},next:{title:"S3D.file",permalink:"/api-v3-docs/docs/S3D.file"}},l=[{value:"<code>S3D.SB.getLibraryTree</code>",id:"s3dsbgetlibrarytree",children:[]},{value:"<code>S3D.SB.buildCustomShape</code>",id:"s3dsbbuildcustomshape",children:[]},{value:"<code>S3D.SB.solve</code>",id:"s3dsbsolve",children:[]},{value:"<code>S3D.SB.runGSD</code>",id:"s3dsbrungsd",children:[]}],o={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("hr",null),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"S3D.SB")," namespace exposes the functionality offered on SkyCiv's ",Object(b.b)("a",{href:"https://platform.skyciv.com/section-builder"}," Section Builder")," platform. This includes access to the section database, creating custom sections, analyzing sections and more."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dsbgetlibrarytree"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.SB.getLibraryTree")),Object(b.b)("p",null,"Get the list of sections from a specific library. "),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"section_map")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"array")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of up to 3 strings"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array defining the keys of the map you wish to return. Use the ",Object(b.b)("a",{href:"https://platform.skyciv.com/section-builder"}," Section Builder")," UI for reference. ",Object(b.b)("br",null),Object(b.b)("br",null),"Some examples: ",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},'["American"]')," - will return all American sections ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},'["American", "AISC"]')," - will return all sections from AISC library",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},'["American", "AISC", "W shapes"]')," - will return all W-Shapes ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},'["Australian", "Cold Formed Steel (Lysaght)", "Angles"]')," ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},'["Canadian", "CISC", "M Shapes"]')," - will return all M-Shapes from CISC catalog ",Object(b.b)("br",null))))),Object(b.b)("h4",{id:"sample-input-for-the-s3dsbgetlibrarytree-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.SB.getLibraryTree")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.SB.getLibraryTree",\n  "arguments": {\n    "section_map": ["American", "AISC", "W shapes"]\n  }\n}\n')),Object(b.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.SB.getLibraryTree",target:"_blank",class:"sample-code-btn"},"Try ",Object(b.b)("code",null,"S3D.SB.getLibraryTree")),Object(b.b)("br",null),Object(b.b)("h4",{id:"sample-response-for-the-s3dsbgetlibrarytree-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.SB.getLibraryTree")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "msg": "",\n  "status": 0,\n  "data": [\n    "W14x808",\n    "W18x192",\n    "W18x211",\n    "W18x234",\n    "W18x258",\n    "W18x283",\n    "W18x311",\n    "W24x408",\n    "W24x492",\n    "W27x448",\n    "W30x477",\n    "W36x230",\n    "etc..."\n  ]\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dsbbuildcustomshape"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.SB.buildCustomShape")),Object(b.b)("p",null,"SkyCiv ",Object(b.b)("a",{href:"https://platform.skyciv.com/section-builder"}," Section Builder")," uses a powerful FEM solver to calculate section properties such as area, moment of inertia, centroids, section moduli, shear properties and torsion properties. Users can use the API to calculate these properties via custom points and line data using ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#s3dsbbuildcustomshape"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.buildCustomShape")),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"points"),", ",Object(b.b)("inlineCode",{parentName:"td"},"line")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The type of custom shape being built, either:",Object(b.b)("br",null)," \u2022\xa0",Object(b.b)("inlineCode",{parentName:"td"},"points")," - a shape defined by 2 points and the radius;",Object(b.b)("br",null)," \u2022 ",Object(b.b)("inlineCode",{parentName:"td"},"line")," - 2 points and the line thickness.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"points")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[[integer]]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of integer arrays"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Array of points.",Object(b.b)("br",null)," For ",Object(b.b)("inlineCode",{parentName:"td"},'"type": "points"'),", this is in format ","[x,y,radius]",Object(b.b)("br",null),"For ",Object(b.b)("inlineCode",{parentName:"td"},'"type": line"'),", this is in the format ","[x,y]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"run_solve")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If solve should be executed following the build.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"material_id")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"integer")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A material id"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Material id of shape. Use Structural 3D default materials as a guide.")))),Object(b.b)("div",{class:"banner tip"},"To add multiple shapes or to use ",Object(b.b)("a",{href:"#s3dsbrungsd"},Object(b.b)("code",null,"S3D.SB.runGSD")),", set  ",Object(b.b)("code",null,'"run_solve": false'),"."),Object(b.b)("h4",{id:"sample-input-for-the-s3dsbbuildcustomshape-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.SB.buildCustomShape")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.SB.buildCustomShape",\n  "arguments": {\n    "type": "points",\n    "points": [\n      [0, 1, 0],\n      [1, 1, 0],\n      [1, 0, 0],\n      [0, 0, 0]\n    ],\n    "run_solve": false,\n    "material_id": 1\n  }\n}\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "function": "S3D.SB.buildCustomShape",\n    "arguments": {\n      "type": "points",\n      "material_id": 1,\n      "run_solve": false,\n      "points": [\n        [0, 1, 0],\n        [0.5, 2, 0],\n        [1, 1, 0],\n        [1, 0, 0],\n        [0, 0, 0]\n      ]\n    }\n  },\n  {\n    "function": "S3D.SB.buildCustomShape",\n    "arguments": {\n      "type": "points",\n      "material_id": 4,\n      "run_solve": false,\n      "points": [\n        [10, 11, 0],\n        [10.5, 12, 0],\n        [11, 11, 0],\n        [11, 0, 0],\n        [0, 0, 0]\n      ]\n    }\n  }\n]\n')),Object(b.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.SB.runGSD",target:"_blank",class:"sample-code-btn"},"Try ",Object(b.b)("code",null,"S3D.SB.buildCustomShape")),Object(b.b)("br",null),Object(b.b)("h4",{id:"sample-response-for-the-s3dsbbuildcustomshape-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.SB.buildCustomShape")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": 0,\n  "msg": "",\n  "data": {\n    "version": 2,\n    "name": "1 x 1",\n    "area": 1,\n    "Iz": 0.08333,\n    "Iy": 0.08333,\n    "material_id": 1,\n    "aux": {\n      "composite": false,\n      "Qz": 0.125,\n      "Qy": 0.125,\n      "centroid_point": [0.5, 0.5],\n      "centroid_length": [0.5, 0.5],\n      "depth": 1,\n      "width": 1,\n      "alpha": 0,\n      "Zy": 0.25,\n      "Zz": 0.25,\n      "polygons": [], //array of polygon data used in S3D rendering\n      "warping_constant": 0.000134425,\n      "shear_area_z": 0.8333333333333334,\n      "shear_area_y": 0.8333333333333334,\n      "torsion_radius": 0.675467\n    },\n    "J": 0.14058\n  }\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dsbsolve"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.SB.solve")),Object(b.b)("p",null,"Submit section and calculate section properties. This may already be included in some functions such as ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#s3dsbbuildcustomshape"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.buildCustomShape"))," where the ",Object(b.b)("inlineCode",{parentName:"p"},"run_solve")," property has been set to ",Object(b.b)("inlineCode",{parentName:"p"},"true"),"."),Object(b.b)("div",{class:"banner info"},"Section should already be set via one of the earlier functions."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.SB.solve"\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dsbrungsd"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.SB.runGSD")),Object(b.b)("p",null,"After a section is set via ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"#s3dsbbuildcustomshape"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.buildCustomShape")),", further analysis may be performed on the section using the General Section Designer (GSD). This uses FEA to calculate the capacity of reinforced concrete sections. Provide loads, reinforcement and select from material databases to run FEA analysis and receive basic pass/fail results for complex concrete sections."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_code")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"ACI 318"),", ",Object(b.b)("inlineCode",{parentName:"td"},"AS 3600"),", ",Object(b.b)("inlineCode",{parentName:"td"},"EN")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Design code used to select material properties."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"concrete_class")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u2022 ",Object(b.b)("strong",{parentName:"td"},"AS:")," ",Object(b.b)("inlineCode",{parentName:"td"},"C20"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C25"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C32"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C40"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C50"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C65"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C80"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C100")," ",Object(b.b)("br",null),Object(b.b)("br",null),"\u2022\xa0",Object(b.b)("strong",{parentName:"td"},"ACI 318:")," ",Object(b.b)("inlineCode",{parentName:"td"},"C2500"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C3000"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C3500"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C4000"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C4500"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C5000"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C6000"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C7000"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C8000"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C9000"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C10000")," ",Object(b.b)("br",null),Object(b.b)("br",null),"\u2022 ",Object(b.b)("strong",{parentName:"td"},"EN:")," ",Object(b.b)("inlineCode",{parentName:"td"},"C20/25"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C25/30"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C30/37"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C35/45"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C40/50"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C45/55"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C50/60"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C20/25"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C60/75"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C70/85"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C80/95"),", ",Object(b.b)("inlineCode",{parentName:"td"},"C90/105")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",null,"Concrete Class Code")," - this will determine the values used for Young's Modulus and Stress/Strain data of the concrete."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"steel_grade")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"\u2022 ",Object(b.b)("strong",{parentName:"td"},"AS:")," ",Object(b.b)("inlineCode",{parentName:"td"},"R250N"),", ",Object(b.b)("inlineCode",{parentName:"td"},"D500N"),", ",Object(b.b)("inlineCode",{parentName:"td"},"D500L")," ",Object(b.b)("br",null),Object(b.b)("br",null),"\u2022\xa0",Object(b.b)("strong",{parentName:"td"},"ACI 318:")," ",Object(b.b)("inlineCode",{parentName:"td"},"Grade 40"),", ",Object(b.b)("inlineCode",{parentName:"td"},"Grade 50"),", ",Object(b.b)("inlineCode",{parentName:"td"},"Grade 60"),", ",Object(b.b)("inlineCode",{parentName:"td"},"Grade 75")," ",Object(b.b)("br",null),Object(b.b)("br",null),"\u2022 ",Object(b.b)("strong",{parentName:"td"},"EN:")," ",Object(b.b)("inlineCode",{parentName:"td"},"Class A"),", ",Object(b.b)("inlineCode",{parentName:"td"},"Class B"),", ",Object(b.b)("inlineCode",{parentName:"td"},"Class C")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("em",null,"Steel Grade")," - this will determine the values used for Young's Modulus and Stress/Strain data of the steel reinforcement."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"reinforcement")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[object]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of objects"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of objects where each object contains the properties ",Object(b.b)("inlineCode",{parentName:"td"},"z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"y")," and ",Object(b.b)("inlineCode",{parentName:"td"},"diam")," for reinforcement position and diameters."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"loads")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[object]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of objects"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of objects where each object contains design loads."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"return_stress_results")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Set this to true for detailed results of the mesh and material stresses/strains."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h4",{id:"sample-input-for-the-s3dsbrungsd-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.SB.runGSD")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.SB.runGSD",\n  "arguments": {\n    "design_code": "AS 3600",\n    "concrete_class": "C50",\n    "steel_grade": "R250N",\n    "return_stress_results": false,\n    "reinforcement": [\n      { "z": -500, "y": 500, "diam": 16 },\n      { "z": 0, "y": 500, "diam": 16 },\n      { "z": 500, "y": 500, "diam": 16 }\n    ],\n    "loads": [\n      { "N": 120, "Mz": 20, "My": 25 },\n      { "N": 150, "Mz": -20, "My": -25 }\n    ]\n  }\n}\n')),Object(b.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.SB.runGSD",target:"_blank",class:"sample-code-btn"},"Try ",Object(b.b)("code",null,"S3D.SB.runGSD")),Object(b.b)("br",null),Object(b.b)("h4",{id:"sample-response-for-the-s3dsbrungsd-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.SB.runGSD")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "msg": "General Section Designer run successfully",\n  "data": [\n    {\n      "result": "PASS",\n      "limRatioForce": 0.4335716625759198,\n      "limForce": {\n        "Nz": 276770.85556528415,\n        "Mx": 46128475.92754736,\n        "My": 57660594.90943419\n      }\n    },\n    {\n      "result": "PASS",\n      "limRatioForce": 0.43381624422203574,\n      "limForce": {\n        "Nz": 345768.51834812126,\n        "Mx": -46102469.11308283,\n        "My": -57628086.39135354\n      }\n    }\n  ],\n  "status": 0\n}\n')),Object(b.b)("br",null),Object(b.b)("p",null,"The following image is an example of a complex section that may be analyzed using GSD."),Object(b.b)("img",{src:"https://skyciv.com/wp-content/uploads/2019/03/general-concrete-section-design-software.png"}))}d.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),s=d(n),j=a,O=s["".concat(c,".").concat(j)]||s[j]||p[j]||b;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);