import { MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { AuthState } from './../../store/state/auth.state';
import * as AuthActions from '../../store/actions/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signinForm: NgForm;
  authState: Observable<AuthState>;
  failAuth: boolean;

  constructor(private store: Store<AppState>,
              public dialogRef: MatDialogRef<SigninComponent>) { }

  ngOnInit() {
    this.authState =this.store.select('auth')
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
    this.store.select('auth').subscribe( auth => {
      if(auth.authenticated){
        this.onCloseDialog();
      } else {
        this.signinForm.reset();
      }
    });
  }

  onCloseDialog(){
    this.dialogRef.close();
  }
}
