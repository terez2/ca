import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemDetailComponent } from './item-detail.component';
import {setupComponent, TestComponentContext} from '../../../../global/test-contexts/test-component-context.spec';
import {GridRowComponent} from '../item-col/grid-row.component';
import {ReactiveFormsModule} from '@angular/forms';

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


});
