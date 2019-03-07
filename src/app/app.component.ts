import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'employment'

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBFQGehUfwPdboaQ2lV666INtHTYXEq1fQ",
      authDomain: "employees-database-3cdd1.firebaseapp.com"
    })
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }

}
