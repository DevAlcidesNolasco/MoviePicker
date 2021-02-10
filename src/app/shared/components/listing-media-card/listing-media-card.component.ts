import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-media-card',
  templateUrl: './listing-media-card.component.html',
  styleUrls: ['./listing-media-card.component.scss'],
})
export class ListingMediaCardComponent implements OnInit {
  @Input("data") data: any;
  @Input("type") type: any;

  constructor(
    private routerController: Router
  ) { }

  ngOnInit() { }

  getDetails = (id: string) => {
    let type: string = this.type === "person" ? "actors" : this.type === "tv" ? "series" : "movies";
    this.routerController.navigateByUrl(`/${type}/details/${id}`);

  }

}
