import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, switchMap, tap } from 'rxjs/operators';
import { IPData } from '../interfaces/ip.interfaces';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class TrackIpService {
  private map: L.Map | null = null;
  public isLoading: boolean = false;
  public ipData: IPData = {
    ip: '',
    location: {
      postalCode: '',
      country: '',
      region: '',
      timezone: '',
      lng: 0,
      lat: 0,
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
  };

  private IP_API_KEY = 'at_6aRBZ1v2sjJN5tcd2gKi2pRNRFfWH'; // Replace with your actual API key
  private API_URL: string = 'https://geo.ipify.org/api/v2/country,city';
  private GET_IP_URL: string = 'https://api.ipify.org?format=json'; // URL to get your IPv4 public IP

  constructor(private http: HttpClient) {}

  // Search IP and update map and ipData
  public searchIp(ip: string): Observable<IPData> {
    this.isLoading = true;
    if (ip.length === 0) return of(); // Return empty observable if IP length is 0

    if (this.map) {
      this.map.off();
      this.map.remove();
      this.map = null;
    }

    const params = new HttpParams()
      .set('apiKey', this.IP_API_KEY)
      .set('ipAddress', ip);

    return this.http.get<IPData>(`${this.API_URL}`, { params }).pipe(
      delay(1000), // Simulate a delay for demonstration purposes
      tap((resp) => {
        this.ipData = resp;
        this.initMap();
        this.isLoading = false;
      }),
      catchError((error) => {
        console.error('Error fetching IP data:', error);
        this.isLoading = false;
        return of(this.ipData); // Return default IPData in case of error
      })
    );
  }

  // Initialize the map with IP location data
  private initMap(): void {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }

    this.map = L.map('map', {
      center: [this.ipData.location.lat, this.ipData.location.lng],
      zoom: 13,
      zoomControl: false,
      attributionControl: false,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '© OpenStreetMap',
      }
    );
    tiles.addTo(this.map);

    const marker = L.marker([
      this.ipData.location.lat,
      this.ipData.location.lng,
    ]);
    marker.addTo(this.map);
  }

  public getMyIpAndSearch(): Observable<IPData> {
    return this.http.get<{ ip: string }>(this.GET_IP_URL).pipe(
      switchMap((data) => this.searchIp(data.ip)),
      catchError((error) => {
        console.error('Error fetching public IP:', error);
        return of(this.ipData);
      })
    );
  }
}
