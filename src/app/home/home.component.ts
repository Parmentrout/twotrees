import { Component } from '@angular/core';
import { ImageGalleryComponent, ImageMetadata } from '../components/image-gallery/image-gallery.component';

@Component({
  selector: 'app-home',
  imports: [ImageGalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
