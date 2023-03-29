import fetch from 'node-fetch'

import { isValidUrl } from './utils'

export async function fetchOpenApiSpec(url: string): Promise<string> {
  try {
    if (!isValidUrl(url)) throw new Error(`Invalid url: ${url}`)
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Failed to fetch OpenAPI spec: ${response.statusText}`)
    }
    return await response.text()
  } catch (error) {
    throw new Error(`Error fetching OpenAPI spec: ${(error as Error).message}`)
  }
}
