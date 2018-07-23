import * as models from '../models/models';

export class AbbotResource  {
    resourceId: number;
    name: string;
    status: string;
    processesRunning: number;
    actionsRunning: number;
    unitsAllocated: number;
    attributeID: number;
    pool: string;
    controller: string;
    diagnostics: number;
    logToEventLog: number;
    FQDN: string;
    ssl: number;
}
