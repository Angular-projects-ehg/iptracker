import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TrackIpService } from '../../services/trackip.service';
import { IPData } from '../../interfaces/ip.interfaces';

@Component({
  selector: 'app-ipinput',
  standalone: true,
  templateUrl: './ipinput.component.html',
  styleUrls: ['./ipinput.component.css'],
})
export class IpInputComponent implements OnInit {
  @ViewChild('ipValueInput')
  public searchIp!: ElementRef<HTMLInputElement>;

  public ipdata: IPData = {
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

  constructor(private trackIpService: TrackIpService) {}

  ngOnInit(): void {
    this.trackIpService.getMyIpAndSearch().subscribe((data: IPData) => {
      this.ipdata = data;
      if (this.searchIp) {
        this.searchIp.nativeElement.value = this.ipdata.ip;
      }
    });
  }

  FormSubmit(e: Event): void {
    e.preventDefault();
    const IP = this.searchIp.nativeElement.value;

    this.trackIpService.searchIp(IP).subscribe((data) => {
      this.ipdata = data;
    });

    console.log('Searching IP: ' + IP);
  }
}
