import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessFormComponent } from './add-process-form.component';

describe('AddProcessFormComponent', () => {
  let component: AddProcessFormComponent;
  let fixture: ComponentFixture<AddProcessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
