import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclKubeComponent } from './accl-kube.component';

describe('AcclKubeComponent', () => {
  let component: AcclKubeComponent;
  let fixture: ComponentFixture<AcclKubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcclKubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcclKubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
