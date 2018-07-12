import * as models from '../models/models';

export class UserManagementModel  {
   
        abbotProcessSteps?: (null)[] | null;
        createdBy: CreatedByOrLastModifiedBy;
        department: string;
        lastModifiedBy: CreatedByOrLastModifiedBy;
        systemUsername: string;
        processType: string;
        userRoleId: string;
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
        userRole: UserRole;
      }
      export class UserRole {
        id: number;

}

