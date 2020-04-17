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

@Injectable({
    providedIn: 'root'
})
@ResourceParams({
    url: environment.foodDatabaseUrl,
    pathPrefix: '/product'
})
export class FoodNutritionResource extends BaseSecuredResource {
    constructor(handler: ResourceHandler) {
        super(handler);
    }

    @ResourceAction({
        method: ResourceRequestMethod.Get,
        path: '/{!barcode}'
    })
    getItem: IResourceMethodObservableStrict<undefined, undefined, { barcode: string }, any>;

}
