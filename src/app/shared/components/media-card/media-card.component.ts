import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {

  @Input('media') media: any;
  constructor() { }

  ngOnInit() { }

  public numberToArray = (i: number) => new Array(Math.floor(i));

  public residualToArray = (i: number) => new Array(Math.ceil(i % 1));

}
