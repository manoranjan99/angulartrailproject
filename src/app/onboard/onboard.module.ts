import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardRoutingModule } from './onboard-routing.module';

import {MatSelectModule} from '@angular/material/select';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Input1Component } from './input1/input1.component';
import { LoginComponent } from './login/login.component';
import { NavbarModule } from '../navbar/navbar.module';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';


@NgModule({
  declarations: [
    Input1Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    NavbarModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OnboardModule { }
