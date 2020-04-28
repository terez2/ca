import {Component, Input, OnInit} from '@angular/core';
import {TimeSpentActivity} from '../../../../models/time-spent-activity';

@Component({
    selector: 'app-grid-row',
    templateUrl: './grid-row.component.html',
    styleUrls: ['./grid-row.component.scss'],
})
export class GridRowComponent implements OnInit {
    @Input() activities: TimeSpentActivity[];

    constructor() {
    }

    getIcon(name: string): string {
        return `assets/${name}.svg`;
    }

    ngOnInit() {
    }

    convertTime(hours: number): string {
        const roundHours = Math.floor(hours);
        const minutes = (hours - roundHours) * 60;
        const roundMinutes = Math.round(minutes);
        return `${roundHours}h ${roundMinutes}m`;
    }

}
