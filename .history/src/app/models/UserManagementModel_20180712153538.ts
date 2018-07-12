import * as models from '../models/models';

export class UserManagementModel  {
   
        abbotProcessSteps?: (null)[] | null;
        createdBy: CreatedByOrLastModifiedBy;
        description: string;
        lastModifiedBy: string;
        systemUsername: string;
        processType: string;
        runmode: string;
        loginAttemps: number;
        passwordDuration: number;
        userId: number;

        this.Value = Value;
            this.userId = userId;
            this.lastModifiedBy = lastModifiedBy;
            this.userRoleId = userRoleId;
            this.createdBy = createdBy;
            this.department = department;
            this.systemUsername = systemUsername;
            this.passwordDuration = passwordDuration;
            this.LoginAttemps = LoginAttemps;
    }  
    
    export class CreatedByOrLastModifiedBy {
        userid: number;
        authorities?: (string)[] | null;
        abbotUserRole: AbbotUserRole;
      }
      export class AbbotUserRole {
        id: number;

}

