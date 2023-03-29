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

export interface OpenApiSpecification {
  openapi: string
  info: Record<string, unknown>
  paths: Record<string, Record<string, any>>
  components?: Record<string, unknown>
}
