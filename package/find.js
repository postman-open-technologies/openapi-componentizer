var _ = require('lodash');

const getSchemas = (document) => {
    let res = [];

    //parameterObject.schema -> Schema Object

    const parameters = getParameters(document);
    for(let parameter in parameters){
        let parameterObject = JSON.parse(parameters[parameter]);
        if(parameterObject.schema){
            const schema = parameterObject.schema;
            res.push(JSON.stringify(schema, undefined, 4));
            }
    }

    //requestBodyObject.content.x.schema -> Schema Object
    
    const requestBodies = getRequestBodies(document);
    for(let requestBody in requestBodies){
        let requestBodyObject = JSON.parse(requestBodies[requestBody]);
        if(requestBodyObject.content){
            const content = requestBodyObject.content;
            for(let mediaType in content){
                const mediaTypeObject = content[mediaType];
                if(mediaTypeObject.schema){
                    const schema = mediaTypeObject.schema;
                    res.push(JSON.stringify(schema, undefined, 4));
                }
            }
        }
    }

    // response[x].schema -> Schema Object [x->Status Code]
    const responses = getResponses(document);
    for(let index in responses){
        let response = JSON.parse(responses[index]);
        for(let statusCode in response){
            const responseObject = response[statusCode];
            if(responseObject.schema){
                const schema = responseObject.schema;
                res.push(JSON.stringify(schema, undefined, 4));
            }
        }
    }

    //response[x].content.y.schema -> Schema Object [x->Status Code, y->Media Type Object]

    for(let index in responses){
        let response = JSON.parse(responses[index]);
        for(let statusCode in response){
            const responseObject = response[statusCode];
            if(responseObject.content){
                const content = responseObject.content;
                for(let mediaType in content){
                    const mediaTypeObject = content[mediaType];
                    if(mediaTypeObject.schema){
                        const schema = mediaTypeObject.schema;
                        res.push(JSON.stringify(schema, undefined, 4));
                    }
                }
            }
        }
    }

    //headerObject.schema
    const headers = getHeaders(document);
    for(let header in headers){
        const headerObject = JSON.parse(headers[header]);
        if(headerObject.schema){
            const schema = headerObject.schema;
            res.push(JSON.stringify(schema, undefined, 4));
        }
    }

    return res;

}

const getResponses = (document) => {
    let res = [];

    //pathItemObject[x].responses[y] -> Response Object | Reference Object [x->Operation, y->Status Code]
    const pathItemObjects = getPathItems(document,1);
    
    for(let pathItem in pathItemObjects){
        const pathItemObject = JSON.parse(pathItemObjects[pathItem]);
        for(let operation in pathItemObject){
            const operationObject = pathItemObject[operation];
            if(operationObject.responses){
                const responses = operationObject.responses;
                for(let response in responses){
                    const responseObject = responses[response];
                    res.push(JSON.stringify(responseObject, undefined, 4));
                }
            }
        }
    }
    return res;
}

const getParameters = (document) => {
    let res = [];

    pathItemObjects = getPathItems(document,1);
    for(let pathItem in pathItemObjects){
        const pathItemObject = JSON.parse(pathItemObjects[pathItem]);
        
        // pathItemObject.parameters.x -> [Parameter Object | Reference Object]

        if(pathItemObject.parameters){
            const parameters = pathItemObject.parameters;
            for(let parameter in parameters){
                let parameterObject = parameters[parameter];
                res.push(JSON.stringify(parameterObject, undefined, 4));
            }
        }

        //pathItemObject.x.parameters.x -> [Parameter Object | Reference Object]

        for(let operation in pathItemObject){
            const operationObject = pathItemObject[operation];
            if(operationObject.parameters){
                const parameters = operationObject.parameters;
                for(let parameter in parameters){
                    const parameterObject = parameters[parameter];
                    res.push(JSON.stringify(parameterObject, undefined, 4));
                }
            }
        }
    }

    //linkObject.parameters.x -> Map[string, Any | {expression}]

    const linkObjects = getLinks(document);
    for(let link in linkObjects){
        const linkObject = JSON.parse(linkObjects[link]);
        if(linkObject.parameters){
            const parameters = linkObject.parameters;
            for(let parameter in parameters){
                let parameterObject = {}; 
                parameterObject[parameter] = parameters[parameter];
                res.push(JSON.stringify(parameterObject, undefined, 4));
            }
        }
    }
    return res;
}

