/**
 * The type of the OpenAPI spec.
 */
export interface OpenAPISpec {
  /**
   * The components of the OpenAPI spec.
   */
  components: {
    /**
     * The objects of the specified type.
     */
    [key: string]: any
  }
}

/**
 * The type of the command-line options.
 */
export interface Options {
  /**
   * The type of object to print.
   */
  type: string
  /**
   * The URL of the OpenAPI spec.
   */
  url: string
}
