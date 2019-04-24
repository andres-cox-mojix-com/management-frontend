import { Action } from "@ngrx/store";

export const TRY_SIGNIN = 'TRY_SIGNIN';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const FAIL_AUTH = 'FAIL_AUTH';

export class TrySignin implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: {username: string, password: string}) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string){}
}

export class FailAuth implements Action {
  readonly type = FAIL_AUTH;

  constructor(public payload: boolean){}
}
export type AuthActions =
  Signin |
  Logout |
  SetToken |
  FailAuth |
  TrySignin;
