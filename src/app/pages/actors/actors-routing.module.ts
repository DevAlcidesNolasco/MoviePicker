import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorsPage } from './actors.page';

const routes: Routes = [
  {
    path: '',
    component: ActorsPage,
    children: [
      {
        path: "populars",
        loadChildren: () => import("../../shared/pages/populars/populars.module").then(m => m.PopularsPageModule),
        data: {
          base: "person"
        }
      },
      {
        path: "search",
        loadChildren: () => import("../../shared/pages/search/search.module").then(m => m.SearchPageModule),
        data: {
          base: "person"
        }
      },
      {
        path: "details",
        loadChildren: () => import("../../shared/pages/details/details.module").then(m => m.DetailsPageModule),
        data: {
          base: "person"
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
export class ActorsPageRoutingModule { }
