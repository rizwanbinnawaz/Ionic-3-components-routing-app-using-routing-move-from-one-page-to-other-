import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DirectoryPage } from '../directory/directory';
import { HomePage } from '../home/home';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 username= 'admin';
 password='admin';
 uname = 'admin';
 upass='admin';
  private todo: FormGroup;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder
  ) {}
  
  loginUser(form:any) {
    
    console.log(this.uname)
    console.log(this.upass)
    
    let username = this.username;
    let password = this.password;
    if(this.uname.length < 1){
      let toast = this.toastCtrl.create({
        message: 'Username can\'t empty',
        duration: 3000
      });
      toast.present();
      return
    } else if (this.upass.length < 1){
      let toast = this.toastCtrl.create({
        message: 'Password can\'t empty',
        duration: 3000
      });
      toast.present();
      return
    } else if (this.uname != username && this.upass != password) {
      let toast = this.toastCtrl.create({
        message: 'Incorrect Username/Password',
        duration: 3000
      });
      toast.present();
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Login successfully | Dashboard',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot(HomePage);
    }
  }
}
