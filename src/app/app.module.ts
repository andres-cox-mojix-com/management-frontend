import { EmploymentReducer } from './store/reducers/employment.reducers';
import { AuthReducer } from './store/reducers/auth.reducers';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

import { environment } from "../environments/environment";

import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { EmploymentModule } from "./employment/employment.module";

import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { AuthEffects } from "./store/effects/auth.effects";
import { reducer, REDUCERS_TOKEN, reducerProvider } from "./store/reducers/app.reducers";
import { appReducers } from "./store/reducers/app.reducers";
import { EmploymentEffects } from "./store/effects/employment.effects";

import { MatDialogModule } from "@angular/material";

import { NgrxCacheModule, apolloReducer } from 'apollo-angular-cache-ngrx';
import { GraphQLModule } from "./graphql/graphql.module";
import { GraphqlCrudService } from './graphql/graphql-crud.service';
import { HomeComponent } from './home/home.component';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    // console.log('state', state);
    // console.log('action', action);

    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<any>[] = [debug];
@NgModule({
  declarations: [AppComponent, HeaderComponent, ErrorPageComponent, HomeComponent],
  imports: [
    BrowserModule,
    EmploymentModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    MatDialogModule,
    GraphQLModule,
    StoreModule.forRoot(
      REDUCERS_TOKEN, { metaReducers }
    ),
    EffectsModule.forRoot([AuthEffects, EmploymentEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    NgrxCacheModule
  ],
  providers: [
    GraphqlCrudService,
    reducerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
