import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employment-list',
  templateUrl: './employment-list.component.html',
  styleUrls: ['./employment-list.component.css']
})
export class EmploymentListComponent implements OnInit, OnDestroy {
  employees: Employee[];

  private subscription: Subscription;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.subscription = this.employeeService.employeeChanged.subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      }
    );
  }
  onEditUser( index: number ){
    this.employeeService.startedEditing.next(index);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
