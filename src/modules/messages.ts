import { EncodeObject, GeneratedType } from "@cosmjs/proto-signing"
import {
    MsgCreateVideoRenderingTask,
    MsgCreateVideoRenderingTaskResponse
} from "../types/generated/janction/videoRendering/v1/tx"

export const typeUrlMsgCreateVideoRenderingTask = "/janction.videoRendering.MsgCreateVideoRenderingTask"
export const typeUrlMsgCreateVideoRenderingTaskResponse = "/janction.videoRendering.MsgCreateVideoRenderingTaskResponse"

export const videoRenderingTypes: ReadonlyArray<[string, GeneratedType]> = [
    [typeUrlMsgCreateVideoRenderingTask, MsgCreateVideoRenderingTask],
    [typeUrlMsgCreateVideoRenderingTaskResponse, MsgCreateVideoRenderingTaskResponse],
    
]

export interface MsgCreateVideoRenderingTaskEncodeObject extends EncodeObject {
    readonly typeUrl: "/janction.videoRendering.MsgCreateVideoRenderingTask"
    readonly value: Partial<MsgCreateVideoRenderingTask>
}

export function isMsgCreateVideoRenderingTaskEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateVideoRenderingTaskEncodeObject {
    return (encodeObject as MsgCreateVideoRenderingTaskEncodeObject).typeUrl === typeUrlMsgCreateVideoRenderingTask
}

export interface MsgCreateVideoRenderingTaskResponseEncodeObject extends EncodeObject {
    readonly typeUrl: "/janction.videoRendering.MsgCreateVideoRenderingTaskResponse"
    readonly value: Partial<MsgCreateVideoRenderingTaskResponse>
}

export function isMsgCreateVideoRenderingTaskResponseEncodeObject(
    encodeObject: EncodeObject,
): encodeObject is MsgCreateVideoRenderingTaskResponseEncodeObject {
    return (encodeObject as MsgCreateVideoRenderingTaskResponseEncodeObject).typeUrl === typeUrlMsgCreateVideoRenderingTaskResponse
}

