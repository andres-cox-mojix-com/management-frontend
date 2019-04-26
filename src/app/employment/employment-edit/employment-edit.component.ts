import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef } from '@angular/material';

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
  ciNumbers: any;
  idForm: any;

  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<EmploymentEditComponent>
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")
      ]),
      cinumber: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[1-9]+[0-9]*$"),
        this.forbbidenCIs.bind(this)
      ]),
      birthdate: new FormControl(null, [
        Validators.required,
      ]),
      address: new FormControl(null, [
        Validators.required,
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[1-9]+[0-9]*$"),
      ]),
      role: new FormControl(null, Validators.required),
      profession: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")
      ]),
    });

    this.store.select("employment").subscribe(data => {

      if (data.editedEmployeeIndex > -1) {
        this.editedUser = data.editedEmployee;
        this.editMode = true;
        const month = this.editedUser.birthdate.split("/", 3)[1];
        const year = this.editedUser.birthdate.split("/", 3)[2];
        const day = this.editedUser.birthdate.split("/", 3)[0];
        const birthdateFixed = year + "-" + day + "-" + month;
        this.registerForm.setValue({
          name: this.editedUser.name,
          lastname: this.editedUser.lastname,
          cinumber: this.editedUser.cinumber,

          birthdate: birthdateFixed,
          address: this.editedUser.address,
          phone: this.editedUser.phone,
          role: this.editedUser.role,
          profession: this.editedUser.profession
        });
        this.idForm = this.editedUser.id;

      } else {
        this.editMode = false;
        this.idForm = '';
      }
    });
  }
  onSubmit() {
    const nameForm = this.registerForm.value.name;
    const lastnameForm  =  this.registerForm.value.lastname;
    const cinumberForm = this.registerForm.value.cinumber.toString();
      const month = this.registerForm.value.birthdate.split("-", 3)[1];
      const day = this.registerForm.value.birthdate.split("-", 3)[2];
      const year = this.registerForm.value.birthdate.split("-", 3)[0];
    const birthdateForm = month + "/" + day + "/" + year;
    const addressForm  = this.registerForm.value.address;
    const phoneForm =  this.registerForm.value.phone.toString();
    const roleForm = this.registerForm.value.role;
    const professionForm  = this.registerForm.value.profession;
    const newEmployee  = new Employee(this.idForm,
                                      nameForm,
                                      lastnameForm,
                                      cinumberForm,
                                      birthdateForm,
                                      addressForm,
                                      phoneForm,
                                      roleForm,
                                      professionForm);
    if (this.editMode) {
      this.store.dispatch(
        new EmploymentActions.UpdateEmployee({ employee: newEmployee })
      );
    } else {
      this.store.dispatch(
        new EmploymentActions.AddEmployee({ employee: newEmployee })
        );
    }
    this.dialogRef.close();
    this.onClear();
  }
  onClear() {
    this.registerForm.reset();
  }

  onCloseDialog(){
    this.store.dispatch(new EmploymentActions.StopEdit);
    this.dialogRef.close();
    this.editMode = false;
  }

  forbbidenCIs(control: FormControl): { [s: string]: boolean } {
    this.store.pipe(select(employeesCI)).subscribe(data => this.ciNumbers = data);

    if (this.ciNumbers.indexOf(control.value) !== -1) {
      return { CIrepeated: true };
    }
    return null;
  }

}
