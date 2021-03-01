import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';

import { SearchPage } from './search.page';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ReactiveComponentModule,
    SharedModuleModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
