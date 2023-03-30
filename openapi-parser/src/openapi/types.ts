/**
 * Represents the possible object types for qualifying task
 */
export type OpenApiObjectType =
  | 'schemas'
  | 'responses'
  | 'parameters'
  | 'examples'
  | 'requestBodies'
  | 'headers'
  | 'securitySchemes'
  | 'links'
  | 'callbacks'
  | 'pathItems'

/**
 * Represents the structure of an OpenAPI specification document.
 */
export interface OpenApiSpecification {
  /**
   * The OpenAPI version of the specification.
   */
  openapi: string

  /**
   * Metadata about the API, including title, description, and version.
   */
  info: Record<string, unknown>

  /**
   * A collection of API paths, where each path is mapped to its operations.
   */
  paths: Record<string, Record<string, any>>

  /**
   * An optional collection of reusable components, such as schemas, responses, and parameters.
   */
  components?: Record<string, unknown>
}
