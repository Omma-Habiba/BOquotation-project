import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

@Component({
  standalone: true,
  imports : [CommonModule],
  selector: 'app-get-quotes',
  templateUrl: './get-quotes.component.html',
  styleUrls: ['./get-quotes.component.css']
})

export class GetQuotesComponent implements OnInit, OnDestroy {
  allQuotes: any[] = [];
  displayedQuotes: any[] = [];
  selectedQuote: any = null;
  filter: 'all' | 'pending' | 'processed' = 'all';
  private unsubscribeFromQuotes: Function | null = null;
  firestore: Firestore = inject(Firestore);

  ngOnInit(): void {
    const q = query(collection(this.firestore, 'quotes'));

    this.unsubscribeFromQuotes = onSnapshot(q, (snapshot) => {
      this.allQuotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.applyFilter();
    });
  }

  applyFilter(): void {
    switch (this.filter) {
      case 'all':
        this.displayedQuotes = [...this.allQuotes];
        break;
      case 'pending':
        this.displayedQuotes = this.allQuotes.filter(
          (quote) => quote.quotation === ''
        );
        break;
      case 'processed':
        this.displayedQuotes = this.allQuotes.filter(
          (quote) => quote.quotation !== ''
        );
        break;
    }
    this.selectedQuote = null;
  }

  async deleteQuote(quoteId: string): Promise<void> {
    try {
      await deleteDoc(doc(this.firestore, 'quotes', quoteId));
      alert('Demande supprimée avec succès.');
    } catch (error) {
      console.error('Erreur lors de la suppression de la demande', error);
      alert('Erreur lors de la suppression. Veuillez réessayer.');
    }
  }
  
  async selectQuote(quote: any): Promise<void> {
    this.selectedQuote = quote;
    const storage = getStorage();
    const imageRef = ref(storage, quote.imageUrl);

    this.selectedQuote.imageUrl = await getDownloadURL(imageRef);
  }

  setFilter(filter: 'all' | 'pending' | 'processed'): void {
    this.filter = filter;
    this.applyFilter();
  }

  ngOnDestroy(): void {
    if (this.unsubscribeFromQuotes) this.unsubscribeFromQuotes();
  }
}