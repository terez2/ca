import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const OUR_SHARED_COMPONENTS = [];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [...OUR_SHARED_COMPONENTS],
  exports: [...OUR_SHARED_COMPONENTS],
})
export class SharedModule {}
