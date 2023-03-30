[openapi-componentizer](README.md) / Exports

# openapi-componentizer

## Table of contents

### Interfaces

- [OpenApiSpecification](interfaces/OpenApiSpecification.md)

### Type Aliases

- [OpenApiObjectType](modules.md#openapiobjecttype)

### Functions

- [extractObjectsByType](modules.md#extractobjectsbytype)
- [fetchOpenApiSpec](modules.md#fetchopenapispec)
- [parseOpenApiSpec](modules.md#parseopenapispec)

## Type Aliases

### OpenApiObjectType

Ƭ **OpenApiObjectType**: ``"schemas"`` \| ``"responses"`` \| ``"parameters"`` \| ``"examples"`` \| ``"requestBodies"`` \| ``"headers"`` \| ``"securitySchemes"`` \| ``"links"`` \| ``"callbacks"`` \| ``"pathItems"``

Represents the possible object types for qualifying task

#### Defined in

openapi/types.ts:4

## Functions

### extractObjectsByType

▸ **extractObjectsByType**(`openApiSpec`, `objectType`): `Record`<`string`, `unknown`\>

Extracts objects of the specified type from the OpenAPI specification.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `openApiSpec` | [`OpenApiSpecification`](interfaces/OpenApiSpecification.md) | The OpenApiSpecification object to extract objects from. |
| `objectType` | [`OpenApiObjectType`](modules.md#openapiobjecttype) | The type of objects to extract (e.g., 'responses'). |

#### Returns

`Record`<`string`, `unknown`\>

A Record<string, unknown> containing the extracted objects.

#### Defined in

openapi/parser.ts:25

___

### fetchOpenApiSpec

▸ **fetchOpenApiSpec**(`url`): `Promise`<`string`\>

Fetches the OpenAPI specification from the given URL.

**`Throws`**

An error if the URL is invalid, the fetch operation fails, or there is an issue fetching the OpenAPI spec.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the OpenAPI specification. |

#### Returns

`Promise`<`string`\>

A Promise that resolves to the OpenAPI specification as a string.

#### Defined in

openapi/fetcher.ts:11

___

### parseOpenApiSpec

▸ **parseOpenApiSpec**(`spec`): [`OpenApiSpecification`](interfaces/OpenApiSpecification.md)

Parses an OpenAPI specification from a YAML string.

**`Throws`**

An error if the YAML string cannot be parsed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `spec` | `string` | The YAML string containing the OpenAPI specification. |

#### Returns

[`OpenApiSpecification`](interfaces/OpenApiSpecification.md)

The parsed OpenApiSpecification object.

#### Defined in

openapi/parser.ts:11
