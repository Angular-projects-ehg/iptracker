import { NgModule } from '@angular/core';
import { IptrackerModule } from './iptracker/iptracker.module';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [IptrackerModule],
  providers: [provideHttpClient()],
})



export class Appodule {


}
