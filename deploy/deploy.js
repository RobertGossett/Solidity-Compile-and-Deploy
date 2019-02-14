'use strict';
const Deployer = require('./SolidityDeployer');

const args = process.argv;
const seedPhrase = '<seed phrase>';
let networkApi;
const contractLocation = args[3];
const contract = args[4];
const objectKey = args[5];

if(args[2] == 'rinkby'){
    networkApi = 'https://rinkeby.infura.io/v3/0265da76a18c4c32acd1719a762b49b7'
}
const deployer = new Deployer(seedPhrase, networkApi, contractLocation, 
    contract, objectKey);

try{
deployer.deploy()
}
catch(err) {
    console.log(err);
}

