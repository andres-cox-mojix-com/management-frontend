import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "match" })
export class MatchPipe implements PipeTransform {
  transform(text: string) {
    if (text.includes("Carlos")) {
      var vars = "hola";
      var str = text.replace(text, "<span>ada</span>");
      return str;
    } else {
      return text;
    }
  }
}
