import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import("./pages/movies/movies.module").then((m) => m.MoviesPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import("./pages/home/home.module").then((m) => m.HomePageModule)
  },
  {
    path: 'series',
    loadChildren: () => import("./pages/series/series.module").then((m) => m.SeriesPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
