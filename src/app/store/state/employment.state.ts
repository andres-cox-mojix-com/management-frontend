import { Employee } from './../../shared/employee.model';

export interface EmploymentState {
  employees: Employee[];
  editedEmployee: Employee;
  editedEmployeeIndex: number;
}

export const initialEmploymentState: EmploymentState = {
  employees: [
    new Employee("Juan", "Delgado", "8420651", "Accountant"),
    new Employee("Luciana", "Diaz", "6524553", "Economist"),
    new Employee("Maria", "Ruiz", "7844854", "Photographer"),
    new Employee("Jacinto", "Bascope", "1736498", "Accountant"),
    new Employee("Elena", "Soto", "6524645", "Programmer"),
    new Employee("Pedro", "Roca", "10328251", "Engineer"),
    new Employee("Carlos", "Cortez", "9050651", "Accountant"),
    new Employee("Julieta", "Mendoza", "3004513", "Photographer"),
    new Employee("Cintia", "Jaldin", "11327651", "Economist"),
    new Employee("Carlos", "Cabrera", "3127651", "Programmer"),
  ],
  editedEmployee: null,
  editedEmployeeIndex: -1,
};
