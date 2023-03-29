#!/usr/bin/env node

require("util").inspect.defaultOptions.depth=null

const { program } = require('commander');
const figlet = require('figlet');

const { getDocument } = require('./document.js');
const { findType } = require('./find.js')

program.requiredOption('-u, --url <value>').requiredOption('-t,--type <value>').option('--no-resolve').parse(process.argv);

const options = program.opts();

console.log(figlet.textSync("Type Finder"));

console.log("Url:"+options.url);
console.log("Type:"+options.type);

async function main(url, type){
    document = await getDocument(url, options.resolve);
    list = findType(document, type);
    if(list.length == 0){
        console.log(`No ${type} in the document.`)
    }
    list.forEach(element => {
        console.log(element);
        console.log();
        console.log();
    });
}

main(options.url,options.type)

    