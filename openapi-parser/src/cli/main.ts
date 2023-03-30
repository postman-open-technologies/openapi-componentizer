import { fetchOpenApiSpec } from '../openapi/fetcher'
import { extractObjectsByType, parseOpenApiSpec } from '../openapi/parser'
import { parseCliArgs } from './args'

/**
 * The main function that runs the CLI tool.
 * It fetches the OpenAPI spec from the provided URL, parses it,
 * extracts the specified object type, and prints the result.
 */
async function main() {
  try {
    // Parse command line arguments
    const options = parseCliArgs()
    // Fetch the OpenAPI spec from the provided URL
    const spec = await fetchOpenApiSpec(options.url)
    // Parse the OpenAPI spec
    const openApiSpec = parseOpenApiSpec(spec)
    // Extract the specified object type from the OpenAPI spec
    const objects = extractObjectsByType(openApiSpec, options.type)
    // Print the extracted objects
    console.log(JSON.stringify(objects, null, 2))
  } catch (error) {
    // Handle errors and print a user-friendly message
    console.error(`Error: ${(error as Error).message}`)
    process.exit(1)
  }
}

main()
