import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { Employee } from '../shared/employee.model';
import { Observable } from 'rxjs';
import * as EmploymentActions from "../store/actions/employment.actions";
import { employeesList } from "src/app/store/selectors/employment.selectors";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employmentState: Observable<Employee[]>;
  employees: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new EmploymentActions.FetchEmployees());
    this.employmentState = this.store.pipe(select(employeesList));
    this.employmentState.subscribe(res => this.employees = res.length);
  }

}
