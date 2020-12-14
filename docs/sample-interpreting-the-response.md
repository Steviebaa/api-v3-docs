---
id: interpreting-the-response
title: The Response Object
sidebar_label: Interpreting the response
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Response

The SkyCiv API will run all the functions you define and respond with a JSON object which contains the results in two components. 

* The `response` property provides an object containing the results of the last function executed and some additional helpful information. 
* The `functions` property provides an array of objects where each object contains the results of the respective function.

Consider the functions we provided in the request object in the [Creating the API Object section](getting-started-the-request-object.md#basic-usage). The `functions` property in the response will look as follows:


```json title="Response structure"
{
	"response": {
		"data": [...], // Analysis results from the last function - S3D.model.solve
		"msg": "Non Linear Analysis Successfully Ran",
		"status": 0, // 0 indicates success, 1 indicates fail.
		"session_id": "ttaAi9xJSTPwvfzqFmpEiqAYBtf01e7HA3im8toHo4Vgy7y5Q6EgnBU5fk9yrfMC",
		"monthly_api_credits": {
			"quota": 6000,
			"total_used": 22,
			"used_this_call": 1
		}
	},
	"functions": [
		{}, //response for S3D.session.start
		{}, //response for S3D.model.set
		{}  //response for S3D.model.solve
	]
}

```

<br/>

----

## Interpreting the response

The API call will provide a response which we conventionally name `res` or `response` as shown in the previous section. After parsing this to a JSON object (turning the text into a structured object), we can read the data shown in the code block below.

If `data.response.status` equals `0`, then all functions have been successfully executed. If the response is greater than or equal to `1`, this indicates unsuccessful execution or one or more functions. 

<Tabs
  defaultValue="node-js"
  values={[
    { label: 'Node.js', value: 'node-js', },
    { label: 'HTML/JS', value: 'html-js', },
    { label: 'Python', value: 'py', },
    { label: 'C#', value: 'cs', },
  ]
}>
  <TabItem value="node-js">

```js
/* 
In the previous section, we received a variable 
called res which we then parsed as JSON.
*/

const parsedResults = JSON.parse(responseData);

// We can dig down into this variable by "chaining" the keys within the object.
// If our JSON response object looks like this:
{
   "response": {
      "data": [...], // analysis results
      "msg": "Non Linear Analysis Successfully Ran",
      "status": 0,
      "session_id": "ttaAi9xJSTPwvfzqFmpEiqAYBtf01e7HA3im8toHo4Vgy7y5Q6EgnBU5fk9yrfMC",
      "monthly_api_credits": {
            "quota": 6000,
            "total_used": 22,
            "used_this_call": 1
      }
   },
   "functions": [
      {...}, //response for S3D.session.start
      {...}, //response for S3D.model.set
      {...}  //response for S3D.model.solve
   ]
}

// Then we could do the following to print the value assigned to the "msg" key.
console.log(parsedResults.response.msg)
// Prints: Non Linear Analysis Successfully Ran

// If we needed to retrieve a value from the "S3D.model.set" function then we would access it 
// differently as it is an array (denoted by the square brackets)
console.log(parsedResults.functions[1].some_key) // Don't forget arrays start at 0.
```

  </TabItem>
  <TabItem value="html-js">

```js
/*
   In the previous section, we received a variable called 
   response which we then parsed to JSON. This "then" gets 
   passed into the next block in a variable named 
   "data" where we can manipulate it.
   */

// We can dig down into this variable by "chaining" the keys within the object.
// If our JSON response object looks like this:
{
   "response": {
      "data": [...], // analysis results
      "msg": "Non Linear Analysis Successfully Ran",
      "status": 0,
      "session_id": "ttaAi9xJSTPwvfzqFmpEiqAYBtf01e7HA3im8toHo4Vgy7y5Q6EgnBU5fk9yrfMC",
      "monthly_api_credits": {
            "quota": 6000,
            "total_used": 22,
            "used_this_call": 1
      }
   },
   "functions": [
      {...}, //response for S3D.session.start
      {...}, //response for S3D.model.set
      {...}  //response for S3D.model.solve
   ]
}

// Then we could add this inside the "then" block to print the value assigned to the "msg" key.
console.log(data.response.msg)
// Prints: Non Linear Analysis Successfully Ran

// If we needed to retrieve a value from the "S3D.model.set" function then we would access it 
// differently as it is an array (denoted by the square brackets)
console.log(data.functions[1].some_key) // Don't forget arrays start at 0.
```

  </TabItem>
  <TabItem value="py">

```py
# In the previous section, we received a response which we then 
# parsed to JSON and stored in a variable called parsed_res.

# We can dig down into this variable using the keys within the object.
# If our JSON response object looks like this:
{
   "response": {
      "data": [...], # analysis results
      "msg": "Non Linear Analysis Successfully Ran",
      "status": 0,
      "session_id": "ttaAi9xJSTPwvfzqFmpEiqAYBtf01e7HA3im8toHo4Vgy7y5Q6EgnBU5fk9yrfMC",
      "monthly_api_credits": {
            "quota": 6000,
            "total_used": 22,
            "used_this_call": 1
      }
   },
   "functions": [
      {...}, # response for S3D.session.start
      {...}, # response for S3D.model.set
      {...}  # response for S3D.model.solve
   ]
}

# Then we could add this code after assigning parsed_res to print the value assigned to the "msg" key.
print(parsed_res["response"]["msg"])
# Prints: Non Linear Analysis Successfully Ran

# If we needed to retrieve a value from the "S3D.model.set" function then we would access it 
# differently as it is an array (denoted by the square brackets)
print(parsed_res["functions"][1]["some_key"]) # Don't forget arrays start at 0.
```

  </TabItem>
  <TabItem value="cs">

```cs
using Newtonsoft.Json.Linq;

// In the previous section, we stored the API reply in a string named 'response':
SkyCiv.TryRequest(jsonRequestBody, out var response, post: true)

// We first need to parse that to a JObject:
Jobject parsed = JObject.Parse(response); // namespace: Newtonsoft.Json.Linq;

// We can dig down into this variable by "chaining" the keys within the object.
// If our JSON response object looks like this:
{
   "response": {
      "data": [...], // analysis results
      "msg": "Non Linear Analysis Successfully Ran",
      "status": 0,
      "session_id": "ttaAi9xJSTPwvfzqFmpEiqAYBtf01e7HA3im8toHo4Vgy7y5Q6EgnBU5fk9yrfMC",
      "monthly_api_credits": {
            "quota": 6000,
            "total_used": 22,
            "used_this_call": 1
      }
   },
   "functions": [
      {...}, //response for S3D.session.start
      {...}, //response for S3D.model.set
      {...}  //response for S3D.model.solve
   ]
}

// Then we can do the following to print the value assigned to the "msg" key:
Console.Write( parsed["response"]["msg"]?.ToString() ); 
// Note 1: Use ToString() to get a printable result
// Note 2: Trying to get a property that is not there will return null - catch with null-conditional operator (?.)

// If we needed to retrieve a value from the "S3D.model.set" function then we would access it 
// differently as it is an array (denoted by the square brackets)
Console.Write( parsed["functions"][1]["status"].ToString() );  // Don't forget arrays start at 0.
```

  </TabItem>
</Tabs>