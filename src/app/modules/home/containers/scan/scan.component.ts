import {Component, OnInit, ViewChild} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';
import {PhotoService} from '../../../../service/photo.service';

@Component({
    selector: 'app-scan',
    templateUrl: './scan.component.html',
    styleUrls: ['./scan.component.scss'],
})
export class ScanComponent implements OnInit {

    @ViewChild('scanner', {static: false})
    scanner: ZXingScannerComponent;


    constructor(private deviceService: DeviceDetectorService, private photoService: PhotoService) {
        if (this.deviceService.isMobile() || this.deviceService.isTablet()) {
            photoService.scan();
        }

    }

    ngOnInit() {
    }

    scanSuccessHandler(code: any) {
        console.log(code);

    }
}
