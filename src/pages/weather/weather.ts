import { Component, Pipe } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Pipe({ name: 'data' })
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  data:any[] = [];
  name = '';
  weather = '';
  search_city = '';
  temp;
  
  constructor(public navCtrl: NavController, private http: Http) {}
  
  searchCity($event, search_city) {
    this.search_city = this.search_city;
    this.data = [];
    this.temp = [];
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.search_city}&appid=8bd82a37c8579bfa8269f1784c6457fc`)
      .map(res => res.json())
      .subscribe((res: any) => {
        this.data = res
        this.temp = res.weather;
        console.log(this.temp);
        console.log('data', this.data);
        console.log(JSON.stringify(this.data));
        
        
      });
    
  }

  filterLocations(searchTerm) {
    return this.data.filter((location) => {
      return location.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
