import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, flatMap, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FoodNutritionService} from '../../../../service/food-nutrition.service';
import {loadNutritionItem, loadNutritionItemFail, loadNutritionItemSuccess} from '../actions/nutrition-item.actions';
//import { Toast } from '@ionic-native/toast/ngx';
//import {ToastrService} from 'ngx-toastr';

@Injectable()
export class NutritionItemEffects {
    constructor(private actions$: Actions, private nutritionService: FoodNutritionService) {
    }

    loadNutritionItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadNutritionItem),
            switchMap(({barcode}) => {
                console.log('effect');
                console.log(barcode);
                return this.nutritionService.get(barcode).pipe(
                    map(response => loadNutritionItemSuccess({data: response})),
                    catchError(error => {
                        //this.toast.show('Product not found.', '5000', 'center').subscribe(a => console.log(a)); // todo
                        //this.toastr.error('Product not found.');
                        return of(loadNutritionItemFail({error}));
                    })
                );
            })
        )
    );

}
