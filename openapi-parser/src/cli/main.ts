import { fetchOpenApiSpec } from '../openapi/fetcher'
import { extractObjectsByType, parseOpenApiSpec } from '../openapi/parser'
import { parseCliArgs } from './args'

async function main() {
  try {
    const options = parseCliArgs()
    const spec = await fetchOpenApiSpec(options.url)
    const openApiSpec = parseOpenApiSpec(spec)
    const objects = extractObjectsByType(openApiSpec, options.type)
    console.log(JSON.stringify(objects, null, 2))
  } catch (error) {
    process.exit(1)
  }
}

main()
