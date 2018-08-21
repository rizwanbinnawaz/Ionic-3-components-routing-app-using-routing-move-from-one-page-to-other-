import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InvoicesPage } from '../invoices';
// import { Printer, PrintOptions } from '@ionic-native/printer';

@Component({
  selector: 'page-viewinvoice',
  templateUrl: 'viewinvoice.html'
})
export class ViewInvoicesPage {
  dir:any = [];
  checked=false;
  // directory: Array<{ fullname:string, job:string, phone:any}>;
  // public directory :any [] = [];
  // searchQuery: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    // Receiving data via navController
    this.dir = navParams.get('dir');
    console.log(this.dir.fullname)
    
  }
  
  
  printPage(dir){
    alert('printer function')
    // this.printer.isAvailable().then(onSuccess, onError);

    // let options: PrintOptions = {
    //   name: 'MyDocument',
    //   printerId: 'printer007',
    //   duplex: true,
    //   landscape: true,
    //   grayscale: true
    // };
    
    // this.printer.print(dir, options).then();
  }
  changeStatus($event){
    this.dir = this.dir;
    this.checked=!this.checked;
    // if (this.checked===false){
    //   this.dir.status == 'Pending';
    //   console.log(this.dir.status);
    //   // this.checked==true;
    // }
    // else{
    //   // this.checked == false;
    //   this.dir.status == 'Payed';
    //   console.log(this.dir.status);
    // }
    console.log(this.checked)
  }
}
