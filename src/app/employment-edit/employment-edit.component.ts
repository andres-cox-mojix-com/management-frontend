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
  submitted = false;
  employeeUser: Employee;
  editedUserIndex: number;
  editMode = false;


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'lastname':new FormControl(null, Validators.required),
      'charge': new FormControl(null, Validators.required)
    })
  }
  onAddEmployee(){
    //console.log(this.registerForm);
    this.submitted=true;

    // NOT NECESSARY FOR REACTIVE FORMS
    // const formValueName = this.registerForm.value.name;
    // const formValueLastName = this.registerForm.value.lastname;
    // const formValueCharge = this.registerForm.value.charge;
    // this.employeeUser = new Employee(formValueName, formValueLastName,formValueCharge);

    this.employeeService.addEmployee(this.registerForm.value);
    this.registerForm.reset();
  }
  onDelete(){
    this.employeeService.removeEmployee();
  }
}
