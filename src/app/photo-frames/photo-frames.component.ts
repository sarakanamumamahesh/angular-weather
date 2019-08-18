import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
@Component({
  selector: 'app-photo-frames',
  templateUrl: './photo-frames.component.html',
  styles: [
    './photo-frames.component.css',
  ]
})
export class PhotoFramesComponent implements OnInit {
  constructor(private image_service: ImageService) { }

  ngOnInit() { }
  getImages(qurey: string) {
    console.log(qurey);
    // this.image_service.getImages(qurey);

  }
}
