import gql from "graphql-tag";

export const addEmployee = gql`
mutation addEmployee(
  $name: String!
  $lastname: String!
  $cinumber: String!
  $birthdate: String!
  $address: String!
  $phone: String!
  $role: String!
  $profession: String!
  ) {
  addEmployee(
    name: $name
    lastname: $lastname
    cinumber: $cinumber
    birthdate: $birthdate
    address: $address
    phone: $phone
    role: $role
    profession: $profession
  ) {
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
export const updateEmployee = gql`
  mutation updateEmployee (
      $id: String!
      $name: String
      $lastname: String
      $cinumber: String!
      $birthdate: String
      $address: String
      $phone: String
      $role: String
      $profession: String
  )  {
    updateEmployee(
      id: $id
      name: $name
      lastname: $lastname
      cinumber: $cinumber
      birthdate:$birthdate
      address: $address
      phone: $phone
      role: $role
      profession: $profession
    ) {
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
export const deleteEmployee = gql`
  mutation deleteEmployee($cinumb: String!){
    deleteEmployee(cinumber: $cinumb){
      cinumber
    }
  }
`;
