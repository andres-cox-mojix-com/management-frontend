import { Component, OnInit, OnDestroy } from "@angular/core";
import { Employee } from "../shared/employee.model";
import { EmployeeService } from "../shared/employee.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-employment-list",
  templateUrl: "./employment-list.component.html",
  styleUrls: ["./employment-list.component.css"]
})
export class EmploymentListComponent implements OnInit, OnDestroy {
  employees: Employee[];

  private subscription: Subscription;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.subscription = this.employeeService.employeeChanged.subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      }
    );
  }
  onEditUser(index: number) {
    this.employeeService.startedEditing.next(index);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
