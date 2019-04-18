import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

import { environment } from "../environments/environment";
import { AuthInterceptor } from "./shared/auth.interceptors";

import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from "./app-routing.module";
import { EmploymentModule } from "./employment/employment.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { AuthEffects } from "./store/effects/auth.effects";
import { appReducers } from "./store/reducers/app.reducers";
import { EmploymentEffects } from "./store/effects/employment.effects";

import { MatDialogModule } from "@angular/material";

import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

@NgModule({
  declarations: [AppComponent, HeaderComponent, ErrorPageComponent],
  imports: [
    BrowserModule,
    EmploymentModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AuthModule,
    AppRoutingModule,
    MatDialogModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, EmploymentEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      
      // provide: [APOLLO_OPTIONS, HTTP_INTERCEPTORS],
      // provide: HTTP_INTERCEPTORS,
      // useClass: AuthInterceptor,
      // multi: true,
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `http://localhost:4000/graphql`
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
