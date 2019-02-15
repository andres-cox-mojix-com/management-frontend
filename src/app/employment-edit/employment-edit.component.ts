import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl(null),
      'lastname':new FormControl(null),
      'charge': new FormControl(null)
    })
  }
  onAddEmployee(){
    console.log(this.registerForm);
    this.submitted=true;
    const formValueName = this.registerForm.value.name;
    const formValueLastName = this.registerForm.value.lastname;
    const formValueCharge = this.registerForm.value.charge;
    this.employeeUser = new Employee(formValueName, formValueLastName,formValueCharge);


    this.employeeService.addEmployee(this.employeeUser);
    this.registerForm.reset();

  }
}
