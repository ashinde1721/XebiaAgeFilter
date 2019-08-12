import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { IPersonList, persons } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';


@Component({
    selector: 'age',
    templateUrl: './age.component.html'
})
export class AgeComponent implements OnInit {
    contentArray: IPersonList = persons;
    persons: any[] = [];
    selectedDrop = null;
    filterbelow20Applied : boolean = false;
    filter20to40Applied : boolean = false;
    filter40to60Applied : boolean = false;
    filter60to80Applied : boolean = false;
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
    ageSortEnable: boolean = false;
    idSortEnable: boolean = false;
    
    constructor(private _personService: PersonService) {

    }

    ngOnInit(): void {
        this.selectedDrop = this.orderList[0];
        this.persons = this.contentArray.data;
        this.personsLength = this.persons.length;
        this.getPersons();
    }

    getPersons() {
        this._personService.personList().subscribe(data => {
            this.contentArray = data;
            this.persons = this.contentArray.data;
            this.personsLength = this.persons.length;
            this.displayPersons();
        });
    }


    displayPersons() {
        this.personsLength = 0;
        // checking filter and swithcing personsdata
        if(this.tempFilteredData.length) {
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
        // checking filter and swithcing row data on page size change
        if(this.tempFilteredData.length) {
            this.persons = this.tempFilteredData.slice(this.startItem, this.endItem);
            this.personsLength = this.tempFilteredData.length;
        } else {
            this.persons = this.contentArray.data.slice(this.startItem, this.endItem);
            this.personsLength = this.contentArray.data.length;
        }
    }

    editPerson(id) {
        // need to implement 
    }

    orderBy(order) {
        this.selectedDrop = order;
    }
    
    ageToggle() {
        this.ageSortEnable = true;
        this.idSortEnable = false;
        this.ageFilter = !this.ageFilter;
        this.ageFilter ? this.orderBy(this.orderList[2]) : this.orderBy(this.orderList[3]);
    }

    idToggle() {
        this.ageSortEnable = false;
        this.idSortEnable = true;
        this.idFilter = !this.idFilter;
        this.idFilter ? this.orderBy(this.orderList[0]) : this.orderBy(this.orderList[1]);
    }

    filterByAgeRange(event) {
        if(!this[event.filter]) {
            if (this.contentArray.data.length > 0) {
                this.persons = [];
                this[event.filter] = true;
                this.ageRange.push({min: event.min , max:event.max, description: event.description, filter: event.filter})
                this.persons = this.peopleRange(this.contentArray.data);
                this.tempFilteredData = this.persons;
                this.displayPersons();
            }
        }    
    }
    
    removeFilter(index: number) {
        let str:string = this.ageRange[index].filter;
        this.ageRange.splice(index, 1);
        this[str] = false;
        this.persons = this.peopleRange(this.contentArray.data);
        this.tempFilteredData = this.persons;
        this.personsLength = this.persons.length;
        this.displayPersons();
    }

    peopleRange = (collection) => {
        const results = [];
        if(this.ageRange.length) {
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

    
}
