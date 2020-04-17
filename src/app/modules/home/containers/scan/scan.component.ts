import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {Store} from '@ngrx/store';
import {getNutritionItemLoadingSelector, getNutritionItemSelector} from '../../store/selectors/nutrition-item.selectors';
import {NutritionItemResponse} from '../../../../models/nutrition-item-response';
import {Observable} from 'rxjs';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {ActivityComponent} from '../../components/activity/activity.component';
import {ModalController} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.scss'],
})
export class ScanComponent implements OnInit {

    item$: Observable<NutritionItemResponse>;
    barcode: string;
    isModalClosed = true;
    isMobileOrTablet = true;
    loading$: Observable<boolean>;

    constructor(private deviceService: DeviceDetectorService, private barcodeScanner: BarcodeScanner, private store: Store<NutritionItemState>, private modalController: ModalController) {
        this.isMobileOrTablet = this.deviceService.isMobile() || this.deviceService.isTablet();

        this.item$ = this.store.select(getNutritionItemSelector);
        this.item$.subscribe(value => {
            console.log('subscribe', value);
            if (value && this.isModalClosed && !this.isMobileOrTablet) { // todo: should found
                this.presentModal();
            }
        });
        this.loading$ = this.store.select(getNutritionItemLoadingSelector);
    }

    ngOnInit() {
    }

    scanSuccessHandler(code: string) {
        if (!this.isMobileOrTablet) {
            this.store.dispatch(loadNutritionItem({barcode: code}));
        }
    }

    scanOnDevice() {
        this.barcodeScanner.scan().then(barcodeData => {
            if (barcodeData && barcodeData.text) {
                this.barcode = barcodeData.text;
                this.store.dispatch(loadNutritionItem({barcode: barcodeData.text}));
            }
        }).catch(err => {
            console.log('Error', err);
        });
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ActivityComponent,
            componentProps: {
                activityHours: '1',
                activityType: 'running',
            }
        });
        modal.onDidDismiss().then(_ => {
            this.isModalClosed = true;
        });
        this.isModalClosed = false;
        return await modal.present();
    }
}
