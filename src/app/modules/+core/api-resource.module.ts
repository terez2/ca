import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import {FoodNutritionResource} from '../../resource/food-nutrition-resource';
import {FoodNutritionService} from '../../service/food-nutrition.service';

const RESOURCES = [FoodNutritionResource];
const SERVICES = [FoodNutritionService];

@NgModule({
  declarations: [],
  providers: [...RESOURCES, ...SERVICES],
  imports: [CommonModule, HttpClientModule, ResourceModule.forRoot()],
  exports: [HttpClientModule, ResourceModule]
})
export class ApiResourceModule {}
