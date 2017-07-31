import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { BooksService } from '../books.service';


@Component({
  selector: 'book-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  ratings: FirebaseListObservable<any[]>;
  book;
  @Input() bid;

  constructor(private booksService: BooksService) { }
  getRatings() {
    this.ratings = this.booksService.getRatings(this.bid);
    // this.book = this.booksService.getBook();
  }

  ngOnInit() {
    this.getRatings();
  }

}
