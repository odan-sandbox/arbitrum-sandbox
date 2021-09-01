import "@nomiclabs/hardhat-ethers";

import "./src/tasks/accounts";
import "./src/plugins/aws-kms-provider";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.1",
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/60d0008ec52149f5a639ba70fc6086df",
    },
  },
};

export default config;
