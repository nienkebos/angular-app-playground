import { Component, OnInit, Input } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: FirebaseListObservable<any[]>;

  @Input() title;
  
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.books = this.db.list('/books', {
      query: {
        orderByChild: 'author',
      }
    });
  }

  add() {
    this.books.push({
      title: 'New book'
    })
  }

  // update() {
  // }

  removeItem(key: string) {
    console.log(key + ' deleted');
  }

}
