import { Employee } from "../shared/employee.model";
import { Subject } from "rxjs";

export class EmployeeService {
  employeeChanged = new Subject<Employee[]>();
  startedEditing = new Subject<number>();

  private employees: Employee[] = [
    new Employee("Juan", "Delgado", "Lawyer"),
    new Employee("Luciana", "Diaz", "Secretary"),
    new Employee("Maria", "Ruiz", "Manager"),
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
