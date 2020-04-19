import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {Observable} from 'rxjs';
import {getNutritionItemLoadingSelector, getNutritionItemSelector} from '../../store/selectors/nutrition-item.selectors';
import {NutritionForm} from '../../../../models/nutrition-form';
import {NutritionItemResponse} from '../../../../models/nutrition-item-response';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {ModalController} from '@ionic/angular';
import {ActivityComponent} from '../../components/activity/activity.component';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

    item$: Observable<NutritionItemResponse>;
    loading$: Observable<boolean>;

    constructor(
        private store: Store<NutritionItemState>,
        private modalController: ModalController,
        private router: Router,
        private deviceService: DeviceDetectorService
    ) {
        this.item$ = this.store.select(getNutritionItemSelector);
        this.loading$ = this.store.select(getNutritionItemLoadingSelector);
        this.item$.subscribe(a => {
            console.log('search item$ change', a);
        });

    }

    ngOnInit() {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: ActivityComponent,
            componentProps: {
                activityHours: '1',
                activityType: 'running',
            }
        });
        return await modal.present();
    }

    search(form: NutritionForm) {
        if (form.barcode) {
            this.store.dispatch(loadNutritionItem({barcode: form.barcode}));
        }

        // this.store.dispatch(loadNutritionItem({barcode: '8594404009520'}));
    }

    showScanner() {
        this.router.navigate(['/home/scan']);
    }
}
