import {IResourceAction, ResourceHandler} from '@ngx-resource/core';
import {BaseResource} from './base-resource';


export abstract class BaseSecuredResource extends BaseResource {
    protected constructor(requestHandler: ResourceHandler) {
        super(requestHandler);
    }

    $getHeaders(actionOptions?: IResourceAction): any | Promise<any> {
        const headers = super.$getHeaders(actionOptions);
        headers['Content-Type'] = 'application/x-www-form-urlencoded';

        return headers;
    }
}
