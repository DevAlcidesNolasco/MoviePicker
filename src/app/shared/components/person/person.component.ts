import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Input("id") id: number;
  public actor: Observable<any>;

  constructor(
    public theMovieDbService: ThemoviedbService
  ) { }

  ngOnInit() {
    this.actor = this.theMovieDbService.getDetails("person", this.id);
  }

}
