import { Employee } from "./../../shared/employee.model";
import { AppState } from "../state/app.state";
import { createSelector } from "@ngrx/store";
import { EmploymentState } from "../state/employment.state";

export const selectEmployees = (state: AppState) => state.employment;

export const filterEmployees = createSelector(
  selectEmployees,
  (state: EmploymentState, props: any) => state.employees
  .filter((employee: Employee)  => {
    return (
      employee.cinumber.match(props.keyword) ||
      employee.name.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
      employee.lastname.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
      employee.birthdate.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
      employee.address.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
      employee.phone.match(props.keyword) ||
      employee.role.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase()) ||
      employee.profession.toLocaleLowerCase().match(props.keyword.toLocaleLowerCase())
      );
    })
);

export const employeesCI = createSelector(
  selectEmployees,
  (state: EmploymentState) => state.employees.map((employees)=> +employees.cinumber)
);

export const employeesList = createSelector(
  selectEmployees,
  (state: EmploymentState) => state.employees
);
