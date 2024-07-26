import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  @Input()
  public ipdata:any
}
