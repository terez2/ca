import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Camera} from '@ionic-native/camera/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Device} from '@ionic-native/device/ngx';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {ResourceModule} from '@ngx-resource/core';
import {HttpClientModule} from '@angular/common/http';
import {FoodNutritionResource} from './resource/food-nutrition-resource';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './modules/home/store/reducers';
import {effects} from './modules/home/store/effects';
import {ApiResourceModule} from './api-resource.module';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        DeviceDetectorModule.forRoot(),
        StoreModule.forRoot(reducers, {}),
        EffectsModule.forRoot(effects),
        HttpClientModule,
        ApiResourceModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        BarcodeScanner,
        Device,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
