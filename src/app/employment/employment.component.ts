import { Component, OnInit } from "@angular/core";
import { GraphqlCrudService } from '../graphql/graphql-crud.service';
import { Employee } from '../shared/employee.model';


@Component({
  selector: "app-employment",
  templateUrl: "./employment.component.html",
  styleUrls: ["./employment.component.css"]
})
export class EmploymentComponent implements OnInit {
  loading: boolean;
  // newEmployee =
    // new Employee("Mauricio", "Cabrera", "4851356","06/28/1992", "45 St. Lanza, Sopocachi, LP", "61530245", "Programmer", "Systems Engineering");
    // new Employee("Luciana", "Diaz", "6524553","01/21/1988", "655 St. Carlos Medinacelli, San Miguel, LP", "79615302", "Programmer", "Systems Engineering"),

  constructor(private graphqlCrudService: GraphqlCrudService) {}
  ngOnInit() {}

  addEmployeeTest() {
    // this.graphqlCrudService.addEmployee(this.newEmployee);
  }
}
