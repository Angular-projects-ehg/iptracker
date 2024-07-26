import { Component } from '@angular/core';
import { IpInputComponent } from "../components/ipinput/ipinput.component";
import { InfoComponent } from '../components/info/info.component';
import { TrackIpService } from '../services/trackip.service';
import { IPData } from '../interfaces/ip.interfaces';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [IpInputComponent,InfoComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {


  constructor(private TrackIpService:TrackIpService) {}

  get ipdata():any {
    return this.TrackIpService.ipData
  }





}
