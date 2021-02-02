import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public routes: any[] = [
    {
      route: "home",
      name:"Home",
      icon: "home"
    },
    {
      route: "movies",
      name:"Movies",
      icon: "videocam"
    },
    {
      route: "series",
      name:"Series",
      icon: "albums"
    },
    {
      route: "actors",
      name: "Actors",
      icon: "person"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    if (this.platform.is("android")) {
      this.initializeApp();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
