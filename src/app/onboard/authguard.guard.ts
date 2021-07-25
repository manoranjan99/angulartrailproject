import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';
import { Router  , ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {


  constructor(private obj:AuthguardService,private route: ActivatedRoute,private router: Router) {}


  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        

      if(this.obj.tokenpassvalue)
      {
        return true;
      }

      this.router.navigateByUrl('register/login');
      return false;

  
    }
    
  
}
  