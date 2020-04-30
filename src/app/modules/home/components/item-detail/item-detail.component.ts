import {Component, Input, OnInit} from '@angular/core';
import {TimeSpentActivity} from '../../../../models/time-spent-activity';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
    @Input() isDesktop: boolean;
    @Input() name: string;
    @Input() imgSrc: string;
    @Input() calories: number;
    @Input() activities: TimeSpentActivity[];
    @Input() ingredients: string;

    constructor() {
    }

    ngOnInit() {
    }

    getDifficulty(): string {
        if (this.calories < 300) {
            return 'EASY';
        } else if (this.calories < 600) {
            return 'MEDIUM';
        } else {
            return 'HARD';
        }
    }

    getClass(): string {
        return this.getDifficulty().toLocaleLowerCase();
    }

}
