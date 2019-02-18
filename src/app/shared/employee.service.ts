
import { Employee } from "../shared/employee.model"
import { Subject } from 'rxjs';

export class EmployeeService {
  employeeChanged = new Subject<Employee[]>();
  startedEditing = new Subject<number>();

  private employees: Employee[]=[
    new Employee('Juan', 'Delgado', 'Lawyer'),
    new Employee('Luciana', 'Diaz', 'Secretary')
  ];

  getEmployees(){
    return this.employees.slice();
  }
  addEmployee(employee: Employee){
    this.employees.push(employee);
    this.employeeChanged.next(this.employees.slice());
  }
  removeEmployee(){
    
  }

}
