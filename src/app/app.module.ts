import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmploymentEditComponent } from './employment-edit/employment-edit.component';
import { EmploymentListComponent } from './employment-list/employment-list.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { EmployeeService } from './shared/employee.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmploymentEditComponent,
    EmploymentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
