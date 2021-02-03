import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ThemoviedbService } from 'src/app/services/themoviedb/themoviedb.service';

@Component({
  selector: 'app-details-media',
  templateUrl: './details-media.page.html',
  styleUrls: ['./details-media.page.scss'],
})
export class DetailsMediaPage implements OnInit {

  @Input('id') id: number;
  @Input('type') type: string;

  public mediaDetail: Observable<any>;

  constructor(
    public theMovieDbService: ThemoviedbService,
    public modalController: ModalController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.mediaDetail = this.theMovieDbService.getDetails(this.type, this.id);
    this.mediaDetail.subscribe((detail) => {
      console.log(detail);
    });
  }

  public hideModal = () => {
    this.modalController.dismiss();
  }

  /*public goToHomePage = (link: string) => {
    console.log(link);
    this.mediaDetail.subscribe(async (media) => {
      if (media && media.homepage) {
        window.open(media.homepage, "__blank");
      } else {
        const alert = await this.alertController.create({
          header: 'Error!',
          subHeader: 'No se tiene informacion.',
          message: 'La acción que intenta realizar no se puede debido a falta de informacion o no permitido.',
          buttons: ['OK']
        });
        await alert.present();
      }

    })
  }*/

  public getPageName = (link: string): string => {
    /*console.log({
      "split": link.split("/"),
      "trimmed": link.split("/")[2],
      "link": link
    });*/
    return link.split("/")[2];
  }

}
