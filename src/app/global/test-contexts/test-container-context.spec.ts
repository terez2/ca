import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  moduleInitialState,
  StoreModuleEnum,
  StoreModuleType
} from 'src/app/global/store/initial-module-states';
import { initComponent, releaseMemory } from 'src/app/global/test-contexts/test-context.spec';

export interface TestContainerContext<H, S> {
  fixture: ComponentFixture<H>;
  component: H;
  store: MockStore<S>;
  initialState: any;
  data: any;

  create(
    hostType: Type<H>,
    storeModuleTypes: StoreModuleType[],
    imports?: any[],
    declarations?: any[],
    providers?: any[],
    entryComponents?: any[]
  ): void;
}

export function setupContainer(): void {
  beforeEach(function<H, S>(this: TestContainerContext<H, S>) {
    this.create = (
      hostType: Type<H>,
      storeModuleTypes: StoreModuleType[],
      imports: any[] = [],
      declarations: any[] = [],
      providers: any[] = [],
      entryComponents: any[] = []
    ) => {
      try {
        declarations.push(hostType);
        providers.push(provideMockStore({ initialState: getInitialState(storeModuleTypes) }));
        initComponent(this, hostType, imports, declarations, providers, entryComponents);
        this.fixture.detectChanges();
        this.store = TestBed.get(Store);
        this.data = {};
      } catch (e) {
        console.error(e);
      }
    };
  });

  afterEach(function<H, S>(this: TestContainerContext<H, S>) {
    releaseMemory(this.fixture);
  });
}

export function getInitialState(storeModuleTypes: StoreModuleType[], state = {}) {
  storeModuleTypes.forEach(storeModuleType => {
    switch (storeModuleType) {
      case StoreModuleEnum.APPLICATION_MODULE:
        state = {
          ...state,
          [StoreModuleEnum.APPLICATION_MODULE]: moduleInitialState
        };
        break;
      default:
        return state;
    }
  });
  return state;
}
