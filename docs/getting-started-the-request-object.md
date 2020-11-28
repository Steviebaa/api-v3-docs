---
id: the-request-object
title: The Request Object
sidebar_label: The Request Object
---

## Basic Usage

The JSON object that is sent to the API is comprised of three components: 

* [`auth`](#auth) **[required]**: An `object` used to identify the user.

* [`options`](#options) **[optional]**: An `object` used to set certain behaviours of the request.

* [`functions`](#functions) **[required]**: An `array` of objects defining a sequence of functions you would like to run.

```json
{
   "auth": {
      "username": "YOUR_SKYCIV_USERNAME",
      "key": "YOUR_SKYCIV_API_KEY"
   },
   "options": {
	   "validate_input": true
   },
   "functions": [
      {
         "function": "S3D.session.start",
         "arguments": {
            "keep_open": false
         }
      },
      {
         "function": "S3D.model.set",
         "arguments": {
            "s3d_model": S3D_MODEL_OBJECT_OBJECT
         }
      },
      {
         "function": "S3D.model.solve",
         "arguments": {
            "analysis_type": "nonlinear",
            "repair_model": true
         }
      }
   ]
}
```

<br/>

----

## `auth`

The JSON object that is sent to the API must contain the `auth` key at the top level of the object. The `auth` object takes the following properties:

| Key  | Type    | Description    |
| :--- | :--- | :--- |
| [`username`](#username-required) (required) | `string`   | Your SkyCiv username used to sign into the platform.    |
| [`key`](#key-optional) (optional) | `string`        | Your SkyCiv API key from the [account settings](https://platform.skyciv.com/account/api) page.    |
| [`session_id`](#session_id-optional) (optional) | `string` | The `session_id` provided in the response from the first call to the API. Providing this `session_id` in lieu of `key` will allow you to skip the verification process for subsequent calls within 30 minutes of the first call.   |

The initial call object:

```json
{
	"auth": {
		"username": "YOUR_SKYCIV_USERNAME",
		"key": "YOUR_API_KEY"
	}
	// ...other components
}
```

Subsequent calls object (within 30 mins of making the initial call):

```json
{
	"auth": {
		"username": "YOUR_SKYCIV_USERNAME",
		"session_id": "SESSION_ID_FROM_FIRST_API_CALL"
	}
	// ...other components
}
```

### `username` (required)

The `username` property should have a string value of your SkyCiv username.

### `key` (optional)

The `key` property should contain a string value of your SkyCiv API key. This can be obtained from the [account settings](https://platform.skyciv.com/account/api) page. If this is not provided, then [`session_id`](#session_id-optional) is required.

### `session_id` (optional)

Providing the `session_id` property in lieu of [`key`](#key-optional) will allow you to skip the verification process for subsequent calls within 30 minutes of the first call. If the `session_id` property is not provided, you must provide `key`.

When using the `S3D.session.start` function, you can opt to keep your session open by setting the `keep_open` property to `true`. This means that after you run a batch of functions, you can keep the session open for 30 minutes. This allows you to re-visit the session without having to re-authenticate therefore increasing the speed of subsequent calls.

If you set the `keep_open` property to `true`, the API will return a `last_session_id` that you can use for the next authentication. The code block below shows the response from the initial call containing the `last_session_id`:

```json
{
	"response": {
		"data": {},
		"msg": "Solved Successfully!",
		"comments": " Linear Static Analysis Completed ",
		"status": 0,
		"function": "S3D.model.solve",
		"last_session_id": "esz8ITRreJoaQsm6GRebHhxz9xg3qYhXDl6cTy88CLEdQolVcgpbf8bp7dCiuk99_2",
		"monthly_api_credits": { "quota": 500, "total_used": 113, "used_this_call": 1 }
	},
	"functions": []
}
```

<br/>

----

## `options`

The options property allows you to provide an object which specifies certain behaviours of the request. The options object accepts the following values:

| Key  | Type    | Description    | Default    |
| :--- | :--- | :--- | :--- |
| [`validate_input`](#validate_input-optional) (optional) | `boolean`   | Verify the model input with SkyCiv's built in model validator.    | `true` |
| [`response_data_only`](#response_data_only-optional) (optional) | `boolean`  | Only respond with data from the last function specified in the [`functions`](#functions) array.     | `false`  |

### `validate_input` (optional)

The `validate_input` property indicates if your input should be verified. If `true` is provided, a fast and descriptive response will be returned if there is any issues with the input. It is recommended to omit this key unless confident.

### `response_data_only` (optional)

The API response contains the following components:
* `response` (object) - Contains the data from the final function and some other useful information.
* `functions` (array) - Each object in this array provides results for the respective function.

To keep the response size down, you can set `response_data_only` to `true`. This means you will ***only*** receive the response object. This will contain the `data` from the last function called. `response_data_only` defaults to `false`.

<br/>

----

## `functions`

The `functions` property takes an `array` of objects - each object defines a function to be executed. The functions should be in order of desired execution. The following is a list of available functions:

### Session
* [`S3D.session.start`](docs-S3D.session.md)

### Model
* [`S3D.model.set`](docs-S3D.model.md#s3dmodelset)
* [`S3D.model.get`](docs-S3D.model.md#s3dmodelget)
* [`S3D.model.repair`](docs-S3D.model.md#s3dmodelrepair)
* [`S3D.model.solve`](docs-S3D.model.md#s3dmodelsolve)
* [`S3D.model.takeScreenshot`](docs-S3D.model.md#s3dmodeltakescreenshot)
* [`S3D.model.mesh`](docs-S3D.model.md#s3dmodelmesh)

### Results
* [`S3D.results.set`](docs-S3D.results.md#s3dresultsset)
* [`S3D.results.get`](docs-S3D.results.md#s3dresultsget)
* [`S3D.results.fetchMemberResult`](docs-S3D.results.md#s3dresultsfetchmemberresult)
* [`S3D.results.getAnalysisReport`](docs-S3D.results.md#s3dresultsgetanalysisreport)
* [`S3D.model.takeScreenshot`](docs-S3D.results.md#s3dmodeltakescreenshot)

### Member design
* [`S3D.member_design.getInput`](docs-S3D.member_design.md#s3dmember_designgetinput)
* [`S3D.member_design.check`](docs-S3D.member_design.md#s3dmember_designcheck)
* [`S3D.member_design.passFailCheck`](docs-S3D.member_design.md#s3dmember_designpassfailcheck)
* [`S3D.member_design.optimize`](docs-S3D.member_design.md#s3dmember_designoptimize)
* [`standalone.member.check`](docs-S3D.member_design.md#standalonemembercheck)

### RC design
* [`S3D.rc_design.getInput`](docs-S3D.rc_design.md#s3drc_designgetinput)
* [`S3D.rc_design.check`](docs-S3D.rc_design.md#s3drc_designcheck)
* [`S3D.SB.GSD`](docs-S3D.rc_design.md#s3dsbgsd)

### Section builder
* [`S3D.SB.loadLibraryShape`](docs-S3D.SB.md#s3dsbloadlibraryshape)
* [`S3D.SB.getLibraryTree`](docs-S3D.SB.md#s3dsbgetlibrarytree)
* [`S3D.SB.buildCustomShape`](docs-S3D.SB.md#s3dsbbuildcustomshape)
* [`S3D.SB.solve`](docs-S3D.SB.md#s3dsbsolve)
* [`S3D.SB.runGSD`](docs-S3D.SB.md#s3dsbrungsd)
* [`S3D.SB.detectLibraryShape`](docs-S3D.SB.md#s3dsbdetectlibraryshape)


### File management
* [`S3D.file.save`](docs-S3D.file.md#s3dfilesave)
* [`S3D.file.open`](docs-S3D.file.md#s3dfileopen)
* [`S3D.file.share`](docs-S3D.file.md#s3dfileshare)
* [`S3D.file.getFileDirectory`](docs-S3D.file.md#s3dfilegetfiledirectory)

