import { AuthServices } from './../auth/auth.services';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGaurd implements CanActivate {
  constructor(private authService: AuthServices, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | UrlTree {
    return this.authService.operatorUser.pipe(
      map((operatorUser) => {
        const operatorIsAuthendicated = !!operatorUser;

        if (operatorIsAuthendicated) {
          return true;
        } else {
          this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
