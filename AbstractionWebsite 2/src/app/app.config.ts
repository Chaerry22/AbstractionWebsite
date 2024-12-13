import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ 
    apiKey: "AIzaSyBIz8X4qivvIudpXOfPwq7pSXwYx7_0J6o",
    authDomain: "abstractionwebsite-89f4f.firebaseapp.com",
    projectId: "abstractionwebsite-89f4f",
    storageBucket: "abstractionwebsite-89f4f.firebasestorage.app",
    messagingSenderId: "913897075753",
    appId: "1:913897075753:web:135f8330d4d348242f1838",
    measurementId: "G-GSM0TRHTBD"
  })), provideFirestore(() => getFirestore())]
};
