import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Injectable } from '@angular/core';
import { IPData } from '../interfaces/ip.interfaces';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})



export class TrackIpService {
  private map:any;

  public ipData: IPData = {
    ip: '',
    location: {
      country: '',
      region: '',
      timezone: '',
      lng:0,
      lat:0
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
  // https://geo.ipify.org/api/v2/country?apiKey=at_6aRBZ1v2sjJN5tcd2gKi2pRNRFfWH&ipAddress=8.8.8.8



  constructor(private http: HttpClient) { }


  public searchIp(ip: string): void {


    if (ip.length === 0) return;
    if(this.map) {this.map.off(); this.map.remove();}


    const params = new HttpParams()
      .set('apiKey', this.IP_API_KEY)
      .set('ipAddress', ip)

    this.http.get<IPData>(`${this.API_URL}`, { params: params })
      .subscribe((resp) => {
        this.ipData = resp
        this.map = L.map('map', {
          center: [ this.ipData.location.lat, this.ipData.location.lng ],
          zoom: 3
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 15,
          minZoom: 13,
          attribution: '© OpenStreetMap'
        });
        this.map.addLayer(tiles)
        const marker = L.marker([this.ipData.location.lat,this.ipData.location.lng])

        tiles.addTo(this.map);
        marker.addTo(this.map)
        console.log(this.ipData)
      });

  }





}
