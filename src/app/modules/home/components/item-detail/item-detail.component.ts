import {Component, Input, OnInit} from '@angular/core';
import {TimeSpentActivity} from '../../../../models/time-spent-activity';
import {FormBuilder, FormGroup} from '@angular/forms';

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

    form: FormGroup;
    amount = 1;

    constructor(public fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        this.form.get('amount').valueChanges.subscribe(amount => {
            this.amount = amount;
        })
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

    private createForm() {
        this.form = this.fb.group({
            amount: [this.amount]
        });
    }

}
