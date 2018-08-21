import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}
}
