'use strict';
const Deployer = require('./SolidityDeployer');
const config = require('../config');

const args = process.argv;
const seedPhrase = config.wallet.seedphrase;
let networkApi;
const contractLocation = args[3];
const contract = args[4];
const objectKey = args[5];

if(args[2] == 'rinkby'){
    networkApi = config.network.rinkby.api;
}
const deployer = new Deployer(seedPhrase, networkApi, contractLocation, 
    contract, objectKey);

try{
deployer.deploy()
}
catch(err) {
    console.log(err);
}

