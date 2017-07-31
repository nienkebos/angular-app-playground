import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: FirebaseListObservable<any[]>;

  @Input() title;

  constructor(private booksService: BooksService) { }

  getBooks() {
    this.books = this.booksService.getBooks();
  }

  ngOnInit() {
    this.getBooks();
    // console.log(this.books);
  }

  getDetails(id: string) {
    this.booksService.getBook(id);
  }

  add() {
    this.books.push({
      title: 'New book'
    })
  }
}
