import * as models from '../models/models';

export class ProcessModel  {

    /** Abbot Process */
    processId : string;
    processType : string;
    createdate: Date;
    description : string;
    last
    name : string;
    processStatus : string;
    
    version : string;
   
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

