import * as EmploymentActions from "../actions/employment.actions";
import {
  EmploymentState,
  initialEmploymentState
} from "../state/employment.state";

export const EmploymentReducer = (
  state = initialEmploymentState,
  action: EmploymentActions.EmploymentActions
): EmploymentState => {
  switch (action.type) {
    case EmploymentActions.SET_EMPLOYEES:
      return {
        ...state,
        employees: [...action.payload]
      };
    case EmploymentActions.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload.employee]
      };
    case EmploymentActions.UPDATE_EMPLOYEE:
      for (let emp of state.employees) {
        if (emp.id === action.payload.employee.id) {
          const employee = emp;
          const updatedEmployee = {
            ...employee,
            ...action.payload.employee
          };
          var employees = [...state.employees];
          const objIndex = employees.findIndex((obj => obj.id == emp.id));
          employees[objIndex] = updatedEmployee;
        }
      }
      return {
        ...state,
        employees: employees,
        editedEmployee: null,
        editedEmployeeIndex: -1
      };
    case EmploymentActions.DELETE_EMPLOYEE:
      const oldEmployees = [...state.employees];
      const objIndex = oldEmployees.findIndex((obj => obj.id == action.payload.id));
      oldEmployees.splice(objIndex, 1);
      return {
        ...state,
        employees: oldEmployees
      };
    case EmploymentActions.START_EDIT:
      for (let emp of state.employees) {
        if (emp.id === action.payload.id) {
          const editedEmp = emp;
          return {
            ...state,
            editedEmployee: editedEmp,
            editedEmployeeId: editedEmp.id,
            editedEmployeeIndex: action.payload.index
          };
        }
      }
    case EmploymentActions.STOP_EDIT:
      return {
        ...state,
        editedEmployee: null,
        editedEmployeeIndex: -1
      };
    default:
      return state;
  }
};