import { Component, ElementRef, ViewChild } from '@angular/core';
import { TrackIpService } from '../../services/trackip.service';

@Component({
  selector: 'app-ipinput',
  standalone: true,
  imports: [],
  templateUrl: './ipinput.component.html',
  styleUrl: './ipinput.component.css'
})

export class IpInputComponent {


@ViewChild('ipValueInput')
public searchIp!: ElementRef<HTMLInputElement>;

constructor(private trackIpService:TrackIpService) {}

 FormSubmit(e:Event) {
  e.preventDefault();
  const IP = this.searchIp.nativeElement.value;

  this.trackIpService.searchIp(IP);

  console.log('Searching ip: ' + IP);

}




}


