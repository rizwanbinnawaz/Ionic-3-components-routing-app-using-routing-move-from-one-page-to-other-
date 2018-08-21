import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DirectoryPage } from '../directory/directory';

@Component({
  selector: 'page-adddirectory',
  templateUrl: 'adddirectory.html'
})
export class AddDirectoryPage {
  fullname='';
  phone='';
  email='';
  constructor(public navCtrl: NavController) { }
  saveDirectory(saveform:any){
     console.log(this.fullname, this.phone, this.email)
    // this.navCtrl.push(DirectoryPage)
  }
  
}
