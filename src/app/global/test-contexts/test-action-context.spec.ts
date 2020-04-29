import { Action, ActionCreator } from '@ngrx/store';

export const errorActionMessage = 'error';

export interface TestActionContext {
  action: Action;
  expectation: { type: string };
}

export function testAction<P>(createActionFunction: ActionCreator<string, (props: P) => any>, type: string, props?: P) {
  it('should create an action ' + type, () => {
    const action = createActionFunction(props);
    expect(action).toEqual({ ...props, ...{ type } });
  });
}
