import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SigninComponent } from './../auth/signin/signin.component';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { AuthState } from './../store/state/auth.state';
import * as AuthActions  from './../store/actions/auth.actions';
import * as EmploymentActions from './../store/actions/employment.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<AuthState>;

  constructor(private store: Store<AppState>,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  login(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    this.dialog.open(SigninComponent,dialogConfig);
  }

  onSaveData(){
    this.store.dispatch(new EmploymentActions.StoreEmployees());
  }

  onFetchData(){
    this.store.dispatch(new EmploymentActions.FetchEmployees());
  }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
  }
}
