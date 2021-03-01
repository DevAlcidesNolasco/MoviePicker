import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/imovie';
import { IPerson } from 'src/app/interfaces/iperson';
import { ITv } from 'src/app/interfaces/itv';

@Component({
  selector: 'app-listing-media-card',
  templateUrl: './listing-media-card.component.html',
  styleUrls: ['./listing-media-card.component.scss'],
})
export class ListingMediaCardComponent implements OnInit {
  @Input("data") public data: ITv | IPerson | IMovie;
  @Input("type") type: any;

  constructor(
    private routerController: Router
  ) { }

  ngOnInit() {
    //console.log(this.data, this.type);
  }

  getDetails = (id: string) => {
    let type: string = this.type === "person" ? "actors" : this.type === "tv" ? "series" : "movies";
    this.routerController.navigateByUrl(`/${type}/details/${id}`);
  }

  public getProgressValue = (type: string, number: number): number => {
    let value: number;
    switch (type) {
      case 'person':
        value = (number * 1) / 100;
        break;
      case 'tv':
        value = (number * 1) / 10;
        break;
      case 'movie':
        value = (number * 1) / 10;
        break;
    }
    /*console.log({
      "type": type,
      "number": number,
      "progress value": value
    });*/
    return value;
  }

  public getUrlImage = (path: string): string => "https://image.tmdb.org/t/p/original" + path;

  public getProgressColor = (type: string, number: number): string => {
    //console.log(number);
    const value: number = (number * 1);
    let color: string;
    switch (type) {
      case 'person':
        color = value < 33.33 ? "danger" : value < 66.66 ? "warning" : "success";
        break;
      case 'tv':
        color = value < 3.3 ? "danger" : value < 6.6 ? "warning" : "success";
        break;
      case 'movie':
        color = value < 3.3 ? "danger" : value < 6.6 ? "warning" : "success";
        break;
    }
    /*console.log({
      "in": number,
      "number": value,
      "color": color
    });*/
    return color;
  }

}
