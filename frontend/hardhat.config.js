require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
const fs = require('fs');
const projectId = "33d1755d8440ba0e2dd32cbd";
const privateKey = fs.readFileSync('./.secret').toString();
const apiKeyForEtherscan = "PJ2V5H4XH4P3PYXJE5JUM6VQRPRHQ56HDV";
// const apiKeyForBscscan = "PJ2V5H4XH4P3PYXJE5JUM6VQRPRHQ56HDV";
module.exports = {
  // defaultNetwork: "rinkedby",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // chainId: 4 //ethereum
      chainId: 1337, //ethereum
      // chainId: 97, //ethereum
    },
    polygonmainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mainnet`,
      accounts: [privateKey]
    },
    mumbai: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/polygon/mumbai`,
      accounts: [privateKey]
    },
    ethermainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/eth/mainnet`,
      accounts: [privateKey]
    },
    kovan: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/eth/kovan`,
      accounts: [privateKey]
    },
    rinkedby: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/eth/rinkeby`,
      accounts: [privateKey]
    } ,
    bscmainnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/bsc/mainnet`,
      accounts: [privateKey]
    },
    bsctestnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${projectId}/bsc/testnet`,
      accounts: [privateKey]
    }
  },
  paths:{
    sources: "./contracts",
    artifacts: "./src/artifacts"
  },
  etherscan: {
    apiKey: apiKeyForEtherscan
  },
  solidity: {
    compilers: [
      {
        version: "0.8.5",
      },
      {
        version: "0.6.7",
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  // solidity: "0.8.4",
};
