import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges } from '@angular/core';


@Component({
    selector: 'tablePagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent{
    @Input() total: number;
    @Input() perPageItems: number;
    @Output() pageChanged = new EventEmitter();
    flag: boolean = false;
    constructor() {

    }

    ngOnChanges(changes: SimpleChanges) {
        this.flag = false;
        setTimeout(() =>{
            this.flag = true;
        },0)
    }

    pageSwitch($event: any): void {
        this.pageChanged.emit($event);
    }
}

