import { Component, ViewChild } from '@angular/core';
import { CsvService } from './csv.service';


@Component({
  moduleId: module.id,
  // tslint:disable-next-line:component-selector
  selector: 'csv-block',
  templateUrl: 'csv.html'
})
export class CsvComponent {
  public records: any[] = [];
  public filterText = 'Filter on issue count';

  constructor(private csvService: CsvService) {}

  @ViewChild('csv', { static: true }) csvReader: any;
  public csvFile($event: any): void {
    // get the csv file
    const files = $event.target.files;

    // check if file exist and if it is a csv file
    if (files.length > 0 && files[0].name.endsWith('.csv')) {
      const reader = new FileReader();
      reader.readAsText($event.target.files[0]);
      reader.onload = () => {
        const csvData = reader.result as string;
        const csvRow = csvData.split(/\r\n|\n/);
        const headers = csvRow[0].split(',');
        this.records =
          this.csvService.getRows(
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
    document.getElementById('file-upload').click();
  }
}
