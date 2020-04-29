import {CoreModule} from './core.module';

describe('CoreModule', () => {
  let coreModule: CoreModule;

  beforeEach(() => {
    coreModule = new CoreModule(null);
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });

  it('should throw error if already exists', () => {
    expect(() => {
      new CoreModule(coreModule);
    }).toThrow(new Error('You shall not run! (use Core Module only once)'));
  });
});
