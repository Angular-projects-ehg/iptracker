import { Component } from '@angular/core';
import { IpinputComponent } from "../components/ipinput/ipinput.component";
import { InfoComponent } from '../components/info/info.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [IpinputComponent,InfoComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
