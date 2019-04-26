import { Employee } from './../../shared/employee.model';

export interface EmploymentState {
  employees: Employee[];
  editedEmployee: Employee;
  editedEmployeeId: string;
  editedEmployeeIndex: number;
}

export const initialEmploymentState: EmploymentState = {
  employees: [],
  editedEmployee: null,
  editedEmployeeId: '',
  editedEmployeeIndex: -1,
};
