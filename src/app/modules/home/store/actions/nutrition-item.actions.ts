import {createAction, props} from '@ngrx/store';
import {NutritionItem} from '../../../../models/nutrition-item';

export enum NutritionItemActions {
    load = '[NutritionItem] Load',
    loadSuccess = '[NutritionItem] Load Success',
    loadFail = '[NutritionItem] Load Fail',
}

export const loadNutritionItem = createAction(
    NutritionItemActions.load,
    props<{ barcode: string }>()
);
export const loadNutritionItemSuccess = createAction(
    NutritionItemActions.loadSuccess,
    props<{ data: NutritionItem }>()
);
export const loadNutritionItemFail = createAction(NutritionItemActions.loadFail, props<{ error: any }>());
