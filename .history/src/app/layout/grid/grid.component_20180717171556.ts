import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TreeNode } from 'primeng/primeng';
import {ConfirmationService} from 'primeng/api';
import { Subject } from 'rxjs/Subject';
import { ControlRoomService } from '../../services/ControlRoomService';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    resources: any [] = [];
    processes: any [] = [];
    queueItems: any [] = [];
    files: TreeNode[] = [];
    showConfirm: boolean =false;
    results: Object;
    searchTerm$ = new Subject<string>();
    color:string = 'red';

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

envelope(event: MouseEvent) {
  this.color = event.type == 'mouseover' ? 'yellow' : 'red';
}

}
