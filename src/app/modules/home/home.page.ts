import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy, OnInit {
    modal: any;
    closed: boolean;
    isDesktop = false;

    constructor(private deviceService: DeviceDetectorService) {
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
        this.isDesktop = this.deviceService.isDesktop();
    }

}
