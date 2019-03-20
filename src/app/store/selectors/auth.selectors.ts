import { AuthState } from './../state/auth.state';
import { AppState } from "../state/app.state";
import { createSelector } from "@ngrx/store";

export const selectAuthState = (state: AppState) => state.auth;

export const employeesList = createSelector(
  selectAuthState,
  (state: AuthState) => state.authenticated
);
