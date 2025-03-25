import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 1337, // Ganache의 Network ID에 맞게 설정
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: process.env.SE_PRIVATE_KEY ? [process.env.SE_PRIVATE_KEY] : [],
    },

    kairos: {
      url: "https://public-en-kairos.node.kaia.io",
      accounts: process.env.SE_PRIVATE_KEY ? [process.env.SE_PRIVATE_KEY] : [],
      chainId: 1001,
    },

  }
};

export default config;
