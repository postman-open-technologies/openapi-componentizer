openapi-componentizer / [Exports](modules.md)

# OpenAPI Parser CLI

A Command Line Interface (CLI) tool and library for parsing OpenAPI specifications and extracting objects by type. This is a qualifying task for Postman's Google Summer of Code openapi-componentizer project

## Features

- Parse OpenAPI specifications from a URL
- Extract objects by type
- Written in TypeScript with strong typing and error handling

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/postman-open-technologies/openapi-componentizer.git
cd openapi-parser
npm install
```

## Usage

Use `ts-node` to run the CLI tool:

```bash
ts-node src/cli/main.ts -u <url> -t <type>
```

Replace `<url>` with the URL of the OpenAPI specification and `<type>` with the object type you want to extract.

For example:

```bash
ts-node src/cli/main.ts -u https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml -t responses
```

## Supported Object Types

The following object types can be extracted:

- schemas
- responses
- parameters
- examples
- requestBodies
- headers
- securitySchemes
- links
- callbacks
- pathItems
