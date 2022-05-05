import { Component } from '@angular/core';
import { Photo } from './image-slide/image-slide.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrapImageSlide';
  photos: Photo[] = [
    { id: "1", url: "https://www.camhotel.com.tr/uploads/ulkemizin-dort-bir-yanindan-guzel-manzara-fotograflari.jpg", },
    { id: "2", url: "https://img.internethaber.com/rcman/Cw480h270q95gc/images/gallery/37266/b.jpg", },
    { id: "3",isMain: true, url: "https://cdn.neredekal.com/blog/IuR/760x380/doganin-carpici-renkleriyle-muhtesem-manzaralar.jpg", },
  ]
}
