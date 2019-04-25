import { AuthState, initialAuthState } from './auth.state';
import { EmploymentState, initialEmploymentState } from './employment.state';

export interface AppState {
  auth: AuthState,
  employment: EmploymentState

}
export const initialAppState: AppState = {
  auth: initialAuthState,
  employment: initialEmploymentState
}
