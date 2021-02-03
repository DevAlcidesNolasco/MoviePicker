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
        loadChildren: () => import("../actors-pages/populars/populars.module").then(m => m.PopularsPageModule)
      },
      {
        path: "search",
        loadChildren: () => import("../actors-pages/search/search.module").then(m => m.SearchPageModule)
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
