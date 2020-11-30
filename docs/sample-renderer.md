---
id: sample-renderer
title: AISC Design Check
---

This tutorial will cover a full example of how to run build a model and run an AISC 360-16 LRFD Steel Design Check.

This tutorial is based on the following simple example: <a href="/api-v3-docs/html/aisc-check.html">download or visit this sample file</a>.


## Page setup

Here is an example of a simple beam in the S3D_model context.

```html
<!DOCTYPE html>
<html>

    <head>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://api.skyciv.com/dist/v3/javascript/skyciv.js"></script>   
        <script> /* Below Javascript goes here*/ </script> 
    </head>

    <body> 
        <h2>Sample code for S3D.model.set</h2>

        <div id="renderer-container"></div>

    </body>

</html>

```

```js


```


## API Object

The API Object takes two core pieces of information:
* Authentication object
* List of functions - an array of functions to run `[ {...}, {...}, ... ]`. In this example we are:
    1. Starting a session - using function S3D.session.start
    2. Setting the model  - using function [S3D.model.set](docs-S3D.model.md#s3dmodelset) 
    3. Running an analysis - using function [S3D.model.solve](docs-S3D.model.md#s3dmodelsolve) 

```js
    var model_data = {...}; //your s3d_model
   
    var api_object = {
        auth: {
            "username": YOUR_SKYCIV_USERNAME,
            "key": YOUR_API_TOKEN_KEY
        },
        functions: [
            {
                'function': 'S3D.session.start', // starting a session
                'arguments': {}
            },
            {
                'function': 'S3D.model.set', // Setting the model
                'arguments': {
                    's3d_model': model_data
                }
            },
			{
				'function': "S3D.model.solve", // Running an analysis
				'arguments': {
					analysis_type: 'nonlinear', //linear, nonlinear, buckling
					repair_model: true
				},
			}
        ]
    }
```


## Calling the API


```js
	//can use skyciv resource:
	skyciv.request(api_object, function (res) {
		console.log(res); // do something with response
	})

    //or use jQuery AJAX call
	$.ajax({
		url: "https://api.skyciv.com:8085/v3",
		data: JSON.stringify(api_object),
		type: "POST",
		success: function (data) {

			console.log("--- Response ---");
			console.log(data);
			var response = data.response;

			jQuery("#status-bar").html(response.msg);

			if (response.status == 0) { //successful
      	        jQuery("#output").show().html(JSON.stringify(response.data));
			}
        }
    });
```


## API Response

The response will come back with all the results of the structural analysis that was run, in the following format:
```js

{
    response: {
        data: [...], // analysis results
        msg: "Solved Successfully",
        status: 0,
        session_id: "ttaAi9xJSTPwvfzqFmpEiqAYBtf01e7HA3im8toHo4Vgy7y5Q6EgnBU5fk9yrfMC",
		monthly_api_credits: {
			quota: 6000,
			total_used: 22,
			used_this_call: 1
		}
    },
    functions: [
        {...}, //response for S3D.session.start
        {...}, //response for S3D.model.set
        {...}  //response for S3D.model.solve
    ]
}


```