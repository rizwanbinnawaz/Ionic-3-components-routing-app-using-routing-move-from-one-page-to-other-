# Ionic-3-components-routing-app-using-routing-move-from-one-page-to-other-
Ionic 3 components routing app (using routing move from one page to other) #Angular Js 6, #Ionic 3s

##how routing is work?
#Code

``` ruby
// import
import { AboutPage } from '../about/about';
```
than in cpomonent class define function here i'm create aboutpage()
``` ruby
export class HomePage {
   aboutpage() {
    this.navCtrl.push();
  }
}
````
so navCtrl.push(); is actualy push the code page to defined componnet as parameter, here AboutPage page is our paramete
that is import in top of componnet

// import
import { AboutPage } from '../about/about';

##complete code

``` ruby
export class HomePage {
   aboutpage() {
    this.navCtrl.push(AboutPage);
  }
}
````
