import { Component, OnInit, Input ,ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ControlRoomService } from '../../services/ControlRoomService';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AbbotResourceGroup } from '../../models/AbbotResourceGroup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from '../../layout/layout.component';
import { routerTransition } from './../../router.animations';
import { TreeNode } from 'primeng/primeng';
import {ConfirmationService} from 'primeng/api';
import { Subject } from 'rxjs/Subject';
import {FormGroup} from '@angular/forms';
import {AbbotResource} from '../../models/AbbotResource';
import {AbbotProcess} from '../../models/AbbotProcess';
import {AbbotWorkQueueItem} from '../../models/AbbotWorkQueueItem';
import {MatTableDataSource} from '@angular/material';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.scss'],
  animations: [routerTransition()],
  providers: [ControlRoomService]

})
export class ControlRoomComponent implements OnInit{
    @ViewChild('stepper') stepper;
    displayedColumns:any[]=[];
    dataSource:any[]=[];
    rows: new MatTableDataSource<AbbotWorkQueueItem>();
    resources: any[] = [];
    resourceGroups: any[] = [];
    processes: any[] = [];
    queueItems: any[]=[];
    files: TreeNode[] = [];
    showConfirm: boolean=false;
    results: Object;
    searchTerm$ = new Subject<string>();
    color:string = 'red';
    path:any = "src/assets/logo.png";

    constructor(private controlRoomService: ControlRoomService) {

       this.controlRoomService.getAllResourceGroups().subscribe((data: AbbotResourceGroup[])=> {
          this.resourceGroups.push(data);

        });

      this.controlRoomService.getAllQueueItems().subscribe((data: AbbotWorkQueueItem[]) => {
        this.queueItems.push(data);
        this.rows.push(this.queueItems[0]);
        this.displayedColumns = ['position', 'firstName', 'lastName', 'email'];
        this.dataSource = new MatTableDataSource(this.rows)
      });

        this.controlRoomService.getAllResources().subscribe( (data: AbbotResource[])=> {
           this.resources.push(data);

        });

        this.controlRoomService.getAllProcesses().subscribe( (data: AbbotProcess[])=> {
           this.processes.push(data);

        });
    }
    ngOnInit() {}

    drag(event:DragEvent,processName:string) {
    localStorage.setItem('processName', processName);
     }
    allowDrop(event) {
      event.preventDefault();

    }

    drop(event:DragEvent, resourceName:string) {
       confirm('assign process to resource?')
       let processName:string =localStorage.getItem('processName');
       this.createQueueItem(resourceName, processName);
        this.controlRoomService.getAllQueueItems().subscribe( (data: any)=> {
          this.queueItems=data;
        });
    }

    createQueueItem(resourceName:string, processName:string ) {
      this.controlRoomService.createQueueItem(resourceName,processName);
    }
  changeStep(index: number) {
        this.stepper.selectedIndex = index;
    }

}
