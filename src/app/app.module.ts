import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageService } from 'src/services/image.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Users } from './services/apirequest.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
   WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ImageService, Users, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
