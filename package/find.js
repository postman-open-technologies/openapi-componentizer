var _ = require("lodash");

const getSchemas = (document) => {
  let res = [];

  //parameterObject.schema -> Schema Object

  const parameters = getParameters(document);
  for (let parameter in parameters) {
    let parameterObject = JSON.parse(parameters[parameter]);
    if (parameterObject.schema) {
      const schema = parameterObject.schema;
      res.push(JSON.stringify(schema, undefined, 4));
    }
  }

  //requestBodycontent[x].schema -> Schema Object

  const requestBodies = getRequestBodies(document);
  for (let requestBody in requestBodies) {
    let requestBodyObject = JSON.parse(requestBodies[requestBody]);
    if (requestBodyObject.content) {
      const content = requestBodyObject.content;
      for (let mediaType in content) {
        const mediaTypeObject = content[mediaType];
        if (mediaTypeObject.schema) {
          const schema = mediaTypeObject.schema;
          res.push(JSON.stringify(schema, undefined, 4));
        }
      }
    }
  }

  //response[x].content[y].schema -> Schema Object

  const responses = getResponses(document);
  for (let response in responses) {
    let responseObject = JSON.parse(responses[response]);
    for (let statusCode in responseObject) {
      responseObject = responseObject[statusCode];
      if (responseObject.content) {
        const content = responseObject.content;
        for (let mediaType in content) {
          const mediaTypeObject = content[mediaType];
          if (mediaTypeObject.schema) {
            const schema = mediaTypeObject.schema;
            res.push(JSON.stringify(schema, undefined, 4));
          }
        }
      }
    }
  }

  //headerObject[x].schema -> Schema Object
  const headers = getHeaders(document);
  for (let header in headers) {
    let headerObject = JSON.parse(headers[header]);
    for (let name in headerObject) {
      headerObject = headerObject[name];
      if (headerObject.schema) {
        const schema = headerObject.schema;
        res.push(JSON.stringify(schema, undefined, 4));
      }
    }
  }

  return res;
};

const getResponses = (document) => {
  let res = [];

  //pathItemObject[x].responses.y -> {Status Code/ "default" : Response Object | Reference Object}
  const pathItemObjects = getPathItems(document, 1);

  for (let pathItem in pathItemObjects) {
    let pathItemObject = JSON.parse(pathItemObjects[pathItem]);
    for (let path in pathItemObject) {
      pathItemObject = pathItemObject[path];
      for (let operation in pathItemObject) {
        const operationObject = pathItemObject[operation];
        if (operationObject.responses) {
          const responses = operationObject.responses;
          for (let response in responses) {
            let responseObject = {};
            responseObject[response] = responses[response];
            res.push(JSON.stringify(responseObject, undefined, 4));
          }
        }
      }
    }
  }
  return res;
};

const getParameters = (document) => {
  let res = [];

  const pathItemObjects = getPathItems(document, 1);
  for (let pathItem in pathItemObjects) {
    let pathItemObject = JSON.parse(pathItemObjects[pathItem]);
    for (let path in pathItemObject) {
      pathItemObject = pathItemObject[path];
      // pathItem[x].parameters[y] -> Parameter Object | Reference Object

      if (pathItemObject.parameters) {
        const parameters = pathItemObject.parameters;
        for (let parameter in parameters) {
          let parameterObject = parameters[parameter];
          res.push(JSON.stringify(parameterObject, undefined, 4));
        }
      }

      // pathItem[x][y].parameters[z] -> Parameter Object | Reference Object [x-> Operation Object, y-> int]

      for (let operation in pathItemObject) {
        const operationObject = pathItemObject[operation];
        if (operationObject.parameters) {
          const parameters = operationObject.parameters;
          for (let parameter in parameters) {
            const parameterObject = parameters[parameter];
            res.push(JSON.stringify(parameterObject, undefined, 4));
          }
        }
      }
    }
  }

  return res;
};

