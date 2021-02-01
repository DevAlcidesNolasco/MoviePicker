import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesPageRoutingModule } from './series-routing.module';

import { SeriesPage } from './series.page';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [SeriesPage]
})
export class SeriesPageModule { }
