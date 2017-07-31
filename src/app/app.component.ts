import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'app';
  users: Observable<any[]>;
  user: FirebaseObjectObservable<any>;
  uid;

  constructor(private usersService: UsersService) {
  }

  getUsers() {
    this.users = this.usersService.getUsers();
  }

  getUser() {
    this.usersService.getUser(this.uid).subscribe(res => {
      this.user = res;
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
