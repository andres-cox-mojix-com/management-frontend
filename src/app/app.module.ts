import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { EmployeeService } from './shared/employee.service';
import { DataStorageService } from './shared/data-storage.service';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { EmploymentModule } from './employment/employment.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { reducers } from './store/app.reducers';
import { employmentReducer } from './employment/store/employment.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    EmploymentModule,
    AuthModule,
    AppRoutingModule,
    // StoreModule.forRoot(reducers, { metaReducers }),
    // StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    // StoreModule.forRoot(reducers),
    // StoreModule.forRoot({employment: employmentReducer}),

    // StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  
  providers: [EmployeeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
