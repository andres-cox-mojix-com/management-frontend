import { Employee } from './../../shared/employee.model';

export interface EmploymentState {
  employees: Employee[];
  editedEmployee: Employee;
  editedEmployeeIndex: number;
}

export const initialEmploymentState: EmploymentState = {
  employees: [],
  editedEmployee: null,
  editedEmployeeIndex: -1,
};
