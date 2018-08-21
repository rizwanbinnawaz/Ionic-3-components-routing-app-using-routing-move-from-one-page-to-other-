import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DirectoryPage } from '../pages/directory/directory';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
// import { WeatherPage } from '../pages/weather/weather';
// import { AddDirectoryPage } from '../pages/adddirectory/adddirectory';
// import { ImagesPage } from '../pages/images/images';
// import { PostsPage } from '../pages/posts/posts';
// import { AddPostPage } from '../pages/addpost/addpost';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;
  users = this.users;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.pages = [     
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Directory', component: DirectoryPage }, 
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  logout(){
    console.log('logout');
    this.nav.setRoot(HomePage);
  }
}
