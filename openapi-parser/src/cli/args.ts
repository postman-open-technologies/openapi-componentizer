import { cac } from 'cac'

import { OpenApiObjectType } from '../openapi/types'

/**
 * Interface for the command line options.
 */
interface CliOptions {
  url: string
  type: OpenApiObjectType
}

/**
 * Array of supported object types.
 */
const supportedObjectTypes: OpenApiObjectType[] = [
  'schemas',
  'responses',
  'parameters',
  'examples',
  'requestBodies',
  'headers',
  'securitySchemes',
  'links',
  'callbacks',
  'pathItems'
]

/**
 * Validates the provided command line options.
 * @param options - The options object to validate.
 * @returns The validated options as a CliOptions object.
 */
function validateOptions(options: any): CliOptions {
  if (!options.type) {
    console.error('Error: Missing required option --type')
    process.exit(1)
  }
  if (!supportedObjectTypes.includes(options.type as OpenApiObjectType)) {
    console.error(`Error: Invalid value for option --type: '${options.type}'`)
    process.exit(1)
  }
  if (!options.url) {
    console.error('Error: Missing required option --url')
    process.exit(1)
  }
  return options as CliOptions
}

/**
 * Parses the command line arguments and returns a CliOptions object.
 * @returns The parsed command line options as a CliOptions object.
 */
export function parseCliArgs(): CliOptions {
  const cli = cac('openapi-parser')

  cli
    .command('', 'Parse OpenAPI spec and extract objects by type')
    .option('-t, --type <type>', 'Type of object to print')
    .option('-u, --url <url>', 'URL of the OpenAPI spec')

  const parsed = cli.parse()
  const options = validateOptions(parsed.options)

  return options
}
