import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DirectoryPage } from '../pages/directory/directory';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { WeatherPage } from '../pages/weather/weather';
import { ImagesGalleryPage } from '../pages/imagesgallery/imagesgallery';
import { PostsPage } from '../pages/posts/posts';
import { DetailsPage } from '../pages/posts/details-view/details-view';
import { AddDirectoryPage } from '../pages/adddirectory/adddirectory';
import { AddPostsPage } from '../pages/addposts/addposts';
import { InvoicesPage } from '../pages/invoices/invoices';
// import { OrdersPage } from '../pages/orders/orders';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddInvoicesPage } from '../pages/addinvoices/addinvoices';
import { OrdersPage } from '../pages/orders/orders';
import { ViewInvoicesPage } from '../pages/invoices/viewinvoice/viewinvoice';
import { Printer } from '@ionic-native/printer';
import { PaintPage } from '../pages/paint/paint';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
// import { Http } from '@angular/http';
// import { HttpModule } from '@angular/http';
// import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DirectoryPage,
    AboutPage,
    ContactPage,
    LoginPage,
    LogoutPage,
    WeatherPage,
    ImagesGalleryPage,
    PostsPage,
    DetailsPage,
    AddDirectoryPage,
    AddPostsPage,
    InvoicesPage,
    AddInvoicesPage,
    OrdersPage,
    ViewInvoicesPage,
    PaintPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    // IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DirectoryPage,
    AboutPage,
    ContactPage,
    LoginPage,
    LogoutPage,
    WeatherPage,
    ImagesGalleryPage,
    PostsPage,
    DetailsPage,
    AddDirectoryPage,
    AddPostsPage,
    InvoicesPage,
    AddInvoicesPage,
    OrdersPage,
    ViewInvoicesPage,
    PaintPage
  ],
  providers: [
    StatusBar,
    File,
    Printer,
    HTTP,
    // HttpModule,
    // Http,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
