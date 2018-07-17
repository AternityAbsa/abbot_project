import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ControlRoomService } from '../../services/ControlRoomService';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ResourceGroupModel } from '../../models/ResourceGroupModel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from '../../layout/layout.component';
import { routerTransition } from './../../router.animations';
import { TreeNode } from 'primeng/primeng';
import {ConfirmationService} from 'primeng/api';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.scss'],
  animations: [routerTransition()],
  providers: [ControlRoomService]
})
export class ControlRoomComponent implements OnInit{
resources: any []= [];
processes: any [] = [];
queueItems: any [] = [];
files: TreeNode[] = [];
showConfirm: boolean=false;
results: Object;
searchTerm$ = new Subject<string>();

constructor(private controlRoomService: ControlRoomService,
            private confirmationService: ConfirmationService) {

 this.controlRoomService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });

  this.controlRoomService.getAllResourceGroups().subscribe( (data: any)=> {
  });

 this.controlRoomService.getAllQueueItems().subscribe( (data: any)=> {
  this.queueItems=data;
  });

  this.controlRoomService.getAllResources().subscribe( (data: any)=> {
     this.resources=data;
    });

   this.controlRoomService.getFiles().then(files => this.files = files);

    this.controlRoomService.getAllProcesses().subscribe( data=> {
      this.processes=data;
    });

}
ngOnInit() {

}

}
