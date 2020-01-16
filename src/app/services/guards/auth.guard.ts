import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'     
})
// AuthService -> convert to different of AuthServices
//To Known auth.guard.ts that its guard use impleme...
export class AuthGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
  // this.as.user.subscribe(user =>{

  //   })

  return new Promise(resolve =>{
    //out from subscribe to promise
      this.as.user.subscribe(user =>{
          if(user) resolve(true);
          else this.router.navigate(['/login'])
      })
  })

  }

  constructor(private as:AuthService, private router:Router ) { 

  
  }
 
}
