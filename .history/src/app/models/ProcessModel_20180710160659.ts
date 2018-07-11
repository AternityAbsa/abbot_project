import * as models from '../models/models';

export class ProcessModel  {

    /** Abbot Process */
    processId : string;
    processType : string;
    createDate: Date;
    description : string;
    lastModifiedDate : Date;
    name : string;
    processStatus : string;
    runmode : string;
    sharedObject : number;
    version : number;
    createdUserId : number;
    lastModifiedByUserId : number;
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

