import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

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
  // exists;
  user: Observable<firebase.User>;
  displayName;
  photoUrl;

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.user = this.afAuth.authState;
    // this.user.subscribe(authState => {
    //   if (!authState)
    //     console.log("Not logged in");
    //   else {
    //     // console.log(authState);
    //   }
    // })

    // this.users = this.db.list('/users')
    //   .map(users => {
    //     users.map(user => {
    //       user.booksRead = [];
    //       for (var b in user.books)
    //         user.booksRead.push(this.db.object('/books/' + b))
    //     });
    //     return users;
    //   });
  }

  register() {
    this.afAuth.auth.createUserWithEmailAndPassword('email2@email.com', 'p@ssword')
      .then(authState => {
        console.log("Register then", authState);
      })
      .catch( error => console.log("Register-error", error));
  }

  login() {
    // this.afAuth.auth.signInWithPopup( new firebase.auth.EmailAuthProvider());
  }

  logout() {
    // this.afAuth.auth.signOut();
  }

    // check if an object exists:
    // this.exists = this.db.object('users/user1/books/book1');
    // this.exists.subscribe(x => {
    //   console.log(x)
    // })


}
