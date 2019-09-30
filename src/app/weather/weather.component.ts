import { Component, OnInit } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { ApiserviceService} from '../apiservice.service';
import { faCoffee, faHotdog, faWindowRestore , faCloudSunRain} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
wetherInfo = {
  'name': '',
  'id': '',
   'main': {
    'temp_min': '',
    'temp_max': '',
    'humidity': ''
   },
   'weather': [
     {
       'description': ''
     }
   ]
};
facloudsunrain = faCloudSunRain;
facoffee = faCoffee;
fahotdog  = faHotdog;
fawindow = faWindowRestore;
  constructor(private http: HttpClient, private api: ApiserviceService) {

  }

  ngOnInit() {

  }
  getweather(city) {
    this.api.getdata(city);
    this.wetherInfo = this.api.data;
    console.log(this.api.data);


  }

}

