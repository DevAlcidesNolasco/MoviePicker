import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActorsPageRoutingModule } from './actors-routing.module';

import { ActorsPage } from './actors.page';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActorsPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [ActorsPage]
})
export class ActorsPageModule {}
