import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit {

  @Input() photos: Photo[] = [];
  @Input() id: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  getCarouselId() {
    return `carousel${this.id}`;
  }
  photocheck(photo: Photo) {
    if (photo.isMain == true) {
      return `carousel-item active photoProduct${this.id}`
    } else {
      return `carousel-item photoProduct${this.id}`
    }
  }

}

export interface Photo {
  id: string;
  url: string;
  name?: string;
  isMain?: boolean;
}
