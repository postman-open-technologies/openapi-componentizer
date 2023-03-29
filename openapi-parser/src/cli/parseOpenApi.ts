import yaml from 'js-yaml'
import fetch from 'node-fetch'

import * as types from './types'

export function parseOpenApi(options: types.Options) {
  // Fetch the OpenAPI spec from the URL
  fetch(options.url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Failed to fetch OpenAPI spec from ${options.url}: ${res.statusText}`
        )
      }
      const contentType = res.headers.get('Content-Type')
      if (contentType === 'application/json; charset=utf-8') {
        return res.json()
      } else if (contentType === 'text/yaml') {
        return res.text().then((data) => yaml.load(data))
      } else {
        throw new Error(`Unsupported Content-Type: ${contentType}`)
      }
    })
    .then((data) => data as types.OpenAPISpec)
    .then((spec) => {
      // Check if the specified type exists in the spec
      if (!spec.components[options.type]) {
        throw new Error(`Type '${options.type}' not found in spec`)
      }
      // Print the list of objects of the specified type
      console.log(spec.components[options.type])
    })
    .catch((err) => console.log(err.message))
}
