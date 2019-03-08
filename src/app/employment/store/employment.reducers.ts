import { Employee } from "./../../shared/employee.model";
import * as EmploymentActions from "./employment.actions";

export interface State {
  employees: Employee[];
}

export const initialState: State = {
  employees: [
    new Employee("Juan", "Delgado", "8420651", "Accountant"),
    new Employee("Luciana", "Diaz", "6524553", "Economist"),
    new Employee("Maria", "Ruiz", "7844854", "Photographer"),
    new Employee("Jacinto", "Bascope", "1736498", "Accountant"),
    new Employee("Elena", "Soto", "6524645", "Programmer"),
    new Employee("Pedro", "Roca", "10328251", "Engineer"),
    new Employee("Carlos", "Cortez", "9050651", "Accountant"),
    new Employee("Julieta", "Mendoza", "3004513", "Photographer"),
    new Employee("Cintia", "Jaldin", "11327651", "Economist")
  ]
};

export function employmentReducer(
  state = initialState,
  action: EmploymentActions.EmploymentActions
) {
  switch (action.type) {
    case EmploymentActions.SET_EMPLOYEES:
      return {
        ...state,
        employees: [...action.payload]
      };
    case EmploymentActions.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case EmploymentActions.UPDATE_EMPLOYEE:
      const employee = state.employees[action.payload.index];
      const updatedEmployee = {
        ...employee,
        ...action.payload.updatedEmployee
      };
      const employees = [...state.employees];
      employees[action.payload.index] = updatedEmployee;
      return {
        ...state,
        employees: employees
      };
    case EmploymentActions.DELETE_EMPLOYEE:
      const oldEmployees = [...state.employees];
      oldEmployees.splice(action.payload, 1);
      return {
        ...state,
        employees: oldEmployees
      };
    default:
      return state;
  }
}
