import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {VideoRenderingTask} from '../types/generated/janction/videoRendering/v1/types'
import {QueryClientImpl} from '../types/generated/janction/videoRendering/v1/query'
import {QueryGetVideoRenderingTaskResponse} from '../../src/types/generated/janction/videoRendering/v1/query'

export interface VideoRenderingExtension{
    readonly videoRendering: {
        readonly GetVideoRenderingTask :(
            index: string
         )=> Promise<VideoRenderingTask>
    }
}

export function setupVideoRenderingExtension(base: QueryClient): VideoRenderingExtension {
    const rpc = createProtobufRpcClient(base)
    // Use this service to get easy typed access to query methods
    // This cannot be used for proof verification
    const queryService = new QueryClientImpl(rpc)

    return {
        videoRendering: {
            GetVideoRenderingTask: async (index: string): Promise<VideoRenderingTask | undefined> => {
                const response: QueryGetVideoRenderingTaskResponse = await queryService.GetVideoRenderingTask({
                    index: index,
                })
                return response.videoRenderingTask
            },
            
        },
    }
}