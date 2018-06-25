import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import {ProcessesService} from '../../services/ProcessesServices';
import 'rxjs/add/operator/map';
import { ProcessModel } from '../../models/ProcessModel';
import { Observable } from 'rxjs/Observable'; 

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {


    constructor(private processService : ProcessesService, private processModel : ProcessModel) {
        }

        loadProcesses(): Observable<any>[]{
            this.processService.getAbBotProcesses().subscribe(
                processes => {
                this.processModel.processId = processes['value'].map(processes => processes.processId);
                this.processModel.processName = processes['value'].map(processes => processes.Name);
                this.processModel.processStatus = processes['value'].map(processes => processes.UXI);
            
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
