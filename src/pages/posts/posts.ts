import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { DetailsPage } from './details-view/details-view';



@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) { }
 
  readMore() {
    this.navCtrl.push(DetailsPage);
    // alert(DetailsPage)
      //  this.navCtrl.push(DetailsPage);
  }
}
