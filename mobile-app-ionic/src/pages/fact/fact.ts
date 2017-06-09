import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fact',
  templateUrl: 'fact.html'
})
export class FactPage {
  fact: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.fact = navParams.get('item');

  }

}
