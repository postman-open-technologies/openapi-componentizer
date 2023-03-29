# Types Done:

* [ ] schemas
* [x] responses
* [x] parameters
* [ ] examples
* [x] requestBodies
* [ ] headers
* [x] securitySchemes
* [x] links
* [x] callbacks
* [ ] pathItems
## responses (1)
```
pathItemObject[x].responses[y] -> Response Object | Reference Object [x->Operation, y->Status Code]
```
Input
```
https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.json
```
Output
```
Correct
```
Done
***

## parameters (2)

### Test 1
```
pathItemObject.parameters[x] -> Parameter Object | Reference Object [x-> int]
```
Input
```
https://oai.github.io/Documentation/examples/tictactoe.yaml
```
Output
```
Correct
```

### Test 2
```
pathItemObject[x].parameters[y] -> Parameter Object | Reference Object [x-> Operation Object, y-> int]
```
Input
```
https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml
```
Output
```
Correct
```
Done
## callbacks

### Test 1
```
pathItemObject[x].callbacks[y] -> Callback Object | Reference Object [x-> Operation Object] [y -> string]
```
Input
```
http://127.0.0.1:5500/callbackTest.yaml
```
Output
```
Correct
```
***
Done
## links

### Test 1
```
response[x].links[y] -> Link Object | Reference Object [x->Status Code] [y-> string]
```
Input
```
http://127.0.0.1:5500/linkTest.yaml
```
Output
```
Correct
```
***
Done

## securitySchemes

### Test 1
```
document.components.securitySchemes[x] -> Security Scheme Object | Reference Object
```
Input
```
http://127.0.0.1:5500/securitySchemeTest.yaml
```
Output
```
Correct
```
Done
***

## headers

### Test 1
```
requestBodyObject.content[x].encoding[y].headers[z] ->Header Object | Reference Object [x-> string, y -> string, z -> string]
```
Input
```
http://127.0.0.1:5500/headerTest1.yaml
```
Output
```
Input
```
### Test 2
```
response[x].headers[y] -> Header Object | Reference Object [x->Status Code]
```
Input
```
http://localhost:5500/headerTest2.json
```
Output
```
Correct
```
***

## requestBodies (1)

### Test 1
```
pathItemObject[x]requestBody -> Request Body Object |
Reference Object [x-> Operation Object]
```
Input
```
https://oai.github.io/Documentation/examples/tictactoe.yaml
```
Output
```
Correct
```
Done

## pathItems

### Test 1
```
document.paths[x] -> Path Item Object [x-> /{path}]
```
Input
```
https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml
```
Output
```
Correct 
```

### Test 2
```
// callbacks[x][y] -> Path Item Object | Reference Object [x-> callback, y ->key expression]
```
Input
```
http://127.0.0.1:5500/callbackTest.yaml
```
Output
```
Correct
```

### Test 3
 
Incomplete

***
