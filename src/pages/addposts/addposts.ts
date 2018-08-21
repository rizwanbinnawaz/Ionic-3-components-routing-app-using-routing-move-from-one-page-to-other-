import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-addposts',
  templateUrl: 'addposts.html'
})
export class AddPostsPage {
  constructor(public navCtrl: NavController) { }
  savePost(){
    alert('save post')
  } 
}
