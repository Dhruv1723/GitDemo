import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckroutingComponent } from './checkrouting.component';

describe('CheckroutingComponent', () => {
  let component: CheckroutingComponent;
  let fixture: ComponentFixture<CheckroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
