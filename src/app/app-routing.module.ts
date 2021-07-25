import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './onboard/authguard.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { DeactivateGuard } from './deactivate.guard';


const routes: Routes = [
  {path:'register', loadChildren:()=>import('./onboard/onboard.module').then(mod=>mod.OnboardModule)},
  {path: 'home', component:HomepageComponent,canActivate: [AuthguardGuard],canDeactivate: [DeactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
