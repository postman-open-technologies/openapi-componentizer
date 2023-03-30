import yaml from 'js-yaml'

import { OpenApiSpecification, OpenApiObjectType } from './types'

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
 * Extracts objects of the specified type from the OpenAPI specification.
 * @param openApiSpec - The OpenApiSpecification object to extract objects from.
 * @param objectType - The type of objects to extract (e.g., 'responses').
 * @returns A Record<string, unknown> containing the extracted objects.
 */
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
