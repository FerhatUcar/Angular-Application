import {DataModel} from "./entities/DataModel.entity";
import {Injectable} from "@angular/core";

@Injectable()
export class CsvService {
  public getRows(csvRow: any, headerLength: any): string[] {
    const records = <any>[];

    for (let i = 1; i < csvRow.length; i++) {
      const current: any = csvRow[i].split(',');

      // check if equal to the length of header
      if (current.length == headerLength) {
        const model = new class implements DataModel {
          firstName: string = current[0];
          surName: string = current[1];
          issues: string = current[2];
          date: Date = current[3].split("T")[0];
        };

        // remove white space and quotes
        Object.keys(model).map(i => model[i] = model[i]
          .trim()
          .replace(/"/g,""));

        // push new model to records
        records.push(model);
      }
    }
    return records;
  }
}

