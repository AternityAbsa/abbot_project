import * as models from './models';
import { AbbotAction } from './AbbotAction';
import { AbbotProcessStep } from './AbbotProcessStep';
import { AbbotElementType } from './AbbotElementType';

export class AbbotProcess  {
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
    value: string;
    action: AbbotAction;
    processSteps: AbbotProcessStep;
    elementType: AbbotElementType;
}

