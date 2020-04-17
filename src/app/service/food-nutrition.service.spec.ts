import { TestBed } from '@angular/core/testing';

import { FoodNutritionService } from './food-nutrition.service';

describe('FoodNutritionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodNutritionService = TestBed.get(FoodNutritionService);
    expect(service).toBeTruthy();
  });
});
