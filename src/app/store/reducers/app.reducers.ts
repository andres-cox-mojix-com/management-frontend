import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../state/app.state'
import { AuthReducer } from './auth.reducers';
import { EmploymentReducer } from './employment.reducers';

export const appReducers: ActionReducerMap<AppState> = {
  auth: AuthReducer,
  employment: EmploymentReducer,

};



