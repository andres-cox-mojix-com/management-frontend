import { Store } from "@ngrx/store";
import { AppState } from "./../../store/state/app.state";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Component, OnInit, Inject } from "@angular/core";
import * as EmploymentActions from "../../store/actions/employment.actions";

@Component({
  selector: "app-warning",
  templateUrl: "./warning.component.html",
  styleUrls: ["./warning.component.css"]
})
export class WarningComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<WarningComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }

  onDelete() {
    this.store.dispatch(
      new EmploymentActions.DeleteEmployee({
        index: this.data.index,
        id: this.data.id
      })
    );
    this.dialogRef.close();
  }
}
