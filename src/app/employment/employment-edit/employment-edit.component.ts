import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Employee } from "../../shared/employee.model";

import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { employeesCI } from './../../store/selectors/employment.selectors';
import * as EmploymentActions from "../../store/actions/employment.actions";

@Component({
  selector: "app-employment-edit",
  templateUrl: "./employment-edit.component.html",
  styleUrls: ["./employment-edit.component.css"]
})
export class EmploymentEditComponent implements OnInit {
  registerForm: FormGroup;
  editedUser: Employee;
  editedUserIndex: number;
  editMode = false;

  ciNumbers : any;
  // newEmployee: Employee;
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      ciNumber: new FormControl(null, [
        Validators.required,
        this.forbbidenCIs.bind(this)
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")
      ]),
      charge: new FormControl(null, Validators.required)
    });

    this.store.select("employment").subscribe(data => {
      if (data.editedEmployeeIndex > -1) {
        this.editedUser = data.editedEmployee;
        this.editMode = true;
        this.registerForm.setValue({
          name: this.editedUser.name,
          lastname: this.editedUser.lastname,
          ciNumber: this.editedUser.ciNumber,
          charge: this.editedUser.charge
        });
      } else {
        this.editMode = false;
      }
    });
  }
  onSubmit() {
    const ciNumberForm = this.registerForm.value.ciNumber.toString();
    const nameForm = this.registerForm.value.name;
    const lastnameForm =  this.registerForm.value.lastname;
    const chargeForm = this.registerForm.value.charge;
    const newEmployee = new Employee(nameForm,lastnameForm,ciNumberForm,chargeForm);
    if (this.editMode) {
      this.store.dispatch(
        new EmploymentActions.UpdateEmployee({ employee: newEmployee })
      );
    } else {
      this.store.dispatch(
        new EmploymentActions.AddEmployee({ employee: newEmployee })
        );
        console.log(newEmployee);
    }
    this.onClear();
  }
  onClear() {
    this.registerForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.store.dispatch(
      new EmploymentActions.DeleteEmployee(this.editedUserIndex)
    );
    this.onClear();
  }

  forbbidenCIs(control: FormControl): { [s: string]: boolean } {
    this.store.pipe(select(employeesCI)).subscribe(data => this.ciNumbers = data);

    if (this.ciNumbers.indexOf(control.value) !== -1) {
      return { CIrepeated: true };
    }
    return null;
  }

}
