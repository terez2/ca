import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
    @Input() name = 'Product name';
    @Input() imgSrc = '';
    @Input() calories = 100;
    @Input() composition = '';
    @Input() activities = [
        {id: 1, time: 0.8},
        {id: 2, time: 1},
        {id: 3, time: 1.25},
        {id: 4, time: 1.2648},
        {id: 5, time: 1.44},
        {id: 6, time: 0.54898},
        {id: 7, time: 0.1},
        {id: 8, time: 2.45},
        {id: 9, time: 3.0}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    getActivityTimeNumber(id: number): string {
        if (this.activities) {
            const searchedActivity = this.activities.find(activity => activity.id === id);
            if (searchedActivity) {
                return this.convertTime(searchedActivity.time);
            }
        }
        return '';
    }

    convertTime(hours: number): string {
        const roundHours = Math.floor(hours);
        const minutes = (hours - roundHours) * 60;
        const roundMinutes = Math.round(minutes);
        return `${roundHours}h ${roundMinutes}m`;
    }
}
