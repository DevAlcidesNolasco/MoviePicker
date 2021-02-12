import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IImage } from 'src/app/interfaces/iimage';
import { IPerson } from 'src/app/interfaces/iperson';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-detail-card-person',
  templateUrl: './detail-card-person.component.html',
  styleUrls: ['./detail-card-person.component.scss'],
})
export class DetailCardPersonComponent implements OnInit {

  @Input('details') details: IPerson;
  public credits$: Observable<any>;
  public gallery$: Observable<{
    id: string;
    profiles: IImage[];
  }>;

  public slideOpts = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.params = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { slides } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          let tx = -offset$$1;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
          const slideOpacity = swiper.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl
            .css({
              opacity: slideOpacity,
            })
            .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, $wrapperEl } = swiper;
        slides.transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          slides.transitionEnd(() => {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      },
    }
  }

  constructor(
    private theMovieDbService: ThemoviedbService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.details.id;
    this.gallery$ = this.theMovieDbService.getImages('person', id);
    this.credits$ = this.getCredits();
    this.credits$.subscribe((data => {
      console.log(data);

    }));
    console.log({ 'person details': this.details });
  }

  getCredits = () => {
    return this.http.get(`https://api.themoviedb.org/3/person/${this.details.id}/combined_credits?api_key=cbd664e9c8bc0f3e9eeb7a0e27fd7583&language=es-SV`);
  }



}
