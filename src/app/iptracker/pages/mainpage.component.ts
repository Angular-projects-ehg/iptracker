import { Component } from '@angular/core';
import { IpInputComponent } from "../components/ipinput/ipinput.component";
import { InfoComponent } from '../components/info/info.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [IpInputComponent,InfoComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
