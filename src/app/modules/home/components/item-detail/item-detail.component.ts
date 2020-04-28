import {Component, Input, OnInit} from '@angular/core';
import {TimeSpentActivity} from '../../../../models/time-spent-activity';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
    @Input() name: string;
    @Input() imgSrc: string;
    @Input() calories: number;
    @Input() activities: TimeSpentActivity[];

    constructor() {
    }

    ngOnInit() {
    }

    getDifficulty(calories: number): string {
        if (calories < 300) {
            return 'EASY';
        } else if (calories < 600) {
            return 'MEDIUM';
        } else {
            return 'HARD';
        }
    }

    getClass(calories: number): string {
        return this.getDifficulty(calories).toLocaleLowerCase();
    }

}
