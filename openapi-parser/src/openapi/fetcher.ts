import fetch from 'node-fetch'

export async function fetchOpenApiSpec(url: string): Promise<string> {
  try {
    const response = await fetch(url)
    return await response.text()
  } catch (error) {
    throw new Error(`Error fetching OpenAPI spec: ${(error as Error).message}`)
  }
}
