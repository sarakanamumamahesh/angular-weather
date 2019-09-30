import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  err;
  data;
  constructor(private http: HttpClient) {

   }
   public getdata(city) {
   // tslint:disable-next-line: max-line-length
   return this.http.get('https:api.openweathermap.org/data/2.5/weather?q=' + city + '&' + environment.apikey).subscribe(
     (res) => { this.data = res; }
     , (error) => {this.err = error; }
);

   }

}
