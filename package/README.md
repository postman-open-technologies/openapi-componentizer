## Description

CLI Application that lists objects with given type from OpenAPI document.

Note - Even though all types have been seperately tested, there is a chance of errors. If such a thing happens please contact the authors.

## Installation
```
npm i -g openapi-type-finder
```

## Target
```
    openapi-type-finder -u <url> -t <type> (optional) --no-resolve
```
Use --no-resolve if you want the references in the document to not be resolved, though it may lead to inacurrate behaviour.

Test

Input url: https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml

Input type: responses

Output:

```
{
    "content": {
        "*/*": {
            "schema": {
                "$ref": "#/components/schemas/comic"
            }
        }
    },
    "description": "OK"
}
```
***

# Types Done:

A checklist for which types have been implemented.

* [x] schemas
* [x] responses
* [x] parameters
* [x] examples
* [x] requestBodies
* [x] headers
* [x] securitySchemes
* [x] links
* [x] callbacks
* [x] pathItems



## Schemas (4)
* parameterObject.schema -> Schema Object
* requestBody.content[x].schema -> Schema Object
* response[x].content[y].schema -> Schema Object
* headerObject[x].schema -> Schema Object

## Responses (1)

* pathItemObject[x].responses.y -> {Status Code/ "default" : Response Object | Reference Object}

## Parameters  (2)

* pathItem[x].parameters[y] -> Parameter Object | Reference Object 
* pathItem[x][y].parameters[z] -    > Parameter Object | Reference Object 
  
## Examples (4)
* requestBody.content[x].examples.y -> {name: Example Object}
* response[x].content[y].examples.z -> {name: Example Object}
* parameterObject.examples.x -> {name: Example Object}
* headerObject[x].examples.y -> {name: Example Object}


## Request Bodies (1)

* pathItemObject[x].requestBody -> Request Body Object | Reference Object 

## Headers (2)

* requestBody.content[x].encoding[y].headers.z ->{name: Header Object | Reference Object}
* responseObject[x].headers.y -> {name: Header Object | Reference Object } 

## Security Schemes (1)
* document.components.securitySchemes.x -> { name : Security Scheme Object | Reference Object}

Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. 
Security Schemes are not defined anywhere else.

## Links (1)
* response[x][y].links.z -> {name: Link Object | Reference Object}

## callbacks (1)
* pathItem[x][y].callbacks.z -> {name: Callback Object | Reference Object}

## pathItems (3)
* document.paths.x -> {path:Path Item Object | Reference Object}
* callbacks[x].y -> {path:Path Item Object | Reference Object} 
* document.webhooks.x -> {path:Path Item Object | Reference Object}