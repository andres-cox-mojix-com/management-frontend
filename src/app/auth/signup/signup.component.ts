import { MatDialogRef } from "@angular/material";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { AuthState } from "./../../store/state/auth.state";
import * as AuthActions from "../../store/actions/auth.actions";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  @ViewChild("f") signupForm: NgForm;
  authState: Observable<AuthState>;
  failAuth: boolean;

  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<SignupComponent>
  ) {}

  ngOnInit() {
    this.authState = this.store.select("auth");
  }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(
      new AuthActions.TrySignup({ username: email, password: password })
    );
    console.log("i am close");
    this.onCloseDialog();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}
