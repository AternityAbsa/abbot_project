import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePageComponent } from './resource.component';

describe('BlankPageComponent', () => {
    let component: ResourcePageComponent;
    let fixture: ComponentFixture<ResourcePageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [BlankPageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(BlankPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});