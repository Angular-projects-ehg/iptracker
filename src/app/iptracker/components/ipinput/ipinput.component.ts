import { Component } from '@angular/core';
import { InfoComponent } from '../info/info.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ipinput',
  standalone: true,
  imports: [InfoComponent,ReactiveFormsModule],
  templateUrl: './ipinput.component.html',
  styleUrl: './ipinput.component.css'
})

export class IpinputComponent {
 ip = new FormControl('')

 handleSubmit(event: Event) {
  event.preventDefault();
  console.log(this.ip.value);
}

 
}


