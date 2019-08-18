import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';
import { PhotoFramesComponent } from './photo-frames/photo-frames.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'photos',
    component: PhotoFramesComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: '**',
    component: ResumeComponent,
    data: { title: 'home page' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
