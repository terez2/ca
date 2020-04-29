import {Action, createReducer, on} from '@ngrx/store';
import {loadNutritionItem, loadNutritionItemFail, loadNutritionItemSuccess} from '../actions/nutrition-item.actions';
import {NutritionItem} from '../../../../models/nutrition-item';

export const nutritionItemFeatureKey = 'nutritionItem';

export interface NutritionItemState {
    item: NutritionItem;
    loading: boolean;
    loaded: boolean;
}

export const initialState: NutritionItemState = {
    item: undefined,
    loading: false,
    loaded: false,
};

const _nutritionItemReducer = createReducer(
    initialState,
    on(loadNutritionItem, (state) => load(state)),
    on(loadNutritionItemSuccess, (state, {data}) => loadSuccess(state, data)),
    on(loadNutritionItemFail, (state, {error}) => loadFail(state, error))
);

export function nutritionItemReducer(state: NutritionItemState | undefined, action: Action) {
    return _nutritionItemReducer(state, action);
}

function loadSuccess(state: NutritionItemState, data: NutritionItem): NutritionItemState {
    console.log('load success', {
        ...state,
        item: data,
        loading: false,
        loaded: true,
    });
    return {
        ...state,
        item: data,
        loading: false,
        loaded: true,
    };
}

function loadFail(state: NutritionItemState, error): NutritionItemState {
    console.log('load fail');
    console.log(error);
    console.log('state');
    return {
        ...state,
        loading: false,
        loaded: true,
        item: undefined
    };
}

function load(state: NutritionItemState): NutritionItemState {
    console.log('load', state);
    return {
        ...state,
        loading: true,
    };
}


export const getNutritionItem = (state: NutritionItemState) => {
    console.log(state);
    console.log(state.item);
    return state.item;
};
