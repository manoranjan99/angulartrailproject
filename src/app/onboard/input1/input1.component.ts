import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { fromStringWithSourceMap } from 'source-list-map';
import { Router  , ActivatedRoute } from '@angular/router';
import { profilemodel } from './profile';


@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})



export class Input1Component implements OnInit {

  hide = true;

  loginform!:FormGroup;

  num:number=localStorage.length;

  Fistname:string='';
  Lastname:string='';
  email:any='';
  Gender:string='';
  Userprofile:string='';
  Phonenumber:string='';
  Password:string='';
  confirmpassword:string=' ';

  obj:profilemodel;


  constructor(private route: ActivatedRoute, private router: Router) {}



   ngOnInit() {
     this.loginform=new FormGroup({
       firstname: new FormControl(),
       lastname:new FormControl(),
       userprofile:new FormControl('',[Validators.required]),
       email:new FormControl('',
        [Validators.required,Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
       gender:new FormControl(),
       phonenumber:new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
       password:new FormControl('',[Validators.required, Validators.minLength(6)]),
       confirmpassword:new FormControl('',[Validators.required, Validators.minLength(6)]),
     });
   }





  OnSubmit():void
  {

    if(this.loginform.get('password')?.value!="" && this.loginform.get('email')?.value!="" && this.loginform.get('phonenumber')?.value!="" && this.loginform.get('userprofile')?.value)
    {

      this.obj=new profilemodel(this.loginform.get('firstname')?.value,this.loginform.get('lastname')?.value,this.loginform.get('gender')?.value,
      this.loginform.get('phonenumber')?.value,this.loginform.get('email')?.value,this.loginform.get('password')?.value,this.loginform.get('userprofile')?.value);
      this.addregister();
      alert("Your response has been registered");

    }else{
      alert("Please fill all the necessary details!");
    }

  }
  

   addregister():void{

    let profile=[];
    if(localStorage.getItem("Database"))
    {
      profile=JSON.parse(localStorage.getItem("Database"));
      profile=[this.obj,...profile]
    }else{
      profile=[this.obj];
    }
    localStorage.setItem("Database",JSON.stringify(profile));

  }
    
 

  onlogin():void{
    this.router.navigateByUrl('/register/login');
  }


  onSave():void
  {
    
  }


}


