import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmployeeService } from './employee.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private authService: AuthService,
              private employeeService: EmployeeService){}

  storeEmployees(){
    const token = this.authService.getToken();

    return this.http.put(
      'https://employees-database-3cdd1.firebaseio.com/employees.json?auth=' + token,
      this.employeeService.getEmployees()
    );
  }
  getEmployees(){
    const token = this.authService.getToken();

    this.http.get(
      'https://employees-database-3cdd1.firebaseio.com/employees.json?auth=' + token)
      .subscribe((response: Response) => {
        const employees: Employee[] = response.json();
        this.employeeService.setEmployees(employees);
      });
  }
}
