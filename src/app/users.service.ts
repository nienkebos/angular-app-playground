import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
  users: Observable<any[]>;
  user: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  getUsers() {
   this.users = this.db.list('/users')
      .map(users => {
        users.map(user => {
          user.booksRead = [];
          for (var b in user.books)
            user.booksRead.push(this.db.object('/books/' + b));
        });
        return users;
      });
    return this.users;
  }

  getUser(user) {
    return this.db.object('/users/' + user);
  }

  getUserPerRating(username) {
    return this.db.object('/users/' + username);
  }

}
