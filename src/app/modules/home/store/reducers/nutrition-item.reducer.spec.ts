import {initialState, nutritionItemReducer} from './nutrition-item.reducer';

describe('NutritionItem Reducer', () => {
    describe('an unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as any;

            const result = nutritionItemReducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
