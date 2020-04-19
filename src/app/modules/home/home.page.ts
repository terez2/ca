import {Component, OnDestroy, OnInit} from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {ModalController} from '@ionic/angular';
import {NetworkComponent} from './components/network/network.component';
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

    constructor(private deviceService: DeviceDetectorService, private network: Network, private modalController: ModalController) {
        // watch network for a disconnection
        const disconnectSubscription = this.network.onDisconnect().pipe(untilDestroyed(this)).subscribe(() => {
            console.log('network was disconnected :-(');
            if (this.closed) {
                this.presentModal();
            }
        });

        // watch network for a connection
        const connectSubscription = this.network.onConnect().pipe(untilDestroyed(this)).subscribe(() => {
            console.log('network connected!');
            if (!this.closed) {
                this.modalController.dismiss();
            }
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
    }

    ngOnDestroy(): void {
    }

    async presentModal() {
        this.modal = await this.modalController.create({
            component: NetworkComponent
        });
        this.modal.onDidDismiss().then(_ => {
            this.closed = true;
        });
        this.closed = false;
        return await this.modal.present();
    }

    ngOnInit(): void {
        this.isDesktop = this.deviceService.isDesktop();
    }

}
