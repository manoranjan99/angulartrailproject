import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { profilemodel } from '../onboard/input1/profile';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  displayedColumns: string[] = ['Firstname', 'Lastname', 'Gender','Phonenumber','Email','UserProfile'];

  obj:profilemodel[];




  constructor() { 

    this.obj=  JSON.parse(localStorage.getItem("Database"));
    
 }

  ngOnInit(): void {


  }

}
