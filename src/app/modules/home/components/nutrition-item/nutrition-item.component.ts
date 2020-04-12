import {Component, Input, OnInit} from '@angular/core';
import {NutritionItemResponse} from '../../../../models/nutrition-item-response';

@Component({
  selector: 'app-nutrition-item',
  templateUrl: './nutrition-item.component.html',
  styleUrls: ['./nutrition-item.component.scss'],
})
export class NutritionItemComponent implements OnInit {
  @Input() item: NutritionItemResponse;

  constructor() { }

  ngOnInit() {}

}
