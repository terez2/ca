import {createFeatureSelector, createSelector} from '@ngrx/store';
import {getNutritionItem, NutritionItemState} from '../reducers/nutrition-item.reducer';
import {CoreModuleState} from '../reducers';


// todo bug
// export const getNutritionItemState = createFeatureSelector<CoreModuleState, NutritionItemState>('nutritionItem');
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
