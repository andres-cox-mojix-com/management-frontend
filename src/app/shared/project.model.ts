import { Employee } from "../shared/employee.model";

export class Project {
  constructor(
    public id: string,
    public title: string,
    public client: string,
    public description: string,
    public employees: string[],
    public avatars: string[]
  ) { }
}
