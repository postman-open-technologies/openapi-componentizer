import yaml from 'js-yaml'

import { OpenApiObjectType, OpenApiSpecification } from './types'

/**
 * Parses an OpenAPI specification from a YAML string.
 * @param spec - The YAML string containing the OpenAPI specification.
 * @returns The parsed OpenApiSpecification object.
 * @throws An error if the YAML string cannot be parsed.
 */
export function parseOpenApiSpec(spec: string): OpenApiSpecification {
  try {
    return yaml.load(spec) as OpenApiSpecification
  } catch (error) {
    throw new Error(`Error parsing OpenAPI spec: ${(error as Error).message}`)
  }
}

/**
 * Extracts objects of a specified type from an OpenAPI specification.
 * @param openApiSpec - The OpenApiSpecification object to extract objects from.
 * @param objectType - The type of objects to extract (e.g., 'responses', 'pathItems', 'headers', etc.).
 * @returns A Record<string, unknown> containing the extracted objects.
 */
export function extractObjectsByType(
  openApiSpec: OpenApiSpecification,
  objectType: OpenApiObjectType
): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  if (openApiSpec.paths) {
    for (const path in openApiSpec.paths) {
      const pathItem = openApiSpec.paths[path]

      if (objectType === 'pathItems') {
        result[path] = pathItem
      } else {
        for (const method in pathItem) {
          const operation = pathItem[method]

          if (operation.responses) {
            for (const responseCode in operation.responses) {
              const response = operation.responses[responseCode]

              if (objectType === 'responses') {
                result[`${responseCode}`] = response
              } else if (objectType === 'headers' && response.headers) {
                for (const headerName in response.headers) {
                  const header = response.headers[headerName]
                  result[`${headerName}`] = header
                }
              }

              if (response.links && objectType === 'links') {
                for (const linkName in response.links) {
                  const link = response.links[linkName]
                  result[
                    `${method.toUpperCase()} ${path} ${responseCode} ${linkName}`
                  ] = link
                }
              }
            }
          }

          if (operation.parameters && objectType === 'parameters') {
            operation.parameters.forEach((parameter: unknown, index: any) => {
              result[`${method.toUpperCase()} ${path} parameter ${index}`] =
                parameter
            })
          }

          if (operation.requestBody && objectType === 'requestBodies') {
            result[`requestBody`] = operation.requestBody
          }

          //securitySchemes not outside of components
          if (
            openApiSpec.components &&
            openApiSpec.components.securitySchemes &&
            objectType === 'securitySchemes'
          ) {
            for (const schemeName in openApiSpec.components
              .securitySchemes as Record<string, unknown>) {
              const securityScheme = (
                openApiSpec.components.securitySchemes as any
              )[schemeName]
              result[schemeName] = securityScheme
            }
          }

          if (operation.callbacks && objectType === 'callbacks') {
            for (const callbackName in operation.callbacks) {
              const callback = operation.callbacks[callbackName]
              result[`${method.toUpperCase()} ${path} ${callbackName}`] =
                callback
            }
          }

          if (objectType === 'examples') {
            if (operation.parameters) {
              operation.parameters.forEach((parameter: { examples: any }) => {
                if (parameter.examples) {
                  Object.assign(result, parameter.examples)
                }
              })
            }

            if (operation.requestBody && operation.requestBody.content) {
              for (const contentType in operation.requestBody.content) {
                const content = operation.requestBody.content[contentType]
                if (content.examples) {
                  Object.assign(result, content.examples)
                }
              }
            }

            if (operation.responses) {
              for (const responseCode in operation.responses) {
                const response = operation.responses[responseCode]
                if (response.content) {
                  for (const contentType in response.content) {
                    const content = response.content[contentType]
                    if (content.examples) {
                      Object.assign(result, content.examples)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result
}
