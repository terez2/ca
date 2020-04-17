import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFormComponent } from './search-form.component';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
