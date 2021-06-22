import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {Camera} from '@ionic-native/camera/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Device} from '@ionic-native/device/ngx';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './modules/home/store/reducers';
import {effects} from './modules/home/store/effects';
import {CoreModule} from './modules/+core/core.module';
import {SharedModule} from './modules/+shared/shared.module';
import { Network } from '@ionic-native/network/ngx';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        CoreModule,
        SharedModule,
        IonicModule.forRoot(),
        DeviceDetectorModule.forRoot(),
        StoreModule.forRoot(reducers, {}),
        EffectsModule.forRoot(effects),
        HttpClientModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        BarcodeScanner,
        Device,
        Network,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
