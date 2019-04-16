import { initialAuthState, AuthState } from '../state/auth.state';
import * as AuthActions from '../actions/auth.actions';

export const AuthReducer = (
  state = initialAuthState,
  action: AuthActions.AuthActions
  ): AuthState => {
  switch (action.type){
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
