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

## schemas (4)

### Test 1 (3)
```
parameterObject.schema -> Schema Object
requestBodyObject.content[x].schema -> Schema Object
response.content[x].schema -> Schema Object
```
Input
```
http://localhost:5500/package/testFiles/callbackTest.yaml
```
Output
```
Correct
```

### Test 2 (1)
```
headerObject.schema
```
Input
```
http://localhost:5500/package/testFiles/headerTest1.yaml
http://localhost:5500/package/testFiles/headerTest2.json
```
Output
```
Correct
```
Done

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
pathItemObject.parameters[x] -> Parameter Object | Reference Object 
```
Input
```
http://localhost:5500/package/testFiles/parameterTest.yaml
```
Output
```
Correct
```

### Test 2
```
pathItemObject[x].parameters[y] -> Parameter Object | Reference Object
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

## examples (4)

### Test 1
```
requestBodyObject.content[x].examples[y] -> Example Object
```
Input
```
http://localhost:5500/package/testFiles/callbackTest.yaml
```

### Test 2
```
responseObject.content[x].examples[y] -> Example Object  
```
Input
```
http://localhost:5500/package/testFiles/exampleTest2.json
```
Output
```
Correct
```

### Test 3
```
//parameterObject.examples[x] -> Example Object 
```
Input
```
http://localhost:5500/package/testFiles/parameterTest.yaml
```

### Test 4
```
headerObject.examples[x] -> Example Object
```
Input
```
http://localhost:5500/package/testFiles/headerTest2.json
```
Output
```
Correct
```
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

## headers (2)

### Test 1
```
requestBodyObject.content[x].encoding[y].headers[z] ->Header Object | Reference Object [x-> string, y -> string, z -> string]
```
Input
```
http://127.0.0.1:5500/package/testFiles/headerTest1.yaml
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
http://127.0.0.1:5500/package/testFiles/headerTest2.json
```
Output
```
Correct
```
***
Done

## securitySchemes (1)

### Test 1
```
document.components.securitySchemes[x] -> Security Scheme Object | Reference Object
```
Input
```
http://127.0.0.1:5500/package/testFiles/securitySchemeTest.yaml
```
Output
```
Correct
```
Done
***

## links (1)

### Test 1
```
response[x].links[y] -> Link Object | Reference Object [x->Status Code] [y-> string]
```
Input
```
http://127.0.0.1:5500/package/testFiles/linkTest.yaml
```
Output
```
Correct
```
***
Done

## callbacks (1)

### Test 1
```
pathItemObject[x].callbacks[y] -> Callback Object | Reference Object [x-> Operation Object] [y -> string]
```
Input
```
http://127.0.0.1:5500/package/testFiles/callbackTest.yaml
```
Output
```
Correct
```
***
Done

## pathItems (3)

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
callbacks[x][y] -> Path Item Object | Reference Object [x-> callback, y ->key expression]
```
Input
```
http://127.0.0.1:5500/package/testFiles/callbackTest.yaml
```
Output
```
Correct
```

### Test 3
```
document.webhooks[x] -> Path Item Object | Reference Object [x-> string]
``` 
Input
```
http://127.0.0.1:5500/package/testFiles/pathItemTest.yaml
```

***
