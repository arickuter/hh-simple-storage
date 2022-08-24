const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Init number = 0", async function () {
    const currVal = await simpleStorage.number();
    assert.equal(currVal.toString(), 0);
  });

  it("Increment number", async function () {
    const txRes = await simpleStorage.incr_number();
    await txRes.wait(1);
    assert.equal(await simpleStorage.number(), 1);
  });
});
