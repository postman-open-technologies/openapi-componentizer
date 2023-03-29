import yaml from 'js-yaml'

import { OpenApiSpecification, OpenApiObjectType } from './types'

export function parseOpenApiSpec(spec: string): OpenApiSpecification {
  try {
    return yaml.load(spec) as OpenApiSpecification
  } catch (error) {
    throw new Error(`Error parsing OpenAPI spec: ${(error as Error).message}`)
  }
}

export function extractObjectsByType(
  openApiSpec: OpenApiSpecification,
  objectType: OpenApiObjectType
): Record<string, unknown> {
  // Initialize an empty result object
  const result: Record<string, unknown> = {}

  // Check if the openApiSpecifciation has a paths property
  if (openApiSpec.paths) {
    // Iterate over each path in the paths property
    for (const path in openApiSpec.paths) {
      const pathItem = openApiSpec.paths[path]
      // Iterate over each method in the current pathItem
      for (const method in pathItem) {
        const operation = pathItem[method]
        // Check if the current operation has a responses property
        if (operation.responses) {
          // Iterate over each responseCode in the responses property
          for (const responseCode in operation.responses) {
            const response = operation.responses[responseCode]
            // If the specified objectType is responses, add the current response to the result object
            if (objectType === 'responses') {
              result[responseCode] = response
            }
          }
        }
      }
    }
  }

  // Return the result object
  return result
}
