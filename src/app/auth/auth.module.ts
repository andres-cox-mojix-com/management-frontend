import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})

export class AuthModule {}
