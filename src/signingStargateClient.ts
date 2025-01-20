import { GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing"
import {
    defaultRegistryTypes,
    DeliverTxResponse,
    QueryClient,
    SigningStargateClient,
    SigningStargateClientOptions,
    StdFee,
} from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import Long from "long"
import { VideoRenderingExtension, setupVideoRenderingExtension } from "./modules/queries"
import {
    videoRenderingTypes,
    MsgCreateVideoRenderingTaskEncodeObject,
    typeUrlMsgCreateVideoRenderingTask,
} from "./modules/messages"

export const videoRenderingDefaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    ...videoRenderingTypes,
]

function createDefaultRegistry(): Registry {
    return new Registry(defaultRegistryTypes)
}

export class CheckersSigningStargateClient extends SigningStargateClient {
    public readonly checkersQueryClient: VideoRenderingExtension | undefined

    public static async connectWithSigner(
        endpoint: string,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {},
    ): Promise<CheckersSigningStargateClient> {
        const tmClient = await Tendermint34Client.connect(endpoint)
        return new CheckersSigningStargateClient(tmClient, signer, {
            registry: createDefaultRegistry(),
            ...options,
        })
    }

    protected constructor(
        tmClient: Tendermint34Client | undefined,
        signer: OfflineSigner,
        options: SigningStargateClientOptions,
    ) {
        super(tmClient, signer, options)
        if (tmClient) {
            this.checkersQueryClient = QueryClient.withExtensions(tmClient, setupVideoRenderingExtension)
        }
    }

    public async createVideoRenderingTask(
        creator: string,
        cid: string,
        startFrame: number,
        endFrame: number,
        threads: number,
        reward: Long,
        fee: number | StdFee | "auto"
    ): Promise<DeliverTxResponse> {
        const createMsg: MsgCreateVideoRenderingTaskEncodeObject = {
            typeUrl: typeUrlMsgCreateVideoRenderingTask,
            value: {
                creator: creator,
                 cid: cid,
                startFrame: startFrame,
                endFrame: endFrame,
                threads: threads,
                reward: reward,
                
            },
        }
        return this.signAndBroadcast(creator, [createMsg],fee)
    }

    
}