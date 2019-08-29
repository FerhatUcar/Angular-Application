import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateModule } from '../../../modules/validator.module';
import { Component, Injectable } from '@angular/core';


@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'input-validate',
  templateUrl: '../records.html'
})

@Injectable()
export class InputErrorComponent {
  controls = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    street: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    number: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  matcher = new MyErrorStateModule();
}
