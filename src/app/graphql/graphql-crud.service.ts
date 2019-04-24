import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Employee } from '../shared/employee.model';
import * as query from './queries';
import * as mutation from './mutations';
import * as type from './types';

@Injectable()
export class GraphqlCrudService {

  constructor(private apollo: Apollo) {}

   getEmployees(){
    return this.apollo.query<type.Query>({
      query: query.getEmployeesState,
      fetchPolicy: 'network-only'
    })
  }

  async getEmployeeCI(cinumber: string): Promise<any> {
    return this.apollo.watchQuery<Response>({
      query: query.getEmployee,
      variables: {
        cinumb: cinumber
      },
    })
      .valueChanges.subscribe(result => {
        console.log(result);
      });
  }

  async addEmployee(employee: Employee): Promise<any> {
    return this.apollo.mutate({
      mutation: mutation.addEmployee,
      variables: {
        name: employee.name,
        lastname: employee.lastname,
        cinumber: employee.cinumber,
        birthdate: employee.birthdate,
        address: employee.address,
        phone: employee.phone,
        role: employee.role,
        profession: employee.profession
      }
    }).subscribe(({ data }) => {
      console.log('got data', data.addEmployee);

    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  async updateEmployee(employee): Promise<any> {
    return this.apollo.mutate({
      mutation: mutation.updateEmployee,
      variables: {
        id: employee.id,
        name: employee.name,
        lastname: employee.lastname,
        cinumber: employee.cinumber,
        birthdate: employee.birthdate,
        address: employee.address,
        phone: employee.phone,
        role: employee.role,
        profession: employee.profession
      }
    }).subscribe(({ data }) => {
      console.log('got data', data.updateEmployee);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  deleteEmployee(cinumber: string){
    return this.apollo.mutate({
      mutation: mutation.deleteEmployee,
      variables: {
        cinumb: cinumber,
      }
    })
  }

}
