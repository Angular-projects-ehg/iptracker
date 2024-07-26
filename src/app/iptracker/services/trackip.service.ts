import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class TrackIpService {

  private IP_API_KEY = 'at_6aRBZ1v2sjJN5tcd2gKi2pRNRFfWH';
  private API_URL:string = ' https://geo.ipify.org/api/v2/country'
  // https://geo.ipify.org/api/v2/country?apiKey=at_6aRBZ1v2sjJN5tcd2gKi2pRNRFfWH&ipAddress=8.8.8.8

  constructor( private http:HttpClient ) { }


  public searchIp(ip:string):void {

    if(ip.length === 0) return;

    const params = new HttpParams()
    .set('apiKey',this.IP_API_KEY)
    .set('ipAddress',ip)

    this.http.get(`${this.API_URL}`,{params:params})
    .subscribe((resp) => {
      console.log(resp)
    });

  }

}
