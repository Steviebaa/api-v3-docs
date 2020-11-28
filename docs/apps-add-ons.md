---
id: add-ons
title: SkyCiv Add-ons
---

Build your own add-ons and apps directly on top of SkyCiv Structural 3D.

<img src="https://skyciv.com/wp-content/uploads/2019/11/bill-of-materials-structural-analysis-software.png"/>
<center><i>SkyCiv Bill of Materials App is an example of a SkyCiv Addon</i></center>

## Getting Started

To get started, simply open up SkyCiv Structural 3D. Then open your developer console by hitting CTRL+SHIFT+J (this may depend on your browser) and pasting the below code. This will install a sample app, you can continually copy and paste code into the Console

```js

	jQuery(document).ready(function() { // put code in closure so it doesn't affect other things

		// This puts the app into SKYCIV_APPS.newApp
		new SKYCIV_APPS.create({
			id: "newApp", // must be unique
			name: "My Custom App",
			width: "600px",
			height: "600px",
			icon_img: 'https://platform.skyciv.com/storage/images/logos/light/square-1.png',
			icon_img_square: 'https://platform.skyciv.com/storage/images/logos/light/square-1.png',
			draggable: true,
			content: '<p>HEY</p>',
			onInit: function() { // this is called when the page loads the app
				console.log("App has been initalised");
			},
			onFirstOpen: function() { // this is called the first time the app is actually opened
				
			},
		});

		// Can bind new functions to it
		SKYCIV_APPS.newApp.myFun = function() {

		};

		//initialize
		SKYCIV_APPS.newApp.init();
	});

```

### Initialising Options

| Key  | Type     |      Description    |
| :------------- | :----------: | :----------- |
|  id* | `string`   | File name of your model   |
|  name* | `string`   | Path in your cloud file storage   |
|  content* | `string`   | HTML string of what should be displayed in the app   |
|  width | `string`   | Optional width setting for app window   |
|  height | `string`   | Optional height setting for app window    |
|  icon_img | `string`   | URL of image to be used    |
|  icon_img_square | `string`   | URL of image to be used within the app header  |
|  draggable | `bool`  | Is the app window draggable. True by default.   |
|  resizable | `bool`  | Can user resize window? Used alongside resizeableFunction to update  |
|  resizeableFunction | `function`   | Function which runs when the app window is resized   |
|  help_url | `string`   | URL of documentation or help page   |
|  onInit | `function`   | Function which runs when the page loads the app   |
|  onFirstOpen | `function`   | Runs when the app is open for the first time   |
|  onSoftwareUpdate | `function`  | Function to run after changes are made to your model in S3D. E.g. Bill of Materials App re-calculates cost when a member is added/deleted  |
|  beforeShow | `function`   | Before the app is shown, run this function  |
|  aferShow | `function`   | After the app is shown, run this function  |
|  beforeHide | `function`   | Before the app is hidden, run this function  |
|  aferHide | `function`   | After the app is hidden, run this function  |




### Core Functions

Once your app is initalized, you can call the following functions to make the most of your app. SKYCIV_APPS.create() will create the app and add it to SKYCIV_APPS as an object. You can then access all of the default and user defined functions for this app.

In the above example, we created an app. We now have access to the following functions from the console:

```js 
	SKYCIV_APPS.newApp.show(); //shows the app window

	SKYCIV_APPS.newApp.hide(); //hides the app window

	SKYCIV_APPS.newApp.init(); //initialises the app. Must be run after creating the app

	SKYCIV_APPS.newApp.getContainer(); //return the window as a jQuery element

	SKYCIV_APPS.newApp.hasBeenOpened(); //returns true or false

	SKYCIV_APPS.newApp.isOpen(); //returns true or false

	SKYCIV_APPS.newApp.myFun(); //calling a custom function we wrote

```

### What's next?

Once you've built and tested your app, email us at support@skyciv.com to learn more about getting this installed on our platform for internal or public use!
