import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ItemDetailComponent} from './item-detail.component';
import {setupComponent, TestComponentContext} from '../../../../global/test-contexts/test-component-context.spec';
import {ReactiveFormsModule} from '@angular/forms';
import { GridRowComponent } from '../grid-row/grid-row.component';

describe('ItemDetailComponent', () => {

    let componentContext: TestComponentContext<ItemDetailComponent>;

    setupComponent();

    beforeEach(function(this: TestComponentContext<ItemDetailComponent>) {
        this.create(
            ItemDetailComponent,
            [ReactiveFormsModule, IonicModule.forRoot()],
            [ItemDetailComponent, GridRowComponent]
        );
        componentContext = this;
    });

    it('should create', () => {
        expect(componentContext.component).toBeTruthy();
    });


    it('getDifficulty method should return easy state and class', () => {
        componentContext.component.calories = 2;
        const difficulty = componentContext.component.getDifficulty();
        const class1 = componentContext.component.getClass();

        expect(difficulty).toEqual('EASY');
        expect(class1).toEqual('easy');
    });

    it('getDifficulty method should return medium state and class', () => {
        componentContext.component.calories = 350;
        const difficulty = componentContext.component.getDifficulty();
        const class1 = componentContext.component.getClass();

        expect(difficulty).toEqual('MEDIUM');
        expect(class1).toEqual('medium');
    });

    it('getDifficulty method should return hard state and class', () => {
        componentContext.component.calories = 2000;
        const difficulty = componentContext.component.getDifficulty();
        const class1 = componentContext.component.getClass();

        expect(difficulty).toEqual('HARD');
        expect(class1).toEqual('hard');
    });

});
