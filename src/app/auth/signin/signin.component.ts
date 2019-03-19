import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import * as AuthActions from '../../store/actions/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<AppState>,
              public dialogRef: MatDialogRef<SigninComponent>) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
      const email = form.value.email;
      const password = form.value.password;
      this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
      this.dialogRef.close();
  }
  onCloseDialog(){
      this.dialogRef.close();
  }
}
