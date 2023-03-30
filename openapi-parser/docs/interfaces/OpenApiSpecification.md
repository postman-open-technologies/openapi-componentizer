[openapi-componentizer](../README.md) / [Exports](../modules.md) / OpenApiSpecification

# Interface: OpenApiSpecification

Represents the structure of an OpenAPI specification document.

## Table of contents

### Properties

- [components](OpenApiSpecification.md#components)
- [info](OpenApiSpecification.md#info)
- [openapi](OpenApiSpecification.md#openapi)
- [paths](OpenApiSpecification.md#paths)

## Properties

### components

• `Optional` **components**: `Record`<`string`, `unknown`\>

An optional collection of reusable components, such as schemas, responses, and parameters.

#### Defined in

openapi/types.ts:38

___

### info

• **info**: `Record`<`string`, `unknown`\>

Metadata about the API, including title, description, and version.

#### Defined in

openapi/types.ts:28

___

### openapi

• **openapi**: `string`

The OpenAPI version of the specification.

#### Defined in

openapi/types.ts:23

___

### paths

• **paths**: `Record`<`string`, `Record`<`string`, `any`\>\>

A collection of API paths, where each path is mapped to its operations.

#### Defined in

openapi/types.ts:33
