import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IPersonList, persons } from '../models/person';

@Component({
    selector: 'age',
    templateUrl: './age.component.html'
})
export class AgeComponent implements OnInit {
    contentArray: IPersonList = persons;
    persons: any[] = [];
    selectedDrop = null;
    orderList = [
        { label: 'Id (ascend)', sort: 'asc', key: 'id', value: true },
        { label: 'Id (descend)', sort: 'desc', key: 'id', value: false },
        { label: 'Age (descend)', sort: 'desc', key: 'age', value: true },
        { label: 'Age (descend)', sort: 'desc', key: 'age', value: false }
    ];
    ageFilter: boolean = false;
    idFilter: boolean = false;
    pageSize: number = 10;
    ageRange: any[] = [
        { min: 0, max: 20 },
        { min: 21, max: 30 },
    ]

    constructor() {

    }

    ngOnInit(): void {
        this.selectedDrop = this.orderList[1];
        this.displayPersons(10);
    }

    displayPersons(pageSize) {
        this.persons = this.contentArray.data.slice(0, pageSize);
        console.log(this.persons);
    }

    pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.persons = this.contentArray.data.slice(startItem, endItem);
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

    filterByAgeRange() {
        if (this.persons.length > 0) {
            this.persons = this.peopleRange(this.contentArray.data);
        }
    }

    peopleRange = (collection) => {
        const results = [];
        for (let i = 0; i < collection.length; i++) {
            const person = collection[i];
            this.ageRange.forEach((per) => {
                if (person.age >= per.min && person.age <= per.max) {
                    results.push(person);
                }
            });
        }
        return results;
    }

}
