/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowStartComponent } from './how-start.component';

describe('HowStartComponent', () => {
  let component: HowStartComponent;
  let fixture: ComponentFixture<HowStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
