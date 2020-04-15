import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {

    @Input() activityHours: number;
    @Input() activityType: string;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    private getText(): string {
        const time = this.activityHours <= 1 ? 'hour' : 'hours';
        return `You need ${this.activityHours} ${time} of ${this.activityType}.`;
    }

    dismiss() {
        this.modalController.dismiss();
    }

}
