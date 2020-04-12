import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadNutritionItem} from '../../store/actions/nutrition-item.actions';
import {Observable} from 'rxjs';
import {getNutritionItemSelector} from '../../store/selectors/nutrition-item.selectors';
import {NutritionForm} from '../../../../models/nutrition-form';
import {NutritionItemResponse} from '../../../../models/nutrition-item-response';
import {NutritionItemState} from '../../store/reducers/nutrition-item.reducer';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    item$: Observable<NutritionItemResponse>;

    constructor(private store: Store<NutritionItemState>) {
        this.item$ = this.store.select(getNutritionItemSelector);
        this.item$.subscribe(a => {
            console.log('search item change', a);
        });

    }

    ngOnInit() {
    }

    search(form: NutritionForm) {
        if (form.barcode) {
            this.store.dispatch(loadNutritionItem({barcode: form.barcode}));
        }
    }
}
