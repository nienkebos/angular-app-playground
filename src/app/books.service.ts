import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { BooksComponent } from './books/books.component';

@Injectable()
export class BooksService {
  books: FirebaseListObservable<any[]>;
  book: FirebaseObjectObservable<any>;
  ratings: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getBooks() {
    this.books = this.db.list('/books', {
      // query: {
      //   orderByChild: 'author',
      // }
    });
    return this.books;
  }

  getBook(book) {
    return this.db.object('/books/' + book);
  }

  getRatings(book) {
    this.ratings = this.db.list('/books/'+ book + '/ratings');
    return this.ratings
  }

}
