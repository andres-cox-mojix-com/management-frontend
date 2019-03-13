import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";

import { switchMap, withLatestFrom, map } from "rxjs/operators";

import { Employee } from "./../../shared/employee.model";

import { Store } from "@ngrx/store";
import { AppState } from 'src/app/store/state/app.state';
import { Actions, Effect, ofType } from "@ngrx/effects";
// import { EmploymentState } from "./../state/employment.state";
import * as EmploymentActions from "./../actions/employment.actions";

@Injectable()
export class EmploymentEffects {

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<AppState>
  ) {}

  @Effect()
  employeeFetch = this.actions$.pipe(
    ofType(EmploymentActions.FETCH_EMPLOYEES),
    switchMap((action: EmploymentActions.FetchEmployees) => {
      return this.httpClient.get<Employee[]>(
        "https://employees-database-3cdd1.firebaseio.com/employees.json",
        {
          observe: "body",
          responseType: "json"
        }
      );
    }),
    map(employees => {
      return {
        type: EmploymentActions.SET_EMPLOYEES,
        payload: employees
      };
    })
  );

  @Effect({ dispatch: false })
  employeeStore = this.actions$.pipe(
    ofType(EmploymentActions.STORE_EMPLOYEES),
    withLatestFrom(this.store.select('employment')),
    switchMap(([action, state]) => {
      const req = new HttpRequest(
        "PUT",
        "https://employees-database-3cdd1.firebaseio.com/employees.json",
        state.employees,
        { reportProgress: true }
      );
      return this.httpClient.request(req);
    })
  );


}
