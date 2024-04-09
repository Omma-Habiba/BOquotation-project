import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuotesService {

  constructor(private firestore: Firestore) { }

  getQuotes(): Observable<any[]> {
    const quotes  = collection(this.firestore ,'quotes');
    return collectionData(quotes)
  }

  
}

