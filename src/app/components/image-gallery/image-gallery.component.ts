import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface ImageMetadata {
  title: string;
  description: string;
  image_urls: string[];
  uploadedAt: string;
}

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss'
})
export class ImageGalleryComponent {
  constructor(private firestore: Firestore) {}
  gallery: ImageMetadata | undefined;
  
  ngOnInit(): void {
    this.getImages().subscribe((data) => {
      console.log(data[0]);
      this.gallery = data[0] as ImageMetadata;
    });
  }

  getImages(): Observable<unknown[]> {
    const imagesCollection = collection(this.firestore, 'catalogue/charcuterie/walnut_maple_leather');
    return collectionData(imagesCollection, { idField: 'walnut_maple_leather' }) as Observable<ImageMetadata[]>;
  }
}
