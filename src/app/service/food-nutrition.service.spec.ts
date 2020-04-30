import {FoodNutritionService} from './food-nutrition.service';
import {checkServiceCalls} from '../global/test-contexts/test-service.spec';
import {setupService} from '../global/test-contexts/test-service-context.spec';
import {FoodNutritionResource} from '../resource/food-nutrition-resource';

describe('FoodNutritionService', () => {
    setupService();

    checkServiceCalls<FoodNutritionService, FoodNutritionResource>(FoodNutritionService, FoodNutritionResource, [
        {serviceMethodName: 'get', resourceMethodName: 'getItem', dataForService: [{id: '0'}]}
    ]);
});
