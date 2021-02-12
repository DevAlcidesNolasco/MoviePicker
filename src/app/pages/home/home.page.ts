import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public colors: string[] = ["primary", "secondary", "tertiary", "success", "warning", "danger", "dark", "medium", "light"];

  public modules: any[] = [
    {
      icon: "movie",
      name: "Películas",
      details: [
        "Muestra informacion de peliculas",
        "Ademas te muestra información sobre las películas populares y puedes buscar las películas que quieras"
      ]
    },
    {
      icon: "tv",
      name: "Séries",
      details: [
        "Muestra informacion de séries",
        "Ademas te muestra información sobre las séries populares y puedes buscar las séries que quieras"
      ]
    },
    {
      icon: "billboard",
      name: "Actores",
      details: [
        "Muestra informacion de actores",
        "Ademas te muestra información sobre las actores populares y puedes buscar las actores que quieras"
      ]
    }
  ];

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
