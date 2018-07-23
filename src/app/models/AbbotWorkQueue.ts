import * as models from '../models/models';
import { AbbotProcess } from './AbbotProcess';
import { AbbotResourceGroup } from './AbbotResourceGroup';
import { AbbotWorkQueueItem } from './AbbotWorkQueueItem';

export class AbbotWorkQueue  {
    id:number;
    name:string;
    maxAttempts:number;
    idEnt:number;
    targetSessions:number;
    activeLockTime:Date;
    active_lock_name:string;
    encryptId:number;
    abbotProcess: AbbotProcess;
    resourceGroup: AbbotResourceGroup;
    queueItems: Array<AbbotWorkQueueItem>;
}
