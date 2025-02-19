import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate"
import {VideoRenderingLogs, VideoRenderingTask, Worker} from '../types/generated/janction/videoRendering/v1/types'
import {QueryClientImpl, QueryGetVideoRenderingLogsResponse, QueryGetWorkerResponse} from '../types/generated/janction/videoRendering/v1/query'
import {QueryGetVideoRenderingTaskResponse} from '../../src/types/generated/janction/videoRendering/v1/query'

export interface VideoRenderingExtension {
    readonly videoRendering: {
        readonly GetVideoRenderingTask: (
            index: string
        ) => Promise<VideoRenderingTask | undefined>;

        readonly GetVideoRenderingLog: (
            threadId: string
        ) => Promise<VideoRenderingLogs | undefined>;
        
        readonly GetWorker: (
            worker: string
        ) => Promise<Worker | undefined>;
    };
}

export function setupVideoRenderingExtension(base: QueryClient): VideoRenderingExtension {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        videoRendering: {
            GetVideoRenderingTask: async (index: string): Promise<VideoRenderingTask | undefined> => {
                const response: QueryGetVideoRenderingTaskResponse = await queryService.GetVideoRenderingTask({
                    index: index,
                });
                return response.videoRenderingTask;
            },

            GetVideoRenderingLog: async (threadId: string): Promise<VideoRenderingLogs | undefined> => {
                const response: QueryGetVideoRenderingLogsResponse = await queryService.GetVideoRenderingLogs({
                    threadId: threadId,
                });
                return response.videoRenderingLogs;
            },

            GetWorker: async (worker: string): Promise<Worker | undefined> => {
                const response: QueryGetWorkerResponse = await queryService.GetWorker({
                    worker: worker,
                });
                return response.worker;
            },
        },
    };
}
