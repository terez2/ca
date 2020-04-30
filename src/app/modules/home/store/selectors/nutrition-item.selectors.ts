import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoreModuleState} from '../reducers';


export const getNutritionItemState = createFeatureSelector<CoreModuleState>('nutritionItem');
export const getNutritionItemSelector = createSelector(
    getNutritionItemState,
    (state: CoreModuleState) => {
        return state.nutritionItem.item;
    }
);
export const getNutritionItemLoadingSelector = createSelector(
    getNutritionItemState,
    (state: CoreModuleState) => {
        return state.nutritionItem.loading;
    }
);
export const getNutritionItemLoadedSelector = createSelector(
    getNutritionItemState,
    (state: CoreModuleState) => {
        return state.nutritionItem.loaded;
    }
);
