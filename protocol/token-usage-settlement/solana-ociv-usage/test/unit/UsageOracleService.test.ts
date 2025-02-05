import { describe } from "mocha";
import { UsageOracleService } from "../../src/service/UsageOracleService";
import { expect } from "chai";
import { Keypair, PublicKey } from "@solana/web3.js";

describe("UsageOracleService", function () {
  this.timeout(30_000);

  const oracle = Keypair.generate();
  const gatekeeper = Keypair.generate();
  // const dapp = new PublicKey("D3z8BLmMnPD1LaKwCkyCisM7iDyw9PsXXmvatUwjCuqT");
  const dapp = new PublicKey("FRQb9goeMow4BjNH6yH1vSBicWDhZTgeXsUgkBFbehft")

  it("should read data", async () => {
    const usageOracleService = new UsageOracleService(oracle, "localnet");

    const usage = await usageOracleService.readUsage({
      dapp,
      epoch: 0,
      gatekeeper: gatekeeper.publicKey,
    });

    console.log(usage);

    expect(usage.length).to.equal(1000);
  });
});
