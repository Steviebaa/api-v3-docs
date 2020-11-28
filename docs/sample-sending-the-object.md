---
id: sending-the-object
title: Sending the Object
sidebar_label: Sending the Object
---

## How to contact the API

Once we have [assigned the API object to a variable](sample-creating-the-api-object.md#api-object) describing our model, we send it to SkyCiv for analysis via the API. This is achieved by the use of a POST request. If you'd like to learn more about HTTP methods, [w3schools.com provides a great definition](https://www.w3schools.com/tags/ref_httpmethods.asp).

There are various ways to contact the API:
* Using the [packages](packages) developed by the SkyCiv team ***(highly recommended)***.
* Download the SkyCiv API file and include it in you project.
* Constructing the call manually.

### Packages by the SkyCiv Team

You can view and learn about the available packages in the [Packages](packages) section. We highly recommend this approach as we will continue to improve these packages to provide useful tools. This method is common industry practice as it helps keep your code clean and easy to read.

Although it may initially take longer to get setup, once you have an understanding of how package managers work (which we have provided) it will make future projects very quick and robust.

### Including the SkyCiv API file

Alternatively, you can include/import/require the [SkyCiv API file via GitHub](https://github.com/skyciv/skyciv-api) in your project which will do the request for you (by calling the `skyciv.request()` method). For example, if you're using JavaScript then you can find the module here: https://api.skyciv.com/dist/v3/javascript/skyciv.js

To use this JavaScript module, the `request()` function would be called as follows:

<!--DOCUSAURUS_CODE_TABS-->

<!--JavaScript-->
```js
const skyciv = require('skyciv');

skyciv.request(__YOUR_API_OBJECT__, function (res) {
  console.log(res); // do something with response
});
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Manually calling the API

You can manually make a HTTP/HTTPS POST Request to either of the following endpoints depending on whether you wish to use HTTP or HTTPS:

***HTTPS:*** https://api.skyciv.com:8085/v3

***HTTP:*** http://api.skyciv.com:8086/v3

The following links provide a live demonstration of how to achieve this across various languages. Just add your own credentials to the [`auth`](getting-started-the-request-object.md#auth) object!

Comments are provided to help you understand exactly what is happening. Notice that after removing the comments and print statements, the actual code is only a fraction of the file.

* [Node.js](https://repl.it/@Stevieba/SkyCiv-API-or-Nodejs-v12161-or-Simple-metric-beam)
* [HTML/JavaScript](https://repl.it/@Stevieba/SkyCiv-API-or-HTMLJS-or-Simple-metric-beam)
* [Python 2](https://repl.it/@Stevieba/SkyCiv-API-or-Python-27-or-Simple-metric-beam) - ***Note:*** No longer supported by the Python Software Foundation, Python 3 is preferred.
* [Python 3](https://repl.it/@Stevieba/SkyCiv-API-or-Python-382-or-Simple-metric-beam)
* [C#](https://repl.it/@StuartGale/SkyCiv-API-C-sharp#main.cs)

The code located in the above links has also been provided below.

<br/>

<!--DOCUSAURUS_CODE_TABS-->
<!--Node.js-->

```js
// Note: We HIGHLY recommend using the skyciv NPM package to achieve the following in a couple of lines of code! https://www.npmjs.com/package/skyciv

// START CODE

// Import the https module to provide access to the request method
const https = require('https');

// Import file system to let us write results to a new file 
const fs = require('fs')

// Import the API object data - Add a file in the same directory as this script with the name defined below. Place your JSON object inside this file. Example: https://repl.it/@Stevieba/SkyCiv-API-or-Nodejs-v12161-or-Simple-metric-beam
// ./ prefix indicates the file is in the same directory as this script
const rawData = require('./input-simple-beam.json');

// Convert the JSON object into a string
const data = JSON.stringify(rawData);

// Define an object containing the http request options and assign it to the variable options for later use.
const options = {
    hostname: 'api.skyciv.com', // Where to send the data
    path: '/v3',
    method: 'POST', // Type of http method. Further reading: http://bit.ly/http-methods
    headers: { // Describe what is being sent
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

// Create a request function that handles events during the request
const req = https.request(options, (res) => {
  let responseData = ''; // Create a variable to hold the response data

  // Print the status code of the request. 200 means the message was successfully sent and received but does not necessarily mean the analysis was successful.
  console.log('Status Code:', res.statusCode);

  // Every time some of the response comes through, add it to the res variable
  // In this case 'data' refers to an event.
  res.on('data', (chunk) => {
      responseData += chunk;
  });

  // When the entire response has been received run the code below
  res.on('end', () => {
    const parsedResults = JSON.parse(responseData);
    
    if (parsedResults.response.status === 0) {
      // This is a good place to start doing things with the results

      // Write the results to a file named output.json for inspection
      fs.writeFileSync('./output.json', JSON.stringify(parsedResults, null, 2) , 'utf-8');
      console.log(`Successfully solved, see output.json to inspect results.`);

    } else {
      // This is where you can handle a failed solve
      console.log(`Unsuccessful with error message: ${parsedResults.response.msg}`)
    }
  });

}).on("error", (err) => { 
  // Catch any errors and print the error message
  console.log("Error: ", err.message);
});

// Make the call with your data
req.write(data);
req.end();
```

<!--HTML/JavaScript-->

```html
<!-- Note: If you're using a framework that allows the use of modules, we HIGHLY recommend 
using the skyciv NPM package to achieve the following in a couple of lines of code! -->

<!-- START CODE -->
<!DOCTYPE html>

<head></head>

<body>
	<textarea id="response" style={{width: "90%"}} rows="30" wrap="off">Processing request...</textarea>
</body>

<script>

  // Define your JSON API object
  const data = __YOUR_API_OBJECT__

  // Use the fetch API to make a POST request using a Promise (a more advanced topic).
  // When the first block has finished collecting the data, ".then" will trigger and so on.
  fetch("https://api.skyciv.com/v3", {
      method: "POST", // Type of http method. Further reading: http://bit.ly/http-methods
      headers: { 'Content-Type': 'application/json' }, // Describe what is being sent
      body: JSON.stringify(data) // Your JSON object describing your structure 
    })
    .then(response => response.json()) // THEN convert the response to a JSON object
    .then(data => { // THEN do something with the data
      console.log('Success');

      // Add the response data to the textarea html element
      document.getElementById('response').value = JSON.stringify(data, null, '\t');
    })
    .catch((error) => {
      // Catch and handle any errors
      console.error('Error:', error);
    });
</script>

</html>
```

<!--JavaScript (JQuery)-->
```js
// Using the ajax() method provided by the JQuery library

const data = YOUR_API_OBJECT

$.ajax({
  url: "https://api.skyciv.com:8085/v3",
  data: JSON.stringify(data),
  type: "POST",
  success: function (data) {
    // Do something with the API response "data" here
  }
});
```

<!--Python 2-->

```py
# Note: We HIGHLY recommend using the skyciv pip package to achieve the following in a couple of lines of code!
# Note: It is also recommended to use Python 3 as Python 2 is NO LONGER SUPPORTED

# START CODE

# Import 'json' library to help manipulate the JSON objects
import json

# Import the library to help make http GET requests
import httplib

# Wrap in a try block to gracefully handle errors
try:

  # Create request header to define the content that will be sent
  headers = {'Content-Type': 'application/json'}

  print '1. Establishing a connection to SkyCiv API'
  # Setup a connection to the SkyCiv API
  # Don't add http://, https:// or www. before this URL
  # Port 8085 = send information over https (suitable for sensitive information)
  # Port 8086 = send information over http
  conn = httplib.HTTPSConnection('api.skyciv.com', 8085)

  # Define path of beam data - add a file in the same directory as this script with the name defined below. 
  # Place your JSON API object inside this file. Example: https://repl.it/@Stevieba/SkyCiv-API-or-Python-27-or-Simple-metric-beam
  beam_data_file_path = 'input-simple-beam.json'
  print '2. Reading beam data from file: ' + beam_data_file_path

  # Use a with block to open and read the input object we have defined in the file
  # named "input-simple-beam.json". The With keyword will close the file after use.
  with open(beam_data_file_path) as f:

    # Load data from other file into a variable.
    # The load() method will interpret a JSON object into a python object.
    beam_data = json.load(f)

    # Convert API 'data' to JSON String.
    # The function dumps(), not to be confused with dump(), will encode
    # a python object into a JSON string.
    stringified_data = json.dumps(beam_data, separators=(',', ':'))

  # By now the with block will have closed the input-simple-beam.json file.

  # Make the request to the SkyCiv API.
  print '3. Sending request to the SkyCiv API, just a moment...'
  conn.request('POST', '/v3', stringified_data, headers)

  # Further reading on GET, POST and other http request methods: http://bit.ly/http-methods

  # Get the response object.
  raw_res = conn.getresponse()

  # Read the response object.
  res_data = raw_res.read()
  print '4. Response received and interpreted.'

  # Close the connection.
  conn.close()
  print '5. SkyCiv API connection closed.'

  # Parse (convert) the response into a JSON object so we can manipulate and read it.
  parsed_res = json.loads(res_data)

  # Check success criteria
  if (parsed_res["response"]["status"] == 0):
    # Successfully solved
    # Print output to json file for inspecting.
    # 'w' param indicates 'write' which will overwrite the contents of the specified file.
    with open('output.json', 'w') as f:
      print >>f, parsed_res

    print '\nFinished!'

    print '\nCheck the file named output.json and click the format button for easier viewing.'
    print '\n* Note:  The \'u\' prefixing each key indicates the string is of type Unicode. This won\'t appear when accessing the value.'
  else:
    print '\nUnsuccessful solve with message: ' + parsed_res["response"]["msg"]

except Exception as e: # Python 2.6 or higher
  # Catch any errors that occur inside the try block and display the error
  print '\nThe following error occured: ' + str(e)
```

<!--Python 3-->

```py
# Note: We HIGHLY recommend using the skyciv pip package to achieve the following in a couple of lines of code!

# START CODE

# Import 'json' library to help manipulate the JSON objects
import json

# Import the library to help make http GET requests
import http.client as httplib  # Python 3.x.x

# Wrap in a try block to gracefully handle errors
try:

  # Create request header to define the content that will be sent
  headers = {'Content-Type': 'application/json'}

  print('1. Establishing a connection to SkyCiv API')
  # Setup a connection to the SkyCiv API
  # Don't add http://, https:// or www. before this URL
  # Port 8085 = send information over https (suitable for sensitive information)
  # Port 8086 = send information over http
  conn = httplib.HTTPSConnection('api.skyciv.com', 8085)

  # Define path of beam data - add a file in the same directory as this script with the name defined below. 
  # Place your JSON API object inside this file. Example: https://repl.it/@Stevieba/SkyCiv-API-or-Python-382-or-Simple-metric-beam
  beam_data_file_path = 'input-simple-beam.json'
  print(f'2. Reading beam data from file: { beam_data_file_path }')

  # Use a with block to open and read the input object we have defined in the file
  # named "input-simple-beam.json". The With keyword will close the file after use.
  with open(beam_data_file_path) as f:

    # Load data from other file into a variable.
    # The load() method will interpret a JSON object into a python object.
    beam_data = json.load(f)

    # Convert API 'data' to JSON String.
    # The function dumps(), not to be confused with dump(), will encode
    # a python object into a JSON string.
    stringified_data = json.dumps(beam_data, separators=(',', ':'))

  # By now the with block will have closed the input-simple-beam.json file.

  # Make the request to the SkyCiv API.
  print('3. Sending request to the SkyCiv API, just a moment...')
  conn.request('POST', '/v3', stringified_data, headers)

  # Further reading on GET, POST and other http request methods: http://bit.ly/http-methods

  # Get the response object.
  raw_res = conn.getresponse()

  # Read the response object.
  res_data = raw_res.read()
  print('4. Response received and interpreted.')

  # Close the connection.
  conn.close()
  print('5. SkyCiv API connection closed.')

  # Parse (convert) the response into a JSON object so we can manipulate and read it.
  parsed_res = json.loads(res_data)

  # Check success criteria
  if (parsed_res["response"]["status"] == 0):
    # Successfully solved
    # Print output to json file for inspecting.
    # 'w' param indicates 'write' which will overwrite the contents of the specified file.
    with open('output.json', 'w') as f:
      print(parsed_res, file=f)

    print('\nFinished!')

    # print(f'\nDeflections: { parsed_res['response'] }')

    print('\nCheck the file named output.json and click the format button for easier viewing.')
  else:
    print(f'\nUnsuccessful solve with message: { parsed_res["response"]["msg"] }')

except Exception as e: # Python 2.6 or higher
  print(f'\nThe following error occured: {e}')

```

<!--C#-->

```C#
using System;
using System.IO;
using System.Text;

namespace SkyCiv
{
    class Program
    {
        private static string inputFilePath = "input-simple-beam.json";
        private static string outputFilePath = "output.json";

        static void Main(string[] args)
        {
            // Load the input data (authentication & SkyCiv API commands), from a file
            var jsonRequestBody = File.ReadAllText(inputFilePath);

            // Try calling the SkyCiv API
            if( SkyCiv.TryRequest(jsonRequestBody, out var response, post: true) )
            {
                // Request succeeded, save the response
                File.WriteAllText(outputFilePath, response);

                // Notify in the console
                Console.Write($"The HTTP request to the SkyCiv API was successful - see {outputFilePath} for the JSON response");
            }
            else
            {
                // Request failed, notify in the console (response will be an error message)
                Console.Write(response);
            }
        }
    }

    public static class SkyCiv
    {
        private static string _address = "https://api.skyciv.com/v3";
        private static string _contentType = "application/json";
        private static string _post = "POST";
        private static string _errorMessage = "An error occured";
        
        /// <summary>
        /// Make a request to the SkyCiv API
        /// </summary>
        /// <param name="requestBody">Serialized JSON including auth and function data.</param>
        /// <param name="response">The response from the SkyCiv API</param>
        /// <param name="post">Whether to use POST or GET request type. Default = POST</param>
        /// <returns>A boolean indicating whether the HTTP request was made and the reply received successfully</returns>
        public static bool TryRequest(string requestBody, out string response, bool post = true)
        {
            using (var client = new WebClient())
            {
                client.Headers[HttpRequestHeader.ContentType] = _contentType;

                return SafeRequest(client, requestBody, out response, post: post);
            }
        }

        /// <summary>
        /// Make a generic post or get request and catch exceptions
        /// </summary>
        /// <param name="client">Web client object to use for the request.</param>
        /// <param name="requestBody">HTTP Request body</param>
        /// <param name="response">The response from the SkyCiv API</param>
        /// <param name="post">Whether to use POST or GET request type. Default = POST</param>
        /// <returns>A boolean indicating whether the HTTP request was made and the reply received successfully</returns>
        private static bool SafeRequest(WebClient client, string requestBody, out string response, bool post = true)
        {
            try
            {
                // Make a POST request
                if( post )
                {
                    var data = client.UploadData(_address, _post, Encoding.UTF8.GetBytes(requestBody));
                    response = Encoding.UTF8.GetString(data);
                    return true;
                }

                // Make a GET request
                response = client.DownloadString(_address);
                return true;
            }
            catch (Exception e)
            {
                response = $"{_errorMessage}: {e.Message}";
                
                return false;
            }
        }
    }
}

```

<!--END_DOCUSAURUS_CODE_TABS-->

<br/>