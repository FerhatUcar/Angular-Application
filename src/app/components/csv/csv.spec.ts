import { CsvComponent } from './csv';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../modules/material.module';
import {RouterModule} from '@angular/router';
import {FilterPipe} from './filters/filter';
import {CsvService} from './csv.service';
import {by, element} from 'protractor';

////////  SPECS  /////////////
describe('CsvComponent', () => {
  let de: DebugElement;
  let comp: CsvComponent;
  let fixture: ComponentFixture<CsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
      ],
      declarations: [
        CsvComponent,
        FilterPipe
      ],
      providers: [
        CsvService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  // it('should have expected <h1> text', () => {
  //   fixture.detectChanges();
  //   const h1 = de.nativeElement;
  //   expect(h1.innerText).toMatch(/angular/i,
  //     '<h1> should say something about "CSV Reader"');
  // });
  //
  // it('should have 4 <th> headers', () => {
  //   fixture.detectChanges();
  //   const th = de.nativeElement;
  //   expect(th).toEqual(4);
  // });
});
