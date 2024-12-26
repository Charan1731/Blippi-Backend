require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9', // Solidity compiler version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, // Optimizer settings for better gas efficiency
      },
    },
  },
  defaultNetwork: 'sepolia', // Default network for deployments
  networks: {
    hardhat: {}, // Local Hardhat network for testing
    sepolia: {
      url: 'https://rpc.ankr.com/eth_sepolia', // Sepolia RPC URL
      accounts: process.env.PRIVATE_KEY ? [`0x${process.env.PRIVATE_KEY}`] : [], // Use the private key from the environment variable
      chainId: 11155111, // Sepolia chain ID
    },
  },
};
