import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IGenre } from 'src/app/interfaces/igenre';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public base$: Observable<any>;
  public searchData$: Observable<any>;
  public searchQuery$: Observable<string>;
  public genreId$: Observable<number>;
  public searchBy: string = "name";
  public genres$: Observable<IGenre[]>;

  constructor(
    private route: ActivatedRoute,
    private theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.base$ = this.route.data;
    this.base$.subscribe((data) => {
      if (data.base !== "person") {
        this.genres$ = this.theMovieDbService.getGenresList(data.base);
      }
    });

  }

  public searchTrigger = (searchString: string) => {
    const searchTrimmed: string = searchString.trim();
    if (searchTrimmed.length > 0) {
      console.log(searchString);
      this.searchQuery$ = of(searchTrimmed);
      this.base$.subscribe((data) => {
        this.searchData$ = this.theMovieDbService.getSearch(data.base, searchTrimmed);
      });
    }
  }

  public getChangePage = (options: { direction: string, actual: number }) => {
    this.base$.subscribe((data) => {
      if (this.searchBy === "name") {
        this.searchQuery$.subscribe((searchQuery) => {
          this.searchData$ = this.theMovieDbService.getSearch(data.base, searchQuery, options.direction === "forward" ? options.actual + 1 : options.actual - 1);
        });
      } else if (this.searchBy === "genre") {
        this.genreId$.subscribe((genreId) => {
          this.searchData$ = this.theMovieDbService.getByGenre({ type: data.base, id: genreId, page: options.direction === "forward" ? options.actual + 1 : options.actual - 1 });
        });
      }
    });
  }

  public segmentChanged = (event: string) => {
    this.searchBy = event;
  }

  public searchByGenre = (genreId: number) => {
    this.genreId$ = of(genreId);
    this.base$.subscribe((data) => {
      this.searchData$ = this.theMovieDbService.getByGenre({ type: data.base, id: genreId, page: 1 });
    });

  }

}
