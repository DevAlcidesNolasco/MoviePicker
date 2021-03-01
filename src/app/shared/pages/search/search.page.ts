import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public base$: Observable<any>;

  public searchData$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.base$ = this.route.data;
  }

  public searchTrigger = (searchString: string) => {
    if (searchString.length > 0) {
      console.log(searchString);
      this.base$.subscribe((data) => {
        this.searchData$ = this.theMovieDbService.getSearch(data.base, searchString.trim());
      });
    }
  }

}
