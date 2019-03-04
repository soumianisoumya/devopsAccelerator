import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclOpenshiftComponent } from './accl-openshift.component';

describe('AcclOpenshiftComponent', () => {
  let component: AcclOpenshiftComponent;
  let fixture: ComponentFixture<AcclOpenshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcclOpenshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcclOpenshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
