import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemColComponent } from './item-col.component';

describe('ItemColComponent', () => {
  let component: ItemColComponent;
  let fixture: ComponentFixture<ItemColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemColComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
