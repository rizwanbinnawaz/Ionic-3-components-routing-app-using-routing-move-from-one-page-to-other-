import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddDirectoryPage } from '../adddirectory/adddirectory';

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html'
})
export class DirectoryPage {
  // directory: Array<{ fullname:string, job:string, phone:any}>;
  public directory :any [] = [];
  searchQuery: string = '';
  constructor(public navCtrl: NavController) {
    this.directory = [
      {
        fullname: 'Muhammad Rizwan',
        job: 'Software Engineer',
        phone: '03217448878'
      },
      {
        fullname: 'Rizwan',
        job: 'Software Engineer',
        phone: '03217448878'
      },
      {
        fullname: 'Rizo',
        job: 'Software Engineer',
        phone: '03217448878'
      }
    ];
    this.viewDirectory();
  }
  ngOnInit() {
    this.viewDirectory();
  }

  viewDirectory(){
    this.directory;
  }
  toAdd(){
    this.navCtrl.push(AddDirectoryPage);
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.viewDirectory();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.directory = this.directory.filter((item) => {
        return item[0];
      })
    }
  }
 
  
}
