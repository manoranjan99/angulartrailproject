import { Injectable } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  valid=false;

  constructor(private route: ActivatedRoute,private router: Router) {}

  public authfunction(val:boolean):void{

       this.valid=val;
  }

  get tokenpassvalue():boolean{

    return this.valid;
  }


  public servicefuntion(Email:string,Password:string):string{

    JSON.parse(localStorage.getItem("Database")).forEach(element => {

     if(element.Email==Email && element.Password==Password)
     {

          this.authfunction(true);
          localStorage.setItem("Token",element.Firstname+" "+element.Lastname);
          if(element.UserProfile=="Customer")
            this.router.navigateByUrl('/home');
          else{
            this.router.navigateByUrl('/admin')
          }
          return "Login successfull";

     }else{

      return "Your Email or Password may be incorrect";
    }

    });

    return "Your Email or Password is incorrect";

  }



}
