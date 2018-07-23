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
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.scss'],
  animations: [routerTransition()],
  providers: [ControlRoomService]

})
export class ControlRoomComponent implements OnInit{
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['id', 'process name', 'resource name','loaded','status'];
    columnNames = [{
        id: "id",
        value: "id."

      }, {
        id: "processName",
        value: "process name"
      },
      {
        id: "resourceName",
        value: "resource name"
      },
      {
        id: "loaded",
        value: "loaded"
      },
       {
        id: "status",
        value: "status"
      }];
    dataSource: MatTableDataSource<AbbotWorkQueueItem>;
    resources: any[] = [];
    resourceGroups: any[] = [];
    processes: Array<AbbotProcess> = [];
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


        this.controlRoomService.getAllResources().subscribe( (data: AbbotResource[])=> {
           this.resources.push(data);

        });

        this.controlRoomService.getAllProcesses().subscribe( (data: Array<AbbotProcess>)=> {
           this.processes=data;

        });
    }
     ngOnInit() {
        this.displayedColumns = this.columnNames.map(x => x.id);
        this.createTable();
      }

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

 createTable() {
         this.controlRoomService.getAllQueueItems().subscribe((data: AbbotWorkQueueItem[]) => {
         this.queueItems.push(data);
         this.dataSource = new MatTableDataSource(this.queueItems);
         this.dataSource.sort = this.sort;
      });
      }

}
