export interface AuthState {
  token: string,
  authenticated: boolean,
  failAuth: boolean
}

export const initialAuthState: AuthState = {
  token: null,
  authenticated: false,
  failAuth: false
};
