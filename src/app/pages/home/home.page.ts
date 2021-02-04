import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public contact: any = {
    "social_media": [
      {
        name: "Facebook",
        link: "https://www.facebook.com/alvaro.nolas",
        icon: "facebook"
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/alvaroguan06/",
        icon: "instagram"
      },
      {
        name: "GitHub",
        link: "https://github.com/AlvaroCojonudo?tab=repositories",
        icon: "github"
      }
    ],
    "job": {
      name: "Email",
      link: "alvaro_guandique@hotmail.com",
      icon: "message"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
