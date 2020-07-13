import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/store/state/app.state";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Employee } from "src/app/shared/employee.model";
import { Project } from "src/app/shared/project.model";
import * as EmploymentActions from "../store/actions/employment.actions";
import { employeesAvatar } from "src/app/store/selectors/employment.selectors";

@Component({
  selector: "app-assignments",
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.css"]
})
export class AssignmentsComponent implements OnInit {
  employmentState: Observable<Employee[]>;
  projects: Project[] = [
    new Project(
      "0345345vtv",
      "e-commerce-app",
      "Bill White",
      "The client desires an e-commerece web page for his t-shirts brand",
      ["7945656", "6485234", "3456585"],
      []
    ),
    new Project(
      "dasd231",
      "blog-webpage",
      "Nick Reed",
      "A CMS app for a travel blog",
      ["3456585", "1987414"],
      []
    ),
    new Project(
      "kvmkc123",
      "restaurant-web",
      "Tomas Page",
      "A single page aplication with delivery service",
      ["3456585", "7945656"],
      []
    ),
    new Project(
      "fjandj43",
      "hotel-web",
      "Rachel Owen",
      "A web with booking service and places to discover",
      ["6845123", "1987414"],
      []
    )
  ];
  avatars: string[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new EmploymentActions.FetchEmployees());

    for (let i = 0; i < this.projects.length; i++) {
      this.store
        .pipe(select(employeesAvatar, this.projects[i].employees))
        .subscribe(res => this.projects[i].avatars = res);
    }

  }

  loadEmployeesAvatar() { }
}
