import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-page-component',
  templateUrl: './base-page-component.component.html',
  styleUrls: ['./base-page-component.component.scss'],
})
export class BasePageComponentComponent implements OnInit {

  @Input("page") page: string;

  public router: any[] = [];

  constructor(
    private routerNav: Router
  ) { }

  ngOnInit() {
    this.router = [
      {
        route: `/${this.page}/populars`,
        name: "Populares",
        icon: "bar-chart"
      },
      {
        route: `/${this.page}/search`,
        name: "Buscar",
        icon: "search"
      }
    ];
  }

  public navigation = (route: string) => {
    this.routerNav.navigateByUrl(route);
  }

}
