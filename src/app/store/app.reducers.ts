import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as fromEmployment from '../employment/store/employment.reducers';
// import * as fromAuth from '../auth/store/auth.reducers'

export const reducers: ActionReducerMap<AppState> = {
  employment: fromEmployment.employmentReducer
  // auth: fromAuth.authReducer
}

export interface AppState {
  employment: fromEmployment.State;
  // auth: fromAuth.State
}

export interface FeatureState {
  ciNumber: string;
}

export const selectFeature = createFeatureSelector<AppState, FeatureState>('ciNumber');

export const selectFeatureCount = createSelector(
  selectFeature,
  (state: FeatureState) => state.ciNumber
);
