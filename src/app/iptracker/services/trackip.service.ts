import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Injectable } from '@angular/core';
import { IPData } from '../interfaces/ip.interfaces';
import * as L from 'leaflet';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class TrackIpService {
  private map: any;
  public isLoading: boolean = false;
  public ipData: IPData = {
    ip: '',
    location: {
      postalCode: '',
      country: '',
      region: '',
      timezone: '',
      lng: 0,
      lat: 0
    },
    domains: [],
    as: {
      asn: 0,
      name: '',
      route: '',
      domain: '',
      type: '',
    },
    isp: '',
  }


  private IP_API_KEY = 'at_6aRBZ1v2sjJN5tcd2gKi2pRNRFfWH';
  private API_URL: string = ' https://geo.ipify.org/api/v2/country,city'



  constructor(private http: HttpClient) {
    this.loadLocalStorage();
   }


  saveOnLocalStorage() {
    localStorage.setItem('ipaddress',JSON.stringify(this.ipData))
  }

  loadLocalStorage() {
    if(!localStorage.getItem('ipaddress')) return;
    this.ipData = JSON.parse(localStorage.getItem('ipaddress')!);
  }

  public searchIp(ip: string): void {

    this.isLoading = true;
    if (ip.length === 0) return;
    if (this.map) { this.map.off(); this.map.remove(); }


    const params = new HttpParams()
      .set('apiKey', this.IP_API_KEY)
      .set('ipAddress', ip)

    this.http.get<IPData>(`${this.API_URL}`, { params: params })
      .pipe(
        delay(1000),
      )
      .subscribe((resp) => {

        this.ipData = resp
        this.saveOnLocalStorage()
        this.map = L.map('map', {
          center: [this.ipData.location.lat, this.ipData.location.lng],
          zoom: 13,
          zoomControl: false,
          attributionControl: false // Disable attribution control

        });


        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        });
        this.map.addLayer(tiles)
        const marker = L.marker([this.ipData.location.lat, this.ipData.location.lng])
        tiles.addTo(this.map);
        marker.addTo(this.map)
        this.isLoading = false;

      });


  }



}
