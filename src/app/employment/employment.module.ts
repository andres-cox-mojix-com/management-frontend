import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { EmploymentComponent } from "./employment.component";
import { EmploymentListComponent } from "./employment-list/employment-list.component";
import { EmploymentEditComponent } from "./employment-edit/employment-edit.component";
import { EmploymentRoutingModule } from "./employment-routing.module";
import { AssignmentsComponent } from "../assignments/assignments.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WarningComponent } from "./warning/warning.component";
import { MatchPipe } from "./employment-list/match.pipe";

@NgModule({
  declarations: [
    EmploymentEditComponent,
    EmploymentListComponent,
    EmploymentComponent,
    MatchPipe,
    WarningComponent,
    AssignmentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmploymentRoutingModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class EmploymentModule { }
