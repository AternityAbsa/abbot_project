import * as models from '../models/models';
import { AbbotKeyStore } from './AbbotKeyStore';
import { AbbotWorkQueue } from './AbbotWorkQueue';
import { AbbotResource } from './AbbotResource';
import { AbbotResourceGroup } from './AbbotResourceGroup';

export class AbbotWorkQueueItem  {
    queueIdEnt : number;
    keyValue : string;
    status: string;
    attempt: number;
    targetSessions: number;
    loaded: Date;
    completed: Date;
    exception: Date;
    exceptionReason: string;
    data: string;
    deferred: Date ;
    finished: Date;
    workTime: number;
    sessionId: number;
    priority: number;
    prevWorkTime: number;
    attemptWorkTime: number;
    exceptionReasonVarchar: string;
    exceptionReasonTag: string;
    abbotKeyStore: AbbotKeyStore;
    processName: string;
    queue: AbbotWorkQueue;
    resource: AbbotResource;
    resourceGroup: AbbotResourceGroup;
}

