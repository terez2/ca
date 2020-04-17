import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutritionItemComponent } from './nutrition-item.component';

describe('NutritionItemComponent', () => {
  let component: NutritionItemComponent;
  let fixture: ComponentFixture<NutritionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
