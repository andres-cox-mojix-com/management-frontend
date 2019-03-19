import { Employee } from './../../shared/employee.model';
import { LiteralPrimitive } from '@angular/compiler';

export interface EmploymentState {
  employees: Employee[];
  editedEmployee: Employee;
  editedEmployeeIndex: number;
}

export const initialEmploymentState: EmploymentState = {
  employees: [
    new Employee("Juan", "Delgado", "8420651","02/15/1990", "45 St. Carlos Medinacelli, Sopocachi, LP", "78451238", "Designer", "Systems Engineering"),
    new Employee("Luciana", "Diaz", "6524553","01/21/1988", "655 St. Carlos Medinacelli, San Miguel, LP", "79615302", "Programmer", "Systems Engineering"),
    new Employee("Maria", "Ruiz", "7844854","02/14/1985", "154 Av. Aspiazu, Los Pinos, LP", "6450215", "Designer", "Systems Engineering"),
    new Employee("Jacinto", "Bascope", "1736498","03/25/1991", "102 St. Carlos Medinacelli, San Miguel, LP", "71420321", "Designer", "Systems Engineering"),
    new Employee("Elena", "Soto", "6524645","10/23/1990", "784 St. Carlos Medinacelli, Los Pinos, LP", "78745122", "Programmer", "Systems Engineering"),
    new Employee("Pedro", "Roca", "10328251","09/12/1988", "132 St. Carlos Medinacelli, Obrajes, LP", "74652023", "Programmer", "Computer Science"),
    new Employee("Carlos", "Cortez", "9050651","07/18/1991", "784 St. Carlos Medinacelli, Los Pinos, LP", "78451238", "Programmer", "Systems Engineering"),
    new Employee("Julieta", "Mendoza", "3004513","05/30/1993", "123 St. Carlos Medinacelli, Obrajes, LP", "78451238", "Designer", "Computer Science"),
    new Employee("Cintia", "Jaldin", "11327651","09/19/1989", "845 St. Carlos Medinacelli, Sopocachi, LP", "78451238", "Designer", "Computer Science"),
    new Employee("Carlos", "Cabrera", "3127651","08/21/1982", "5950 St. Carlos Medinacelli, Sopocachi, LP", "78451238", "Programmer", "Systems Engineering"),
  ],
  editedEmployee: null,
  editedEmployeeIndex: -1,
};
