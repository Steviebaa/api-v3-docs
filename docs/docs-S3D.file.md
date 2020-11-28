---
id: S3D.file
title: S3D.file 
---

---

The `S3D.file` namespace provides functionality allowing the user to interact with their file manager on the SkyCiv platform.

----

## `S3D.file.save`

Save a model to the user's SkyCiv cloud storage.

| Key  | Type  | Description  |
| :--- | :---: | :---         |
|  `name` | `string`   | File name of the model   |
|  `path` | `string`   | Path in the user's cloud file storage   |

#### Sample input for the `S3D.file.save` function

```json
{
  "function": "S3D.file.save",
  "arguments": {
    "name": "project file name",
    "path": "api/new-folder/"
  }
}
```
<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.model.takeScreenshot" target="_blank" class="sample-code-btn">Try <code>S3D.file.save</code></a><br/>

#### Sample response for the `S3D.file.save` function

The response will confirm whether or not the model was successfully saved to the user's SkyCiv cloud storage. It will also include a link to the model:

```json
{
  "data": "https://platform.skyciv.com/structural?preload_name=API%20File%20Name&preload_path=api/new-folder/",
  "msg": "Model was successfully saved to your SkyCiv cloud storage in the folder api/new-folder/. You can access this file from your SkyCiv Dashboard, or directly from https://platform.skyciv.com/structural?preload_name=API%20File%20Name&preload_path=api/new-folder/",
  "status": 0
}
```

Visit the URL to view, analyse and modify the model in Structural 3D.

<img style={{maxWidth: "900px"}} src="/api/v3/img/images/api-generated-model-skyciv.png"/>

<br/>

----

## `S3D.file.open`

Load a model from the user's SkyCiv cloud storage.

| Key  | Type  | Description  |
| :--- | :---: | :---         |
|  `name` | `string` | File name of the model.   |
|  `path` | `string` | Path in the user's cloud file storage   |

#### Sample input for the `S3D.file.open` function

```json
{
  "function": "S3D.file.open",
  "arguments": {
    "name": "Sample Model",
    "path": "Project Name/QA/"
  }
}
```
<a class="sample-code-btn" target="_blank" href="https://platform.skyciv.com/api?f=S3D.file.open">Try <code>S3D.file.open</code></a>
<br/>

#### Sample response for the `S3D.file.open` function

```json
{
  "status": 0,
  "msg": "File Loaded: model 'Sample Model' is set."
}
```

<br/>

----

## `S3D.file.share`

Share a model with another SkyCiv user.

| Key           | Type          | Description                                                   |
| :---          | :---:         | :---                                                          |
|  `name`       | `string`      | File name of the model to share.                              |
|  `path`       | `string`      | Path in the user's cloud file storage.                        |
|  `share_with` | `[string]`    | An array of SkyCiv email addresses to share the model with.   |

#### Sample input for the `S3D.file.share` function

```json
{
  "function": "S3D.file.share",
  "arguments": {
    "path": "Project Name/QA/",
    "name": "Sample Model",
    "share_with": ["first.person@skyciv.com", "second.person@skyciv.com"]
  }
}
```


#### Sample response for the `S3D.file.share` function

The response will contain a confirmation message, a list of shared users and a public (view only) link.

```json
{
  "status": 0,
  "msg": "File was successfully shared.",
  "data": {
    "shared_user": ["first.person@skyciv.com", "second.person@skyciv.com"],
    "share_link": "https://platform.skyciv.com/structural-viewer?project_id=URQfJBu4vR8SwWaxgdhOFaZ5KINbVQ7vNLG7GIjWnvtZgZInKo5j1vtuxkvOsJ"
  }
}
```

<br/>

----

## `S3D.file.getFileDirectory`

Returns a list of files and folders of in the user's cloud storage. Useful for locating files or building a tree of files.

<div class="banner tip">
	Set the <code>keep_open</code> property to <code>true</code> in the <a href="S3D.session#s3dsessionstart"><code>S3D.session.start</code></a> function for faster file directory navigation.
</div>

| Key            | Type     | Description                                                                                   |
| :---           | :---:    | :---                                                                                          |
|`path`          | `string` | Path in the user's cloud file storage. `""` will return the contents of the root directory.   |
|`full_list`     | `boolean`| Return user's entire file directory in a nested format.    |
|`full_list_flat`| `boolean`| Returns the data as a flattened list for easier iteration. |

#### Sample input for the `S3D.file.getFileDirectory` function

```json
{
  "function": "S3D.file.getFileDirectory",
  "arguments": {
    "path": "Project folder"
  }
}
```

<a href="https://platform.skyciv.com/api/v3?preload_function=S3D.file.getFileDirectory" target="_blank" class="sample-code-btn">Try <code>S3D.file.getFileDirectory</code></a>
<br/>

#### Sample response for the `S3D.file.getFileDirectory` function

The below response shows the contents of the folder, which includes one folder called `QA` and a file (model) called `FCSP Moment Frame ASD - for revit`.

```json
{
  "status": 1,
  "msg": "2 items were found.",
  "data": [
    {
      "class": "folder",
      "special": "shared",
      "privacy": "private",
      "file_name": "QA",
      "thumbnail": "",
      "job_name": "",
      "job_notes": "",
      "last_changed": 1570089100,
      "nodes": "",
      "members": "",
      "shared_alias": "",
      "file_owner_email": ""
    },
    {
      "class": "file",
      "special": "shared",
      "privacy": "private",
      "file_name": "FCSP Moment Frame ASD - for revit",
      "thumbnail": "1_2lWNO0EIbSHQ8AH7wWTE2Z2H1bwHyaMLmAimTSEKGfoVLN4xsFK4EjhyaTv0d4EV.png",
      "job_name": "",
      "job_notes": "",
      "last_changed": 1556773710,
      "nodes": 152,
      "members": 175,
      "shared_alias": "",
      "file_owner_email": ""
    }
  ]
}
```
<!--<a class="sample-code-btn" target="_blank" href="https://platform.skyciv.com/api?f=S3D.file.open">Try this Function</a>-->
