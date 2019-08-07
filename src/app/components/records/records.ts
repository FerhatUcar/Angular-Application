import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';


// components
import { InputErrorComponent } from "./inputvalidate";


// @ts-ignore
// entities
import { contactTypes } from 'entities/contacttypes.entity';


@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'records.html'
})


export class RecordsComponent extends InputErrorComponent implements contactTypes {
  @ViewChild(FormGroupDirective, null) form: any;
  private newContactForm: FormGroup;
  private records: contactTypes[];

  constructor() {
    super();
    this.records = [
      {
        name: 'Kezban Ucar',
        street: 'Matenaspad',
        number: 65,
        code: '3311ZL',
        city: 'Dordrecht'
      }
    ];
    this.newContactForm = new FormGroup(this.controls);
  }

  public pushRecord = () => {
    if (this.form.valid)
      this.records.push(this.form.value);
      this.form.resetForm();
  };

  public removeRecord = (index: any) => this.records.splice(index, 1);
}
