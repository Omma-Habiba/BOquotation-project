import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, getApp , initializeApp} from '@angular/fire/app';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { getFirestore, provideFirestore} from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAHyp5DfrgbEiftp-gRZ9eRSyojmwahsvc",
  authDomain: "projetangularefrei.firebaseapp.com",
  projectId: "projetangularefrei",
  storageBucket: "projetangularefrei.appspot.com",
  messagingSenderId: "769501731876",
  appId: "1:769501731876:web:57d28895e0da33b79f4cb1",
  measurementId: "G-BL7JK8BYS8"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())]), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))
  ]  
};
