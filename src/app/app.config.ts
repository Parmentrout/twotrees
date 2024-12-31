import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideClientHydration(withEventReplay()), 
    provideAnimationsAsync(), 
    provideFirebaseApp(() => initializeApp({ projectId: "two-trees-woodworking", appId: "1:329365960193:web:7c24115e68520e703c3200", storageBucket: "two-trees-woodworking.firebasestorage.app", apiKey: "AIzaSyApQPWbG3LeNZzDogi2m7PhC7G0RSd6-aQ", authDomain: "two-trees-woodworking.firebaseapp.com", messagingSenderId: "329365960193", measurementId: "G-HFEE6LTZCC" })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
