//import { AuthService } from './../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
    // if (!this.auth.isLoggedIn()) {
       this.router.navigate(['/login']);
    // }
    // // check JWT TOKEN and return true or false
    // return this.auth.isLoggedIn();
  }
}