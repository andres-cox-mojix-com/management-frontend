import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { switchMap, withLatestFrom, map } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { GraphqlCrudService } from 'src/app/graphql/graphql-crud.service';
import * as EmploymentActions from "./../actions/employment.actions";



@Injectable()
export class EmploymentEffects {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<AppState>,
    private graphqlCrudService: GraphqlCrudService
  ) { }

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
  newEmployee = this.actions$.pipe(
    ofType(EmploymentActions.ADD_EMPLOYEE),
    switchMap((action: EmploymentActions.AddEmployee) => {
      return this.graphqlCrudService.addEmployee(action.payload.employee);
    })
  );

  @Effect({ dispatch: false })
  updateEmployee = this.actions$.pipe(
    ofType(EmploymentActions.UPDATE_EMPLOYEE),
    switchMap((action: EmploymentActions.UpdateEmployee) => {
      return this.graphqlCrudService.updateEmployee(action.payload.employee);
    })
  );

  @Effect({ dispatch: false })
  deleteEmployee = this.actions$.pipe(
    ofType(EmploymentActions.DELETE_EMPLOYEE),
    switchMap((action: EmploymentActions.DeleteEmployee) => {
      return this.graphqlCrudService.deleteEmployee(action.payload.ci);
    })
  );

  @Effect()
  employeesState = this.actions$.pipe(
    ofType(EmploymentActions.FETCH_EMPLOYEES),
    switchMap((action: EmploymentActions.FetchEmployees) => {
      return this.graphqlCrudService.getEmployees();
    }),
    map(employees => {
      return {
        type: EmploymentActions.SET_EMPLOYEES,
        payload: employees.data.getEmployees
      };
    })
  );
}
