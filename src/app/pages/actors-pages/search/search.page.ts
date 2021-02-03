import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private exampleActors: string[] = ["George Clooney", "Brad Pitt", "Will Smith"];
  public selectedActor: string;
  public results: Observable<any>;

  constructor(
    public theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.selectedActor = this.exampleActors[this.getRandomInt(this.exampleActors.length)];
  }

  public getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));

  search(query: string) {
    if (query.length > 0) {
      console.log(query);
      this.results = this.theMovieDbService.getSearch("person", query, 1);
    }
  }

  public getDetailsInfo = (id: number): Observable<any> => {
    return this.theMovieDbService.getDetails("person", id);
  }

}
