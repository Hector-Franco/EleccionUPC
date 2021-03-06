import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }

  canActivate(): boolean {
    if (this.auth.isAdmin()) {
      return true;
    }
    this.router.navigateByUrl('/home');
    return false;
  }
}
