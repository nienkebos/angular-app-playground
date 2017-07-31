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
  ratings: Observable<any[]>;
  @Input() bid;

  constructor(private booksService: BooksService) { }
  getRatings() {
    this.ratings = this.booksService.getRatings(this.bid)
      
  }

  ngOnInit() {
    this.getRatings();
    // console.log("rating", this.ratings);

  }

}
