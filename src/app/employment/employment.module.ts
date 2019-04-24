import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmploymentComponent } from './employment.component';
import { EmploymentListComponent } from './employment-list/employment-list.component';
import { EmploymentEditComponent } from './employment-edit/employment-edit.component';
import { EmploymentRoutingModule } from './employment-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations:[
    EmploymentEditComponent,
    EmploymentListComponent,
    EmploymentComponent,
    WarningComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    EmploymentRoutingModule,
    BrowserAnimationsModule
  ],
  providers:[
  ]

})
export class EmploymentModule {}
