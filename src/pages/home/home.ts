import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { DirectoryPage } from '../directory/directory';
import { WeatherPage } from '../weather/weather';
import { ImagesGalleryPage } from '../imagesgallery/imagesgallery';
import { PostsPage } from '../posts/posts';
import { AddDirectoryPage } from '../adddirectory/adddirectory';
import { AddPostsPage } from '../addposts/addposts';
import { InvoicesPage } from '../invoices/invoices';
import { OrdersPage } from '../orders/orders';
import { AddInvoicesPage } from '../addinvoices/addinvoices';
import { PaintPage } from '../paint/paint';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
  ) { }
  // homepage() {
  //   this.navCtrl.push(HomePage);
  //   // this.navParams.get('page-about');
  // }
  aboutpage() {
    this.navCtrl.push(AboutPage);
  }
  contactpage() {
    this.navCtrl.push(ContactPage);
  }
  weather() {
    this.navCtrl.push(WeatherPage);
  }
  paint(){
    this.navCtrl.push(PaintPage);
  }
  directory() {
    this.navCtrl.push(DirectoryPage);
  }
  imagesGallery(){
    this.navCtrl.push(ImagesGalleryPage);
  }
  addDirectory() {
    this.navCtrl.push(AddDirectoryPage);
  }
  post() {
    this.navCtrl.push(PostsPage);
  }
  addPost() {
    this.navCtrl.push(AddPostsPage);
  }
  logout() {
    this.navCtrl.setRoot(LoginPage);
  }
  oders(){
    this.navCtrl.push(OrdersPage);
  }
  invoices(){
    this.navCtrl.push(InvoicesPage);    
  }
  addinvoices() {
    this.navCtrl.push(AddInvoicesPage);
  }
}
