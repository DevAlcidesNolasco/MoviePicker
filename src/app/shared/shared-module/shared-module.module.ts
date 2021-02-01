import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCardComponent } from '../components/media-card/media-card.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, "es");

@NgModule({
  declarations: [
    MediaCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MediaCardComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es"
    }
  ]
})
export class SharedModuleModule { }
