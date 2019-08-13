import { Component } from "@angular/core";


@Component({
  moduleId: module.id,
  selector: "about",
  templateUrl: "about.html",
})
export class AboutComponent  {
    firstName: string;
    surName: string;

    constructor(){
      this.firstName = "Ferhat";
      this.surName =  "Ucar";
    }
}
