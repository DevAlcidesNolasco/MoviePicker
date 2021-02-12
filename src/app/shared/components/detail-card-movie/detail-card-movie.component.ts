import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/imovie';

@Component({
  selector: 'app-detail-card-movie',
  templateUrl: './detail-card-movie.component.html',
  styleUrls: ['./detail-card-movie.component.scss'],
})
export class DetailCardMovieComponent implements OnInit {

  @Input('details') details: IMovie;

  constructor() { }

  ngOnInit() {
    console.log(this.details);

  }

}
