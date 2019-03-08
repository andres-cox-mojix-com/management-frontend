import { Component, OnInit, OnDestroy } from "@angular/core";
import { Employee } from "../../shared/employee.model";
import { EmployeeService } from "../../shared/employee.service";
import { Subscription, Observable } from "rxjs";
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';


@Component({
  selector: "app-employment-list",
  templateUrl: "./employment-list.component.html",
  styleUrls: ["./employment-list.component.css"]
})
export class EmploymentListComponent implements OnInit, OnDestroy {
  employees: Employee[];
  employmentState: Observable<{employees: Employee[]}>;
  state: Observable<{employees: Employee[]}>;


  // private subscription: Subscription;

  constructor(private employeeService: EmployeeService,
              private store: Store<fromApp.AppState>) {}
              // private store: Store<{employment: {employees: Employee[]}}>) {}

  ngOnInit() {
    // this.employees = this.employeeService.getEmployees();
    // this.subscription = this.employeeService.employeeChanged.subscribe(
    //   (employees: Employee[]) => {
    //     this.employees = employees;
    //   }
    // );
    // this.employmentState = this.store.select('employment');
    this.store.select('employment').subscribe(stateEmployee => { this.employees = stateEmployee.employees});
    // console.log(this.employmentState);

  }
  onEditUser(index: number) {
    this.employeeService.startedEditing.next(index);
  }

  searchEmployee($event) {
    console.log("i am searching");
    const keyword = $event.target.value;
    if (keyword !== '') {
      this.employees = this.employees.filter(result => {
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

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
