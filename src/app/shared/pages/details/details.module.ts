import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';

import { DetailsPage } from './details.page';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    ReactiveComponentModule,
    SharedModuleModule,
  ],
  declarations: [
    DetailsPage
  ]
})
export class DetailsPageModule { }
