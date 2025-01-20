import { expect } from "chai"
import { config } from "dotenv"
import _ from "../../environment"
import { VideoRenderingStargateClient } from "../../src/stargateClient"
import { VideoRenderingExtension } from "../../src/modules/queries"

config()

describe("VideoRendering", function () {
    let client: VideoRenderingStargateClient, videoRendering: VideoRenderingExtension["videoRendering"]

    before("create client", async function () {
        client = await VideoRenderingStargateClient.connect(process.env.RPC_URL)
        videoRendering = client.videoRenderingQueryClient!.videoRendering
    })

    it("can get videoRenderingtask", async function () {
        const task = await videoRendering.GetVideoRenderingTask('1')
        expect(task.cid).to.be.equal("QmYC32RNLAMPRa8RGWEEHJWMcrnMzJ2Hq8xByupeFPUNtn")
    })


})