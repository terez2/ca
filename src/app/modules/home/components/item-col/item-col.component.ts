import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-item-col',
    templateUrl: './item-col.component.html',
    styleUrls: ['./item-col.component.scss'],
})
export class ItemColComponent implements OnInit {
    iconSrc = '';
    icons = {
        1: 'running',
        2: 'swimming',
        3: 'bicycling',
        4: 'walk',
        5: 'volleyball',
        6: 'hockey',
        7: 'soccer',
        8: 'golf',
        9: 'tennis',
    };

    @Input() time: string;

    @Input() set id(value: number) {
        if (value && value in this.icons) {
            this.iconSrc = `assets/${this.icons[value]}.svg`;
        }

    }

    constructor() {

    }

    ngOnInit() {
    }

}
