import * as EmploymentActions from "../actions/employment.actions";
import {
  EmploymentState,
  initialEmploymentState
} from "../state/employment.state";

export const EmploymentReducer = (
  state = initialEmploymentState,
  action: EmploymentActions.EmploymentActions
): EmploymentState => {
  // export function EmploymentReducer (
  //   state = initialEmploymentState,
  //   action: EmploymentActions.EmploymentActions
  // ) {
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
      const employee = state.employees[state.editedEmployeeIndex];
      const updatedEmployee = {
        ...employee,
        ...action.payload.employee
      };
      const employees = [...state.employees];
      employees[state.editedEmployeeIndex] = updatedEmployee;
      return {
        ...state,
        employees: employees,
        editedEmployee: null,
        editedEmployeeIndex: -1
      };
    case EmploymentActions.DELETE_EMPLOYEE:
      const oldEmployees = [...state.employees];
      oldEmployees.splice(action.payload.index, 1);
      return {
        ...state,
        employees: oldEmployees
      };
    case EmploymentActions.START_EDIT:
      for (let i of state.employees) {
        if(i.id === action.payload.id){
          const editedEmp = i;
          return {
            ...state,
            editedEmployee: editedEmp,
            editedEmployeeIndex: action.payload.index+1
          };
        }
      }
      // const editedEmployee = { ...state.employees[action.payload.index] };
      // console.log(editedEmployee);
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
