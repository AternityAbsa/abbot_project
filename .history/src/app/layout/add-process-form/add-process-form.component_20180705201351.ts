import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-process-form',
  templateUrl: './add-process-form.component.html',
  styleUrls: ['./add-process-form.component.scss']
})
export class AddProcessFormComponent implements OnInit {
  myform: FormGroup; 

  private actions: string[] = [
    'Action 1',
    'Action 2',
    'Action 3',
    'Action 4'
   ];

   private elementTypes: string[] = [
    'Element 1',
    'Element 1',
    'Action 3',
    'Action 4'
   ];


  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
          name: new FormGroup({ 
          firstName: new FormControl(), 
          lastName: new FormControl(),
      }),
          email: new FormControl(),
          password: new FormControl(),
          language: new FormControl()
  });
  }

  onSave(){

  }

}



