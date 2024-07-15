import { Component } from '@angular/core';
import { MainpageComponent } from "./iptracker/pages/mainpage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [MainpageComponent],
})
export class AppComponent {
  title = 'ip-adress-tracker';
}
