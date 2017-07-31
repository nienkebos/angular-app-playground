import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { BooksService } from '../books.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'book-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})

export class RatingsComponent implements OnInit {
  ratings: any[] = [];
  @Input() bid;

  constructor(private booksService: BooksService, usersService: UsersService) { }

  getRatings() {
    this.booksService.getRatings(this.bid).subscribe(res => {
      if (res.length) {
        for (let rating of res) {
          let username = rating.user;
          this.usersService.getUserPerRating(username).subscribe(userDetails => {
            rating.userDetails = userDetails;
            this.ratings.push(rating);
          });
        }
      }
    })
  }

  ngOnInit() {
    this.getRatings();
    // console.log("rating", this.ratings);

  }

}
