import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { MatButtonModule} from '@angular/material/button';
import { LoginbarComponent } from './loginbar/loginbar.component';  



@NgModule({
  declarations: [
    TitlebarComponent,
    LoginbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports:[
    TitlebarComponent,
    LoginbarComponent
  ]
})
export class NavbarModule { }
