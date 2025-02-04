import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, flatMap, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FoodNutritionService} from '../../../../service/food-nutrition.service';
import {loadNutritionItem, loadNutritionItemFail, loadNutritionItemSuccess} from '../actions/nutrition-item.actions';

@Injectable()
export class NutritionItemEffects {
    constructor(private actions$: Actions, private nutritionService: FoodNutritionService) {
    }

    loadNutritionItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadNutritionItem),
            switchMap(({param}) => {
                return this.nutritionService.get(param).pipe(
                    map(response => loadNutritionItemSuccess({data: response})),
                    catchError(error => {
                        return of(loadNutritionItemFail({error}));
                    })
                );
            })
        )
    );

}
