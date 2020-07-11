import { AuthState } from "./../../store/state/auth.state";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Observable } from "rxjs";
import { Employee } from "../../shared/employee.model";

import { EmploymentEditComponent } from "./../employment-edit/employment-edit.component";
import { WarningComponent } from "./../warning/warning.component";
import { Store, select } from "@ngrx/store";
import { AppState } from "./../../store/state/app.state";
import {
  employeesList,
  filterEmployees
} from "src/app/store/selectors/employment.selectors";
import * as EmploymentActions from "../../store/actions/employment.actions";

@Component({
  selector: "app-employment-list",
  templateUrl: "./employment-list.component.html",
  styleUrls: ["./employment-list.component.css"]
})
export class EmploymentListComponent implements OnInit {
  employmentState: Observable<Employee[]>;
  authState: Observable<AuthState>;
  keyword;
  constructor(private store: Store<AppState>, private dialog: MatDialog) {}

  ngOnInit() {
    this.authState = this.store.select("auth");
    this.store.dispatch(new EmploymentActions.FetchEmployees());
    this.employmentState = this.store.pipe(select(employeesList));
  }

  searchEmployee($event: any) {
    this.keyword = $event.target.value;
    if (this.keyword !== "") {
      this.employmentState = this.store.pipe(
        select(filterEmployees, { keyword: $event.target.value })
      );
    } else if (this.keyword === "") {
      this.ngOnInit();
    }
    // console.log(this.keyword);
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    const dialogRef = this.dialog.open(EmploymentEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.employmentState = this.store.pipe(
        select(filterEmployees, { keyword: this.keyword })
      );
    });
  }
  onEdit(index: number, id: string) {
    this.store.dispatch(
      new EmploymentActions.StartEdit({ index: index, id: id })
    );
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    const dialogRef = this.dialog.open(EmploymentEditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.employmentState = this.store.pipe(
        select(filterEmployees, { keyword: this.keyword })
      );
    });
  }
  onDelete(index: number, id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { index: index, id: id };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(WarningComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.employmentState = this.store.pipe(
        select(filterEmployees, { keyword: this.keyword })
      );
    });
  }
}
