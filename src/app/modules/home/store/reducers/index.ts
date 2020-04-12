import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {nutritionItemFeatureKey, nutritionItemReducer, NutritionItemState} from './nutrition-item.reducer';

export interface CoreModuleState {
  nutritionItem: NutritionItemState;
}

export const reducers: ActionReducerMap<CoreModuleState> = {
  nutritionItem: nutritionItemReducer
};
