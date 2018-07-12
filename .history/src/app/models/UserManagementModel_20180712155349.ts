import * as models from '../models/models';

export class UserManagementModel  {
   
        createdBy: CreatedByOrLastModifiedBy;
        departmentId: string;
        lastModifiedBy: CreatedByOrLastModifiedBy;
        systemUsername: string;
        username: string;
        userRoleId: number;
        loginAttemps: number;
        passwordDuration: number;
        userId: number;
    }  
    
    export class CreatedByOrLastModifiedBy {
        userid: number;
        authorities?: (string)[] | null;
        userRole: UserRole;
      }
      export class UserRole {
        id: number;

}

