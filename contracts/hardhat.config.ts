import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";
dotenv.config();
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "hardhat-gas-reporter";



const config: HardhatUserConfig = {
  mocha: {
    timeout: 0
  },
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  
  networks: {
    
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true
    },
    polygon_amoy: {
      url: "https://80002.rpc.thirdweb.com/205f00cfc2aabd5a75af44f0bfd491ff",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
    // mumbaipolygon: {
    //   url: process.env.MUMBAI_POLYGON_TESTNET_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
    // bsctestnet: {
    //   url: process.env.BSC_TESTNET_URL || "",
    //   accounts:
    //     process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    // },
    
  },
  etherscan: {
    // apiKey: {
    //   polygonMumbai: process.env.POLYGON_API_KEY as string,
    //   bscTestnet: process.env.BSC_API_KEY as string,
    // },
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;
