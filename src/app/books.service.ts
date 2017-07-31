import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class BooksService {
  books: FirebaseListObservable<any[]>;
  book: FirebaseObjectObservable<any>;
  ratings: Observable<any[]>;
  users: Observable<any[]>;

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
    this.ratings = this.db.list('/books/'+ book + '/ratings')
      // .map(ratings => {
      //   ratings.map(rating => {
      //     if (rating.user == this.db.object('/users/' + key))
      //       rating.user = this.db.object('/users/' + $key);
      //   })
      //   return ratings;
      // });
    return this.ratings
  }

  getRating(rating) {
    return this.db.object('/books/' + book + '/ratings/' + rating);
  }

}
