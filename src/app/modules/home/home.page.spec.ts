import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {Network} from '@ionic-native/network/ngx';
import { HomePage } from './home.page';
import {setupContainer, TestContainerContext} from '../../global/test-contexts/test-container-context.spec';
import {ScanComponent} from './containers/scan/scan.component';
import {NutritionItemState} from './store/reducers/nutrition-item.reducer';
import {StoreModuleEnum} from '../../global/store/initial-module-states';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {RouterModule} from '@angular/router';
import {ResourceModule} from '@ngx-resource/core';
import {CommonModule} from '@angular/common';
import {NutritionItemComponent} from './components/nutrition-item/nutrition-item.component';
import {DeviceDetectorService} from 'ngx-device-detector';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

describe('HomePage', () => {
  let componentContext: TestContainerContext<HomePage, NutritionItemState>;

  setupContainer();

  beforeEach(function(this: TestContainerContext<HomePage, NutritionItemState>) {
    this.create(
        HomePage,
        [StoreModuleEnum.APPLICATION_MODULE],
        [IonicModule.forRoot(), RouterModule.forRoot([]),  ResourceModule.forChild(), CommonModule],
        [HomePage, NutritionItemComponent],
        [DeviceDetectorService, Network]
    );
    componentContext = this;
  });

  it('should create', () => {
    expect(componentContext.component).toBeTruthy();
  });
});
