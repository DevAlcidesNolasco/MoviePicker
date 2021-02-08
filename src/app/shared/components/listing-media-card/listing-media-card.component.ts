import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-media-card',
  templateUrl: './listing-media-card.component.html',
  styleUrls: ['./listing-media-card.component.scss'],
})
export class ListingMediaCardComponent implements OnInit {
  @Input("data") data: any;

  constructor() { }

  ngOnInit() {
    console.log(this.data);
    
  }

}
