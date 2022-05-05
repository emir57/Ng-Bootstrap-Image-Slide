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
  constructor() { }

  ngAfterViewInit(): void {
    this.ImageSlide();
  }

  ngOnInit(): void {
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
    setTimeout(() => {
      function photosDisplayNone(photos: any[]) {
        for (let i = 0; i < photos.length; i++) {
          photos[i].style.display = "none"
        }
      }
      var photos = $(`.photoProduct${this.id}`);
      let i = 0;
      photosDisplayNone(photos);
      this.photos.forEach(photo => {
        if (photo.isMain) {
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
    }, 500);
  }

}

export interface Photo {
  id: string;
  url: string;
  name?: string;
  isMain?: boolean;
}
