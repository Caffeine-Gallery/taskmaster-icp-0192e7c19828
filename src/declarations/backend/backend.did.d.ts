import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'addTask' : ActorMethod<[string], undefined>,
  'deleteTask' : ActorMethod<[bigint], undefined>,
  'getTasks' : ActorMethod<[], Array<[string, boolean]>>,
  'updateTaskStatus' : ActorMethod<[bigint, boolean], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];