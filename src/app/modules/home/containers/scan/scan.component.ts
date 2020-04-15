import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';
import {PhotoService} from '../../../../service/photo.service';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {Store} from '@ngrx/store';
import {getNutritionItemSelector} from '../../store/selectors/nutrition-item.selectors';
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
    isMobileOrTablet = false;

    @ViewChild('scanner', {static: false})
    scanner: ZXingScannerComponent;

    constructor(private deviceService: DeviceDetectorService, private barcodeScanner: BarcodeScanner, private store: Store<NutritionItemState>, private modalController: ModalController) {
        this.isMobileOrTablet = this.deviceService.isMobile() || this.deviceService.isTablet();
        if (this.isMobileOrTablet) {
            this.barcodeScanner.scan().then(barcodeData => {
                this.scanSuccessHandler(barcodeData.text);
                console.log('barcode', barcodeData.text);
            }).catch(err => {
                console.log('Error', err);
            });
        }

        this.item$ = this.store.select(getNutritionItemSelector);
        this.item$.subscribe(value => {
            if (value && this.isModalClosed) { // todo: should found
                this.presentModal();
                this.isModalClosed = false;
            }
        });
    }

    ngOnInit() {
    }

    scanSuccessHandler(code: string) {
        this.store.dispatch(loadNutritionItem({barcode: code}));
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
        return await modal.present();
    }
}
