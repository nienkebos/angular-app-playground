import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  books;

  constructor(af: AngularFireModule, private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.books = this.db.list('/book');
  }

}
