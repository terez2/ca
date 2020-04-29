import { IonicModule } from '@ionic/angular';

import { SearchComponent } from './search.component';
import {setupContainer, TestContainerContext} from '../../../../global/test-contexts/test-container-context.spec';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {StoreModuleEnum} from '../../../../global/store/initial-module-states';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {RouterModule} from '@angular/router';
import {ResourceModule} from '@ngx-resource/core';
import {CommonModule} from '@angular/common';
import {NutritionItemComponent} from '../../components/nutrition-item/nutrition-item.component';
import {DeviceDetectorService} from 'ngx-device-detector';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {SearchFormComponent} from '../../components/search-form/search-form.component';
import {ItemDetailComponent} from '../../components/item-detail/item-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {GridRowComponent} from '../../components/grid-row/grid-row.component';
import {checkDispatchAction} from '../../../../global/test-contexts/test-helper.spec';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {NutritionForm} from '../../../../models/nutrition-form';

describe('SearchComponent', () => {
  let componentContext: TestContainerContext<SearchComponent, NutritionItemState>;

  setupContainer();

  beforeEach(function(this: TestContainerContext<SearchComponent, NutritionItemState>) {
    this.create(
        SearchComponent,
        [StoreModuleEnum.APPLICATION_MODULE],
        [IonicModule.forRoot(), ZXingScannerModule, RouterModule.forRoot([]),  ResourceModule.forChild(), CommonModule, ReactiveFormsModule],
        [SearchComponent, NutritionItemComponent, SearchFormComponent, ItemDetailComponent, GridRowComponent],
        [DeviceDetectorService, BarcodeScanner]
    );
    componentContext = this;
  });

  it('should create', () => {
    expect(componentContext.component).toBeTruthy();
  });

  it('should dispatch action - search', () => {
    checkDispatchAction(
        componentContext.fixture,
        componentContext.store,
        'search',
        loadNutritionItem({barcode: '0'}),
        {
          barcode: '0'
        } as NutritionForm
    );
  });
});
