import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeriesPageRoutingModule } from './series-routing.module';

import { SeriesPage } from './series.page';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { DetailsMediaPageModule } from 'src/app/shared/pages/details-media/details-media.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesPageRoutingModule,
    SharedModuleModule,
    DetailsMediaPageModule
  ],
  declarations: [SeriesPage]
})
export class SeriesPageModule { }
