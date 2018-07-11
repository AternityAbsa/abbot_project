import * as models from '../models/models';

export class ProcessModel  {

    createdBy: any[];
    lastModifiedBy: any[];
    abbotUserRole: number;
    deleted: boolean;
    name : string;
    description : string;
    processType : string;
    sharedObject : number;




    /** Abbot Process */
    processId : number;
   
    createdDate: Date;
    
    lastModifiedDate : Date;
    
    processStatus : string;
    runmode : string;
    
   
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

