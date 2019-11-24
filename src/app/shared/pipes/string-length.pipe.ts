import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stringLength"
})
export class StringLengthPipe implements PipeTransform {
  transform(value: any, args: any): any {
    const limit = args ? parseInt(args, 10) : 10;
    const trail = "...";

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
