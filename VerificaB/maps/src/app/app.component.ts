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
  bottone: boolean = true

  constructor(public http: HttpClient) {

    this.markers = []
    //richiesta HTTP GET all'URL, per ottenere un array di coordinate (Coords[])
    this.http.get<Coords[]>('https://5000-navarette-correzionever-26itp54scbn.ws-eu98.gitpod.io/all').subscribe(data => {
      for (let d of data) {
        //Per ogni coordinata (d) nell'array di dati ricevuto, vengono estratti i valori di lat e lng.
        let lat = d.lat
        let lng = d.lng
        //crea una nuova istanza di un oggetto Marker utilizzando i valori di lat e lng estratti e viene aggiunto all'array markers.
        let marker: Marker = new Marker(lat, lng)
        //popola l'array markers con oggetti Marker creati dalle coordinate ricevute
        this.markers.push(marker)
      }

    })
    let iconData: google.maps.Icon = {
      url: 'assets/img/hole.png',
      scaledSize: new google.maps.Size(48, 48)
    }
    // iniziallizza la variabile markerOptions con un oggetto che ha una proprietà icon che punta all'oggetto iconData. 
    this.markerOptions = { icon: iconData }
  }

  click(): void {
    this.bottone = !this.bottone
  }

  pikachu(): void {
    this.http.get<Coords>('https://5000-navarette-correzionever-26itp54scbn.ws-eu98.gitpod.io/pikachu').subscribe(data => {

      let lat = data.lat
      let lng = data.lng
      let marker: Marker = new Marker(lat, lng)
      this.markers = [data]


    })
    let iconData: google.maps.Icon = {
      url: 'assets/img/pikachu.png',
      scaledSize: new google.maps.Size(48, 48)
    }

    this.markerOptions = { icon: iconData }
  }

  snorlax(): void {
    this.http.get<Coords>('https://5000-navarette-correzionever-26itp54scbn.ws-eu98.gitpod.io/snorlax').subscribe(data => {

      let lat = data.lat
      let lng = data.lng
      let marker: Marker = new Marker(lat, lng)
      this.markers = [data]


    })
    let iconData: google.maps.Icon = {
      url: 'assets/img/snorlax.png',
      scaledSize: new google.maps.Size(48, 48)
    }

    this.markerOptions = { icon: iconData }
  }

  charmander(): void {
    this.http.get<Coords>('https://5000-navarette-correzionever-26itp54scbn.ws-eu98.gitpod.io/charmender').subscribe(data => {

      let lat = data.lat
      let lng = data.lng
      let marker: Marker = new Marker(lat, lng)
      this.markers = [data]


    })
    let iconData: google.maps.Icon = {
      url: 'assets/img/charmander.png',
      scaledSize: new google.maps.Size(48, 48)
    }

    this.markerOptions = { icon: iconData }
  }

  bullbasaur(): void {
    this.http.get<Coords>('https://5000-navarette-correzionever-26itp54scbn.ws-eu98.gitpod.io/bullbasaur').subscribe(data => {

      let lat = data.lat
      let lng = data.lng
      let marker: Marker = new Marker(lat, lng)
      this.markers = [data]


    })
    let iconData: google.maps.Icon = {
      url: 'assets/img/bullbasaur.png',
      scaledSize: new google.maps.Size(48, 48)
    }
    this.markerOptions = { icon: iconData }
  }
}
