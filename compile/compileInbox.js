const Compiler = require('./SolidityCompiler');

const contractLocation = 'contracts'
const contract = 'inbox.sol';
const objectKey = ':Inbox';

const compiler = new Compiler(contractLocation, contract);
module.exports = compiler.compiledContract(objectKey);