const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const Compiler = require('../compile/SolidityCompiler');
const util = require('util');


class SolidityDeployer {

    constructor(seedPhrase, networkApi, contractLocation, contract, objectKey){
        this.provider = new HDWalletProvider(
            seedPhrase,
            networkApi
        );
        this.web3 = new Web3(this.provider);
        this.compiler = new Compiler(contractLocation, contract);
        this.objectKey = objectKey;
        this.compiledContract = this.compiler.compiledContract(this.objectKey);
        
        this.interface = this.compiledContract.interface;
        this.bytecode = this.compiledContract.bytecode;
    }

    // interfaceBytcodeSetup() {
    //     const { interface, bytecode } = this.compiler.compiledContract(this.objectKey);
    //     this.interface = interface;
    //     this.bytecode = bytecode;
    // }

    async deploy(){
        let accounts, result;
        try {
        accounts = await this.web3.eth.getAccounts();
        }
        catch(err) {
            console.log(err);
        }
        console.log(util.format('----- Attempting to deploy contract <%s> from account <%s> -----',
            this.objectKey, accounts[0]));
        try{
        result = await new this.web3.eth.Contract(JSON.parse(this.interface))
            .deploy({data: '0x' + this.bytecode, arguments: ['Hi there!']})
            .send({from: accounts[0]});
            
        }
        catch (err) {
            console.log(err);
        }
        console.log(util.format('----- Contract <%s> deployed to <%s> -----',
            this.objectKey, result.options.address));
        
    }

};

module.exports = SolidityDeployer;