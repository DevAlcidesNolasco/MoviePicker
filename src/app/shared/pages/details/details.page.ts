import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private base$: Observable<any>;
  public detailsMedia$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.base$ = this.route.data;
    this.base$.subscribe((data) => {
      this.detailsMedia$ = this.theMovieDbService.getDetails(data.base, this.route.snapshot.params.id)
    });
    this.detailsMedia$.subscribe((data) => {
      console.log(data);

    });

  }

}
