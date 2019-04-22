import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";

import { switchMap, withLatestFrom, map } from "rxjs/operators";

import { Employee } from "./../../shared/employee.model";

import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { Actions, Effect, ofType } from "@ngrx/effects";
// import { EmploymentState } from "./../state/employment.state";
import * as EmploymentActions from "./../actions/employment.actions";
import { employeesList } from "src/app/store/selectors/employment.selectors";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable()
export class EmploymentEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<AppState>,
    private apollo: Apollo
  ) {}

  // @Effect()
  // employeeFetch = this.actions$.pipe(
  //   ofType(EmploymentActions.FETCH_EMPLOYEES),
  //   switchMap((action: EmploymentActions.FetchEmployees) => {
  //     return this.httpClient.get<Employee[]>(
  //       "https://employees-database-3cdd1.firebaseio.com/employees.json",
  //       {
  //         observe: "body",
  //         responseType: "json"
  //       }
  //     );
  //   }),
  //   map(employees => {
  //     return {
  //       type: EmploymentActions.SET_EMPLOYEES,
  //       payload: employees
  //     };
  //   })
  // );

  @Effect({ dispatch: false })
  employeeStore = this.actions$.pipe(
    ofType(EmploymentActions.STORE_EMPLOYEES),
    withLatestFrom(this.store.select("employment")),
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

  @Effect({ dispatch: false })
  employeeStateTest = this.actions$.pipe(
    ofType(EmploymentActions.ADD_EMPLOYEE),
    switchMap((action: EmploymentActions.AddEmployee) => {
      const newEmp = this.apollo.mutate({
        mutation: gql`
          mutation addEmployee($name: String!) {
            addEmployee(
              name: $name
              lastname: "Pinto"
              cinumber: "7945123"
              birthdate: "11/02/1990"
              address: "784 St. 7, Achumani, LP"
              phone: "7941123"
              role: "Programmer"
              profession: "Systems Engineering"
            ) {
              name
              lastname
              cinumber
              birthdate
              address
              phone
              role
              profession
            }
          }
        `,
        variables: {
          name: action.payload.employee.name
        }
      });
      // console.log(newEmp);
      console.log(action.payload.employee.name);
      console.log(action.payload.employee);
      return newEmp;
    })
  );

  @Effect()
  employees = this.actions$.pipe(
    ofType(EmploymentActions.FETCH_EMPLOYEES),
    switchMap((action: EmploymentActions.FetchEmployees) => {
      const employeesGQL = this.apollo.query<any>({
        query: gql`
          query getEmployeesState {
            getEmployees {
              name
              lastname
              cinumber
              birthdate
              address
              phone
              role
              profession
            }
          }
        `
      });
      console.log(employeesGQL.subscribe(res => console.log(res.data.getEmployees)));
      return employeesGQL;
    }),
    map(employees => {
      console.log(employees);
      return {
        type: EmploymentActions.SET_EMPLOYEES,
        payload: employees.data.getEmployees
      };
    })
  );
}
