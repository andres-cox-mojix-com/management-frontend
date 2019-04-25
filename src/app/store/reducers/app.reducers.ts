import { ActionReducerMap, compose, combineReducers } from '@ngrx/store';

import { AppState } from '../state/app.state'
import { AuthReducer } from './auth.reducers';
import { EmploymentReducer } from './employment.reducers';
import { InjectionToken } from '@angular/core';

export const appReducers: ActionReducerMap<AppState> = {
  auth: AuthReducer,
  employment: EmploymentReducer
};

export const reducers = {
  AuthReducer,
  EmploymentReducer
};

export const rootReducer = compose(combineReducers)(reducers)
export function reducer(state, action) {
  return rootReducer(state, action);
}

export const REDUCERS_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('App Reducers');
export const reducerProvider = { provide: REDUCERS_TOKEN, useValue: appReducers };
