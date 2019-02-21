import { Employee } from "../shared/employee.model";
import { Subject } from "rxjs";

export class EmployeeService {
  employeeChanged = new Subject<Employee[]>();
  startedEditing = new Subject<number>();
  forbiddenCI = [];



  private employees: Employee[] = [
    new Employee("Juan", "Delgado","8420651", "Lawyer"),
    new Employee("Luciana", "Diaz","6524553", "Secretary"),
    new Employee("Maria", "Ruiz","7844854", "Manager"),
    new Employee("Jacinto", "Bascope","1736498", "Lawyer"),
    new Employee("Elena", "Soto","6524645", "Programmer"),
    new Employee("Pedro", "Roca","10328251", "Engineer"),
    new Employee("Carlos", "Cortez","9050651", "Lawyer"),
    new Employee("Julieta", "Mendoza","3004513", "Photographer"),
    new Employee("Cintia", "Jaldin","11327651", "Economist"),
  ];

  getEmployeeCIs() {
    for (let i = 0; i < this.employees.length; i++) {
      this.forbiddenCI[i] = +this.employees[i].ciNumber;
   }
    return this.forbiddenCI.slice();
  }

  getEmployees() {
    return this.employees.slice();
  }

  getEmployee(index: number) {
    return this.employees[index];
  }

  addEmployee(employee: Employee) {
    employee.ciNumber = employee.ciNumber.toString();
    this.employees.push(employee);
    this.employeeChanged.next(this.employees.slice());
  }
  updateEmployee(index: number, newEmployee: Employee) {
    newEmployee.ciNumber = newEmployee.ciNumber.toString();
    this.employees[index] = newEmployee;
    this.employeeChanged.next(this.employees.slice());
  }
  removeEmployee(index: number) {
    this.employees.splice(index, 1);
    this.employeeChanged.next(this.employees.slice());
  }
}
