import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsMediaPageRoutingModule } from './details-media-routing.module';

import { DetailsMediaPage } from './details-media.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsMediaPageRoutingModule
  ],
  declarations: [DetailsMediaPage]
})
export class DetailsMediaPageModule {}
