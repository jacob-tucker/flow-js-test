import { mintFlow, executeScript, sendTransaction, deployContractByName } from "flow-js-testing";
import { getNumberAdminAddress } from "./common.js";

/*
 * Deploys NonFungibleToken and KittyItems contracts to KittyAdmin.
 * @throws Will throw an error if transaction is reverted.
 * @returns {Promise<[{*} txResult, {error} error]>}
 * */
export const deployNumber = async () => {
  const NumberAdmin = await getNumberAdminAddress();
  await mintFlow(NumberAdmin, "10.0");

  await deployContractByName({ to: NumberAdmin, name: "Number" });
};

/*
 * Returns KittyItems supply.
 * @throws Will throw an error if execution will be halted
 * @returns {UInt64} - number of NFT minted so far
 * */
export const getNumberId = async () => {
  const name = "get_number";

  return executeScript({ name });
};