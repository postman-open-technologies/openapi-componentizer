import {
  extractObjectsByType,
  fetchOpenApiSpec,
  parseOpenApiSpec
} from '../../src'

describe('Live Test', () => {
  const testUrl = 'https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml'
  const testType = 'responses'
  const expectedOutput = {
    '200': {
      content: {
        '*/*': {
          schema: {
            $ref: '#/components/schemas/comic'
          }
        }
      },
      description: 'OK'
    }
  }

  test('fetch, parse, and extract objects by type with expected output', async () => {
    const spec = await fetchOpenApiSpec(testUrl)
    const openApiSpec = parseOpenApiSpec(spec)
    const objects = extractObjectsByType(openApiSpec, testType)

    expect(JSON.stringify(objects)).toEqual(JSON.stringify(expectedOutput))
  })
})
