import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ControlRoomService } from '../../services/ControlRoomService';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ResourceGroupModel } from '../../models/ResourceGroupModel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from '../../layout/layout.component';
import { routerTransition } from './../../router.animations';
import { TreeNode } from 'primeng/primeng';




@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.scss'],
  animations: [routerTransition()]
})
export class ControlRoomComponent implements OnInit{
resources: any []= [];
processes: any [] = [];
files: TreeNode[] = [];
constructor(private controlRoomService: ControlRoomService) {

  this.controlRoomService.getAllResourceGroups().subscribe( (data: any)=> {
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

nodeExpand(event: any) {

}
}
