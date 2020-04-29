import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import {TestContainerContext} from './test-container-context.spec';
import {TestComponentContext} from './test-component-context.spec';

export function checkDispatchAction(
  fixture: ComponentFixture<any>,
  store: Store<any>,
  componentMethod: string,
  action: Action,
  data?: any
) {
  checkDispatchMultipleActions(fixture, store, componentMethod, [action], data);
}

export function checkDispatchMultipleActions(
  fixture: ComponentFixture<any>,
  store: Store<any>,
  componentMethod: string,
  actions: Action[],
  data?: any
) {
  const component = fixture.componentInstance;
  const spy = spyOn(store, 'dispatch');
  if (typeof component[componentMethod] === 'function') {
    component[componentMethod](data);
    const callsArguments = spy.calls.allArgs() as Array<any>;
    expect(spy.calls.count()).toEqual(actions.length);
    expect(callsArguments).toEqual(actions.map(item => [item]));
  } else {
    fail(`Component ${fixture.componentInstance.constructor.name} does not have function ${componentMethod}`);
  }
}

export function checkTextInElement(
  componentContext: TestComponentContext<any> | TestContainerContext<any, any>,
  cssQuery: string,
  text: string
) {
  componentContext.component.text = text;
  const div = componentContext.fixture.debugElement.query(By.css(cssQuery));
  expect(div.nativeElement.outerText).toBe(text);
}
