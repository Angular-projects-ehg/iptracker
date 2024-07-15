import { Component } from '@angular/core';
import { IpinputComponent } from "../components/ipinput/ipinput.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [IpinputComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
