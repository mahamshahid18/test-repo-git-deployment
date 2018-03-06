# Getting started

# APIMATIC CodeGen as a Service

[APIMATIC](https://apimatic.io) is an automatic code generator for RESTful APIs. This API exposes the access to its underlying code
generation engine. We currently support the following format for API descriptions, `API Blueprint`, `RAML`,
`Google API Discovery`, `IODocs`, `WADL`, and  `Swagger`. Although most API descriptions can be used, not all API
decsriptions are written well-enough for automatic code generation and may fail the code generation process.
For this purpose, we have provided a verbose validation API, which can be used to improve your API description.

> **Looking for a way to convert between API description formats like Swagger and API Blueprint?** Try [APIMATIC's Transformer API](http://docs.apimatictransformerapi.apiary.io/#) or it's web version at [Transformer](https://apimatic.io/transformer).

[APIMATIC](https://apimatic.io) works in two modes i.e., perform operations on **pre-configured** API descriptions, and perform 
operations on API descriptions sent **on the fly** with requests. The later mode of operations has its
limitations with respect to the customization of the generated code through our *codegen settings*.

See [this article](https://docs.apimatic.io/api-editor/codegen-settings/)
for more information about customization of the output code.

## Working with pre-configured API descriptions

This mode of operation is useful where APIs are stable and therefore can be pre-configured in [APIMATIC](https://apimatic.io).
You can always update an API description in [APIMATIC](https://apimatic.io) using the API Editor by clicking on the *Edit* button.
When working with stored API descriptions, pre-configured *codegen settings* are used that allow customization
of the generated output. In order to uniquely identify the API to perform operations on, an *API Key* is used,
which can be retrieved using the API context menu. This *API Key* is a secret value and therefore operations
on pre-configured API descriptions do not require authentication.

See [this article](https://docs.apimatic.io/getting-started/manage-apis/#view-api-integration-key)
on how to get your API Key from [APIMATIC](https://apimatic.io).

## Working with API descriptions documents

This mode of operation is useful in cases where API descriptions are automatically generated from a process
or external source and cannot be pre-configured in [APIMATIC](https://apimatic.io). In this case code generation uses the default
*codegen settings*. However, if custom *codegen settings* are desired you may use the [APIMATIC](https://apimatic.io) format for
generating your API descriptions, which contains nested *codegen settings*. For getting the full benefit
of our advanced features in our code generator, you must either pre-configure your API, or use [APIMATIC](https://apimatic.io)
format for API description.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=APIMATIC%20CodeGen-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=APIMATIC%20CodeGen-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `APIMATICCodeGenLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=APIMATIC%20CodeGen-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=APIMATIC%20CodeGen-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=APIMATIC%20CodeGen-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=APIMATIC%20CodeGen-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  APIMATIC CodeGenController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=APIMATIC%20CodeGenController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [CodeGenerationController](#code_generation_controller)
* [APIDescriptionValidationController](#api_description_validation_controller)

## <a name="code_generation_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CodeGenerationController") CodeGenerationController

### Get singleton instance

The singleton instance of the ``` CodeGenerationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CodeGenerationController;
```

### <a name="generate_code_from_a_pre_configured_api"></a>![Method: ](https://apidocs.io/img/method.png ".CodeGenerationController.generateCodeFromAPreConfiguredAPI") generateCodeFromAPreConfiguredAPI

> TODO: Add a method description


```javascript
function generateCodeFromAPreConfiguredAPI(apikey, template, dl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| apikey |  ``` Required ```  | The API Key of the pre-configured API |
| template |  ``` Required ```  | The template to use for code generation |
| dl |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var apikey = 'apikey';
    var template = Object.keys(template)[0];
    var dl = 123;

    controller.generateCodeFromAPreConfiguredAPI(apikey, template, dl, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized: Access is denied due to invalid credentials. |
| 412 | Precondition Failed |




### <a name="generate_code_from_api_description1"></a>![Method: ](https://apidocs.io/img/method.png ".CodeGenerationController.generateCodeFromAPIDescription1") generateCodeFromAPIDescription1

> TODO: Add a method description


```javascript
function generateCodeFromAPIDescription1(name, format, template, body, dl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | The name of the API being used for code generation |
| format |  ``` Required ```  | The format of the API description to use for code generation |
| template |  ``` Required ```  | The template to use for code generation |
| body |  ``` Required ```  | TODO: Add a parameter description |
| dl |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var name = 'name';
    var format = Object.keys(format)[0];
    var template = Object.keys(template)[0];
    var body = data;
    var dl = 123;

        controller.generateCodeFromAPIDescription1(name, format, template, body, dl, function(error, response, context) {

        });
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized: Access is denied due to invalid credentials. |
| 412 | Precondition Failed |




### <a name="generate_code_from_api_description_url1"></a>![Method: ](https://apidocs.io/img/method.png ".CodeGenerationController.generateCodeFromAPIDescriptionUrl1") generateCodeFromAPIDescriptionUrl1

> TODO: Add a method description


```javascript
function generateCodeFromAPIDescriptionUrl1(template, format, name, descriptionUrl, dl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| template |  ``` Required ```  | The template to use for code generation |
| format |  ``` Required ```  | The format of the API description to use for code generation |
| name |  ``` Required ```  | The name of the API being used for code generation |
| descriptionUrl |  ``` Required ```  | The absolute public Uri for an API description doucment |
| dl |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var template = Object.keys(template)[0];
    var format = Object.keys(format)[0];
    var name = 'name';
    var descriptionUrl = 'descriptionUrl';
    var dl = 'dl';

    controller.generateCodeFromAPIDescriptionUrl1(template, format, name, descriptionUrl, dl, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized: Access is denied due to invalid credentials. |
| 412 | Precondition Failed |




### <a name="generate_code_from_api_description"></a>![Method: ](https://apidocs.io/img/method.png ".CodeGenerationController.generateCodeFromAPIDescription") generateCodeFromAPIDescription

> The code generation endpoint. The response is a path to the generated zip file relative to https://apimatic.io/


```javascript
function generateCodeFromAPIDescription(name, format, template, body, dl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | The name of the API being used for code generation |
| format |  ``` Required ```  | The format of the API description to use for code generation |
| template |  ``` Required ```  | The template to use for code generation |
| body |  ``` Required ```  | TODO: Add a parameter description |
| dl |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var name = 'name';
    var format = Object.keys(format)[0];
    var template = Object.keys(template)[0];
    var body = data;
    var dl = 123;

        controller.generateCodeFromAPIDescription(name, format, template, body, dl, function(error, response, context) {

        });
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized: Access is denied due to invalid credentials. |
| 412 | Precondition Failed |




### <a name="generate_code_from_api_description_url"></a>![Method: ](https://apidocs.io/img/method.png ".CodeGenerationController.generateCodeFromAPIDescriptionUrl") generateCodeFromAPIDescriptionUrl

> TODO: Add a method description


```javascript
function generateCodeFromAPIDescriptionUrl(template, format, name, descriptionUrl, dl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| template |  ``` Required ```  | The template to use for code generation |
| format |  ``` Required ```  | The format of the API description to use for code generation |
| name |  ``` Required ```  | The name of the API being used for code generation |
| descriptionUrl |  ``` Required ```  | The absolute public Uri for an API description doucment |
| dl |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var template = Object.keys(template)[0];
    var format = Object.keys(format)[0];
    var name = 'name';
    var descriptionUrl = 'descriptionUrl';
    var dl = 123;

    TestHelper.getFileContents('url', function(data) {
        controller.generateCodeFromAPIDescriptionUrl(template, format, name, descriptionUrl, dl, function(error, response, context) {

        });
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized: Access is denied due to invalid credentials. |
| 412 | Precondition Failed |




### <a name="generate_code_from_a_pre_configured_api1"></a>![Method: ](https://apidocs.io/img/method.png ".CodeGenerationController.generateCodeFromAPreConfiguredAPI1") generateCodeFromAPreConfiguredAPI1

> TODO: Add a method description


```javascript
function generateCodeFromAPreConfiguredAPI1(apikey, template, dl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| apikey |  ``` Required ```  | The API Key of the pre-configured API |
| template |  ``` Required ```  | The template to use for code generation |
| dl |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var apikey = 'apikey';
    var template = Object.keys(template)[0];
    var dl = 123;

    TestHelper.getFileContents('url', function(data) {
        controller.generateCodeFromAPreConfiguredAPI1(apikey, template, dl, function(error, response, context) {

        });
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Unauthorized: Access is denied due to invalid credentials. |
| 412 | Precondition Failed |




[Back to List of Controllers](#list_of_controllers)

## <a name="api_description_validation_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIDescriptionValidationController") APIDescriptionValidationController

### Get singleton instance

The singleton instance of the ``` APIDescriptionValidationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIDescriptionValidationController;
```

### <a name="validate_an_api_description_from_uri"></a>![Method: ](https://apidocs.io/img/method.png ".APIDescriptionValidationController.validateAnAPIDescriptionFromUri") validateAnAPIDescriptionFromUri

> This endpoint can be used to validate an API description document *on the fly* from its public Uri, and see detailed error messages along with any warnings or useful information. This endpoint is useful for API descriptions with relative links e.g., includes (RAML) and paths (swagger).


```javascript
function validateAnAPIDescriptionFromUri(descriptionUrl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| descriptionUrl |  ``` Required ```  | The absolute public Uri for an API description doucment |



#### Example Usage

```javascript

    var descriptionUrl = 'descriptionUrl';

    controller.validateAnAPIDescriptionFromUri(descriptionUrl, function(error, response, context) {

    
    });
```



### <a name="validate_a_pre_configured_api_description"></a>![Method: ](https://apidocs.io/img/method.png ".APIDescriptionValidationController.validateAPreConfiguredAPIDescription") validateAPreConfiguredAPIDescription

> This endpoint can be used to validate a *pre-configured* API description and see detailed error messages along with any warnings or useful information.


```javascript
function validateAPreConfiguredAPIDescription(apikey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| apikey |  ``` Required ```  | The API Key of a pre-configured API description from APIMATIC |



#### Example Usage

```javascript

    var apikey = 'apikey';

    controller.validateAPreConfiguredAPIDescription(apikey, function(error, response, context) {

    
    });
```



### <a name="validate_an_api_description"></a>![Method: ](https://apidocs.io/img/method.png ".APIDescriptionValidationController.validateAnAPIDescription") validateAnAPIDescription

> This endpoint can be used to validate an API description document *on the fly* and see detailed error messages along with any warnings or useful information.


```javascript
function validateAnAPIDescription(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    TestHelper.getFilePath('url', function(data) {
        var body = data;

        controller.validateAnAPIDescription(body, function(error, response, context) {

        });
    });
```



[Back to List of Controllers](#list_of_controllers)



