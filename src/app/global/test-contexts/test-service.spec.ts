import { Type } from '@angular/core';
import {TestServiceContext} from './test-service-context.spec';

export interface ServiceTestModel<Service, Resource> {
  serviceMethodName: string;
  resourceMethodName: Resource[keyof Resource] extends Function ? keyof Resource : never;
  dataForService: any[];
}

function checkServiceCall<Service, Resource>(
  context: TestServiceContext<Service, Resource>,
  serviceMethodName: string,
  resourceMethodName: Resource[keyof Resource] extends Function ? keyof Resource : never,
  dataForService: any[]
) {
  const spy = spyOn(context.resource, resourceMethodName);
  context.service[serviceMethodName](...dataForService);
  expect(spy).toHaveBeenCalled();
}

export function checkServiceCalls<Service, Resource>(
  service: Type<Service>,
  resource: Type<Resource>,
  serviceTestModels: ServiceTestModel<Service, Resource>[]
) {
  describe('test service calls', () => {
    let context: TestServiceContext<Service, Resource>;

    beforeEach(function(this: TestServiceContext<Service, Resource>) {
      this.create(service, resource);
      context = this;
    });

    it('should be created', () => {
      expect(context.service).toBeTruthy();
    });

    serviceTestModels.forEach(serviceTestModel => {
      it(`should call ${serviceTestModel.resourceMethodName} on resource`, () => {
        checkServiceCall<Service, Resource>(
          context,
          serviceTestModel.serviceMethodName,
          serviceTestModel.resourceMethodName,
          serviceTestModel.dataForService
        );
      });
    });
  });
}
