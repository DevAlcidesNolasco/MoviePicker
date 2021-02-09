import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesPage } from './series.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesPage,
    children: [
      {
        path: "populars",
        loadChildren: () => import("../../shared/pages/populars/populars.module").then(m => m.PopularsPageModule),
        data: {
          base: "tv"
        }
      },
      {
        path: "search",
        loadChildren: () => import("../actors-pages/search/search.module").then(m => m.SearchPageModule),
        data: {
          base: "tv"
        }
      },
      {
        path: "",
        redirectTo: "populars",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesPageRoutingModule { }
