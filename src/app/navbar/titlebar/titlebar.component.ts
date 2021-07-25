import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class TitlebarComponent implements OnInit {

 constructor(private route: ActivatedRoute,private router: Router) {}

 public home:boolean=true;

  ngOnInit(): void {
  }


  

}
