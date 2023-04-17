#!/usr/bin/env node

const axios = require('axios');
const yaml = require('yaml');
const yargs = require('yargs');

const argv = yargs
  .option('url', {
    alias: 'u',
    describe: 'URL of the OpenAPI specification',
    demandOption: true,
    type: 'string',
  })
  .option('type', {
    alias: 't',
    describe: 'Type of object to list',
    demandOption: true,
    choices: [
      'schemas',
      'responses',
      'parameters',
      'examples',
      'requestBodies',
      'headers',
      'securitySchemes',
      'links',
      'callbacks',
      'pathItems',
    ],
  }).argv;

axios.get(argv.url)
  .then(response => {
    const openapiSpec = yaml.parse(response.data);
    const objects = openapiSpec[argv.type];
    // const objects = openapiSpec[argv.type];
    if (objects = openapiSpec[argv.type]) {
      console.log(objects);
    } else {
      console.error(`No objects of type ${argv.type} found in the OpenAPI specification.`);
    }
  })
  .catch(error => {
    console.error(error);
  });
