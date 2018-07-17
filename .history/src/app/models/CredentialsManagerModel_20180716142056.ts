import * as models from '../models/models';

export class Crede  {
   
    userId       :               number;
    abbotUserRole:               UserRole;
    alertEventTypes:             number;
    alertNotificationTypes:      number;
    authorities:                 string[];
    loginattempts:               number;
    password:                    string;
    passwordDurationWeeks:       number;
    systemusername:              string;
    useremail:                   string;
    username:                    string;
}

export class UserRole {
    abbotPermission: UserPermission;
    id:              number;
    name:            string;
}

export class UserPermission {
    abbotPermissionGroup: UserPermissionGroup;
    id:                   number;
    name:                 string;
}

export class UserPermissionGroup {
    id:   number;
    name: string;
}


