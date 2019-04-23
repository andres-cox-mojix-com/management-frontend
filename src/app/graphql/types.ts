type Employee = {
    name: string;
    lastname: string;
    cinumber: string;
    birthdate: string;
    address: string;
    phone: string;
    role: string;
    profession: string;
};

export type Query = {
    getEmployee: Employee;
    getEmployees: Employee[];
};