import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ControlRoomService } from '../../services/ControlRoomService';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ResourceGroupModel } from '../../models/ResourceGroupModel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from '../../layout/layout.component';
import { routerTransition } from './../../router.animations';

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.scss'],
  animations: [routerTransition()]
})
export class ControlRoomComponent implements OnInit{

index: number = 0;
resourceGroups: any [] = [];

constructor(private controlRoomService: ControlRoomService) {
    this.controlRoomService.getAllResourceGroups().subscribe( data=> {
      this.resourceGroups=data;
    });

}

openNext() {
        this.index = (this.index === 2) ? 0 : this.index + 1;
}

openPrev() {
        this.index = (this.index === 0) ? 2 : this.index - 1;
}

ngOnInit() {

}
}
