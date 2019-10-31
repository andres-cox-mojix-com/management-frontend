import { Action } from "@ngrx/store";

export const TRY_SIGNIN = "TRY_SIGNIN";
export const TRY_SIGNUP = "TRY_SIGNUP";
export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const SET_TOKEN = "SET_TOKEN";
export const FAIL_AUTH = "FAIL_AUTH";

export class TrySignin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: { username: string; password: string }) {}
}

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: { username: string; password: string }) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
}

export class Signup implements Action {
  readonly type = SIGNUP;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export class FailAuth implements Action {
  readonly type = FAIL_AUTH;

  constructor(public payload: boolean) {}
}
export type AuthActions =
  | Signin
  | Signup
  | Logout
  | SetToken
  | FailAuth
  | TrySignin
  | TrySignup;
