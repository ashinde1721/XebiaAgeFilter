import { Component, OnInit, ViewChild } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IPersonList, persons } from '../models/person';
import { PaginationComponent } from './pagination/pagination.component';
import { filter } from 'minimatch';
import { PersonService } from '../services/person.service';

@Component({
    selector: 'age',
    templateUrl: './age.component.html'
})
export class AgeComponent implements OnInit {
    contentArray: IPersonList;
    persons: any[] = [];
    selectedDrop = null;
    above_twenty_age: number;
    twenty_to_founrty_age: number;
    fourty_to_sixty_age: number;
    above_sixty_age: number;
    filterbelow20Applied: boolean = false;
    filter20to40Applied: boolean = false;
    filter40to60Applied: boolean = false;
    filter60to80Applied: boolean = false;


    orderList = [
        { label: 'Id (ascend)', sort: 'asc', key: 'id', value: true },
        { label: 'Id (descend)', sort: 'desc', key: 'id', value: false },
        { label: 'Age (descend)', sort: 'desc', key: 'age', value: true },
        { label: 'Age (descend)', sort: 'desc', key: 'age', value: false }
    ];
    ageFilter: boolean = true;
    idFilter: boolean = true;
    pageSize: number = 10;
    ageRange: any[] = [];
    personsLength: number;
    tempFilteredData: any[] = [];
    startItem: number;
    endItem: number;

    constructor(private _personService: PersonService) {

    }

    ngOnInit(): void {
        this.selectedDrop = this.orderList[0];
        this.getPersons();
    }

    getPersons() {
        this._personService.personList().subscribe(data => {
            this.contentArray = data;
            this.persons = this.contentArray.data;
            this.personsLength = this.persons.length;
            this.above_twenty_age = this.getAgeRangeCount(0, 20);
            this.twenty_to_founrty_age = this.getAgeRangeCount(20, 40);
            this.fourty_to_sixty_age = this.getAgeRangeCount(40, 60);
            this.above_sixty_age = this.getAgeRangeCount(60, 150);
            this.displayPersons();
        });
    }

    displayPersons() {
        this.personsLength = 0;
        if (this.tempFilteredData.length) {
            this.persons = this.tempFilteredData.slice(0, this.pageSize);
            this.personsLength = this.tempFilteredData.length;
        } else {
            this.persons = this.contentArray.data.slice(0, this.pageSize);
            this.personsLength = this.contentArray.data.length;
        }

    }

    pageChanged(event: PageChangedEvent): void {
        this.startItem = (event.page - 1) * this.pageSize;
        this.endItem = event.page * this.pageSize;
        if (this.tempFilteredData.length) {
            this.persons = this.tempFilteredData.slice(this.startItem, this.endItem);
            this.personsLength = this.tempFilteredData.length;
        } else {
            this.persons = this.contentArray.data.slice(this.startItem, this.endItem);
            this.personsLength = this.contentArray.data.length;
        }
    }

    editPerson(id) {

    }

    orderBy(order) {
        this.selectedDrop = order;
    }

    ageToggle() {
        this.ageFilter = !this.ageFilter;
        this.ageFilter ? this.orderBy(this.orderList[2]) : this.orderBy(this.orderList[3]);
    }

    idToggle() {
        this.idFilter = !this.idFilter;
        this.idFilter ? this.orderBy(this.orderList[0]) : this.orderBy(this.orderList[1]);
    }

    filterByAgeRange(minRange: number, maxRange: number, desc: string, filter: string) {
        if (!this[filter]) {
            if (this.contentArray.data.length > 0) {
                this.persons = [];
                this[filter] = true;
                this.ageRange.push({ min: minRange, max: maxRange, description: desc, filter: filter })
                this.persons = this.peopleRange(this.contentArray.data);
                this.tempFilteredData = this.persons;
                this.displayPersons();
            }
        }

    }

    removeFilter(index: number) {
        let str: string = this.ageRange[index].filter;
        this.ageRange.splice(index, 1);
        this[str] = false;
        this.persons = this.peopleRange(this.contentArray.data);
        this.tempFilteredData = this.persons;
        this.personsLength = this.persons.length;
        this.displayPersons();
    }

    peopleRange = (collection) => {
        const results = [];
        if (this.ageRange.length) {
            for (let i = 0; i < collection.length; i++) {
                const person = collection[i];
                this.ageRange.forEach((per) => {
                    if (person.age >= per.min && person.age <= per.max) {
                        results.push(person);
                    }
                });
            }
            return results;
        } else {
            this.tempFilteredData = [];
            return this.contentArray.data;
        }

    }

    getAgeRangeCount = (min: number, max: number) => {
        let results = []
        if (this.contentArray.data.length) {
            for (let i = 0; i < this.contentArray.data.length; i++) {
                const person = this.contentArray.data[i];
                if (person.age >= min && person.age <= max) {
                    results.push(person);
                }
            }
        }
        return results.length;

    }
}
