import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentEditComponent } from './employment/employment-edit/employment-edit.component';
import { EmploymentListComponent } from './employment/employment-list/employment-list.component';
import { EmploymentComponent } from './employment/employment.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmploymentCustomizeComponent } from './employment/employment-customize/employment-customize.component';

const routes: Routes = [
  { path: '', component: EmploymentComponent },
  { path: 'list', component: EmploymentListComponent },
  { path: 'edit', component: EmploymentEditComponent},
  { path: 'customize', component: EmploymentCustomizeComponent },
  // { path: 'customize', component: CustomizeComponent,children:[
  //   { path:'showlist', component: EmploymentListComponent}
  // ]},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
