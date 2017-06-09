import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomeService} from "./home.service";
import {FactPage} from "../fact/fact";
import {Push} from "@ionic/cloud-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public facts;

  constructor(public navCtrl: NavController, private service:HomeService, public push: Push) {
    service.getFacts().subscribe((result)=>{
      this.facts = result;
    });
    this.push.rx.notification()
      .subscribe((msg) => {
        console.log(msg.title + ': ' + msg.text);
      });
  }

  onClickFact(fact:any){
    this.navCtrl.push(FactPage,{
      item:fact
    })
  }

}
