import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { BudgetEntry } from '../entity/budget-entry';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public budgetList:Array<BudgetEntry> = [];

  constructor(private events:Events) {

      //Abonnement à l'événement d'ajout d'une dépense
      this.events.subscribe("new",(data)=>{
        //let budgetInfo = JSON.parse(data);
        this.budgetList.push(data);
      });

  }
}
