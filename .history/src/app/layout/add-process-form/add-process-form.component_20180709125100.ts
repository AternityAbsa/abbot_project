// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';


// @Component({
//   selector: 'app-add-process-form',
//   templateUrl: './add-process-form.component.html',
//   styleUrls: ['./add-process-form.component.scss']
// })
// export class AddProcessFormComponent implements OnInit {
//   myform: FormGroup; 

//   private actions: string[] = [
//     'Action 1',
//     'Action 2',
//     'Action 3',
//     'Action 4'
//    ];

//    private elementTypes: string[] = [
//     'Element 1',
//     'Element 2',
//     'Element 3',
//     'Element 4'
//    ];


//   constructor() { }

//   ngOnInit() {
//     this.myform = new FormGroup({
//           name: new FormGroup({ 
//           firstName: new FormControl(), 
//           lastName: new FormControl(),
//       }),
//           email: new FormControl(),
//           password: new FormControl(),
//           language: new FormControl()
//   });
//   }

//   onSave(){

//   }

// }

import {Component, Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
   selector: 'app-add-process-form',
   templateUrl: './add-process-form.component.html'
})

export class AddProcessFormComponent {

  constructor(private dialogRef: MatDialogRef<AddProcessFormComponent>, @Inject(MAT_DIALOG_DATA) public data : any) {

  }

  public closeDialog(){
    this.dialogRef.close();
  }

}