const getExamples = (document) => {
  let res = [];

  //requestBody.content[x].examples.y -> {name: Example Object}

  const requestBodies = getRequestBodies(document);
  for (let requestBody in requestBodies) {
    let requestBodyObject = JSON.parse(requestBodies[requestBody]);
    if (requestBodyObject.content) {
      const content = requestBodyObject.content;
      for (let mediaType in content) {
        const mediaTypeObject = content[mediaType];
        if (mediaTypeObject.examples) {
          const examples = mediaTypeObject.examples;
          for (let example in examples) {
            let exampleObject = {};
            exampleObject[example] = examples[example];
            res.push(JSON.stringify(exampleObject, undefined, 4));
          }
        }
      }
    }
  }

  //response[x].content[y].examples.z -> {name: Example Object}

  const responses = getResponses(document);
  for (let response in responses) {
    let responseObject = JSON.parse(responses[response]);
    for (let statusCode in responseObject) {
      responseObject = responseObject[statusCode];
      if (responseObject.content) {
        const content = responseObject.content;
        for (let mediaType in content) {
          const mediaTypeObject = content[mediaType];
          if (mediaTypeObject.examples) {
            const examples = mediaTypeObject.examples;
            for (let example in examples) {
              let exampleObject = {};
              exampleObject[example] = examples[example];
              res.push(JSON.stringify(exampleObject, undefined, 4));
            }
          }
        }
      }
    }
  }

  //parameterObject.examples.x -> Example Object {name: Example Object}

  const parameters = getParameters(document);
  for (let parameter in parameters) {
    let parameterObject = JSON.parse(parameters[parameter]);
    if (parameterObject.examples) {
      const examples = parameterObject.examples;
      for (let example in examples) {
        let exampleObject = {};
        exampleObject[example] = examples[example];
        res.push(JSON.stringify(exampleObject, undefined, 4));
      }
    }
  }

  //headerObject[x].examples.y -> {name: Example Object}

  const headers = getHeaders(document);
  for (let header in headers) {
    let headerObject = JSON.parse(headers[header]);
    for (let name in headerObject) {
      headerObject = headerObject[name];
      if (headerObject.examples) {
        const examples = headerObject.examples;
        for (let example in examples) {
          let exampleObject = {};
          exampleObject[example] = examples[example];
          res.push(JSON.stringify(exampleObject, undefined, 4));
        }
      }
    }
  }
  return res;
};

const getRequestBodies = (document) => {
  let res = [];

  //pathItemObject[x].requestBody -> Request Body Object | Reference Object [x-> Operation Object]
  const pathItemObjects = getPathItems(document, 1);
  for (let pathItem in pathItemObjects) {
    let pathItemObject = JSON.parse(pathItemObjects[pathItem]);
    for (let path in pathItemObject) {
      pathItemObject = pathItemObject[path];
      for (let operation in pathItemObject) {
        const operationObject = pathItemObject[operation];
        if (operationObject.requestBody) {
          const requestBodyObject = operationObject.requestBody;
          res.push(JSON.stringify(requestBodyObject, undefined, 4));
        }
      }
    }
  }
  return res;
};

const getHeaders = (document) => {
  let res = [];
  //requestBody.content[x].encoding[y].headers.z ->{name: Header Object | Reference Object}
  const requestBodies = getRequestBodies(document);
  for (let requestBody in requestBodies) {
    let requestBodyObject = JSON.parse(requestBodies[requestBody]);
    if (requestBodyObject.content) {
      const content = requestBodyObject.content;
      for (let contentType in content) {
        const mediaTypeObject = content[contentType];
        if (mediaTypeObject.encoding) {
          const encoding = mediaTypeObject.encoding;
          for (let propertyName in encoding) {
            const encodingObject = encoding[propertyName];
            if (encodingObject.headers) {
              const headers = encodingObject.headers;
              for (let header in headers) {
                let headerObject = {};
                headerObject[header] = headers[header];
                res.push(JSON.stringify(headerObject, undefined, 4));
              }
            }
          }
        }
      }
    }
  }

  //responseObject[x].headers.y -> {name: Header Object | Reference Object }

  const responses = getResponses(document);
  for (let response in responses) {
    let responseObject = JSON.parse(responses[response]);
    for (let statusCode in responseObject) {
      responseObject = responseObject[statusCode];
      if (responseObject.headers) {
        const headers = responseObject.headers;
        for (let header in headers) {
          let headerObject = {};
          headerObject[header] = headers[header];
          res.push(JSON.stringify(headerObject, undefined, 4));
        }
      }
    }
  }
  return res;
};

