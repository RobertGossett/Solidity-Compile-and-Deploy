'use strict';
const Compiler = require('./SolidityCompiler');

const args = process.argv;
const contractLocation = args[2]
const contract = args[3];
const objectKey = args[4];

const compiler = new Compiler(contractLocation, contract);
module.exports = compiler.compiledContract(objectKey);