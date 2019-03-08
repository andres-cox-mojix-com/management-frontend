import { Action } from '@ngrx/store';
import { Employee } from './../../shared/employee.model';

export const GET_EMPLOYEES_CI = 'GET_EMPLOYEES_CI';
export const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const STORE_EMPLOYEES = 'STORE_EMPLOYEES';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';

export class GetEmployeesCI implements Action {
  readonly type = GET_EMPLOYEES_CI;

  constructor(public payload: Employee[]){}
}

export class SetEmployees implements Action {
  readonly type = SET_EMPLOYEES;

  constructor(public payload: Employee[]){}
}

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;

  constructor(public payload: Employee){}
}

export class UpdateEmployee implements Action {
  readonly type = UPDATE_EMPLOYEE;

  constructor(public payload: {index: number, updatedEmployee: Employee}){}
}

export class DeleteEmployee implements Action {
  readonly type = DELETE_EMPLOYEE;

  constructor(public payload: number){}
}

export class StoreEmployees implements Action {
  readonly type = STORE_EMPLOYEES;

  constructor(public payload: Employee[]){}
}

export class FetchEmployees implements Action {
  readonly type = FETCH_EMPLOYEES;

  constructor(public payload: Employee[]){}
}

export type EmploymentActions =
  SetEmployees |
  AddEmployee |
  UpdateEmployee |
  DeleteEmployee |
  StoreEmployees |
  FetchEmployees;
