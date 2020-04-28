import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridRowComponent } from './grid-row.component';

describe('ItemColComponent', () => {
  let component: GridRowComponent;
  let fixture: ComponentFixture<GridRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRowComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
