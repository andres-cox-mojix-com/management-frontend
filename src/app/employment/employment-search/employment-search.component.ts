import { Employee } from './../../shared/employee.model';
import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-search',
  templateUrl: './employment-search.component.html',
  styleUrls: ['./employment-search.component.css']
})
export class EmploymentSearchComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
  }
  searchEmployee($event) {
    console.log("i am searching");
    const keyword = $event.target.value;
    if (keyword !== '') {
      debugger;
      this.employees = this.employeeService.getEmployees().filter(result => {
        return (
          result.ciNumber.toLocaleLowerCase().match(keyword.toLocaleLowerCase()) ||
          result.name.toLocaleLowerCase().match(keyword.toLocaleLowerCase()) ||
          result.lastname.toLocaleLowerCase().match(keyword.toLocaleLowerCase()) ||
          result.charge.toLocaleLowerCase().match(keyword.toLocaleLowerCase())
          );
        });
    } else if (keyword === '') {
      this.ngOnInit();
    }
  }
}
