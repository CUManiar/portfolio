import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stringFormat"
})
export class StringFormatPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.replace(/-/g, " ");
  }
}
