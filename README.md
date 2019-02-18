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

So... In steps, starting from scratch, and in no particular order
1. Install node.js and npm: https://nodejs.org/en/download/ 
2. Install git: https://git-scm.com/downloads
3. Install an IDE if you don't have one (VSC: https://code.visualstudio.com)
4. Install the Solidity Compiler: https://github.com/juanfranblanco/vscode-solidity


### Installing

Now that you've done all of that setup. You will need to clone this repository to an easy to find directory.

1. Create a directory called solidity-cd, or something of the like. In your Terminal, run
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

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
