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
"200": {
            "content": {
              "*/*": {
                "schema": {
                  "$ref": "#/components/schemas/comic"
                }
              }
            },
            "description": "OK"
          }
}
Done
```
***

# Types Done:

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



## Schemas (5)
* parameterObject.schema -> Schema Object
* requestBodyObject.content.x.schema -> Schema Object
* response[x].schema -> Schema Object [x->Status Code]
* response[x].content.y.schema -> Schema Object [x->Status Code, y->Media Type Object]
* headerObject.schema

## Responses (1)

* pathItemObject[x].responses[y] -> Response Object | Reference Object [x->Operation, y->Status Code]

## Parameters  (2)

* pathItemObject.parameters[x] -> Parameter Object | Reference Object [x-> int]
* pathItemObject[x].parameters[y] -> Parameter Object | Reference Object [x-> Operation Object, y-> int]
<!-- * linkObject.parameters.x -> Map[string, Any | {expression}] --> -> Not a parameterObject

## Examples (4)
* requestBodyObject.content.x.examples.y -> Example Object
* parameterObject.examples.x -> Example Object [x->Media Type Object]
* response[x].content.y.examples.z -> Example Object [x->Status Code, y->Media Type Object]
* headerObject.examples.z -> Example Object


## Request Bodies (1)

* pathItemObject[x].requestBody -> Request Body Object | Reference Object [x-> Operation Object]

## Headers (2)

* requestBodyObject.content.x.encoding.headers[y] ->Header Object | Reference Object [x->Media Type Object]
* responseObject.headers[y] -> Header Object | Reference Object [x->Status Code]

## Security Schemes (1)
* document.components.securitySchemes[x] -> Security Scheme Object | Reference Object

Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. 
Security Schemes are not defined anywhere else.

## Links (1)
* response[x].links[y] -> Link Object | Reference Object [x->Status Code] [y-> string]

## Callbacks (1)
* pathItemObject[x].callbacks[y] -> Callback Object | Reference Object [x-> Operation Object] [y -> string]
(Without including pathItemObjects within callbacks) 

## Path Item Objects (3)
* document.paths[x] -> Path Item Object [x-> /{path}]
* callbacks[x][y] -> Path Item Object | Reference Object [x-> callback, y ->key expression]
* document.webhooks[x] -> Path Item Object | Reference Object [x-> string]