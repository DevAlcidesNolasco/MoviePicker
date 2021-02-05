import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.page.html',
  styleUrls: ['./populars.page.scss'],
})
export class PopularsPage implements OnInit {

  public actors$: Observable<any>;
  public page: number = 1;

  constructor(
    public theMovieDbService: ThemoviedbService

  ) { }

  ngOnInit() {
    this.actors$ = this.theMovieDbService.getPopulars("person", this.page);
    this.actors$.subscribe((actors) => {
      console.log(actors);

    });
  }

  public goBackwardPage = () => {
    this.page = this.page - 1;
    this.actors$ = this.theMovieDbService.getPopulars("person", this.page);
  }

  public goForwardPage = () => {
    this.page = this.page + 1;
    this.actors$ = this.theMovieDbService.getPopulars("person", this.page);
  }

}
