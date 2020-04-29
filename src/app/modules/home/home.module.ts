import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomeRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';
import {ScanComponent} from './containers/scan/scan.component';
import {SearchComponent} from './containers/search/search.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {nutritionItemFeatureKey} from './store/reducers/nutrition-item.reducer';
import {reducers} from './store/reducers';
import {effects} from './store/effects';
import {ResourceModule} from '@ngx-resource/core';
import {NutritionItemComponent} from './components/nutrition-item/nutrition-item.component';
import {ActivityComponent} from './components/activity/activity.component';
import {Network} from '@ionic-native/network/ngx';
import {NetworkComponent} from './components/network/network.component';
import {ItemDetailComponent} from './components/item-detail/item-detail.component';
import {GridRowComponent} from './components/grid-row/grid-row.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        ZXingScannerModule,
        ResourceModule.forChild(),
        StoreModule.forFeature(nutritionItemFeatureKey, reducers),
        EffectsModule.forFeature(effects),
    ],
    declarations: [
        HomePage,
        ScanComponent,
        SearchComponent,
        SearchFormComponent,
        NutritionItemComponent,
        ActivityComponent,
        NetworkComponent,
        ItemDetailComponent,
        GridRowComponent
    ],
    providers: [Network],
    entryComponents: [
        ActivityComponent
    ]
})
export class HomeModule {
}
