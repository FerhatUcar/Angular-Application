import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';


// components
import { InputErrorComponent } from './common/inputvalidate';


// entities
import { contactTypes } from './entities/contacttypes.entity';


@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'user-records',
  templateUrl: 'records.html'
})

export class RecordsComponent extends InputErrorComponent implements contactTypes {
  @ViewChild(FormGroupDirective, null) form: any;
  private contactForm: FormGroup;
  private records: contactTypes[];

  public name: string;
  public street: string;
  public number: number;
  public code: string;
  public city: string;

  constructor() {
    super();

    // First record filled with dummy data
    // This is displayed on the first load
    this.records = [
      {
        name: 'Kezban Ucar',
        street: 'Matenaspad',
        number: 65,
        code: '3311ZL',
        city: 'Dordrecht'
      }
    ];

    // bind controls to variable
    this.contactForm = this.controls;
  }


  get contactName() {
    return this.contactForm.get('name');
  }

  get contactStreet() {
    return this.contactForm.get('street');
  }

  get contactNumber() {
    return this.contactForm.get('number');
  }

  get contactCode() {
    return this.contactForm.get('code');
  }

  get contactCity() {
    return this.contactForm.get('city');
  }


  // push record to the output field when valid is true
  public pushRecord = (): void => {
    if (this.form.valid) {
      this.records.push(this.form.value);
      this.form.resetForm();
    }

    this.contactForm.setErrors({
      invalidForm: true
    });
  }

  // remove the current record from the output field
  public removeRecord = (index: any) => this.records.splice(index, 1);
}
