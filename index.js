#!/usr/bin/env node
const setOptions = require('./src/setOptions');
// const listInternal = require('./src/listInternal');
const printHelp = require('./src/printHelp');
const generateCode = require('./src/generateCode');
const writeToConsole = require('./src/utils/writeToConsole');

const args = process.argv;
const options = setOptions(process.argv);
const {
  badOptions,
  help,
  listTemplates,
  listStructures
} = options;

if (help) {
  printHelp();
  return;
}

if (badOptions.length) {
  badOptions.forEach((option) => {
    writeToConsole(`bad option: ${option}`);
  });
  return;
}

generateCode(options);
