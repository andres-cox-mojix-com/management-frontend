import gql from "graphql-tag";


export const getEmployeesState = gql`
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

export const getEmployee = gql`
  query getEmployee($cinumb: String!) {
    getEmployee (cinumber: $cinumb){
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