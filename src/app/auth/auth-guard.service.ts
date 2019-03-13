import { AuthState } from './../store/state/auth.state';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .pipe(take(1),
        map((authState: AuthState) => {
          return authState.authenticated;
        }));
  }
}
