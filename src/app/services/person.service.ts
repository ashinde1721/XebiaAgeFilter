import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { persons } from '../models/person';


@Injectable()
export class PersonService implements OnInit {


    constructor() { }

    ngOnInit() {
    }


    personList() {
        return Observable.create((observer) => {
            observer.next(persons);
        });
    }

}
