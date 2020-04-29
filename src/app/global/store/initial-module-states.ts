import {nutritionItemFeatureKey, nutritionItemReducer, NutritionItemState} from '../../modules/home/store/reducers/nutrition-item.reducer';
import {AppModuleState} from '../../store/reducers';

export const moduleInitialState: AppModuleState = {
  [nutritionItemFeatureKey]: nutritionItemReducer,
};

export enum StoreModuleEnum {
  APPLICATION_MODULE = 'applicationModule',
}

export type StoreModuleType = StoreModuleEnum.APPLICATION_MODULE;
