import { FormControl, Validators } from "@angular/forms";
import { MyErrorStateModule } from "../../validator.module";
import { Component } from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'input-validate',
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
