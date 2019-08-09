import { Component, ViewChild } from '@angular/core';
import { CsvService } from "./csv.service";


@Component({
  moduleId: module.id,
  selector: 'csv',
  templateUrl: 'csv.html'
})
export class CsvComponent {
  public records: any[] = [];
  public filterText: string = "Filter on issue count";

  constructor(private _csvService: CsvService){}

  @ViewChild('csv', { static: true }) csvReader: any;
  public csvFile($event: any): void {
    // get the csv file
    const files = $event.target.files;

    // check if file exist and if it is a csv file
    if (files.length > 0 && files[0].name.endsWith(".csv")) {
      const reader = new FileReader();
      reader.readAsText($event.target.files[0]);
      reader.onload = () => {
        const csvData = reader.result;
        const csvRow = (<string>csvData).split(/\r\n|\n/);
        const headers = (<string>csvRow[0]).split(',');
        this.records =
          this._csvService.getRows(
            csvRow,
            headers.length
          );
      };
    } else {
      // or clear records
      this.records = [];
    }
  }

  public openInput(): void {
    document.getElementById("file-upload").click();
  }
}
