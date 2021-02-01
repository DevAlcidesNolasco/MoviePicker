import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPageRoutingModule } from './movies-routing.module';

import { MoviesPage } from './movies.page';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [
    MoviesPage
  ]
})
export class MoviesPageModule { }
