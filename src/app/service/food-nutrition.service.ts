import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FoodNutritionResource} from '../resource/food-nutrition-resource';
import {NutritionItem} from '../models/nutrition-item';

@Injectable({
    providedIn: 'root'
})
export class FoodNutritionService {

    constructor(private nutritionResource: FoodNutritionResource) {
    }

    get(barcode: string): Observable<NutritionItem> {
        return this.nutritionResource.getItem(undefined, undefined, {barcode});
    }


}
