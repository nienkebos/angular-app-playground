import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'app';
  books: FirebaseListObservable<any[]>;
  users: Observable<any[]>;
  exists;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.users = this.db.list('/users')
      .map(users => {
        users.map(user => {
          user.booksRead = [];
          for (var b in user.books)
            user.booksRead.push(this.db.object('/books/' + b))
        });
        return users;
      });

    // check if an object exists:
    // this.exists = this.db.object('users/user1/books/book1');
    // this.exists.subscribe(x => {
    //   console.log(x)
    // })
  }

}
