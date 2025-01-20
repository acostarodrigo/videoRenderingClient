import { QueryClient, StargateClient, StargateClientOptions } from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { VideoRenderingExtension, setupVideoRenderingExtension } from "./modules/queries"

export class VideoRenderingStargateClient extends StargateClient {
    public readonly videoRenderingQueryClient: VideoRenderingExtension | undefined

    public static async connect(
        endpoint: string,
        options?: StargateClientOptions,
    ): Promise<VideoRenderingStargateClient> {
        const tmClient = await Tendermint34Client.connect(endpoint)
        return new VideoRenderingStargateClient(tmClient, options)
    }

    protected constructor(tmClient: Tendermint34Client | undefined, options: StargateClientOptions = {}) {
        super(tmClient, options)
        if (tmClient) {
            this.videoRenderingQueryClient = QueryClient.withExtensions(tmClient, setupVideoRenderingExtension)
        }
    }
}