import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {Observable} from 'rxjs';
import {
    getNutritionItemLoadedSelector,
    getNutritionItemLoadingSelector,
    getNutritionItemSelector
} from '../../store/selectors/nutrition-item.selectors';
import {NutritionForm} from '../../../../models/nutrition-form';
import {NutritionItem} from '../../../../models/nutrition-item';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

    item$: Observable<NutritionItem>;
    loading$: Observable<boolean>;
    loaded$: Observable<boolean>;

    constructor(
        private store: Store<NutritionItemState>,
        private router: Router,
        private deviceService: DeviceDetectorService
    ) {
        this.item$ = this.store.select(getNutritionItemSelector);
        this.loading$ = this.store.select(getNutritionItemLoadingSelector);
        this.loaded$ = this.store.select(getNutritionItemLoadedSelector);
    }

    ngOnInit() {
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
