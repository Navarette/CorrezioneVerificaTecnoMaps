import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Marker } from './model/marker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  center: google.maps.LatLngLiteral = { lat: 40.70840010689748, lng: -74.04284125121363 };
  markers: Marker[];
    
  constructor(public http: HttpClient) {
    this.markers = [];
    this.http.get("https://5000-navarette-correzionever-v5g18e41w7v.ws-eu97.gitpod.io/all").subscribe(data =>{
      for (let d of data) {
       let lat = d.lat
       let lng = d.lng
       let marker: Marker = new Marker(lat, lng);
       this.markers.push(marker)
      }
     })
  }
}
