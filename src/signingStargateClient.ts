import { GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing"
import {
    defaultRegistryTypes,
    DeliverTxResponse,
    QueryClient,
    SigningStargateClient,
    SigningStargateClientOptions,
    StdFee,
    coin
} from "@cosmjs/stargate"
import { toHex }  from "@cosmjs/encoding";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import Long from "long"
import { VideoRenderingExtension, setupVideoRenderingExtension } from "./modules/queries"
import {
    videoRenderingTypes,
    MsgCreateVideoRenderingTaskEncodeObject,
    typeUrlMsgCreateVideoRenderingTask,
} from "./modules/messages"
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { MsgCreateVideoRenderingTask } from "./types/generated/janction/videoRendering/v1/tx";


export const videoRenderingDefaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    ...videoRenderingTypes,
]

function createDefaultRegistry(): Registry {
    const registry = new Registry(defaultRegistryTypes)
    registry.register(videoRenderingTypes[0][0],videoRenderingTypes[0][1]  );
    registry.register(videoRenderingTypes[1][0],videoRenderingTypes[1][1]  );
    return registry
}


export class VideoRenderingSigningStargateClient extends SigningStargateClient {
    public readonly checkersQueryClient: VideoRenderingExtension | undefined

    public static async connectWithSigner(
        endpoint: string,
        signer: OfflineSigner,
        options: SigningStargateClientOptions = {},
    ): Promise<VideoRenderingSigningStargateClient> {
        const tmClient = await Tendermint34Client.connect(endpoint)
        return new VideoRenderingSigningStargateClient(tmClient, signer, {
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
        const rewardCoin = coin(reward.toString(), "jct");  // wrap Long
        const msgValue = MsgCreateVideoRenderingTask.fromPartial({
            creator,
            cid,
            startFrame: startFrame,
            endFrame:   endFrame,
            threads:    threads,
            reward:     rewardCoin
          });
      
          const createMsg = {
            typeUrl: typeUrlMsgCreateVideoRenderingTask,
            value:   msgValue,
          };
          const feeObj: StdFee = { 
            amount: [coin("1000000", "jct")], 
            gas:    "200000" 
          };
          return this.signAndBroadcast(creator, [createMsg], feeObj);
    }

    
}