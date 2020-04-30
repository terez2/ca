import {testAction} from '../../../../global/test-contexts/test-action-context.spec';
import {loadNutritionItem, loadNutritionItemFail, loadNutritionItemSuccess, NutritionItemActions} from './nutrition-item.actions';
import {NutritionItem} from '../../../../models/nutrition-item';

describe('Nutrition Item Actions', () => {
    describe('loadNutritionItem', () => {
        testAction(loadNutritionItem, NutritionItemActions.load, { param: '0' });
    });

    describe('loadNutritionItemSuccess', () => {
        testAction(loadNutritionItemSuccess, NutritionItemActions.loadSuccess, {data: {} as NutritionItem});
    });

    describe('loadNutritionItemFail', () => {
        testAction(loadNutritionItemFail, NutritionItemActions.loadFail, { error: 'error message' });
    });
});
