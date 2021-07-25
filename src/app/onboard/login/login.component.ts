import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router  , ActivatedRoute } from '@angular/router';
import { profilemodel } from '../input1/profile';
import {AuthguardService} from '../authguard.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})

export class LoginComponent implements OnInit {

  hide = true;
  userform!:FormGroup;
  pwdcorrect=false;
  jsonprofile:profilemodel;
  email:string="";
  password:string="";
  error:string=" ";
  savedemail:string="";
  savedpassword:string="";

 

  constructor(private obj1:AuthguardService,private route: ActivatedRoute,private router: Router) {}



  ngOnInit(): void {


    this.userform=new FormGroup({

      emailenter:new FormControl('',
        [Validators.required,Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),

      passwordenter:new FormControl('',
          [Validators.required]),});
  }



  OnSubmit():void
  {

    this.error= this.obj1.servicefuntion(this.userform.get('emailenter')?.value,this.userform.get('passwordenter')?.value); 
  
  
  }


}
