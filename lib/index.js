/**
  * @module APIMATICCodeGenLib
  *
  * # APIMATIC CodeGen as a Service  [APIMATIC](https://apimatic.io) is an automatic code generator
  * for RESTful APIs. This API exposes the access to its underlying code generation engine. We
  * currently support the following format for API descriptions, `API Blueprint`, `RAML`, `Google
  * API Discovery`, `IODocs`, `WADL`, and  `Swagger`. Although most API descriptions can be used,
  * not all API decsriptions are written well-enough for automatic code generation and may fail the
  * code generation process. For this purpose, we have provided a verbose validation API, which can
  * be used to improve your API description.  > **Looking for a way to convert between API
  * description formats like Swagger and API Blueprint?** Try [APIMATIC's Transformer API](http:
  * //docs.apimatictransformerapi.apiary.io/#) or it's web version at [Transformer](https:
  * //apimatic.io/transformer).  [APIMATIC](https://apimatic.io) works in two modes i.e., perform
  * operations on **pre-configured** API descriptions, and perform  operations on API descriptions
  * sent **on the fly** with requests. The later mode of operations has its limitations with
  * respect to the customization of the generated code through our *codegen settings*.  See [this
  * article](https://docs.apimatic.io/api-editor/codegen-settings/) for more information about
  * customization of the output code.  ## Working with pre-configured API descriptions  This mode
  * of operation is useful where APIs are stable and therefore can be pre-configured in
  * [APIMATIC](https://apimatic.io). You can always update an API description in [APIMATIC](https:
  * //apimatic.io) using the API Editor by clicking on the *Edit* button. When working with stored
  * API descriptions, pre-configured *codegen settings* are used that allow customization of the
  * generated output. In order to uniquely identify the API to perform operations on, an *API Key*
  * is used, which can be retrieved using the API context menu. This *API Key* is a secret value
  * and therefore operations on pre-configured API descriptions do not require authentication.  See
  * [this article](https://docs.apimatic.io/getting-started/manage-apis/#view-api-integration-key)
  * on how to get your API Key from [APIMATIC](https://apimatic.io).  ## Working with API
  * descriptions documents  This mode of operation is useful in cases where API descriptions are
  * automatically generated from a process or external source and cannot be pre-configured in
  * [APIMATIC](https://apimatic.io). In this case code generation uses the default *codegen
  * settings*. However, if custom *codegen settings* are desired you may use the [APIMATIC](https:
  * //apimatic.io) format for generating your API descriptions, which contains nested *codegen
  * settings*. For getting the full benefit of our advanced features in our code generator, you
  * must either pre-configure your API, or use [APIMATIC](https://apimatic.io) format for API
  * description.
  */

'use strict';

const Configuration = require('./configuration');
const CodeGenerationController = require('./Controllers/CodeGenerationController');
const APIDescriptionValidationController =
  require('./Controllers/APIDescriptionValidationController');
const ValidateAnAPIDescriptionResponse = require('./Models/ValidateAnAPIDescriptionResponse');
const Template = require('./Models/Template');
const Format = require('./Models/Format');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of APIMATICCodeGenLib
    Configuration,
    // controllers of APIMATICCodeGenLib
    CodeGenerationController,
    APIDescriptionValidationController,
    // models of APIMATICCodeGenLib
    ValidateAnAPIDescriptionResponse,
    Template,
    Format,
    // exceptions of APIMATICCodeGenLib
    APIException,
};

module.exports = initializer;
