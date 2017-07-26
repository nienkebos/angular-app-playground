import { Component } from '@angular/core';
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

  constructor(af: AngularFireModule, db: AngularFireDatabase) {
    db.list('/book').subscribe(x => {
      this.books = x;
      console.log(this.books);
    });
  }
}
