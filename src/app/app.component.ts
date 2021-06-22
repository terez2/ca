import {Component} from '@angular/core';

import {Platform, ToastController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Network} from '@ionic-native/network/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    navigate: any;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private network: Network,
        public toastController: ToastController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // todo prepare offline mode alert

            // watch network for a disconnection
            // this.network.onDisconnect().subscribe(() => {
            //     console.log('network was disconnected :-(');
            //     this.toastController.create({
            //         message: 'You are appear to be offline. Please try again!.',
            //         // showCloseButton: true
            //     }).then(toast => toast.present);
            // });
            // // watch network for a connection
            // this.network.onConnect().subscribe(() => {
            //     console.log('network connected!');
            // });

            // if (this.network.type === 'none' ) {
            //     this.toastController.create({
            //         message: 'Check your Network connection.Please check your wifi or mobile data',
            //         duration: 3000,
            //     }).then(toast => toast.present());
            // } else {
            //     console.log('Internet Connection is live');
            // }

            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
