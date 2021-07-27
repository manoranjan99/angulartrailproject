import { Component, OnInit } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';
import { TitlebarComponent } from '../navbar/titlebar/titlebar.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  name:any=" ";

  constructor() { 
   
    const test$=new Observable(Subscriber => {

      console.log(observable)
     
      Subscriber.next(localStorage.getItem("Token"));
  
    } );


    test$.subscribe( x=> (this.name=x));



  }

  ngOnInit(): void {


  }

}
