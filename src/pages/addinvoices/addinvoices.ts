import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-addinvoices',
  templateUrl: 'addinvoices.html'
})
export class AddInvoicesPage {
  // directory: Array<{ fullname:string, job:string, phone:any}>;
  public directory :any [] = [];
  searchQuery: string = '';
  constructor(public navCtrl: NavController) {
  }
 
  
}
