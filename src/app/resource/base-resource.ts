import {
  IResourceActionInner,
  IResourceResponse,
  Resource,
  ResourceHandler
} from '@ngx-resource/core';

export abstract class BaseResource extends Resource {
  constructor(requestHandler: ResourceHandler) {
    super(requestHandler);
  }

  $handleErrorResponse(options: IResourceActionInner, resp: IResourceResponse) {
    return super.$handleErrorResponse(options, resp);
  }
}
