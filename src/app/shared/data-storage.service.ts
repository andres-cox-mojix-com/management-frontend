import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmployeeService } from './employee.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private employeeService: EmployeeService){}

  storeEmployees(){

    return this.http.put(
      'https://employees-database-3cdd1.firebaseio.com/employees.json',
      this.employeeService.getEmployees()
    );
  }
  getEmployees(){
    this.http.get(
      'https://employees-database-3cdd1.firebaseio.com/employees.json')
      .subscribe((response: Response) => {
        const employees: Employee[] = response.json();
        this.employeeService.setEmployees(employees);
      });
  }
}
