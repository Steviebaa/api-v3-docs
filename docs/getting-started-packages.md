---
id: packages
title: Packages 
sidebar_label: Packages
---

The SkyCiv Team has developed packages for some of the popular languages to help keep your code clean! 

We highly recommend the use of these packages and we will further develop them to include useful tools in the future.

We support packages for Javascript, Python 3 and NuGet, with the following package technologies:

<!-- LOCAL HOST WILL MAKE THESE LINKS LOOK BROKEN BY HAVING 3 HYPHENS, LIVE SITE HAS SINGLE HYPHEN -->
<ul>
	<li><a href="#npm-javascript">NPM for Javascript</a></li>
	<li><a href="#pip-python-3">Pip for Python 3</a></li>
	<li><a href="#nuget-c">NuGet for C#</a></li>
</ul>

<br/>

----


<!-- START NPM -->

## **NPM - JavaScript**

If you're already familiar with NPM, then jump down [here](#experienced-with-npm). If you're new to NPM, don't fear, we'll help you get setup [down below](#new-to-npm)!

You can also view the package on [the NPM website](https://www.npmjs.com/package/skyciv).

### Experienced with NPM?

If you already know how to use NPM then here is what you're looking for:

#### Install the skyciv package
`npm i skyciv`

#### Basic usage
```js
const skyciv = require('skyciv');

const data = YOUR_API_OBJECT

skyciv.request(data, function(res) {
    // Do something with results object "res"
}, options);
```

#### Useful links
* [Creating the `API_OBJECT`](sample-creating-the-api-object.md)

* [Interpreting the `response`](sample-interpreting-the-response.md)

### New to NPM?

We've provided a crash course for NPM below. If you have any questions then get in touch with our team!

#### What is NPM?

NPM (Node Package Manager) is a package manager for the JavaScript language. It allows developers to bundle up some useful code for others to use. There is two components to NPM:

1. [The website](https://www.npmjs.com/) where you can browse publicly available packages and; 
2. The command line client, allowing you to add packages to your project via the command line.

To demonstrate its awesomeness, the SkyCiv NPM package turns over 100 lines of code into a single function and will also provide some verification on your input. This is very useful when trying to keep your code clean!

#### Installing NPM

If you haven't used NPM before, there is a couple of things to get going which we will run you through here.

#### Node.js

Node.js is an open source server environment which uses JavaScript so you don't have to use a browser to run JavaScript!

You will need to install Node.js to your machine. Download the right version for your machine on the [Node.js website](https://nodejs.org/en/download/). 

Once you have installed Node.js, open the command terminal and type in `node -v`. The terminal should print a version number confirming that it has been installed. Likewise, you should now have access to the `npm` command, so type in `npm -v` and the terminal will print the NPM version number.

<img class="inline-img" style={{maxWidth: '100%'}} src="/api-v3-docs/img/images/npm-version-check.png"/>


#### Creating a project

We can now create a project and add the `skyciv` dependency to it, so lets do that!

1. Go to your Desktop and create a new folder with your project name such as `sample-project`.
2. Open this folder in your preferred code editor. [VS Code](https://code.visualstudio.com/download) is great (and free) for this purpose.
3. In the VS Code menu, click `Terminal > New Terminal` and your will now have a command line available at the bottom of the window.

<img class="inline-img" style={{maxWidth: '100%'}} src="/api-v3-docs/img/images/vscode-open-terminal.png"/>

4. In the terminal, you should see the path that points to your `sample-project` directory. Enter the command `npm init -y`. The option `-y` means "answer yes to all the following questions". This will create the npm file named package.json which will contain those answers. By default the entry point to your app will now be the file named index.js which is common convention. You can see this under the "main" key in the package.json file.

<img class="inline-img" style={{maxWidth: '100%'}} src="/api-v3-docs/img/images/npm-init-demo.png"/>

*Quick note*: The package.json file means you can send the project to other people without the node_modules folder and they will know what dependencies the project relies on. These can automatically be installed by using the command `npm i` (or `npm install`) from within the project directory. The node_modules folder can get ***very*** big so its nice to not include it therefore only making copies of the dependencies where they're required.

5. In the terminal, enter the command `npm i skyciv`. A folder called node_modules will be added to your project containing the skyciv package. Another file called package-lock.json will also be added.
6. In the file explorer to the left, create a new file named `index.js` in the top level of the project. This is where your project code will live!

#### Using the SkyCiv Package

Now you have a project ready to go, we can add some code. This is the cool part!

With the skyciv package, you now have access to the `skyciv.request()` function. The function takes three parameters:
1. `data`: This is the API object that defines your structure and functions you would like to run.
2. `callback function`: Once the response is received, this function will run.
3. `options`: An optional parameter which allows you to choose which version of the API to use and whether to use http or https.

For this sample we will omit the options parameter. The request will default to version 3 of the API and use https.
```js
const skyciv = require('skyciv'); // This gives you access to the skyciv code that we added to the project

const data = YOUR_API_OBJECT; // This will be your API object. See the link below for sample code.

skyciv.request(data, function (res) {
	// Do something with results object "res"
	console.log(res);
});
```

That's it! Replace the `data` constant with your data, then in the terminal use the node command to run your index.js script by typing `node index.js`. 

To use NPM packages in the future, you can start from [Creating a project](#creating-a-project) as you now have Node.js installed!

#### Useful links
* [Creating the `API_OBJECT`](sample-creating-the-api-object.md)

* [Interpreting the `response`](sample-interpreting-the-response.md)

<!-- END NPM -->

<br/>

----

<!-- START Pip -->

## **Pip - Python 3**

### Experienced with Pip?

If you already know how to use Pip then here is what you're looking for:

#### Install the skyciv package
`pip install skyciv`

#### Basic usage
```py
import skyciv

data = YOUR_API_OBJECT

options = {
    version: 3,
    http_or_https: 'https'
}

results = skyciv.request(data, options)
```

##### Useful links
* [Creating the `API_OBJECT`](sample-creating-the-api-object.md)

* [Interpreting the `response`](sample-interpreting-the-response.md)

### New to Pip?

#### What is Pip?

Pip is a package manager for the Python language. It allows developers to bundle up some useful code for others to use. There is two main components to Pip:

1. [The PyPI website](https://pypi.org/) (the default source) where you can browse publicly available packages and; 
2. The command line client allowing you to add packages to your project via the command line.

To demonstrate its awesomeness, the SkyCiv Pip package turns dozens of lines of code into a single function and will also provide some verification on your input. This is very useful when trying to keep your code clean!

#### Installing Pip

***Note:*** Python 3 is required to use the skyciv package.

#### Check if you have Python

If you have previously installed Python 3 onto your machine, then it is likely that you already have Pip. To check if you have python, use the following command in the terminal:

Windows: `python3 -V`

MacOS: `python3 -V`

If the terminal prints a version number then move on to checking if you have pip. Otherwise, head over and download the latest version of [Python 3](https://www.python.org/downloads/) and then continue to check if Pip becomes available.


#### Check if you have Pip

Windows: `pip --version`

MacOS: `pip -V`

<img class="inline-img" style={{maxWidth: '100%'}} src="/api-v3-docs/img/images/python-version-check.png"/>

If the terminal doesn't print a version number then you will need to install it. The Python Packaging Authority provides a [walk-through here](https://pip.pypa.io/en/stable/installing/).

#### Creating a project

We can now create a project and add the `skyciv` dependency to it, so lets do that!

1. Go to your Desktop and create a new folder with your project name such as `sample-project`.
2. Open this folder in your preferred code editor. [VS Code](https://code.visualstudio.com/download) is great (and free) for this purpose.
3. In the VS Code menu click `Terminal > New Terminal` and your will now have a command line available at the bottom of the window.

<img class="inline-img" style={{maxWidth: '100%'}} src="/api-v3-docs/img/images/vscode-open-terminal.png"/>

4. In the terminal you should see the path that points to your `sample-project` directory. Enter the command `pip install skyciv`.

<img class="inline-img" style={{maxWidth: '100%'}} src="/api-v3-docs/img/images/vscode-pip-install-skyciv.png"/>

The important part of the output is `Successfully installed skyciv-x.x.x`. This means the skyciv package has been added to your Python directory and is available to use in any Python project.

5. In the file explorer to the left, create a new file named `main.py` in the top level of the project. This is where your project code will live!

#### Using the SkyCiv Package

Now you have a project ready to go, we can add some code. This is the cool part!

With the skyciv package, you now have access to the `skyciv.request()` function. The function takes two parameters:
1. `data`: This is the API object that defines your structure and functions you would like to run.
2. `options`: An optional parameter which allows you to choose which version of the API to use and whether to use http or https.

For this sample we will omit the options parameter. The request will default to version 3 of the API and use https.
```py
import skyciv # This gives you access to the skyciv code that we installed

data = YOUR_API_OBJECT # This will be your API object. See the link below for sample code

results = skyciv.request(data) # Use the built in skyciv.request() function

print(results) # Show the response in the terminal
```

That's it! Replace the `data` variable with your data, then in the terminal use the python3 command to run your main.py script by typing `python3 main.py`. If you've left the data variable as above, you will see a message from the API in the terminal telling you the authentication data was missing, so build a proper object or use the sample object and try sending it off!

To use Pip packages in the future, you can start from [Creating a project](#creating-a-project) as you now have Python and Pip installed!

#### Useful links
* [Creating the `API_OBJECT`](sample-creating-the-api-object.md)

* [Interpreting the `response`](sample-interpreting-the-response.md)

<!-- END Pip -->

<br/>

----

<!-- START NuGet -->

## **NuGet - C#**

### What is NuGet?

NuGet is the package manager for .Net languages. NuGet allows developers to package up code, especially libraries, for others to use.

The easiest way to install NuGet packages is using [Microsoft](https://visualstudio.microsoft.com/) [Visual Studio](#installing-from-visual-studio).

#### How do I get NuGet?

The NuGet Package Manager is installed automatically with Visual Studio.

If you wish to use NuGet with another IDE, such as Visual Studio Code, you must download the [.Net Core SDK](https://www.microsoft.com/net/download/).

### Installing the SkyCiv API Package

How you install the SkyCiv NuGet package depends on whether you are developing with [Microsoft](https://visualstudio.microsoft.com/) [Visual Studio](#installing-from-visual-studio), or with another [compiler/IDE](#installing-for-another-ide), such as [Visual Studio Code](https://code.visualstudio.com/).

***Note:*** Microsoft recommends Visual Studio for getting started with C# code development, and [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) is freely downloadable.


#### Installing from Visual Studio

If you are developing in Visual Studio, the easiest way to install the SkyCiv NuGet package is through the NuGet Package Manager in Visual Studio:

<img src="/api-v3-docs/img/images/nuget_visual_studio.gif"/>

Alternatively you can install the SkyCiv.API NuGet package from Package Manager Console:

```
PM> Install-Package SkyCiv.API
```

<!-- #### Installing for another IDE -->

#### Installing from the Command Line

The simplest way to install the SkyCiv NuGet package for another IDE is from the command line.
First ensure you have the [.Net Core SDK](https://www.microsoft.com/net/download/) installed.
Then run:
```
> dotnet add package SkyCiv.API
```

#### Installing in Visual Studio Code using the NuGet Gallery Extension

If you are working with Visual Studio Code, there are a few Extensions that make installing the SkyCiv API easy.

The first is the Nuget Gallery Extension:

<img src="/api-v3-docs/img/images/nuget_vs_code.gif"/>

#### Installing in Visual Studio Code using the Nuget Package Manager Extension

Alternatively, you can use the Nuget Package Manager Extension:

<img src="/api-v3-docs/img/images/nuget_vs_code2.gif"/>

### Using the Package

Using the package is as simple as referencing the `namespace` `SkyCiv` & `static class` `SkyCiv`:

```c#
	static void Main(string[] args)
	{
		var jsonRequestBody = File.ReadAllText("YOUR_API_OBJECT");

		if( SkyCiv.SkyCiv.TryRequest( jsonRequestBody, out var response, post: true ) )
		{
			// Request succeeded, do something with the response
		}
	}
```

<!-- END NuGet -->