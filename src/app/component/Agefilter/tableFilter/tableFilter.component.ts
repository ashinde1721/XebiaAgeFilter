import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { IPersonList } from 'src/app/models/person';


@Component({
    selector: 'tablefilter',
    templateUrl: './tableFilter.component.html'
})
export class TableFilterComponent implements OnInit{
    @Input() personsData: IPersonList;
    @Output() filterclicked = new EventEmitter();
    @Input() filterbelow20Applied : boolean;
    @Input() filter20to40Applied : boolean;
    @Input() filter40to60Applied : boolean;
    @Input() filter60to80Applied : boolean;
    above_twenty_age: number;
    twenty_to_founrty_age: number;
    fourty_to_sixty_age: number;
    above_sixty_age:number;

    constructor() {
      console.log(this.above_twenty_age);
    }

    ngOnInit() {
      this.above_twenty_age = this.getAgeRangeCount(0,20);
      this.twenty_to_founrty_age = this.getAgeRangeCount(20,40);
      this.fourty_to_sixty_age = this.getAgeRangeCount(40,60);
      this.above_sixty_age = this.getAgeRangeCount(60,150);
    }
    
    filterByAgeRange(minRange: number,maxRange: number, description: string, filter:string) {
      this.filterclicked.emit({min: minRange, max: maxRange, description, filter: filter})
    }

    getAgeRangeCount = (min:number, max:number) => {
        let results = []
        if(this.personsData.data.length) {
            for (let i = 0; i < this.personsData.data.length; i++) {
                const person =  this.personsData.data[i];
                if (person.age >= min && person.age <= max) {
                    results.push(person);
                }
            }
        }
        return results.length;
    }

    
}