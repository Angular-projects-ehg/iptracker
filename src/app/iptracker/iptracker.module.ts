import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './pages/mainpage.component';
import { IpInputComponent } from './components/ipinput/ipinput.component';
import { InfoComponent } from './components/info/info.component';



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MainpageComponent,
    IpInputComponent,
    InfoComponent

  ]
})
export class IptrackerModule { }
