import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPopulars } from 'src/app/interfaces/ipopulars';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.page.html',
  styleUrls: ['./populars.page.scss'],
})
export class PopularsPage implements OnInit {

  public base$: Observable<any>;
  public popularData$: Observable<IPopulars>;

  constructor(
    private route: ActivatedRoute,
    private theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.base$ = this.route.data;
    this.base$.subscribe((data) => {
      this.popularData$ = this.theMovieDbService.getPopulars(data.base);
    });
  }

  public getChangePage = ({ direction, actual }) => {
    console.log(direction, actual);
    this.base$.subscribe((data) => {
      this.popularData$ = this.theMovieDbService.getPopulars(data.base, direction === "forward" ? actual + 1 : actual - 1);
    });
  }

}
