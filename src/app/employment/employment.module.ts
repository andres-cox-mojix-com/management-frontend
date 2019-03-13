import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmploymentComponent } from './employment.component';
import { EmploymentListComponent } from './employment-list/employment-list.component';
import { EmploymentEditComponent } from './employment-edit/employment-edit.component';
import { EmploymentSearchComponent } from './employment-search/employment-search.component';
import { EmploymentCustomizeComponent } from './employment-customize/employment-customize.component';
import { EmploymentRoutingModule } from './employment-routing.module';

@NgModule({
  declarations:[
    EmploymentEditComponent,
    EmploymentListComponent,
    EmploymentComponent,
    EmploymentSearchComponent,
    EmploymentCustomizeComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    EmploymentRoutingModule
]

})
export class EmploymentModule {}
