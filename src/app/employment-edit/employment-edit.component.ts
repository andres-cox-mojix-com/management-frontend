import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employment-edit',
  templateUrl: './employment-edit.component.html',
  styleUrls: ['./employment-edit.component.css']
})
export class EmploymentEditComponent implements OnInit {
  registerForm: FormGroup;

  // LOAD USER TO THE FORM
  subscription: Subscription;
  editedUser: Employee;
  editedUserIndex: number;

  employeeUser: Employee;
  submitted = false;
  editMode = false;



  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      ciNumber: new FormControl(null, [Validators.required, this.forbbidenCIs.bind(this)]),
      name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastname: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      charge: new FormControl(null, Validators.required)
// tslint:disable-next-line: semicolon
    })

    // LOAD EMPLOYEE TO THE FORM
    this.subscription = this.employeeService.startedEditing.subscribe(
      (index: number) => {
        this.editedUserIndex = index;
        this.editMode = true;
        this.editedUser = this.employeeService.getEmployee(index);
        this.registerForm.setValue({
          name: this.editedUser.name,
          lastname: this.editedUser.lastname,
          ciNumber: this.editedUser.ciNumber,
          charge: this.editedUser.charge
        });
      }
    );
  }
  onSubmit() {
    // console.log(this.registerForm);
    this.submitted = true;

    // NOT NECESSARY FOR REACTIVE FORMS
    // const formValueName = this.registerForm.value.name;
    // const formValueLastName = this.registerForm.value.lastname;
    // const formValueCharge = this.registerForm.value.charge;
    // this.employeeUser = new Employee(formValueName, formValueLastName,formValueCharge);

    if (this.editMode) {
      this.employeeService.updateEmployee(this.editedUserIndex, this.registerForm.value );
      this.registerForm.reset();
    } else {
      this.employeeService.addEmployee(this.registerForm.value);
    }
    this.editMode = false;
    this.registerForm.reset();
  }
  onClear() {
    this.registerForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.employeeService.removeEmployee(this.editedUserIndex);
    this.onClear();
  }

  forbbidenCIs(control: FormControl): {[s: string]: boolean} {
    if (this.employeeService.getEmployeeCIs().indexOf(control.value) !== -1) {
      return {CIrepeated: true};
    }
    return null;
  }

}