const getExamples = (document) => {
    let res = [];

    //requestBodyObject.content.x.examples.y -> Example Object

    const requestBodies = getRequestBodies(document);
    for(let requestBody in requestBodies){
        let requestBodyObject = JSON.parse(requestBodies[requestBody]);
        if(requestBodyObject.content){
            const content = requestBodyObject.content;
            for(let mediaType in content){
                const mediaTypeObject = content[mediaType];
                if(mediaTypeObject.examples){
                    const examples = mediaTypeObject.examples;
                    for(let example in examples){
                        let exampleObject = {};
                        exampleObject[example] = examples[example];
                        res.push(JSON.stringify(exampleObject, undefined, 4));
                    }
                }
            }
        }
    }

    //parameterObject.examples.x -> Example Object [x->Media Type Object]

    const parameters = getParameters(document);
    for(let parameter in parameters){
        let parameterObject = JSON.parse(parameters[parameter]);
        if(parameterObject.examples){
                    const examples = parameterObject.examples;
                    for(let example in examples){
                        let exampleObject = {};
                        exampleObject[example] = examples[example];
                        res.push(JSON.stringify(exampleObject, undefined, 4));
                    }
                }
    }

    //response[x].content.y.examples.z -> Example Object [x->Status Code, y->Media Type Object]

    const responses = getResponses(document);
    for(let index in responses){
        let response = JSON.parse(responses[index]);
        for(let statusCode in response){
            const responseObject = response[statusCode];
            if(responseObject.content){
                const content = responseObject.content;
                for(let mediaType in content){
                    const mediaTypeObject = content[mediaType];
                    if(mediaTypeObject.examples){
                        const examples = mediaTypeObject.examples;
                        for(let example in examples){
                            let exampleObject = {};
                            exampleObject[example] = examples[example];
                            res.push(JSON.stringify(exampleObject, undefined, 4));
                            }
                        }
                    }
                }
            }
    }

    //headerObject.examples.z -> Example Object

    const headers = getHeaders(document);
    for(let header in headers){
        const headerObject = JSON.parse(headers[header]);
        if(headerObject.examples){
            const examples = headerObject.examples;
            for(let example in examples){
                    let exampleObject = {};
                    exampleObject[example] = examples[example];
                    res.push(JSON.stringify(exampleObject, undefined, 4));
                }
            }
        }

    return res;
}

const getRequestBodies = (document) => {
    let res = [];

    //pathItemObject[x].requestBody -> Request Body Object | Reference Object [x-> Operation Object]
    const pathItemObjects = getPathItems(document,1);
    for(let pathItem in pathItemObjects){
        const pathItemObject = JSON.parse(pathItemObjects[pathItem]);
        for(let operation in pathItemObject){
            const operationObject = pathItemObject[operation];
            if(operationObject.requestBody){
                const requestBodyObject = operationObject.requestBody;
                res.push(JSON.stringify(requestBodyObject, undefined, 4));
            }
        }
    }
    return res;
}

const getHeaders = (document) => {
    let res = [];
    //requestBodyObject.content[x].encoding[y].headers[z] ->Header Object | Reference Object [x-> string, y -> string, z -> string]
    const requestBodies = getRequestBodies(document);
    for(let requestBody in requestBodies){
        let requestBodyObject = JSON.parse(requestBodies[requestBody]);
        if(requestBodyObject.content){
            const content = requestBodyObject.content;
            for(let contentType in content){
                const mediaTypeObject = content[contentType];
                if(mediaTypeObject.encoding){
                    const encoding = mediaTypeObject.encoding;
                    for(let propertyName in encoding){
                        const encodingObject = encoding[propertyName];
                        if(encodingObject.headers){
                        const headers = encodingObject.headers;
                        for(let header in headers){
                                const headerObject = headers[header];
                                res.push(JSON.stringify(headerObject, undefined, 4));
                            }
                        }
                    }
                }
            }
        }
    }

    //response.headers[y] -> Header Object | Reference Object [x->Status Code]

    const responses = getResponses(document);
    for(let response in responses){
        let responseObject = JSON.parse(responses[response]);
            if(responseObject.headers){
                const headers = responseObject.headers;
                for(let header in headers){
                        let headerObject = headers[header];
                        res.push(JSON.stringify(headerObject, undefined, 4));
                    }
                }
    }
    return res;
}

