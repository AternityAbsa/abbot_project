import * as models from '../models/models';

export class QueuModel  {

    resourceId : string;
    resourceName : string;
    status : string;
    runningProcesses : string;
    runningActions: string;
    unitsAllocated : string;
    pool : string;
    controller: string;
    userName : string;
    fqdn : string;
}