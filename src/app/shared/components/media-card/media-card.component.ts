import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsMediaPage } from '../../pages/details-media/details-media.page';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {

  @Input('media') media: any;
  @Input('type') type: string;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() { }

  public numberToArray = (i: number) => new Array(Math.floor(i));

  public residualToArray = (i: number) => new Array(Math.ceil(i % 1));

  public details = async (id: string) => {
    const modal = await this.modalController.create({
      id: "ModalDetailMedia",
      component: DetailsMediaPage,
      cssClass: "detail-modal",
      componentProps: {
        'id': id,
        'type': this.type
      },
      swipeToClose: true,
      backdropDismiss: false
    });
    return await modal.present();
  }

}
