import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task("accounts", "Prints the list of accounts", async (_, env) => {
  console.log(await env.kms.provider.getAccounts());
});
