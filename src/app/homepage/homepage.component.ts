import { Component, OnInit } from '@angular/core';
import { TitlebarComponent } from '../navbar/titlebar/titlebar.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  name:string=" ";

  constructor() { }

  ngOnInit(): void {
    this.name=localStorage.getItem("Token");

  }

}
