import { Type } from '@angular/core';
import { configureTestingModule } from 'src/app/global/test-contexts/test-context.spec';
import {ApiResourceModule} from '../../api-resource.module';
import { TestBed } from '@angular/core/testing';

export interface TestServiceContext<Service, Resource> {
  resource: Resource;
  service: Service;
  data: any;

  create(service: Type<Service>, resource: Type<Resource>): void;
}

export function setupService(): void {
  beforeEach(function<Service, Resource>(this: TestServiceContext<Service, Resource>) {
    this.create = (serviceType: Type<Service>, resourceType: Type<Resource>) => {
      configureTestingModule([ApiResourceModule], [], []);
      this.resource = TestBed.get(resourceType);
      this.service = TestBed.get(serviceType);
      this.data = {};
    };
  });
}
