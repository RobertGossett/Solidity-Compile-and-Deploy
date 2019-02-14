const Deployer = require('./SolidityDeployer');
const config = require('../config');

const contractLocation = 'contracts'
const contract = 'inbox.sol';
const objectKey = ':Inbox';
const seedPhrase = config.wallet.seedphrase;
const networkApi = config.network.rinkby.api;

const deployer = new Deployer(seedPhrase, networkApi, contractLocation, 
    contract, objectKey);

try{
deployer.deploy()
}
catch(err) {
    console.log(err);
}

