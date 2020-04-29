import { Observable, of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { Action } from '@ngrx/store';
import { configureTestingModule, releaseMemory } from 'src/app/global/test-contexts/test-context.spec';
import { TestContainerContext } from 'src/app/global/test-contexts/test-container-context.spec';

export interface TestEffectContext<E, S> {
  actions$: Observable<any>;
  effects: E;
  service: S;
  data: any;

  create(
    actions$: Observable<any>,
    effects: Type<E>,
    service: Type<S>,
    imports?: any[],
    declarations?: any[],
    providers?: any[]
  ): void;
}

export function setupEffect(): void {
  beforeEach(function<E, S>(this: TestEffectContext<E, S>) {
    this.create = (
      actions$: Observable<any>,
      effectsType: Type<E>,
      serviceType: Type<S>,
      imports: any[] = [],
      declarations: any[] = [],
      providers: any[] = []
    ) => {
      providers.push(
        provideMockActions(() => actions$ || this.actions$),
        effectsType,
        serviceType
      );

      configureTestingModule(imports, declarations, providers);
      this.effects = TestBed.get(effectsType);
      this.service = TestBed.get(serviceType);
      this.data = {};
    };
  });

  afterEach(function<H, S>(this: TestContainerContext<H, S>) {
    releaseMemory(this.fixture);
  });
}

export function testEffect<Effect, Service>(
  service: Service,
  serviceMethod: keyof Service,
  effect: Effect,
  effectKey: keyof Effect,
  action: Action,
  data
) {
  spyOn(service, serviceMethod as any).and.returnValue(of(data) as any);
  const expected = cold('-b', { b: action });
  expect(effect[effectKey]).toBeObservable(expected);
}

export function testFailEffect<S, E>(
  service: S,
  serviceMethod: keyof S,
  effect: E,
  effectKey: keyof E,
  action: any,
  errorMessage: any
) {
  const returnedValue = throwError(errorMessage);
  spyOn(service, serviceMethod as any).and.returnValue(returnedValue as any);
  const expected = cold('-b', { b: action });
  expect(effect[effectKey]).toBeObservable(expected);
}

export function testMoreActionsEffect<S, E>(
  service: S,
  serviceMethod: keyof S,
  mockServiceValue: any,
  effect: E,
  effectKey: keyof E,
  marbles: string,
  marblesValues: any
) {
  spyOn(service, serviceMethod as any).and.returnValue(mockServiceValue);
  const expected = cold(marbles, marblesValues);

  expect(effect[effectKey]).toBeObservable(expected);
}
