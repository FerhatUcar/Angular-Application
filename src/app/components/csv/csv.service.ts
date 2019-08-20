import { UserInformation } from './entities/UserInformation.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class CsvService {
  public getRows(csvRow: any, headerLength: number) {
    const records: UserInformation[] = [];

    for (let i = 1; i < csvRow.length; i++) {
      const current: any = csvRow[i].split(',');

      // check if equal to the length of header
      if (current.length === headerLength) {
        // tslint:disable-next-line:new-parens
        const model = new class implements UserInformation {
          firstName = current[0];
          surName = current[1];
          issues = current[2];
          date: Date = current[3].split('T')[0];
        };
        // remove white space and quotes
        Object.keys(model).forEach((index) => model[index] = model[index]
          .trim()
          .replace(/"/g, ''));

        // push new model to records
        records.push(model);
      }
    }
    return records;
  }
}

