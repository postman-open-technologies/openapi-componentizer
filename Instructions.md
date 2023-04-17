# Description

## Parse an OpenAPI Specification and printing the list of objects from the Spec identified by the type specified as CLI parameter

Kindly note that, this code has still some errors in it, as it is not running properly, any help is appreciated!

# Installation
```
npm install axios yargs yaml
```
# To Run the Code
```
    node openapi_parser.js --url <OPENAPI_SPEC_URL> --type <OBJECT_TYPE>
```
Note - Replace <OPENAPI_SPEC_URL> with the URL of the OpenAPI specification you want to parse, and <OBJECT_TYPE> with the type of object you want to list.

# Packages Used
* Using the using the 'yargs' package to parse the command-line arguments.
* Using the 'axios' package to fetch the OpenAPI specification from the given URL.
* Parse the fetched OpenAPI specification using the yaml package.

# Objective
1. Find the list of objects of the given type in the parsed
2. OpenAPI specification.
3. Print the list of objects.
