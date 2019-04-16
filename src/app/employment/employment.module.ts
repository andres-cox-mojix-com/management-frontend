import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmploymentComponent } from './employment.component';
import { EmploymentListComponent } from './employment-list/employment-list.component';
import { EmploymentEditComponent } from './employment-edit/employment-edit.component';
import { EmploymentRoutingModule } from './employment-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations:[
    EmploymentEditComponent,
    EmploymentListComponent,
    EmploymentComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    EmploymentRoutingModule,
    BrowserAnimationsModule
]

})
export class EmploymentModule {}
