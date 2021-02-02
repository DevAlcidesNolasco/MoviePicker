import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMediaPage } from './details-media.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsMediaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsMediaPageRoutingModule {}
