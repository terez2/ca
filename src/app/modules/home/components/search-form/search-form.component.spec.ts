import { IonicModule } from '@ionic/angular';

import { SearchFormComponent } from './search-form.component';
import {setupComponent, TestComponentContext} from '../../../../global/test-contexts/test-component-context.spec';
import {ReactiveFormsModule} from '@angular/forms';

describe('SearchFormComponent', () => {
  let componentContext: TestComponentContext<SearchFormComponent>;

  setupComponent();

  beforeEach(function(this: TestComponentContext<SearchFormComponent>) {
    this.create(
        SearchFormComponent,
        [ReactiveFormsModule, IonicModule.forRoot()],
        [SearchFormComponent]
    );
    componentContext = this;
  });

  it('should create', () => {
    expect(componentContext.component).toBeTruthy();
  });

});
