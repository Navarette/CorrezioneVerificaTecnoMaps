import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Marker } from './model/marker.model';
import { HttpClient } from '@angular/common/http';
import { Coords } from './model/coord.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  center: google.maps.LatLngLiteral = { lat: 35.68051015980639, lng: 139.69876694123647 }
  markerOptions!: { icon: google.maps.Icon; };
  markers!: Marker[];
  zoom: number = 10;
  bottone: boolean = false
  constructor(public http: HttpClient) {
    this.markers = []
    this.http.get<Coords[]>('https://5000-navarette-correzionever-r74uq16bocu.ws-eu98.gitpod.io/all').subscribe(data => {
      for (let d of data) {
        let lat = d.lat
        let lng = d.lng
        let marker: Marker = new Marker(lat, lng)
        this.markers.push(marker)
      }

    })
    let iconData: google.maps.Icon = {
      url: 'assets/img/hole.png',
      scaledSize: new google.maps.Size(60, 60)
    }

    this.markerOptions = { icon: iconData }
  }

  click():void{
    this.bottone = !this.bottone
  }
}
