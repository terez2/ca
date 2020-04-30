import {TimeSpentActivity} from './time-spent-activity';

export interface NutritionItem {
    id: string;
    calories: number;
    name: string;
    image: string;
    ingredients: string;
    activities: TimeSpentActivity[];
}
