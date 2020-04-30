import {IonicModule} from '@ionic/angular';

import {GridRowComponent} from './grid-row.component';
import {setupComponent, TestComponentContext} from '../../../../global/test-contexts/test-component-context.spec';
import {ReactiveFormsModule} from '@angular/forms';

describe('GridRowComponent', () => {

    let componentContext: TestComponentContext<GridRowComponent>;

    setupComponent();

    beforeEach(function(this: TestComponentContext<GridRowComponent>) {
        this.create(
            GridRowComponent,
            [ReactiveFormsModule, IonicModule.forRoot()],
            [GridRowComponent]
        );
        componentContext = this;
    });

    it('should create', () => {
        expect(componentContext.component).toBeTruthy();
    });

    it('getIcon should return icon.svg', () => {
        expect(componentContext.component.getIcon('icon')).toEqual('assets/icon.svg');
    });

    it('convertTime should return ', () => {
        expect(componentContext.component.convertTime(0.5)).toEqual('30m');
    });
});
