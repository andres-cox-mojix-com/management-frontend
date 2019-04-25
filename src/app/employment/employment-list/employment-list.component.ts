import { AuthState } from './../../store/state/auth.state';
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from "rxjs";
import { Employee } from "../../shared/employee.model";

import { EmploymentEditComponent } from './../employment-edit/employment-edit.component';
import { WarningComponent } from './../warning/warning.component';
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
  authState: Observable<AuthState>;

  constructor(private store: Store<AppState>,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.store.dispatch(new EmploymentActions.FetchEmployees());
    this.employmentState = this.store.pipe(select(employeesList));
  }

  searchEmployee($event: any) {
    const keyword = $event.target.value;
    if (keyword !== '') {
      this.employmentState = this.store.pipe(select(filterEmployees, {keyword: $event.target.value}));
    } else if (keyword === '') {
      this.ngOnInit();
    }
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(EmploymentEditComponent,dialogConfig);
  }
  onEdit(index: number, id){
    console.log('index: ' + index);
    console.log('id: ' + id);
    const aux = (id != null) ? id : '';
    // console.log('aux ' + aux)
    this.store.dispatch(new EmploymentActions.StartEdit({index: index, id: aux}));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(EmploymentEditComponent,dialogConfig);
  }
  onDelete(index: number, ci: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { index: index, ci: ci };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    this.dialog.open(WarningComponent, dialogConfig);
  }
}
