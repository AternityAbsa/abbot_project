import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor() {}

    // Actions
    private doughnutChartLabels: string[] = [
        'AVAF',
        'BUSINESS BANKING',
        'CARD',
        'HOME LOANS',
        'BLUEPRISM'
    ];

    ngOnInit() {}
}