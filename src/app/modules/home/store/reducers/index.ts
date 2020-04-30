import { ActionReducerMap } from '@ngrx/store';
import { nutritionItemReducer, NutritionItemState} from './nutrition-item.reducer';

export interface CoreModuleState {
  nutritionItem: NutritionItemState;
}

export const reducers: ActionReducerMap<CoreModuleState> = {
  nutritionItem: nutritionItemReducer
};
