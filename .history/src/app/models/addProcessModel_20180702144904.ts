import * as models from '../models/models';

export class AddProcessModel  {

    /** Abbot Process */
    processId : string;
    processType : string;
    processName : string;
    processStatus : string;
    description : string;
    version : string;
    createdate: Date;
    createby : string;
    runmode : number;
    sharedObject : number;
    Value: string;
}