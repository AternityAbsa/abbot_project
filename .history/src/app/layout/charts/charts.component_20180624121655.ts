import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import { DataLoadService } from '../../services/DataLoadService';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/BlueprismModel';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {


    constructor(private service : , private dataLoad : DataLoadService,
        private dataModel : BlueprismModel) {
        }

    ngOnInit() {}
}
