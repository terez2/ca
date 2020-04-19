import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {Store} from '@ngrx/store';
import {getNutritionItemLoadingSelector, getNutritionItemSelector} from '../../store/selectors/nutrition-item.selectors';
import {NutritionItemResponse} from '../../../../models/nutrition-item-response';
import {Observable} from 'rxjs';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {ActivityComponent} from '../../components/activity/activity.component';
import {ModalController} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {NavigationEnd, Router} from '@angular/router';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.scss'],
})
export class ScanComponent implements OnInit {

    @ViewChild('scanner', {static: false})
    scanner: ZXingScannerComponent;

    item$: Observable<NutritionItemResponse>;
    isModalClosed = true;
    isDesktop = true;
    loading$: Observable<boolean>;

    constructor(
        private deviceService: DeviceDetectorService,
        private barcodeScanner: BarcodeScanner,
        private store: Store<NutritionItemState>, private modalController: ModalController,
        private router: Router,
    ) {
        this.isDesktop = this.deviceService.isDesktop();

        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && val.url === '/home/scan') {
                this.scanner.reset();
            }
        });

        this.item$ = this.store.select(getNutritionItemSelector);
        this.item$.subscribe(value => {
            if (value && this.isModalClosed && this.isDesktop) { // todo: should found
                this.presentModal();
            }
        });
        this.loading$ = this.store.select(getNutritionItemLoadingSelector);
    }

    ngOnInit() {
    }

    scanSuccessOnDesktop(code: string) {
        if (this.isDesktop) {
            this.store.dispatch(loadNutritionItem({barcode: code}));
        }
    }

    scanOnDevice() {
        this.barcodeScanner.scan().then(barcodeData => {
            if (barcodeData && barcodeData.text) {
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

    back() {
        this.stopDesktopScanner();
        this.router.navigate(['/home/search']);
    }

    stopDesktopScanner() {
        this.scanner.enable = false;
        this.scanner = null;
    }
}
