import {NutritionForm} from '../models/nutrition-form';

export function isNotUndefinedOrEmpty(text: string) {
    return text !== undefined && text.length > 0;
}

export function isNotEmptySearchItem(searchItem: NutritionForm): boolean {
    let result = false;
    if (searchItem) {
        Object.keys(searchItem).forEach(key => {
                result = result || isNotUndefinedOrEmpty(searchItem[key]);
            }
        );
        return result;
    }
    return result;
}
