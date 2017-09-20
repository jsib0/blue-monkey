import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DashboardService } from  './dashboard.service';
declare var jQuery:any; 







@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


 
  constructor( private elRef: ElementRef, private window: DashboardService) {
  	
   }

  ngOnInit() {
  	// burgers 
  	jQuery('.parallax-window').parallax({imageSrc: '../../assets/burgers.jpg'});


  	jQuery('.parallax-window').parallax({
    positionX: 2,
    positionY: -350,
    bleed: 50
  
  });


  	//fundUs

  	jQuery('.event').parallax({ imageSrc:'../../assets/images/inside.jpg'});

  	jQuery('.event').parallax({
  	 positionX: 2,
     positionY: -430,
     bleed: 50
  	});




  	





  	
  }
}


