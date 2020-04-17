import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NutritionItemResponse} from '../../../../models/nutrition-item-response';

@Component({
  selector: 'app-nutrition-item',
  templateUrl: './nutrition-item.component.html',
  styleUrls: ['./nutrition-item.component.scss'],
})

// 8594404009520
export class NutritionItemComponent implements OnInit {
  @Input() item: NutritionItemResponse;
  @Output() viewActivity: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
