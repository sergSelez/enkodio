/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProcessingOgPersonalDataComponent } from './processing-og-personal-data.component';

describe('ProcessingOgPersonalDataComponent', () => {
  let component: ProcessingOgPersonalDataComponent;
  let fixture: ComponentFixture<ProcessingOgPersonalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingOgPersonalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingOgPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