const getSecuritySchemes = (document) => {
    
    let res = [];
    
    // document.components.securitySchemes[x] -> Security Scheme Object | Reference Object
    
    if(document.components){
        const components = document.components;
        if(components.securitySchemes){
            const securitySchemes = components.securitySchemes;
            for(let securityScheme in securitySchemes){
                let securitySchemeObject = securitySchemes[securityScheme];
                res.push(JSON.stringify(securitySchemeObject, undefined, 4));
            }
        }
    }

    return res;
}

const getLinks = (document) => {
    let res = [];
    
    //response[x].links[y] -> Link Object | Reference Object [x->Status Code] [y-> string]

    const responses = getResponses(document);
    for(let index in responses){
        let response = JSON.parse(responses[index]);
        for(let statusCode in response){
            const responseObject = response[statusCode];
            if(responseObject.links){
                const links = responseObject.links;
                for(let link in links){
                    const linkObject = links[link];
                    res.push(JSON.stringify(linkObject, undefined, 4));
                }
            }
        }
    }
    return res;
}

const getCallbacks = (document) => {
    let res = [];
    
    //pathItemObject[x].callbacks[y] -> Callback Object | Reference Object [x-> Operation Object] [y -> string]
    const pathItems = getPathItems(document,0);
    for(let pathItem in pathItems){
        const pathItemObject = JSON.parse(pathItems[pathItem]);
        for(let operation in pathItemObject){
            const operationObject = pathItemObject[operation];
            if(operationObject.callbacks){
                const callbacks = operationObject.callbacks;
                for(let callback in callbacks){
                    const callbackObject = callbacks[callback];
                    res.push(JSON.stringify(callbackObject, undefined, 4));
                }
            }
        }
    }
    return res;
}

const getPathItems = (document,callbacksFlag) => {
    let res = [];
    
    //document.webhooks[x] -> Path Item Object | Reference Object [x-> string]

    if(document.webhooks){
        const webhooks = document.webhooks;
        for(let webhook in webhooks){
            const pathItemObject = webhooks[webhook];
            res.push(JSONstringify(pathItemObject, undefined, 4));
        }
    }
    //document.paths[x] -> Path Item Object [x-> /{path}]
    if(document.paths){
        
        const paths = document.paths;
        for(let path in paths){
            const pathItemObject = document.paths[path];
            res.push(JSON.stringify(pathItemObject, undefined, 4));
        }
    }

    // callbacks[x][y] -> Path Item Object | Reference Object [x-> callback, y ->key expression]
    if(callbacksFlag){
        const callbacks = getCallbacks(document)
        for(let callback in callbacks){
            const callbackObject = JSON.parse(callbacks[callback]);
            for(let expression in callbackObject){
                const pathItemObject = callbackObject[expression];
                res.push(JSON.stringify(pathItemObject, undefined, 4));
            }
        }
    }
    return res;
}

const findType = (document, type) => {
    let res = [];
    switch (type) {
        case "schemas":
            res = getSchemas(document);
            break;
        case "responses":
            res = getResponses(document);
            break;
        case "parameters":
            res = getParameters(document);
            break;
        case "examples":
            res = getExamples(document);
            break;
        case "headers":
            res = getHeaders(document);
            break;
        case "securitySchemes":
            res = getSecuritySchemes(document);
            break;
        case "requestBodies":
            res = getRequestBodies(document);
            break;
        case "links":
            res = getLinks(document);
            break;
        case "callbacks":
            res = getCallbacks(document);
            break;
        case "pathItems":
            res =  getPathItems(document,1);
            break;
        default:
            break;
    }
    res = _.uniqWith(res,_.isEqual);
    return res;
}

module.exports = { findType }