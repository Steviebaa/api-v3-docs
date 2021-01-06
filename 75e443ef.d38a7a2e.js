(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,j=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?r.a.createElement(j,c(c({ref:t},o),{},{components:n})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(119)),i={id:"S3D.file",title:"S3D.file"},c={unversionedId:"S3D.file",id:"S3D.file",isDocsHomePage:!1,title:"S3D.file",description:"---",source:"@site/docs/docs-S3D.file.md",slug:"/S3D.file",permalink:"/api-v3-docs/docs/S3D.file",version:"current",sidebar:"someSidebar",previous:{title:"S3D.SB",permalink:"/api-v3-docs/docs/S3D.SB"},next:{title:"SKYCIV.renderer",permalink:"/api-v3-docs/docs/s3d-renderer-core"}},b=[{value:"<code>S3D.file.save</code>",id:"s3dfilesave",children:[]},{value:"<code>S3D.file.open</code>",id:"s3dfileopen",children:[]},{value:"<code>S3D.file.share</code>",id:"s3dfileshare",children:[]},{value:"<code>S3D.file.getFileDirectory</code>",id:"s3dfilegetfiledirectory",children:[]}],o={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"S3D.file")," namespace provides functionality allowing the user to interact with their file manager on the SkyCiv platform."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"s3dfilesave"},Object(l.b)("inlineCode",{parentName:"h2"},"S3D.file.save")),Object(l.b)("p",null,"Save a model to the user's SkyCiv cloud storage."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"name")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"File name of the model")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"path")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Path in the user's cloud file storage")))),Object(l.b)("h4",{id:"sample-input-for-the-s3dfilesave-function"},"Sample input for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.save")," function"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.file.save",\n  "arguments": {\n    "name": "project file name",\n    "path": "api/new-folder/"\n  }\n}\n')),Object(l.b)("h4",{id:"sample-response-for-the-s3dfilesave-function"},"Sample response for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.save")," function"),Object(l.b)("p",null,"The response will confirm whether or not the model was successfully saved to the user's SkyCiv cloud storage. It will also include a link to the model:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": "https://platform.skyciv.com/structural?preload_name=API%20File%20Name&preload_path=api/new-folder/",\n  "msg": "Model was successfully saved to your SkyCiv cloud storage in the folder api/new-folder/. You can access this file from your SkyCiv Dashboard, or directly from https://platform.skyciv.com/structural?preload_name=API%20File%20Name&preload_path=api/new-folder/",\n  "status": 0\n}\n')),Object(l.b)("p",null,"Visit the URL to view, analyse and modify the model in Structural 3D."),Object(l.b)("div",{style:{width:"100%",textAlign:"center"}},Object(l.b)("img",{style:{maxWidth:"900px"},src:"/api-v3-docs/img/images/api-generated-model-skyciv.png"})),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("h2",{id:"s3dfileopen"},Object(l.b)("inlineCode",{parentName:"h2"},"S3D.file.open")),Object(l.b)("p",null,"Load a model from the user's SkyCiv cloud storage."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"name")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"File name of the model.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"path")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Path in the user's cloud file storage")))),Object(l.b)("h4",{id:"sample-input-for-the-s3dfileopen-function"},"Sample input for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.open")," function"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.file.open",\n  "arguments": {\n    "name": "Sample Model",\n    "path": "Project Name/QA/"\n  }\n}\n')),Object(l.b)("br",null),Object(l.b)("h4",{id:"sample-response-for-the-s3dfileopen-function"},"Sample response for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.open")," function"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": 0,\n  "msg": "File Loaded: model \'Sample Model\' is set."\n}\n')),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("h2",{id:"s3dfileshare"},Object(l.b)("inlineCode",{parentName:"h2"},"S3D.file.share")),Object(l.b)("p",null,"Share a model with another SkyCiv user."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"name")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"File name of the model to share.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"path")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Path in the user's cloud file storage.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"share_with")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"[string]")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of SkyCiv email addresses to share the model with.")))),Object(l.b)("h4",{id:"sample-input-for-the-s3dfileshare-function"},"Sample input for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.share")," function"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.file.share",\n  "arguments": {\n    "path": "Project Name/QA/",\n    "name": "Sample Model",\n    "share_with": ["first.person@skyciv.com", "second.person@skyciv.com"]\n  }\n}\n')),Object(l.b)("h4",{id:"sample-response-for-the-s3dfileshare-function"},"Sample response for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.share")," function"),Object(l.b)("p",null,"The response will contain a confirmation message, a list of shared users and a public (view only) link."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": 0,\n  "msg": "File was successfully shared.",\n  "data": {\n    "shared_user": ["first.person@skyciv.com", "second.person@skyciv.com"],\n    "share_link": "https://platform.skyciv.com/structural-viewer?project_id=URQfJBu4vR8SwWaxgdhOFaZ5KINbVQ7vNLG7GIjWnvtZgZInKo5j1vtuxkvOsJ"\n  }\n}\n')),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("h2",{id:"s3dfilegetfiledirectory"},Object(l.b)("inlineCode",{parentName:"h2"},"S3D.file.getFileDirectory")),Object(l.b)("p",null,"Returns a list of files and folders of in the user's cloud storage. Useful for locating files or building a tree of files."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"path")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Path in the user's cloud file storage. ",Object(l.b)("inlineCode",{parentName:"td"},'""')," will return the contents of the root directory.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"full_list")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Return user's entire file directory in a nested format.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(l.b)("inlineCode",{parentName:"td"},"full_list_flat")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Returns the data as a flattened list for easier iteration.")))),Object(l.b)("h4",{id:"sample-input-for-the-s3dfilegetfiledirectory-function"},"Sample input for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.getFileDirectory")," function"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.file.getFileDirectory",\n  "arguments": {\n    "path": "Project folder"\n  }\n}\n')),Object(l.b)("br",null),Object(l.b)("h4",{id:"sample-response-for-the-s3dfilegetfiledirectory-function"},"Sample response for the ",Object(l.b)("inlineCode",{parentName:"h4"},"S3D.file.getFileDirectory")," function"),Object(l.b)("p",null,"The below response shows the contents of the folder, which includes one folder called ",Object(l.b)("inlineCode",{parentName:"p"},"QA")," and a file (model) called ",Object(l.b)("inlineCode",{parentName:"p"},"FCSP Moment Frame ASD - for revit"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": 1,\n  "msg": "2 items were found.",\n  "data": [\n    {\n      "class": "folder",\n      "special": "shared",\n      "privacy": "private",\n      "file_name": "QA",\n      "thumbnail": "",\n      "job_name": "",\n      "job_notes": "",\n      "last_changed": 1570089100,\n      "nodes": "",\n      "members": "",\n      "shared_alias": "",\n      "file_owner_email": ""\n    },\n    {\n      "class": "file",\n      "special": "shared",\n      "privacy": "private",\n      "file_name": "FCSP Moment Frame ASD - for revit",\n      "thumbnail": "1_2lWNO0EIbSHQ8AH7wWTE2Z2H1bwHyaMLmAimTSEKGfoVLN4xsFK4EjhyaTv0d4EV.png",\n      "job_name": "",\n      "job_notes": "",\n      "last_changed": 1556773710,\n      "nodes": 152,\n      "members": 175,\n      "shared_alias": "",\n      "file_owner_email": ""\n    }\n  ]\n}\n')))}s.isMDXComponent=!0}}]);