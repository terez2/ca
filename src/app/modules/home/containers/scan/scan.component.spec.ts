import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {ScanComponent} from './scan.component';
import {setupContainer, TestContainerContext} from '../../../../global/test-contexts/test-container-context.spec';
import {StoreModuleEnum} from '../../../../global/store/initial-module-states';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {DeviceDetectorService} from 'ngx-device-detector';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Router, RouteReuseStrategy, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ResourceModule} from '@ngx-resource/core';
import {HomeRoutingModule} from '../../home-routing.module';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {checkDispatchAction} from '../../../../global/test-contexts/test-helper.spec';

describe('ScanComponent', () => {
    let componentContext: TestContainerContext<ScanComponent, NutritionItemState>;

    setupContainer();

    beforeEach(function(this: TestContainerContext<ScanComponent, NutritionItemState>) {
        this.create(
            ScanComponent,
            [StoreModuleEnum.APPLICATION_MODULE],
            [IonicModule.forRoot(), ZXingScannerModule, RouterModule.forRoot([]), ResourceModule.forChild(), CommonModule],
            [ScanComponent],
            [DeviceDetectorService, BarcodeScanner]
        );
        componentContext = this;
    });

    it('should create', () => {
        expect(componentContext.component).toBeTruthy();
    });

    it('should dispatch action - scanSuccessOnDesktop', () => {
        checkDispatchAction(
            componentContext.fixture,
            componentContext.store,
            'scanSuccessOnDesktop',
            loadNutritionItem({barcode: '0'}),
            '0'
        );
    });
});
