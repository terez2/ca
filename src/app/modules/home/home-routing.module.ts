import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './home.page';
import {ScanComponent} from './containers/scan/scan.component';
import {SearchComponent} from './containers/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'scan',
            component: ScanComponent,
      },
      {
        path: 'search',
            component: SearchComponent,
      },
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
