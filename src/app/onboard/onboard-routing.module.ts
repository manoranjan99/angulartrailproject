import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Input1Component } from './input1/input1.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'signup', component:Input1Component},
  {path: 'login', component:LoginComponent},
];


console.warn("Onboard module loaded");

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardRoutingModule { }
