import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialManagerComponent } from './credential-manager.component';

describe('CredentialManagerComponent', () => {
  let component: CredentialManagerComponent;
  let fixture: ComponentFixture<CredentialManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
