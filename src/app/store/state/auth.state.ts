export interface AuthState {
  token: string;
  authenticated: boolean
}

export const initialAuthState: AuthState = {
  token: null,
  authenticated: false
};
