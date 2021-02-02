import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
    public modalController: ModalController
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

}
