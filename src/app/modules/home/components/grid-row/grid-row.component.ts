import {Component, Input, OnInit} from '@angular/core';
import {TimeSpentActivity} from '../../../../models/time-spent-activity';
import {PopoverController} from '@ionic/angular';
import {ActivityPopoverComponent} from '../activity-popover/activity-popover.component';

@Component({
    selector: 'app-grid-row',
    templateUrl: './grid-row.component.html',
    styleUrls: ['./grid-row.component.scss'],
})
export class GridRowComponent implements OnInit {
    @Input() activities: TimeSpentActivity[];

    constructor(public popoverController: PopoverController) {}

    async showPopover(event, activity: TimeSpentActivity) {
        const popover = await this.popoverController.create({
            component: ActivityPopoverComponent,
            componentProps: {
                text: activity.name
            },
            event
        });
        await popover.present();
    }

    ngOnInit() {
    }

    getIcon(name: string): string {
        return `assets/${name}.svg`;
    }

    convertTime(hours: number): string {
        const roundHours = Math.floor(hours);
        const minutes = (hours - roundHours) * 60;
        const roundMinutes = Math.round(minutes);
        if(roundHours === 0) return `${roundMinutes}m`;
        return `${roundHours}h ${roundMinutes}m`;
    }

}
