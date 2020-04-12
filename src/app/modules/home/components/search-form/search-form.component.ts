import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NutritionForm} from '../../../../models/nutrition-form';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;

  @Output() search: EventEmitter<NutritionForm> = new EventEmitter<NutritionForm>();
  @Input() searchedItem: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.form = this.fb.group({
      barcode: ['']
    });
  }
}
