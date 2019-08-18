import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
@Injectable()
export class ImageService {
    private api_key = environment.pixelbayapikey;
    private api_url = environment.PIXABAY_API_URL;
    private URL: string = this.api_url + this.api_key + '=';
    private perPage = '&per_page=10';
    constructor(private http: HttpClient) {

    }
    getImages(qurey: string) {
        return console.log(this.http.get(this.URL + qurey).subscribe());
    }
}
