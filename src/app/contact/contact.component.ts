import { Component } from '@angular/core';
import { collection, doc, setDoc } from 'firebase/firestore';
import { Category } from '../components/category/category';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
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
