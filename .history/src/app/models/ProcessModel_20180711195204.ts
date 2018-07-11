import * as models from '../models/models';

export class ProcessModel  {

    // abbotProcessSteps:{}
    // createdBy: any[];
    // lastModifiedBy: any[];
    // abbotUserRole: number;
    // deleted: boolean;
    // name : string;
    // description : string;
    // processType : string;
    // runmode : string;
    // sharedObject : number;
    // version : string;

   
    abbotProcessSteps?: (null)[] | null;
    createdBy: CreatedByOrLastModifiedBy;
    description: string;
    lastModifiedBy: CreatedByOrLastModifiedBy;
    name: string;
    processType: string;
    runmode: string;
    sharedObject: number;
    version: string;
    processId: number
}

export class CreatedByOrLastModifiedBy {
    userid: number;
    authorities?: (string)[] | null;
    abbotUserRole: AbbotUserRole;
  }
  export class AbbotUserRole {
    id: number;
  }

