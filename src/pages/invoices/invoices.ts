import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddDirectoryPage } from '../adddirectory/adddirectory';
import { AddInvoicesPage } from '../addinvoices/addinvoices';
import { ViewInvoicesPage } from './viewinvoice/viewinvoice';

@Component({
  selector: 'page-invoices',
  templateUrl: 'invoices.html'
})
export class InvoicesPage {
  change: string = "Pending";
  fullname:any;
  phone:any;
  number:any;
  // directory: Array<{ fullname:string, job:string, phone:any}>;
  public directory :any [] = [];
  searchQuery: string = '';
  constructor(public navCtrl: NavController) {
    this.directory = [
      {
        fullname: 'Muhammad Rizwan',
        phone: '03217448878',
        number: 'RI100000X1',
        status: 'Pending'
      },
      {
        fullname: 'Elizbeth Rose',
        phone: '03217000078',
        number: 'RI100000X2',
        status: 'Payed'
      },
      {
        fullname: 'Wiliam K',
        phone: '03001048878',
        number: 'RI100000X3',
        status: 'Pending'
      },
      {
        fullname: 'Kiran Rose',
        phone: '03217777778',
        number: 'RI100000X4',
        status: 'Payed'
      },
      {
        fullname: 'Kiran Rose',
        phone: '03217777778',
        number: 'RI100000X4',
        status: 'Payed'
      },
      {
        fullname: 'Kiran Rose',
        phone: '03217777778',
        number: 'RI100000X4',
        status: 'Payed'
      },
      {
        fullname: 'Kiran Rose',
        phone: '03217777778',
        number: 'RI100000X4',
        status: 'Payed'
      },
      {
        fullname: 'Kiran Rose',
        phone: '03217777778',
        number: 'RI100000X4',
        status: 'Payed'
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
        return item;
      })
    }
  }
  addinvoice() {
    this.navCtrl.push(AddInvoicesPage)
  }
  
  viewInvoice(dir) {
    this.navCtrl.push(ViewInvoicesPage, {
      dir
    })
  }
  
}
