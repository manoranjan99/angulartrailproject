import { Component, OnInit } from '@angular/core';
import { AuthguardService } from '../../onboard/authguard.service';
import { Router  , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-loginbar',
  templateUrl: './loginbar.component.html',
  styleUrls: ['./loginbar.component.css']
})
export class LoginbarComponent implements OnInit {


  constructor(private obj:AuthguardService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
  }


  logout():void{

    this.obj.authfunction(false);    
    localStorage.removeItem("Token");
    this.router.navigateByUrl('register/login');

  }

}
