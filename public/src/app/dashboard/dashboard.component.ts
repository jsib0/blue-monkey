import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DashboardService } from  './dashboard.service';
declare var jQuery:any; 







@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  lat: number = 9.3104;
  lng: number = 123.3090;
  zm: number = 18;
  scroll: boolean = false;
  style: any =  [{ "featureType": "road",
"elementType":
"labels.icon",
"stylers": [
{ "saturation": 1 },
{ "gamma": 1 },
{ "visibility": "on" },
{ "hue": "#e6ff00" }
]
},
{ "elementType": "geometry", "stylers": [
{ "saturation": -100 }
]
}
];
  backgroundColor: string = "#eeeeee";


  constructor( private elRef: ElementRef, private window: DashboardService) {
  	
   }

  ngOnInit() {
  	// burgers 
  	jQuery('.parallax-window').parallax({imageSrc: '../../assets/images/burgers.jpg'});

  	jQuery('.parallax-window').parallax({
    positionX: 2,
    positionY: -350,
    left: -5,
    bleed: 100
  
  });

    jQuery("ul").click(function() {
    jQuery('#drawer1').prop('checked', false); // Unchecks it

  });      
  }
}


