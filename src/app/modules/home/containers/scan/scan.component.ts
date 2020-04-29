import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {Store} from '@ngrx/store';
import {getNutritionItemLoadingSelector, getNutritionItemSelector} from '../../store/selectors/nutrition-item.selectors';
import {NutritionItem} from '../../../../models/nutrition-item';
import {fromEvent, Observable} from 'rxjs';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {NavigationEnd, Router} from '@angular/router';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.scss'],
})
export class ScanComponent implements OnInit {
// todo: permissions?

    @ViewChild('scanner', {static: false})
    scanner: ZXingScannerComponent;

    item$: Observable<NutritionItem>;
    isModalClosed = true;
    isDesktop = true;
    loading$: Observable<boolean>;

    constructor(
        private deviceService: DeviceDetectorService,
        private barcodeScanner: BarcodeScanner,
        private store: Store<NutritionItemState>,
        private router: Router,
    ) {
        this.isDesktop = this.deviceService.isDesktop();
        this.initItemSelectors();

        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && val.url === '/home/scan') {
                if (this.scanner && this.isDesktop) {
                    this.scanner.reset();
                }
                if (!this.isDesktop) {
                    this.scanOnDevice();
                }
            }
        });

        const event = fromEvent(document, 'ionBackButton');
        event.subscribe(async () => {
            this.back();
            // todo
        });

    }

    private initItemSelectors() {
        this.item$ = this.store.select(getNutritionItemSelector);
        this.loading$ = this.store.select(getNutritionItemLoadingSelector);
    }

    ngOnInit() {
    }

    scanSuccessOnDesktop(code: string) {
        if (this.isDesktop && code) {
            this.store.dispatch(loadNutritionItem({barcode: code}));
        }
    }

    scanOnDevice() {
        this.barcodeScanner.scan().then(barcodeData => {
            if (barcodeData && barcodeData.text) {
                this.store.dispatch(loadNutritionItem({barcode: barcodeData.text}));
                this.back();
            }
        }).catch(err => {
            console.log('Error', err);
            this.back();
        });
    }


    back() {
        this.stopDesktopScanner();
        this.router.navigate(['/home/search']);
    }

    stopDesktopScanner() {
        if (this.scanner) {
            this.scanner.enable = false;
            this.scanner = null;
        }
    }
}
