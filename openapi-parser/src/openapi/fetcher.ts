import fetch from 'node-fetch'

import { isValidUrl } from './utils'

/**
 * Fetches the OpenAPI specification from the given URL.
 * @param url - The URL of the OpenAPI specification.
 * @returns A Promise that resolves to the OpenAPI specification as a string.
 * @throws An error if the URL is invalid, the fetch operation fails, or there is an issue fetching the OpenAPI spec.
 */
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
