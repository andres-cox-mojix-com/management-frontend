import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../../shared/employee.model";

import { Store, select } from '@ngrx/store';
import { AppState } from './../../store/state/app.state';
import { employeesList, filterEmployees } from 'src/app/store/selectors/employment.selectors';
import * as EmploymentActions from '../../store/actions/employment.actions';


@Component({
  selector: "app-employment-list",
  templateUrl: "./employment-list.component.html",
  styleUrls: ["./employment-list.component.css"]
})
export class EmploymentListComponent implements OnInit {
  employmentState: Observable<Employee[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.employmentState = this.store.pipe(select(employeesList));
  }

  onEditUser(index: number) {
    this.store.dispatch(new EmploymentActions.StartEdit(index));
  }

  searchEmployee($event: any) {
    const keyword = $event.target.value;
    if (keyword !== '') {
      this.employmentState = this.store.pipe(select(filterEmployees, {keyword: $event.target.value}));
    } else if (keyword === '') {
      this.ngOnInit();
    }
  }
}
