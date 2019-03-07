import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmploymentEditComponent } from './employment/employment-edit/employment-edit.component';
import { EmploymentListComponent } from './employment/employment-list/employment-list.component';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { EmploymentComponent } from './employment/employment.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EmploymentSearchComponent } from './employment/employment-search/employment-search.component';
import { EmploymentCustomizeComponent } from './employment/employment-customize/employment-customize.component'

import { DataStorageService } from './shared/data-storage.service';
import { EmployeeService } from './shared/employee.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmploymentEditComponent,
    EmploymentListComponent,
    EmploymentComponent,
    ErrorPageComponent,
    SigninComponent,
    SignupComponent,
    EmploymentSearchComponent,
    EmploymentCustomizeComponent,
    DropdownDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
