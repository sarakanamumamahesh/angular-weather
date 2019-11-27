import { Component, OnInit } from '@angular/core';
import { faArrowLeft,faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  faarrowleft = faArrowLeft;
  faarrowCright = faArrowCircleRight;
  constructor() { }

  ngOnInit() {
  }

}
