import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

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

          if(this.selectedValue === 'BDP ABSA'){
           this.loadBdpApi();
           }
           else if(this.selectedValue === 'AZIWE'){
           this.loadAziweApi();
           }
           else if(this.selectedValue === 'ABSA e91'){
            this.loadE91Api();
            }
       }   


    ngOnInit() {}
}
