// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               unknown
// source: janction/videoRendering/v1/tx.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "janction.videoRendering.v1";

/** MsgCreateGame defines the Msg/CreateGame request type. */
export interface MsgCreateVideoRenderingTask {
  /** creator is the message sender. */
  creator: string;
  cid: string;
  startFrame: number;
  endFrame: number;
  threads: number;
  reward: Long;
}

/** MsgCreateGameResponse defines the Msg/CreateGame response type. */
export interface MsgCreateVideoRenderingTaskResponse {
  taskId: string;
}

export interface MsgAddWorker {
  creator: string;
  publicIp: string;
}

export interface MsgAddWorkerResponse {
}

export interface MsgSubscribeWorkerToTask {
  address: string;
  taskId: string;
}

export interface MsgSubscribeWorkerToTaskResponse {
  threadId: string;
}

/**
 * Msg to Propose a solution to an specific thread
 * Actual solution is a map of hashes
 */
export interface MsgProposeSolution {
  creator: string;
  taskId: string;
  threadId: string;
  solution: string[];
}

/** no response needed to a proposed solution */
export interface MsgProposeSolutionResponse {
}

export interface MsgSubmitValidation {
  creator: string;
  taskId: string;
  threadId: string;
  filesAmount: Long;
  valid: boolean;
}

export interface MsgSubmitValidationResponse {
}

export interface MsgSubmitSolution {
  creator: string;
  taskId: string;
  threadId: string;
  cid: string;
}

export interface MsgSubmitSolutionResponse {
}

function createBaseMsgCreateVideoRenderingTask(): MsgCreateVideoRenderingTask {
  return { creator: "", cid: "", startFrame: 0, endFrame: 0, threads: 0, reward: Long.UZERO };
}

