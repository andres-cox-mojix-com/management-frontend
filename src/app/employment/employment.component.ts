import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable, Subscription } from "rxjs";

const getEmployeesState = gql`
  query getEmployeesState {
    getEmployees {
      name
      lastname
      cinumber
      birthdate
      address
      phone
      role
      profession
    }
  }
`;
@Component({
  selector: "app-employment",
  templateUrl: "./employment.component.html",
  styleUrls: ["./employment.component.css"]
})
export class EmploymentComponent implements OnInit {
  loading: boolean;
  employeesFetch: any;

  private querySubscription: Subscription;

  // constructor(private apollo: Apollo, store: Store<any>) { }
  constructor(private store: Store<any>, private apollo: Apollo) {
    this.store = store;
    apollo
      .query({
        query: gql`
          query getEmployeesState {
            getEmployees {
              name
              lastname
              cinumber
              birthdate
              address
              phone
              role
              profession
            }
          }
        `
      })
      // .subscribe(data =>{ console.log(data)});
  }
  ngOnInit() {
    // console.log(this.store);
  }

  getEmployees() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: getEmployeesState
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.employeesFetch = data.getEmployees;
        console.log(data);
        // console.log(this.employeesFetch);
      });
  }
}
