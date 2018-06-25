import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class ProcessList {
    constructor(
      public processId: string = '',
      public processName: string = '',
      public status: string = null,
      public timestamp: string = ''
    ) {}
  }

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor() {}

    // Actions
    private actions: string[] = [
        'open app',
        'enter text',
        'submit',
        'edit text',
        'open file'
    ];

    selectedValue : String;
    selectedMachine : String;

    private updateData(event: any){

       this.selectedValue = event.target.value;

        /* DO boilerplate code here for updating actions data **/

       }   


    ngOnInit() {}
}
