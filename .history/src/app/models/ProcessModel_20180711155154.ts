import * as models from '../models/models';

export class ProcessModel  {

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
    {
        "abbotProcessSteps": [
        ],
        "createdBy": {
          "userid": 1,
          "username": "admin@localhost",
          "password": "$2a$04$8zP.9PGOORRM6JvT2T2BB.3Ql4w6n721m8GfmEE7E7RGN9zRNY8pW",
          "prevPassword": null,
          "validfromdate": "2018-07-04T08:20:06",
          "validtodate": "2018-07-04T08:20:06",
          "passwordexpirydate": "2018-07-04T08:20:06",
          "useremail": "admin@localhost",
          "useEditSummaries": true,
          "preferredStatisticsInterval": "2",
          "saveToolStripPositions": false,
          "passwordDurationWeeks": 5,
          "alertEventTypes": 0,
          "alertNotificationTypes": 0,
          "logViewerHiddenColumns": 0,
          "systemusername": "admin@localhost",
          "loginattempts": 5,
          "lastsignedin": "2018-07-04T08:20:06",
          "authorities": [
            "ROLE_ADMIN"
          ],
          "abbotUserRole": {
            "id": 1
          }
          },
        "description": "string",
        "lastModifiedBy": {
          "userid": 1,
          "username": "admin@localhost",
          "password": "$2a$04$8zP.9PGOORRM6JvT2T2BB.3Ql4w6n721m8GfmEE7E7RGN9zRNY8pW",
          "prevPassword": null,
          "validfromdate": "2018-07-04T08:20:06",
          "validtodate": "2018-07-04T08:20:06",
          "passwordexpirydate": "2018-07-04T08:20:06",
          "useremail": "admin@localhost",
          "useEditSummaries": true,
          "preferredStatisticsInterval": "2",
          "saveToolStripPositions": false,
          "passwordDurationWeeks": 5,
          "alertEventTypes": 0,
          "alertNotificationTypes": 0,
          "logViewerHiddenColumns": 0,
          "systemusername": "admin@localhost",
          "loginattempts": 5,
          "lastsignedin": "2018-07-04T08:20:06",
          "authorities": [
            "ROLE_ADMIN"
          ],
          "abbotUserRole": {
            "id": 1
          }
          },
          "deleted": false
        },
        "name": "muzi",
        "processType": "string",
        "runmode": "string",
        "sharedObject": 0,
        "version": "string"
      }
       : number;
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

