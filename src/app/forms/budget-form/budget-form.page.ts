import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { BudgetEntry } from 'src/app/entity/budget-entry';


@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.page.html',
  styleUrls: ['./budget-form.page.scss'],
})
export class BudgetFormPage implements OnInit {

  public budget:BudgetEntry;

  constructor(private navCtrl:NavController, 
              private events:Events) { }

  ngOnInit() {
    this.budget = new BudgetEntry((new Date()).getTime());
  }

  goBack(){
    this.navCtrl.back();
  }

  validateForm(){

    this.events.publish("new", this.budget);

    this.navCtrl.back();
    
  }

}
