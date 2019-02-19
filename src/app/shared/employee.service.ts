import { Employee } from "../shared/employee.model";
import { Subject } from "rxjs";

export class EmployeeService {
  employeeChanged = new Subject<Employee[]>();
  startedEditing = new Subject<number>();

  private employees: Employee[] = [
    new Employee("Juan", "Delgado","8420651", "Lawyer"),
    new Employee("Luciana", "Diaz","6524553", "Secretary"),
    new Employee("Maria", "Ruiz","17327651", "Manager"),
  ];

  getEmployees() {
    return this.employees.slice();
  }
  getEmployee(index: number) {
    return this.employees[index];
  }
  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeeChanged.next(this.employees.slice());
  }
  updateEmployee(index: number, newEmployee: Employee) {
    this.employees[index] = newEmployee
    this.employeeChanged.next(this.employees.slice());
  }
  removeEmployee(index: number) {
    this.employees.splice(index, 1);
    this.employeeChanged.next(this.employees.slice());
  }
}
