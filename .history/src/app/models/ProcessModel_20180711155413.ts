import * as models from '../models/models';

export class ProcessModel  {

    createdBy: any[];
    lastModifiedBy: any[];
    abbotUserRole: number;
    deleted: 


    /** Abbot Process */
    processId : number;
    processType : string;
    createdDate: Date;
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

