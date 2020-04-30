import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {ResourceModule} from '@ngx-resource/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ApiResourceModule} from './api-resource.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApiResourceModule,
    BrowserModule,
  ],
  declarations: [],
  exports: [BrowserModule, AppRoutingModule, ResourceModule, ReactiveFormsModule, FormsModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    // control, if it is truly singleton
    if (core) {
      throw new Error('You shall not run! (use Core Module only once)');
    }
  }
}
