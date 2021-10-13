import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthServices } from './../auth/auth.services';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGaurd implements CanActivate, CanActivateChild {
  constructor(private authService: AuthServices, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.operatorUser.pipe(
      map((opertorUser) => {
        const operatorIsAuthendicated = !!opertorUser;

        if (operatorIsAuthendicated) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth/login']);
          //this.router.navigateByUrl('/login');
        }
      })
    );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.canActivate(route, state);
  }
}
