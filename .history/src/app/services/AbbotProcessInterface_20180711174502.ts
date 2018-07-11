export interface AbbotProcessInterface {
  abbotProcessSteps?: (null)[] | null;
  createdBy: CreatedByOrLastModifiedBy;
  description: string;
  lastModifiedBy: CreatedByOrLastModifiedBy;
  name: string;
  processType: string;
  runmode: string;
  sharedObject: number;
  version: string;
}
export interface CreatedByOrLastModifiedBy {
  userid: number;
  authorities?: (string)[] | null;
  abbotUserRole: AbbotUserRole;
}
export interface AbbotUserRole {
  id: number;
}
