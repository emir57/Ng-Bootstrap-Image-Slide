import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit {

  @Input() photos: Photo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Photo {
  id: string;
  url: string;
  name?: string;
}
