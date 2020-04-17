import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FoodNutritionResource} from '../resource/food-nutrition-resource';
import {NutritionItemResponse} from '../models/nutrition-item-response';

@Injectable({
    providedIn: 'root'
})
export class FoodNutritionService {

    constructor(private nutritionResource: FoodNutritionResource) {
    }

    get(barcode: string): Observable<NutritionItemResponse> {
        return this.nutritionResource.getItem(undefined, undefined, {barcode});
    }


}
