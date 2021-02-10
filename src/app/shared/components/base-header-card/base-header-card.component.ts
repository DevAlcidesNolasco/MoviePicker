import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-header-card',
  templateUrl: './base-header-card.component.html',
  styleUrls: ['./base-header-card.component.scss'],
})
export class BaseHeaderCardComponent implements OnInit {

  @Input("data") data: any;
  @Input("pages") pages: any;
  @Input("total_results") total_results: any;
  @Output("changePage") changePage = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  public goBackwardPage = (actual: number): void => {
    this.changePage.emit({ "direction": "back", "actual": actual });
  }

  public goForwardPage = (actual: number): void => {
    this.changePage.emit({ "direction": "forward", "actual": actual });
  }
}
