import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderBy {

  transform(array: any[], orderBy: string, asc: boolean = true) {
    if (!array || array.length == 0) {
      return;
    }
    if (orderBy && orderBy.trim() == "") {
      return array;
    }
    if (orderBy != undefined) {
      array = array.filter(data => (data[orderBy] != null) && (data[orderBy] !== ""));
    }
    else {
      array = array.filter(data => (data != null) && (data != ""));
    }
    //ascending
    if (asc) {
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator((item1[orderBy] != undefined) ? item1[orderBy] : item1, (item2[orderBy] != undefined) ? item2[orderBy] : item2);
      });
    }
    //descending
    else {
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator((item2[orderBy] != undefined) ? item2[orderBy] : item1, (item1[orderBy] != undefined) ? item1[orderBy] : item1);
      });
    }

  }

  orderByComparator(a: any, b: any): number {
    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      //Isn't a number so lowercase the string to properly compare
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
    }
    else {
      //Parse strings as numbers to compare properly
      if (parseFloat(a) < parseFloat(b)) return -1;
      if (parseFloat(a) > parseFloat(b)) return 1;
    }

    return 0; //equal each other
  }
}