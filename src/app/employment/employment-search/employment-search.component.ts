import { Employee } from './../../shared/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-search',
  templateUrl: './employment-search.component.html',
  styleUrls: ['./employment-search.component.css']
})
export class EmploymentSearchComponent implements OnInit {
  employees: Employee[];

  constructor() { }

  ngOnInit() {
  }

}
