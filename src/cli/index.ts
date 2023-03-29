import cac from 'cac'

import * as types from './types'
import { parseOpenApi } from './parseOpenApi'

// Parse command-line arguments
const cli = cac()

cli
  .option('-t, --type <type>', 'Type of object to print', { type: [String] })
  .option('-u, --url <url>', 'URL of the OpenAPI spec')

cli.on('parsed', (parsed) => {
  if (!parsed.options.type) {
    console.error('Error: Missing required option --type')
    cli.outputHelp()
    process.exit(1)
  }
  if (
    ![
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
    ].includes(parsed.options.type)
  ) {
    console.error(
      `Error: Invalid value for option --type: '${parsed.options.type}'`
    )
    cli.outputHelp()
    process.exit(1)
  }
  if (!parsed.options.url) {
    console.error('Error: Missing required option --url')
    cli.outputHelp()
    process.exit(1)
  }
})

const options = cli.parse().options as unknown as types.Options

parseOpenApi(options)
