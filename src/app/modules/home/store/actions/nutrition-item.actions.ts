import {createAction, props} from '@ngrx/store';
import {NutritionItemResponse} from '../../../../models/nutrition-item-response';

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
    props<{ data: NutritionItemResponse }>()
);
export const loadNutritionItemFail = createAction(NutritionItemActions.loadFail, props<{ error: any }>());
