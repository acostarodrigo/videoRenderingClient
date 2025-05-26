import { toHex } from "@cosmjs/encoding"
import { OfflineDirectSigner } from "@cosmjs/proto-signing"
import { Account, DeliverTxResponse, GasPrice } from "@cosmjs/stargate"
import { Log } from "@cosmjs/stargate/build/logs"
import { expect } from "chai"
import { config } from "dotenv"
import base58 from 'base-58';  // Install base-58 package
import Long from "long"
import _ from "../../environment"
import { VideoRenderingSigningStargateClient } from "../../src/signingStargateClient"
import { getSignerFromMnemonic } from "../../src/utils/signer"

config()


describe("VideoRenderingTask Action", function () {
    const { RPC_URL, ADDRESS_TEST_ALICE: alice, ADDRESS_TEST_BOB: bob } = process.env
    let aliceSigner: OfflineDirectSigner, bobSigner: OfflineDirectSigner

    before("create signers", async function () {
        aliceSigner = await getSignerFromMnemonic(process.env.MNEMONIC_TEST_ALICE)
        // bobSigner = await getSignerFromMnemonic(process.env.MNEMONIC_TEST_BOB)
        expect((await aliceSigner.getAccounts())[0].address).to.equal(alice)
        // expect((await bobSigner.getAccounts())[0].address).to.equal(bob)
    })

    let aliceClient: VideoRenderingSigningStargateClient

    before("create signing clients", async function () {
        aliceClient = await VideoRenderingSigningStargateClient.connectWithSigner(RPC_URL!, aliceSigner, {
            gasPrice: GasPrice.fromString("0stake"),
        })
        
    })

    

    it("can create video rendering task", async function () {
        this.timeout(10_000)
        const response: DeliverTxResponse = await aliceClient.createVideoRenderingTask(
            alice,
            'QmYC32RNLAMPRa8RGWEEHJWMcrnMzJ2Hq8xByupeFPUNtn',
            1,
            4,
            2,
            Long.fromNumber(100),
            "auto",
        )
        const logs: Log[] = JSON.parse(response.rawLog!)
        expect(logs).to.be.length(1)
        
    })

    
})