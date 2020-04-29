import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NutritionItem} from '../../../../models/nutrition-item';

@Component({
  selector: 'app-nutrition-item',
  templateUrl: './nutrition-item.component.html',
  styleUrls: ['./nutrition-item.component.scss'],
})

// 8594404009520
export class NutritionItemComponent implements OnInit {
  @Input() item: NutritionItem;
  @Output() viewActivity: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

}
