import { Component, ViewChild } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormGroupDirective
} from '@angular/forms';
import { MyErrorStateModule } from '../../validator.module';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'records.html'
})

export class InputErrorComponent {
  controls = {
    name: new FormControl('',[Validators.required]),
    street: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    code: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
  };
  matcher = new MyErrorStateModule();
}

interface contactTypes {
  name: string;
  street: string;
  number: number;
  code: string;
  city: string;
}

class Contact implements contactTypes {
  public name: string;
  public street: string;
  public number: number;
  public code: string;
  public city: string;


  constructor(ct: contactTypes) {
    ct.name = '';
    ct.street = '';
    ct.code = '';
    ct.city = '';
  }
}

export class RecordsComponent extends InputErrorComponent {
  @ViewChild(FormGroupDirective, null) form: any;
  private newContactForm: FormGroup;
  private records: any;

  constructor() {
    super();
    this.records = [{
      name: 'Kezban Ucar',
      street: 'Matenaspad',
      number: 65,
      code: '3311ZL',
      city: 'Dordrecht'
    }];
    this.newContactForm = new FormGroup(this.controls);
  }

  pushRecord = () => {
    if (this.form.valid) {
      this.records.push(this.form.value);
      this.form.resetForm();
    }
  };

  removeRecord = (index: any) => {
    this.records.splice(index, 1);
  }
}
