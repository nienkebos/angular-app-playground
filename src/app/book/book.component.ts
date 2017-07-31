import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { BooksService } from '../books.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: FirebaseObjectObservable<any>;
  @Input() bid;

  constructor(private booksService: BooksService) { }

  getBook() {
    this.booksService.getBook(this.bid).subscribe(res => {
      this.book = res;
    });
  }

  ngOnInit() {
    this.getBook();
  }

  // showRatings(key: string) {
  //   return key;
  // }

  // update() {
  // }

  removeItem(key: string) {
    console.log(key + ' deleted');
  }
}
