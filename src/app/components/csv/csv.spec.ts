import { CsvComponent } from './csv';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../modules/material.module';
import {RouterModule} from '@angular/router';

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
      declarations: [ CsvComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "CSV Reader"');
  });

  it('should have expected <div class="csv"> div', () => {
    fixture.detectChanges();
    const div = de.nativeElement;
    expect(div).toHaveClass('csv');
  });

  it('should have 4 <th> headers', () => {
    fixture.detectChanges();
    const th = de.nativeElement;
    expect(th).toEqual(4);
  });
});
