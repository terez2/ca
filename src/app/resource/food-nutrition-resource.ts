import {Injectable} from '@angular/core';
import {
    IResourceMethodObservableStrict,
    ResourceAction,
    ResourceHandler,
    ResourceParams,
    ResourceRequestMethod,
} from '@ngx-resource/core';
import {environment} from 'src/environments/environment';
import {BaseResource} from './base-resource';
import {BaseSecuredResource} from './base-secured-resource';
import {NutritionItem} from '../models/nutrition-item';

@Injectable({
    providedIn: 'root'
})
@ResourceParams({
    url: environment.apiUrl,
    pathPrefix: '/items'
})
export class FoodNutritionResource extends BaseResource {
    constructor(handler: ResourceHandler) {
        super(handler);
    }

    @ResourceAction({
        method: ResourceRequestMethod.Get,
        path: '/{!barcode}'
    })
    getItem: IResourceMethodObservableStrict<undefined, undefined, { barcode: string }, NutritionItem>;

}
