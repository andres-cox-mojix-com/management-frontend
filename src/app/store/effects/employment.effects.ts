import { Injectable } from "@angular/core";
import { switchMap, map } from "rxjs/operators";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { GraphqlCrudService } from 'src/app/graphql/graphql-crud.service';
import * as EmploymentActions from "./../actions/employment.actions";



@Injectable()
export class EmploymentEffects {
  constructor(
    private actions$: Actions,
    private graphqlCrudService: GraphqlCrudService
  ) { }

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
