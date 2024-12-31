import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Category } from './category/category';
import { CategoryComponent } from './category/category.component';
import { CommonModule } from '@angular/common';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatIcon, CategoryComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private fireStore: Firestore) {}
  categories: Category[] = [
    {
      title: 'Tables',
      description: 'lorem'
    },
    {
      title: 'Charcuterie Boards',
      description: 'Put something amazing here'
    }
  ];

  async updateData() {
    const collectionName = 'test'; // Replace with your Firestore collection
    const docId = '2'; // Replace with your document ID
    const data = { fieldName: 'newValue' }; // Replace with your data

    const collectionRef = collection(this.fireStore, collectionName);
    const docRef = doc(collectionRef, docId);
    try {
      await setDoc(docRef, { fieldName: 'newValue' });
      console.log('Document updated successfully');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }
}
