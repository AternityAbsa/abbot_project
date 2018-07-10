import * as models from '../models/models';

export class ProcessModel  {

    /** Abbot Process */
    processId : string;
    processType : string;
    name : string;
    processStatus : string;
    description : string;
    version : string;
    createdate: dat;
    createdBy : string;
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

