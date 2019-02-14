const path = require('path');
const fs = require('fs');
const util = require('util');

const solc = require('solc');

class SolidityCompiler {
    constructor(contractDirectory, contractFile){
        console.log(contractDirectory);
        this.contractPath = path.resolve(__dirname, contractDirectory, contractFile);
        console.log(this.contractPath);
        this.source = fs.readFileSync(this.contractPath, 'utf8');
        
    }

    get compile() {
        console.log(this.printMyCompile("<ALL CONTRACTS>"));
        return solc.compile(this.source, 1);
    }

    compiledContract(objectKey){
        console.log(this.printMyCompile(objectKey));
        return solc.compile(this.source, 1).contracts[objectKey];
    }

    printMyCompile(objectKey) {
        return console.log(util.format("----- COMPILING <%s> @ <%s> ------", objectKey, this.contractPath))
    }
    
}

module.exports = SolidityCompiler;

