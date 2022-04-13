/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElleNComponent } from './elleN.component';

describe('ElleNComponent', () => {
  let component: ElleNComponent;
  let fixture: ComponentFixture<ElleNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElleNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElleNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
