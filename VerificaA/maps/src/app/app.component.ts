import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Marker } from './model/marker.model';
import { Coords } from './model/coord.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  center: google.maps.LatLngLiteral = { lat: 40.70840010689748, lng: -74.04284125121363 };
  markers: Marker[];
  markerOptions!: { icon: google.maps.Icon; };
  bottone: boolean = true
  constructor(public http: HttpClient) {
    this.markers = [];
    this.http.get<Coords[]>("https://5000-navarette-correzionever-r74uq16bocu.ws-eu98.gitpod.io/all").subscribe(data => {
      for (let d of data) {
        let lat = d.lat
        let lng = d.lng
        let marker: Marker = new Marker(lat, lng);
        this.markers.push(marker)
      }

    })
    let iconData: google.maps.Icon = {
      url: './assets/img/hatch.png',
      scaledSize: new google.maps.Size(60, 60)
    }

    this.markerOptions = { icon: iconData }
  }
  click(): void {
    this.bottone =! this.bottone
  }
}
