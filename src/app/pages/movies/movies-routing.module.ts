import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPage } from './movies.page';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
    children: [
      {
        path: "populars",
        loadChildren: () => import("../../shared/pages/populars/populars.module").then(m => m.PopularsPageModule),
        data: {
          base: "movie"
        }
      },
      {
        path: "details",
        loadChildren: () => import("../../shared/pages/details/details.module").then(m => m.DetailsPageModule),
        data: {
          base: "movie"
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
export class MoviesPageRoutingModule { }
