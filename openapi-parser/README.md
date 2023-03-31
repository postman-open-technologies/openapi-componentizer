# OpenAPI Componentizer CLI

A Command Line Interface (CLI) tool and library for parsing OpenAPI specifications and extracting components by type. This is a qualifying task for Postman's Google Summer of Code openapi-componentizer project.

## Features

- Parse OpenAPI specifications from a URL
- Extract components by type
- Written in TypeScript with strong typing and error handling

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/postman-open-technologies/openapi-componentizer.git
cd openapi-componentizer
npm install
```

Build the project:

```bash
npm run build
```

## Usage

After building the project, use the `start` script to run the CLI tool with the provided options:

```bash
npm run start -- -u <url> -t <type>
```

Replace `<url>` with the URL of the OpenAPI specification and `<type>` with the component type you want to extract.

For example:

```bash
npm run start -- -u https://api.apis.guru/v2/specs/xkcd.com/1.0.0/openapi.yaml -t responses
```

## Code Navigation

The project is organized into the following directories and files:

- `src/cli`: Contains the main CLI entry point (`main.ts`) and the command-line argument parser (`args.ts`).
- `src/openapi`: Contains the OpenAPI-specific functionality, including fetching the OpenAPI spec (`fetcher.ts`), parsing the spec (`parser.ts`), and type definitions (`types.ts`).

### Main Function and CLI Argument Parsing

The `main` function in `src/cli/main.ts` is the entry point of the CLI tool. It calls `parseCliArgs` from `src/cli/args.ts` to parse the command-line arguments and then fetches the OpenAPI spec, parses it, extracts the specified object type, and prints the result.

The `parseCliArgs` function in `src/cli/args.ts` uses the `cac` library to define and parse the CLI options and commands. The supported object types are listed in the `supportedObjectTypes` array, and the `validateOptions` function is used to ensure the provided options are valid.

### OpenAPI Fetching, Parsing, and Extraction

The `fetchOpenApiSpec` function in `src/openapi/fetcher.ts` uses the `node-fetch` library to fetch the OpenAPI specification from the provided URL.

The `parseOpenApiSpec` function in `src/openapi/parser.ts` uses the `js-yaml` library to parse the OpenAPI specification from either JSON or YAML format.

The `extractObjectsByType` function in `src/openapi/parser.ts` extracts the specified object type from the parsed OpenAPI specification.

## Supported Component Types

The following component types can be extracted:

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

## Dependencies

This project uses the following dependencies:

| Dependency                           | Category         | Description                                                                                                                                                                                                                              | Additional Info                                    |
|--------------------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| `cac`                                | Main             | A simple command-line argument parser we are using to define the CLI options and commands.                                                                                                                                                 | [GitHub](https://github.com/cacjs/cac)            |
| `js-yaml`                            | Main             | A YAML parser and serializer for JavaScript we are using to parse OpenAPI specifications written in YAML format.                                                                                                                               | [GitHub](https://github.com/nodeca/js-yaml)       |
| `node-fetch`                         | Main             | A module that brings the fetch API from the browser to Node. We are using it to fetch OpenAPI specifications from URLs.                                                                                                         | [GitHub](https://github.com/node-fetch/node-fetch) |
| `@trivago/prettier-plugin-sort-imports` | Development     | A Prettier plugin that sorts imports and helps to maintain a consistent style across the project.                                                                                                                                      | [GitHub](https://github.com/trivago/prettier-plugin-sort-imports) |
| `@types/jest`                        | Development     | TypeScript definitions for Jest, my testing framework of choice.                                                                                                         | [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest) |
| `@types/js-yaml`                     | Development     | TypeScript definitions for `js-yaml`.                                                                                                                                                                                                   | [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/js-yaml) |
| `@types/node`                        | Development     | TypeScript definitions for Node.js.                                                                                                                                                                                                     | [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node) |
| `@types/node-fetch`                 | Development     | TypeScript definitions for `node-fetch`.                                                                                                                                                                                                | [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node-fetch) |
| `husky`                              | Development     | A Git hooks manager used to automate tasks like linting and testing before committing code.                                                                                                                                             | [GitHub](https://github.com/typicode/husky)       |
| `jest`                               | Development     | A JavaScript testing framework used to test the project's code.                                                                                                                                                                         | [GitHub](https://github.com/facebook/jest)        |
| `lint-staged`                        | Development     | A utility that runs linters on Git-staged files before committing, ensuring only clean and formatted code is committed.                                                                                                                 | [GitHub](https://github.com/okonet/lint-staged)   |
| `npm-run-all`                        | Development     | A utility to run multiple npm scripts in series or parallel.                                                                                                                                                                            | [GitHub](https://github.com/mysticatea/npm-run-all) |
| `prettier`                           | Development     | A code formatter that enforces a consistent code style across the project.                                                                                                                                                              | [GitHub](https://github.com/prettier/prettier)    |
| `rimraf`                             | Development     | A utility to remove files and directories, used to clean the build directory before building the project.                                                                                                                              | [GitHub](https://github.com/isaacs/rimraf)        |
| `ts-jest`                            | Development     | A TypeScript preprocessor for Jest that allows testing TypeScript code directly without having to transpile it first.                                                                                                                   | [GitHub](https://github.com/kulshekhar/ts-jest)   |
| `ts-node`                            | Development     | A TypeScript runtime for Node.js that allows running TypeScript code directly without having to transpile it first. Used for development purposes.                                                                                      | [GitHub](https://github.com/TypeStrong/ts-node)   |
| `tsup`                               | Development     | A fast TypeScript bundler and minifier used to build the project.                                                                                                                                                                       | [GitHub](https://github.com/egoist/tsup)          |
| `typedoc`                            | Development     | A documentation generator for TypeScript projects that generates API documentation from TypeScript source code.                                                                                                                         | [GitHub](https://github.com/TypeStrong/typedoc)   |
| `typedoc-plugin-markdown`            | Development     | A plugin for TypeDoc that generates documentation in Markdown format.                                                                                                                                                                   | [GitHub](https://github.com/tom-grey/typedoc-plugin-markdown) |
| `typescript`                         | Development     | The TypeScript compiler, used to transpile the project's TypeScript code to JavaScript.                                                                                                                                                 | [GitHub](https://github.com/microsoft/TypeScript) |


## Development

To run the project in development mode, use the `dev` script:

```bash
npm run dev
```

This will start the TypeScript build with the `--watch` flag, enabling automatic recompilation when source files are changed.

To format the source code, use the `format` script:

```bash
npm run format
```

This will run Prettier on all TypeScript files in the `src` directory.

## Testing

This project includes tests to ensure its functionality. To run the tests, use the `test` script:

```bash
npm test
```

This will run Jest on all test files in the project, providing a summary of the test results.

## TODO

List of additional planned improvements 

1. **Improve Parser**: Get feedback from mentors
2. **Code Coverage**: Finish unit tests and code coverage
3. **Continuous Integration**: automatic builds and tests
4. **License**: Apache License 2.0?
5. **Changelog**: Maintain a `CHANGELOG.md` file 
6. **Roadmap**: Outline a roadmap if necessary