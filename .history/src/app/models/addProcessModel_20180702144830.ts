import * as models from '../models/models';

export class ProcessModel  {

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

    /** Abbot Action */
    actionId : number;
    actionName : string;
    actionDescription : string;


    /** Abbot process steps */
    stepId: number;
    elementTypeId: number;
    elementProperty : string;
    elementValue : string;
    stepStatus : string;
    executionOrder: number;


    /** abbot element type */
    elementId : number;
    elementName : string;
   
}