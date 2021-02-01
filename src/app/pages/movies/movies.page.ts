import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  public movies: Observable<any>;

  constructor(
    public theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.movies = this.theMovieDbService.getPopularMovies();
    this.theMovieDbService.getPopularMovies().subscribe((movies) => {
      console.log(movies.results[0]);
    });
  }

  public numberToArray = (i: number) => new Array(Math.floor(i));

  public residualToArray = (i: number) => new Array(Math.ceil(i % 1));

}
