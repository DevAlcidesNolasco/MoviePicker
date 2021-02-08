import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../components/media-card/media-card.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PersonComponent } from '../components/person/person.component';
import { BasePageComponentComponent } from '../components/base-page-component/base-page-component.component';
import { BaseHeaderCardComponent } from '../components/base-header-card/base-header-card.component';
import { ListingMediaCardComponent } from '../components/listing-media-card/listing-media-card.component';
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [
    MediaCardComponent,
    PersonComponent,
    BasePageComponentComponent,
    BaseHeaderCardComponent,
    ListingMediaCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MediaCardComponent,
    PersonComponent,
    BasePageComponentComponent,
    BaseHeaderCardComponent,
    ListingMediaCardComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es"
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModuleModule { }
