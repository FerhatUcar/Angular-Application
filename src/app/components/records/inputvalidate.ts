import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateModule } from '../../modules/validator.module';
import { Component, Injectable } from '@angular/core';


@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'input-validate',
  templateUrl: 'records.html'
})

@Injectable()
export class InputErrorComponent {
  controls = {
    name: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  };

  matcher = new MyErrorStateModule();
}
