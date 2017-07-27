import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';


export const firebaseConfig = {
    apiKey: "AIzaSyCGuQWghaSuTO7EPA_oJFhlFFhGyIYLPBw",
    authDomain: "my-app-15beb.firebaseapp.com",
    databaseURL: "https://my-app-15beb.firebaseio.com",
    projectId: "my-app-15beb",
    storageBucket: "my-app-15beb.appspot.com",
    messagingSenderId: "167787124773"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
