# Solidity Smart Contract Compilation and Deployment Node Modules

Contains code to compile and deloy solidity smart contracts to various networks (with some configuration, of course). This repository contains a Compiler and Deployer component, ```npm run <command>``` configurations for testing, custom deployment, and an example contract deployment, as well as a ```config.js``` file for wallet configuration. At the moment, the Rinkby test network is configured into ```config.js```. 

The goal of this project is to help new and experienced solidity developers alike focus on smart contract development in a local environment contract. (rather than using remix). By the end of this guide, you will have a local node.js project set up to compile and deploy your own Solidity smart contracts. GLHF!


## Getting Started

### Disclaimer

The dependency versions in this tutorial are known to work together although they are not the most recent. One could certainly use more recent versions of the various dependencies. If updating to recent dependencies seems daunting, start out following the steps exactly as explained here, and then work to upgrade versions aftwards. So... let's get to work. 

### Prerequisites

To get things going here, you'll need to install ```node.js``` along with ```npm``` (node package manager). 
For Node and npm, go to https://nodejs.org/en/download/ and pick the download for your operationg system.

If you don't already have it, you will also need to install git on your computer. Here is the link: https://git-scm.com/downloads

On top of that, you'll need your favorite IDE. Visual Studio Code is one that I like to use.
Here is the download link for that: https://code.visualstudio.com

If you want to install a Solidity Compiler, you can find a good one from github here: https://github.com/juanfranblanco/vscode-solidity. This helps when working with Solidity code in your IDE with code highlighting and other features. It can be added to VSC directly via the extensions sub-tab on the left (the square one).

Lastly, we'll need an Ethereum wallet to pay for our "transactions" on the Ethereum network. Don't worry, you won't be spending any money. We will use Metamask to create our wallet. Install MetaMask in your favorite browser: https://metamask.io

So... In steps, starting from scratch, and in no particular order
1. Install node.js and npm: https://nodejs.org/en/download/ 
2. Install git: https://git-scm.com/downloads
3. Install an IDE if you don't have one (VSC: https://code.visualstudio.com)
4. Install the Solidity Compiler: https://github.com/juanfranblanco/vscode-solidity
5. Follow the install steps for MetaMask: https://metamask.io
6. In the top right portion of your browser, click on the little orange fox. 
7. Accept the subsequent terms and agreements.
8. In the wallet creation page, enter a password (don't forget it) and press "Create".
9. Save the Seed Phrase (12 word phrase) somewhere safe. You'll need that later.

### Adding Ethereum

We need to add Ethereum to our wallet on the Rinkby test network.
Go to the Rinkby Authenticated Faucet and follow the steps there: https://faucet.rinkeby.io/

### Installing

Now that you've done all of that setup. You will need to clone this repository to an easy to find directory.

1. Create a directory called "solidity-cd", or something of the like. In your Terminal, run
```
$ mkdir solidity-cd
$ cd solidity-cd
```
2. Clone the reposity into that directory
```
$ git clone https://github.com/RobertGossett/Solidity-Compile-and-Deploy.git
```
3. Install the necessary packages for the project via ```npm```
```
$ npm install
```

### Configuring

After following the installation steps, open the "solidity-cd" as a project in your IDE. 

Click on ```config.js``` and replace ```<your seed phrase>``` with the seed phrase you saved from MetaMask.

Now you're all ready to start compiling and deploying the example ```inbox.sol``` contract.

## Running the tests

Before we actually deploy our contract to the Rinkby Test network, we are going to run our tests to make sure our Inbox contract will actually compile and deploy.

Back in the terminal, run
```
$ npm run test
```
This runs all the mocha test with the ```.test.js``` suffix in the file name.

In the "test" directory, you'll notice a single test called ```inbox.test.js```. This is the test for the Inbox contract. 

Make sure everything passes. 

## Deployment

Given our tests have passed, we can deploy the Inbox contract to the Rinkby test network. In the terminal, run
```
$ npm run dplirnk
```

This will deploy the Inbox Solidity contract to the Rinkby network.

When deploying a custom contract, you can run the command
```
$ npm run dpl <network-name> <contract-directory> <contract-file-name> :<contract-name>
```
So deploying the Inbox contract from the generic deployment command would look like this.
```
$ node deploy/deploy.js rinkby ../contracts inbox.sol :Inbox
```
Note: Rinkby is the only network configured in this demo.

## Interacting With Inbox

After deployin the contract, we can actually interact with the contract through a nice GUI.
Navigate to http://remix.ethereum.org/ in the browser where your MetaMask is setup.
Follow these steps.

1. Navigate to the "Run" tab.
2. Make sure environment is set to "Injected Web3"
3. Select the wallet's public key in the "account" dropdown
4. In the "At Address" input field, post the address for the Inbox contract that we deployed earlier.
5. Press the "At Address" button to load our contract. 
6. You'll see the contract pop up in the pain below. You can now interact there. Go ahead.


## Built With

* [Web3](https://web3js.readthedocs.io/en/1.0/) - The ethereum node web framework used
* [Mocha](https://maven.apache.org/) - For testing
* [Ganache](https://truffleframework.com/ganache) - Personal testing blockchain
* [SolC](https://www.npmjs.com/package/solc) - JS binding for solc
* [Truffle](https://truffleframework.com/truffle) - Test wallet provider

## Authors

* **Robert Gossett** - *Initial work* - [RobertGossett](https://github.com/RobertGossett)

## Acknowledgments

* Juan Fran Blanco for the IDE Solidity Compiler

