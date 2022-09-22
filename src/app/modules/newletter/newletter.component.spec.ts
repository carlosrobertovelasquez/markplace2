/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewletterComponent } from './newletter.component';

describe('NewletterComponent', () => {
  let component: NewletterComponent;
  let fixture: ComponentFixture<NewletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
