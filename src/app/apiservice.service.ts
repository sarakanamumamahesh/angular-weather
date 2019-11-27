import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
   return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=7c97ebdd0658bc2522e7f77446b7828e');

   }

}
