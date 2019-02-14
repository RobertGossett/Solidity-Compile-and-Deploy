const Deployer = require('./SolidityDeployer');

const contractLocation = 'contracts'
const contract = 'inbox.sol';
const objectKey = ':Inbox';
const seedPhrase = '<seed phrase>';
const networkApi = 'https://rinkeby.infura.io/v3/0265da76a18c4c32acd1719a762b49b7';

const deployer = new Deployer(seedPhrase, networkApi, contractLocation, 
    contract, objectKey);

try{
deployer.deploy()
}
catch(err) {
    console.log(err);
}