export const MsgCreateVideoRenderingTask: MessageFns<MsgCreateVideoRenderingTask> = {
  encode(message: MsgCreateVideoRenderingTask, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.cid !== "") {
      writer.uint32(18).string(message.cid);
    }
    if (message.startFrame !== 0) {
      writer.uint32(24).uint32(message.startFrame);
    }
    if (message.endFrame !== 0) {
      writer.uint32(32).uint32(message.endFrame);
    }
    if (message.threads !== 0) {
      writer.uint32(40).uint32(message.threads);
    }
    if (!message.reward.equals(Long.UZERO)) {
      writer.uint32(48).uint64(message.reward.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVideoRenderingTask {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVideoRenderingTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.cid = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.startFrame = reader.uint32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.endFrame = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.threads = reader.uint32();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.reward = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVideoRenderingTask {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      cid: isSet(object.cid) ? globalThis.String(object.cid) : "",
      startFrame: isSet(object.startFrame) ? globalThis.Number(object.startFrame) : 0,
      endFrame: isSet(object.endFrame) ? globalThis.Number(object.endFrame) : 0,
      threads: isSet(object.threads) ? globalThis.Number(object.threads) : 0,
      reward: isSet(object.reward) ? Long.fromValue(object.reward) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateVideoRenderingTask): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.cid !== "") {
      obj.cid = message.cid;
    }
    if (message.startFrame !== 0) {
      obj.startFrame = Math.round(message.startFrame);
    }
    if (message.endFrame !== 0) {
      obj.endFrame = Math.round(message.endFrame);
    }
    if (message.threads !== 0) {
      obj.threads = Math.round(message.threads);
    }
    if (!message.reward.equals(Long.UZERO)) {
      obj.reward = (message.reward || Long.UZERO).toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVideoRenderingTask>, I>>(base?: I): MsgCreateVideoRenderingTask {
    return MsgCreateVideoRenderingTask.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVideoRenderingTask>, I>>(object: I): MsgCreateVideoRenderingTask {
    const message = createBaseMsgCreateVideoRenderingTask();
    message.creator = object.creator ?? "";
    message.cid = object.cid ?? "";
    message.startFrame = object.startFrame ?? 0;
    message.endFrame = object.endFrame ?? 0;
    message.threads = object.threads ?? 0;
    message.reward = (object.reward !== undefined && object.reward !== null)
      ? Long.fromValue(object.reward)
      : Long.UZERO;
    return message;
  },
};

function createBaseMsgCreateVideoRenderingTaskResponse(): MsgCreateVideoRenderingTaskResponse {
  return { taskId: "" };
}

export const MsgCreateVideoRenderingTaskResponse: MessageFns<MsgCreateVideoRenderingTaskResponse> = {
  encode(message: MsgCreateVideoRenderingTaskResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVideoRenderingTaskResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVideoRenderingTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.taskId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVideoRenderingTaskResponse {
    return { taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "" };
  },

  toJSON(message: MsgCreateVideoRenderingTaskResponse): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateVideoRenderingTaskResponse>, I>>(
    base?: I,
  ): MsgCreateVideoRenderingTaskResponse {
    return MsgCreateVideoRenderingTaskResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVideoRenderingTaskResponse>, I>>(
    object: I,
  ): MsgCreateVideoRenderingTaskResponse {
    const message = createBaseMsgCreateVideoRenderingTaskResponse();
    message.taskId = object.taskId ?? "";
    return message;
  },
};

function createBaseMsgAddWorker(): MsgAddWorker {
  return { creator: "", publicIp: "" };
}

export const MsgAddWorker: MessageFns<MsgAddWorker> = {
  encode(message: MsgAddWorker, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.publicIp !== "") {
      writer.uint32(18).string(message.publicIp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddWorker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWorker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.publicIp = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgAddWorker {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      publicIp: isSet(object.publicIp) ? globalThis.String(object.publicIp) : "",
    };
  },

  toJSON(message: MsgAddWorker): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.publicIp !== "") {
      obj.publicIp = message.publicIp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddWorker>, I>>(base?: I): MsgAddWorker {
    return MsgAddWorker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddWorker>, I>>(object: I): MsgAddWorker {
    const message = createBaseMsgAddWorker();
    message.creator = object.creator ?? "";
    message.publicIp = object.publicIp ?? "";
    return message;
  },
};

function createBaseMsgAddWorkerResponse(): MsgAddWorkerResponse {
  return {};
}

export const MsgAddWorkerResponse: MessageFns<MsgAddWorkerResponse> = {
  encode(_: MsgAddWorkerResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddWorkerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWorkerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgAddWorkerResponse {
    return {};
  },

  toJSON(_: MsgAddWorkerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddWorkerResponse>, I>>(base?: I): MsgAddWorkerResponse {
    return MsgAddWorkerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddWorkerResponse>, I>>(_: I): MsgAddWorkerResponse {
    const message = createBaseMsgAddWorkerResponse();
    return message;
  },
};

function createBaseMsgSubscribeWorkerToTask(): MsgSubscribeWorkerToTask {
  return { address: "", taskId: "" };
}

export const MsgSubscribeWorkerToTask: MessageFns<MsgSubscribeWorkerToTask> = {
  encode(message: MsgSubscribeWorkerToTask, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubscribeWorkerToTask {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeWorkerToTask();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.taskId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubscribeWorkerToTask {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
    };
  },

  toJSON(message: MsgSubscribeWorkerToTask): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubscribeWorkerToTask>, I>>(base?: I): MsgSubscribeWorkerToTask {
    return MsgSubscribeWorkerToTask.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubscribeWorkerToTask>, I>>(object: I): MsgSubscribeWorkerToTask {
    const message = createBaseMsgSubscribeWorkerToTask();
    message.address = object.address ?? "";
    message.taskId = object.taskId ?? "";
    return message;
  },
};

function createBaseMsgSubscribeWorkerToTaskResponse(): MsgSubscribeWorkerToTaskResponse {
  return { threadId: "" };
}

export const MsgSubscribeWorkerToTaskResponse: MessageFns<MsgSubscribeWorkerToTaskResponse> = {
  encode(message: MsgSubscribeWorkerToTaskResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.threadId !== "") {
      writer.uint32(10).string(message.threadId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubscribeWorkerToTaskResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeWorkerToTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.threadId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubscribeWorkerToTaskResponse {
    return { threadId: isSet(object.threadId) ? globalThis.String(object.threadId) : "" };
  },

  toJSON(message: MsgSubscribeWorkerToTaskResponse): unknown {
    const obj: any = {};
    if (message.threadId !== "") {
      obj.threadId = message.threadId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubscribeWorkerToTaskResponse>, I>>(
    base?: I,
  ): MsgSubscribeWorkerToTaskResponse {
    return MsgSubscribeWorkerToTaskResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubscribeWorkerToTaskResponse>, I>>(
    object: I,
  ): MsgSubscribeWorkerToTaskResponse {
    const message = createBaseMsgSubscribeWorkerToTaskResponse();
    message.threadId = object.threadId ?? "";
    return message;
  },
};

function createBaseMsgProposeSolution(): MsgProposeSolution {
  return { creator: "", taskId: "", threadId: "", solution: [] };
}

export const MsgProposeSolution: MessageFns<MsgProposeSolution> = {
  encode(message: MsgProposeSolution, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    if (message.threadId !== "") {
      writer.uint32(26).string(message.threadId);
    }
    for (const v of message.solution) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeSolution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.taskId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.threadId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.solution.push(reader.string());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgProposeSolution {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
      threadId: isSet(object.threadId) ? globalThis.String(object.threadId) : "",
      solution: globalThis.Array.isArray(object?.solution) ? object.solution.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: MsgProposeSolution): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.threadId !== "") {
      obj.threadId = message.threadId;
    }
    if (message.solution?.length) {
      obj.solution = message.solution;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProposeSolution>, I>>(base?: I): MsgProposeSolution {
    return MsgProposeSolution.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProposeSolution>, I>>(object: I): MsgProposeSolution {
    const message = createBaseMsgProposeSolution();
    message.creator = object.creator ?? "";
    message.taskId = object.taskId ?? "";
    message.threadId = object.threadId ?? "";
    message.solution = object.solution?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgProposeSolutionResponse(): MsgProposeSolutionResponse {
  return {};
}

export const MsgProposeSolutionResponse: MessageFns<MsgProposeSolutionResponse> = {
  encode(_: MsgProposeSolutionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeSolutionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgProposeSolutionResponse {
    return {};
  },

  toJSON(_: MsgProposeSolutionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgProposeSolutionResponse>, I>>(base?: I): MsgProposeSolutionResponse {
    return MsgProposeSolutionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgProposeSolutionResponse>, I>>(_: I): MsgProposeSolutionResponse {
    const message = createBaseMsgProposeSolutionResponse();
    return message;
  },
};

function createBaseMsgSubmitValidation(): MsgSubmitValidation {
  return { creator: "", taskId: "", threadId: "", filesAmount: Long.UZERO, valid: false };
}

export const MsgSubmitValidation: MessageFns<MsgSubmitValidation> = {
  encode(message: MsgSubmitValidation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    if (message.threadId !== "") {
      writer.uint32(26).string(message.threadId);
    }
    if (!message.filesAmount.equals(Long.UZERO)) {
      writer.uint32(32).uint64(message.filesAmount.toString());
    }
    if (message.valid !== false) {
      writer.uint32(40).bool(message.valid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitValidation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitValidation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.taskId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.threadId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.filesAmount = Long.fromString(reader.uint64().toString(), true);
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.valid = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitValidation {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
      threadId: isSet(object.threadId) ? globalThis.String(object.threadId) : "",
      filesAmount: isSet(object.filesAmount) ? Long.fromValue(object.filesAmount) : Long.UZERO,
      valid: isSet(object.valid) ? globalThis.Boolean(object.valid) : false,
    };
  },

  toJSON(message: MsgSubmitValidation): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.threadId !== "") {
      obj.threadId = message.threadId;
    }
    if (!message.filesAmount.equals(Long.UZERO)) {
      obj.filesAmount = (message.filesAmount || Long.UZERO).toString();
    }
    if (message.valid !== false) {
      obj.valid = message.valid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitValidation>, I>>(base?: I): MsgSubmitValidation {
    return MsgSubmitValidation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitValidation>, I>>(object: I): MsgSubmitValidation {
    const message = createBaseMsgSubmitValidation();
    message.creator = object.creator ?? "";
    message.taskId = object.taskId ?? "";
    message.threadId = object.threadId ?? "";
    message.filesAmount = (object.filesAmount !== undefined && object.filesAmount !== null)
      ? Long.fromValue(object.filesAmount)
      : Long.UZERO;
    message.valid = object.valid ?? false;
    return message;
  },
};

function createBaseMsgSubmitValidationResponse(): MsgSubmitValidationResponse {
  return {};
}

export const MsgSubmitValidationResponse: MessageFns<MsgSubmitValidationResponse> = {
  encode(_: MsgSubmitValidationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitValidationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitValidationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitValidationResponse {
    return {};
  },

  toJSON(_: MsgSubmitValidationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitValidationResponse>, I>>(base?: I): MsgSubmitValidationResponse {
    return MsgSubmitValidationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitValidationResponse>, I>>(_: I): MsgSubmitValidationResponse {
    const message = createBaseMsgSubmitValidationResponse();
    return message;
  },
};

function createBaseMsgSubmitSolution(): MsgSubmitSolution {
  return { creator: "", taskId: "", threadId: "", cid: "" };
}

export const MsgSubmitSolution: MessageFns<MsgSubmitSolution> = {
  encode(message: MsgSubmitSolution, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskId !== "") {
      writer.uint32(18).string(message.taskId);
    }
    if (message.threadId !== "") {
      writer.uint32(26).string(message.threadId);
    }
    if (message.cid !== "") {
      writer.uint32(34).string(message.cid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitSolution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.taskId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.threadId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.cid = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitSolution {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
      threadId: isSet(object.threadId) ? globalThis.String(object.threadId) : "",
      cid: isSet(object.cid) ? globalThis.String(object.cid) : "",
    };
  },

  toJSON(message: MsgSubmitSolution): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.threadId !== "") {
      obj.threadId = message.threadId;
    }
    if (message.cid !== "") {
      obj.cid = message.cid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitSolution>, I>>(base?: I): MsgSubmitSolution {
    return MsgSubmitSolution.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitSolution>, I>>(object: I): MsgSubmitSolution {
    const message = createBaseMsgSubmitSolution();
    message.creator = object.creator ?? "";
    message.taskId = object.taskId ?? "";
    message.threadId = object.threadId ?? "";
    message.cid = object.cid ?? "";
    return message;
  },
};

function createBaseMsgSubmitSolutionResponse(): MsgSubmitSolutionResponse {
  return {};
}

export const MsgSubmitSolutionResponse: MessageFns<MsgSubmitSolutionResponse> = {
  encode(_: MsgSubmitSolutionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitSolutionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitSolutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitSolutionResponse {
    return {};
  },

  toJSON(_: MsgSubmitSolutionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitSolutionResponse>, I>>(base?: I): MsgSubmitSolutionResponse {
    return MsgSubmitSolutionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitSolutionResponse>, I>>(_: I): MsgSubmitSolutionResponse {
    const message = createBaseMsgSubmitSolutionResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** CreateGame create a game. */
  CreateVideoRenderingTask(request: MsgCreateVideoRenderingTask): Promise<MsgCreateVideoRenderingTaskResponse>;
  /** Adds a new worker */
  AddWorker(request: MsgAddWorker): Promise<MsgAddWorkerResponse>;
  SubscribeWorkerToTask(request: MsgSubscribeWorkerToTask): Promise<MsgSubscribeWorkerToTaskResponse>;
  /** Propose a solution for the test of the nodes to validate */
  ProposeSolution(request: MsgProposeSolution): Promise<MsgProposeSolutionResponse>;
  /** Propose a solution for the test of the nodes to validate */
  SubmitValidation(request: MsgSubmitValidation): Promise<MsgSubmitValidationResponse>;
  /** Submits the solution to IPFS */
  SubmitSolution(request: MsgSubmitSolution): Promise<MsgSubmitSolutionResponse>;
}

export const MsgServiceName = "janction.videoRendering.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateVideoRenderingTask = this.CreateVideoRenderingTask.bind(this);
    this.AddWorker = this.AddWorker.bind(this);
    this.SubscribeWorkerToTask = this.SubscribeWorkerToTask.bind(this);
    this.ProposeSolution = this.ProposeSolution.bind(this);
    this.SubmitValidation = this.SubmitValidation.bind(this);
    this.SubmitSolution = this.SubmitSolution.bind(this);
  }
  CreateVideoRenderingTask(request: MsgCreateVideoRenderingTask): Promise<MsgCreateVideoRenderingTaskResponse> {
    const data = MsgCreateVideoRenderingTask.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateVideoRenderingTask", data);
    return promise.then((data) => MsgCreateVideoRenderingTaskResponse.decode(new BinaryReader(data)));
  }

  AddWorker(request: MsgAddWorker): Promise<MsgAddWorkerResponse> {
    const data = MsgAddWorker.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddWorker", data);
    return promise.then((data) => MsgAddWorkerResponse.decode(new BinaryReader(data)));
  }

  SubscribeWorkerToTask(request: MsgSubscribeWorkerToTask): Promise<MsgSubscribeWorkerToTaskResponse> {
    const data = MsgSubscribeWorkerToTask.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubscribeWorkerToTask", data);
    return promise.then((data) => MsgSubscribeWorkerToTaskResponse.decode(new BinaryReader(data)));
  }

  ProposeSolution(request: MsgProposeSolution): Promise<MsgProposeSolutionResponse> {
    const data = MsgProposeSolution.encode(request).finish();
    const promise = this.rpc.request(this.service, "ProposeSolution", data);
    return promise.then((data) => MsgProposeSolutionResponse.decode(new BinaryReader(data)));
  }

  SubmitValidation(request: MsgSubmitValidation): Promise<MsgSubmitValidationResponse> {
    const data = MsgSubmitValidation.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitValidation", data);
    return promise.then((data) => MsgSubmitValidationResponse.decode(new BinaryReader(data)));
  }

  SubmitSolution(request: MsgSubmitSolution): Promise<MsgSubmitSolutionResponse> {
    const data = MsgSubmitSolution.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitSolution", data);
    return promise.then((data) => MsgSubmitSolutionResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
