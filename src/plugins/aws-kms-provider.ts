import { extendEnvironment } from "hardhat/config";
import { KmsOptions, KmsProvider } from "aws-kms-provider";
import { HttpNetworkConfig } from "hardhat/types";

const HARDHAT_NETWORK_NAME = "hardhat";
// wallet-for-sandbox
const KEY_IDS = ["4fb2bb8a-c523-4844-8e8b-99ce72176831"];

export type Kms = {
  provider: KmsProvider;
};

declare module "hardhat/types/runtime" {
  interface HardhatRuntimeEnvironment {
    // We omit the ethers field because it is redundant.
    kms: Kms;
  }
}

extendEnvironment((env) => {
  const hardhatUrl = "http://localhost:8545";
  let provider: KmsProvider;

  const kmsOptions: KmsOptions = {
    keyIds: KEY_IDS,
    region: "ap-northeast-1",
  };
  if (env.network.name === HARDHAT_NETWORK_NAME) {
    provider = new KmsProvider(hardhatUrl, kmsOptions);
  } else {
    const url = (env.network.config as HttpNetworkConfig).url;
    provider = new KmsProvider(url, kmsOptions);
  }

  env.kms = {
    provider,
  };
});
