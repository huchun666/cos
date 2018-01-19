import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalControl: ModalController
  ) {

  }

  search() {
    let search = this.modalControl.create(SearchPage)
    search.present();
  }

}
