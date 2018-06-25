import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {


    constructor(private processService : ProcessesService, private dataModel : ProcessModel) {
        }

        loadProcesses(): Observable<any>[]{
            this.processService.().subscribe(
                blue_applications => {
                this.dataModel.UXI = blue_applications['value'].map(blue_applications => blue_applications.UXI);
                this.dataModel.UXI_WEIGHT = blue_applications['value'].map(blue_applications => blue_applications.UXI_WEIGHT);
                this.dataModel.CRASHES = blue_applications['value'].map(blue_applications => blue_applications.CRASHES);
                this.dataModel.PERFORMANCE_INDEX = blue_applications['value'].map(blue_applications => blue_applications.PERFORMANCE_INDEX);
                this.dataModel.PERFORMANCE_WEIGHT = blue_applications['value'].map(blue_applications => blue_applications.PERFORMANCE_WEIGHT);
                this.dataModel.ACTIVITY_VOLUME = blue_applications['value'].map(blue_applications => blue_applications.ACTIVITY_VOLUME);
                this.dataModel.WAIT_TIME = blue_applications['value'].map(blue_applications => blue_applications.WAIT_TIME);
                this.dataModel.HANG_TIME = blue_applications['value'].map(blue_applications => blue_applications.HANG_TIME);
                this.dataModel.APPLICATION = blue_applications['value'].map(blue_applications => blue_applications.APPLICATION);
                this.dataModel.MACHINE_NAMES = blue_applications['value'].map(blue_applications => blue_applications.SERVING_DEVICE_NAME);
                this.timeframe = blue_applications['value'].map(blue_applications => blue_applications.TIMEFRAME);
                
                this.time_Frame = new Set(this.timeframe);  
                this.appName = new Set(this.dataModel.APPLICATION);
                this.machine_names = new Set(this.dataModel.MACHINE_NAMES);
                while(this.selectedMachine === this.machine_names[0] || this.selectedMachine === this.machine_names[1], this.selectedMachine === this.machine_names[2] ){
                    console.log(this.selectedMachine);
                }
    
                console.log(this.convertToDecimal(this.dataModel.UXI_WEIGHT));
    
                this.barChartLabels = [this.machine_names];
                this.barChartData2 = [
                    { data: this.dataModel.UXI, label: 'Uxi' },               
                    { data: this.dataModel.UXI_WEIGHT, label: 'Uxi Weight' },  
                    { data: this.dataModel.PERFORMANCE_INDEX, label: 'Performance Index' },  
                    { data: this.dataModel.PERFORMANCE_WEIGHT, label: 'Perfomance Weight' }
                ];  
            },
        );
        err => {
            console.log(err);
          }
    

    ngOnInit() {}
}
