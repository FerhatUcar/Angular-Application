import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.html',
})
export class AboutComponent  {
    firstname: string;
    lastname: string;

    constructor(){
      this.firstname = 'Ferhat';
      this.lastname =  'Ucar';
    }
}
