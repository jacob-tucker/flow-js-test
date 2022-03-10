import path from "path";

import {
  emulator,
  init,
  getAccountAddress,
  shallPass,
  shallResolve,
  shallRevert,
} from "flow-js-testing";

import { getNumberAdminAddress } from "../src/common.js";
import {
  getNumberId,
  deployNumber,
} from "../src/number.js";

// We need to set timeout for a higher number, because some transactions might take up some time
jest.setTimeout(50000);

describe("Number", () => {
  // Instantiate emulator and path to Cadence files
  beforeEach(async () => {
    const basePath = path.resolve(__dirname, "../../");
    const port = 7002;
    await init(basePath, { port });
    await emulator.start(port, false);
    return await new Promise(r => setTimeout(r, 1000));
  });

  // Stop emulator, so it could be restarted
  afterEach(async () => {
    await emulator.stop();
    return await new Promise(r => setTimeout(r, 1000));
  });

  it("should deploy Number contract", async () => {
    await shallPass(deployNumber());
  });

  it("id should be 1 after contract is deployed", async () => {
    // Setup
    await deployNumber();

    const [id] = await shallResolve(getNumberId())
    expect(id).toBe(1);
  });
});