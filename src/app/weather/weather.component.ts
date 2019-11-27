import { Component, OnInit } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { ApiserviceService} from '../apiservice.service';
import { faArrowLeft, faCoffee, faCloud , faCloudSunRain, faThermometerFull, faThermometerEmpty, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
visble: boolean;
obser: Observable<object>;
errordata;
wetherInfo ;
pastwetherInfo: Array<any> = [];
facloudsunrain = faCloudSunRain;
facloud = faCloud;
facoffee = faCoffee;
faarrowleft = faArrowLeft;
fathermometerfull = faThermometerFull;
fathermometerempty = faThermometerEmpty;
faspinner = faSpinner;
  constructor(private http: HttpClient, private api: ApiserviceService) {

  }

  ngOnInit() {

  }
  getweather(city) {
   this.obser = this.api.getdata(city);
   this.obser.subscribe(
      (res) => {this.visble = true, this.wetherInfo = res; this.errordata = null;
      if (this.pastwetherInfo.length < 5) {
        this.pastwetherInfo.push(res);
      } else {
        this.pastwetherInfo.pop();
        this.pastwetherInfo.push(res);
      }
      }
      , (error) => {this.errordata = error, this.visble = false; });


  }

}

