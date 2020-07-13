import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EmploymentEditComponent } from "./employment-edit/employment-edit.component";
import { EmploymentListComponent } from "./employment-list/employment-list.component";
import { AuthGuard } from "./../auth/auth-guard.service";
import { WarningComponent } from "./warning/warning.component";
import { HomeComponent } from '../home/home.component';

const employmentRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "list", component: EmploymentListComponent },
  {
    path: "edit",
    component: EmploymentEditComponent,
    canActivate: [AuthGuard]
  },
  { path: "warning", component: WarningComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(employmentRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class EmploymentRoutingModule { }
