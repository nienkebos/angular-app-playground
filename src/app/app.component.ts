import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  books: FirebaseListObservable<any[]>;
  users: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.users = this.db.list('/users');
    this.books = this.db.list('/books');
    console.log(this.users)
  }
  add() {
    this.books.push({
      title: 'New book'
    })
  }
  update() {
    this.db.list('/books').update('book1', {
      author: 'Zadie Smith',
      title: 'Swing Time'
    });
  }
  removeItem(key: string) {
    console.log(key + ' deleted');
  }
}