const getSecuritySchemes = (document) => {
  let res = [];

  // document.components.securitySchemes.x -> { name : Security Scheme Object | Reference Object}

  if (document.components) {
    const components = document.components;
    if (components.securitySchemes) {
      const securitySchemes = components.securitySchemes;
      for (let securityScheme in securitySchemes) {
        let securitySchemeObject = {};
        securitySchemeObject[securityScheme] = securitySchemes[securityScheme];
        res.push(JSON.stringify(securitySchemeObject, undefined, 4));
      }
    }
  }

  return res;
};

const getLinks = (document) => {
  let res = [];

  //response[x][y].links.z -> {name: Link Object | Reference Object}

  const responses = getResponses(document);
  for (let index in responses) {
    let response = JSON.parse(responses[index]);
    for (let statusCode in response) {
      const responseObject = response[statusCode];
      if (responseObject.links) {
        const links = responseObject.links;
        for (let link in links) {
          let linkObject = {};
          linkObject[link] = links[link];
          res.push(JSON.stringify(linkObject, undefined, 4));
        }
      }
    }
  }
  return res;
};

const getCallbacks = (document) => {
  let res = [];

  //pathItem[x][y].callbacks.z -> {name: Callback Object | Reference Object}
  const pathItems = getPathItems(document, 0);
  for (let pathItem in pathItems) {
    let pathItemObject = JSON.parse(pathItems[pathItem]);
    for (let path in pathItemObject) {
      pathItemObject = pathItemObject[path];
      for (let operation in pathItemObject) {
        const operationObject = pathItemObject[operation];
        if (operationObject.callbacks) {
          const callbacks = operationObject.callbacks;
          for (let callback in callbacks) {
            const callbackObject = {};
            callbackObject[callback] = callbacks[callback];
            res.push(JSON.stringify(callbackObject, undefined, 4));
          }
        }
      }
    }
  }
  return res;
};

const getPathItems = (document, callbacksFlag) => {
  let res = [];

  //document.webhooks.x -> {path:Path Item Object | Reference Object}

  if (document.webhooks) {
    const webhooks = document.webhooks;
    for (let webhook in webhooks) {
      let pathItemObject = {};
      pathItemObject[webhook] = webhooks[webhook];
      res.push(JSON.stringify(pathItemObject, undefined, 4));
    }
  }
  //document.paths.x -> {path:Path Item Object | Reference Object}
  if (document.paths) {
    const paths = document.paths;
    for (let path in paths) {
      const pathItemObject = {};
      pathItemObject[path] = document.paths[path];
      res.push(JSON.stringify(pathItemObject, undefined, 4));
    }
  }

  // callbacks[x].y -> {path:Path Item Object | Reference Object}
  if (callbacksFlag) {
    const callbacks = getCallbacks(document);
    for (let callback in callbacks) {
      let callbackObject = JSON.parse(callbacks[callback]);
      for (let name in callbackObject) {
        callbackObject = callbackObject[name];
        for (let expression in callbackObject) {
          const pathItemObject = {};
          pathItemObject[expression] = callbackObject[expression];
          res.push(JSON.stringify(pathItemObject, undefined, 4));
        }
      }
    }
  }
  return res;
};

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
      res = getPathItems(document, 1);
      break;
    default:
      break;
  }
  res = _.uniqWith(res, _.isEqual);
  return res;
};

module.exports = { findType };
