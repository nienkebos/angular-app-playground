import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'; // just mergeMap

import { BooksService } from '../books.service';


@Component({
  selector: 'book-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  ratings: any[] = [];

  book;
  @Input() bid;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.getRatings();
  }

  getRatings() {
    this.booksService.getRatings(this.bid).subscribe(res => {

      if(res.length) {

        for(let rating of res) {
          let username = rating.user;

          this.booksService.getUserPerRating(username).subscribe(ratingDetails => {
            rating.ratingDetails =  ratingDetails;
            this.ratings.push(rating);
          });
        }
      }
    })
  }



}
