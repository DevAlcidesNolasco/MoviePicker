import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularsPage } from './populars.page';

const routes: Routes = [
  {
    path: '',
    component: PopularsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularsPageRoutingModule {}
