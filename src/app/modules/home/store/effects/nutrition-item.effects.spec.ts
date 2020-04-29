import {NutritionItemEffects} from './nutrition-item.effects';
import {setupEffect, testEffect, TestEffectContext, testFailEffect} from '../../../../global/test-contexts/test-effect-context.spec';
import {FoodNutritionService} from '../../../../service/food-nutrition.service';
import {ApiResourceModule} from '../../../../api-resource.module';
import {hot} from 'jasmine-marbles';
import {loadNutritionItem, loadNutritionItemFail, loadNutritionItemSuccess} from '../actions/nutrition-item.actions';
import {NutritionItem} from '../../../../models/nutrition-item';

describe('NutritionItemEffects', () => {
    let context: TestEffectContext<NutritionItemEffects, FoodNutritionService>;

    setupEffect();

    describe('loadCatalogs', () => {
        beforeEach(function(this: TestEffectContext<NutritionItemEffects, FoodNutritionService>) {
            this.create(hot('-a', { a: loadNutritionItem({ barcode: '0' }) }), NutritionItemEffects, FoodNutritionService, [
                ApiResourceModule
            ]);

            context = this;
        });

        it('should return data from loadNutritionItemSuccess', () => {
            testEffect(
                context.service,
                'get',
                context.effects,
                'loadNutritionItem$',
                loadNutritionItemSuccess({ data: {} as NutritionItem }),
                 {} as NutritionItem
            );
        });

        it('should return loadNutritionItemFail in case of error', () => {
            testFailEffect(
                context.service,
                'get',
                context.effects,
                'loadNutritionItem$',
                loadNutritionItemFail({ error: 'test' }),
                'test'
            );
        });
    });
});
