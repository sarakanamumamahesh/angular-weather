import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhotoFramesComponent } from './photo-frames/photo-frames.component';
import { ResumeComponent } from './resume/resume.component';
import { ImageService } from 'src/services/image.service';
import { ForumComponent } from './forum/forum.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Users } from './services/apirequest.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotoFramesComponent,
    ResumeComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ImageService, Users, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
