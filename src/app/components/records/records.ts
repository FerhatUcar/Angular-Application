import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";


// components
import { InputErrorComponent } from "./inputvalidate";


// entities
import { contactTypes } from "./entities/contacttypes.entity";


@Component({
  moduleId: module.id,
  selector: "user",
  templateUrl: "records.html"
})

export class RecordsComponent extends InputErrorComponent implements contactTypes {
  @ViewChild(FormGroupDirective, null) form: any;
  private newContactForm: FormGroup;
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
        name: "Kezban Ucar",
        street: "Matena'spad",
        number: 65,
        code: "3311ZL",
        city: "Dordrecht"
      }
    ];

    // bind controls to variable
    this.newContactForm = new FormGroup(this.controls);
}

  // push record to the output field when valid is true
  public pushRecord = () => {
    if (this.form.valid)
      this.records.push(this.form.value);
      this.form.resetForm();
  };

  // remove the current record from the output field
  public removeRecord = (index: any) => this.records.splice(index, 1);
}
