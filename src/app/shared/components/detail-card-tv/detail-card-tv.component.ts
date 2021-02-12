import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IImage } from 'src/app/interfaces/iimage';
import { ITv } from 'src/app/interfaces/itv';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-detail-card-tv',
  templateUrl: './detail-card-tv.component.html',
  styleUrls: ['./detail-card-tv.component.scss'],
})

export class DetailCardTvComponent implements OnInit {

  @Input('details') details: ITv;
  public gallery$: Observable<{
    id: string;
    backdrops: IImage[];
    posters: IImage[];
  }>;

  constructor(
    private theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    const id = this.details.id;
    this.gallery$ = this.theMovieDbService.getImages('tv', id);
    this.gallery$.subscribe((gallery) => {
      console.log(gallery);

    });
    console.log('tv details');
  }

}
