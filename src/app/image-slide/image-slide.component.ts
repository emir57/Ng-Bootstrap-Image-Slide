import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit, AfterViewInit {

  @Input() photos: Photo[] = [];
  @Input() id: string = "";
  @Input() width: string = "";
  @Input() height: string = "";
  constructor() { }

  ngAfterViewInit(): void {
    this.ImageSlide();
  }

  getCarouselStyles() {
    let style = "";
    if (this.width !== "") style += `width:${this.width};`;
    if (this.height !== "") style += `height:${this.height};`;
    return style;
  }

  ngOnInit(): void {
    this.setId();
  }

  setId() {
    if (this.id === "") {
      this.id = (((new Date).getTime() * 0.3) + "").substring(0, 2);
      console.log(this.id)
    }
  }

  getCarouselId() {
    return `carousel${this.id}`;
  }
  photocheck(photo: Photo) {
    if (photo.isMain == true) {
      return `carousel-item active photoProduct${this.id}`
    }
    return `carousel-item photoProduct${this.id}`
  }
  ImageSlide() {
    function photosDisplayNone(photos: any[]) {
      for (let i = 0; i < photos.length; i++) {
        photos[i].style.display = "none"
      }
    }
    var photos = $(`.photoProduct${this.id}`);
    let i = 0;
    photosDisplayNone(photos);
    this.photos.forEach((photo, index) => {
      if (photo.isMain || index == 0) {
        $(`#photo${photo.id}`).show();
      }
    })
    $(`#productNextBtn${this.id}`).click(function () {
      i++;
      photosDisplayNone(photos);
      if (i > photos.length - 1) {
        i = 0;
      }
      photos[i].style.display = "block";
    })
    $(`#productPrevBtn${this.id}`).click(function () {
      i--;
      if (i < 0) {
        i = photos.length - 1;
      }
      photosDisplayNone(photos);
      photos[i].style.display = "block";
    })
  }

}

export interface Photo {
  id: string;
  url: string;
  name?: string;
  isMain?: boolean;
}
