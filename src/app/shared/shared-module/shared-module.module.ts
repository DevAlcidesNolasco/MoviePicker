import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../components/media-card/media-card.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PersonComponent } from '../components/person/person.component';
import { BasePageComponentComponent } from '../components/base-page-component/base-page-component.component';
import { BaseHeaderCardComponent } from '../components/base-header-card/base-header-card.component';
import { ListingMediaCardComponent } from '../components/listing-media-card/listing-media-card.component';
import { DetailCardTvComponent } from '../components/detail-card-tv/detail-card-tv.component';
import { DetailCardPersonComponent } from '../components/detail-card-person/detail-card-person.component';
import { DetailCardMovieComponent } from '../components/detail-card-movie/detail-card-movie.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [
    MediaCardComponent,
    PersonComponent,
    BasePageComponentComponent,
    BaseHeaderCardComponent,
    ListingMediaCardComponent,
    DetailCardTvComponent,
    DetailCardPersonComponent,
    DetailCardMovieComponent,
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    HttpClientModule
  ],
  exports: [
    MediaCardComponent,
    PersonComponent,
    BasePageComponentComponent,
    BaseHeaderCardComponent,
    ListingMediaCardComponent,
    DetailCardTvComponent,
    DetailCardPersonComponent,
    DetailCardMovieComponent
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
