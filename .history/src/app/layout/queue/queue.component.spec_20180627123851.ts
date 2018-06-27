import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuePageComponent } from './queue.component';

describe('BlankPageComponent', () => {
    let component: QueuePageComponent;
    let fixture: ComponentFixture<QueuePageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [QueuePageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(QueuePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
