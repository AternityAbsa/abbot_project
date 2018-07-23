import * as models from '../models/models';
import { AbbotElementType } from './AbbotElementType';
import { AbbotAction } from './AbbotAction';

export class AbbotProcessStep  {
    id:number;
    elementProperty:string;
    elementValue:string;
    status:string;
    executionOrder:number;
    abbotElementType: AbbotElementType;
    abbotAction: AbbotAction;

}

