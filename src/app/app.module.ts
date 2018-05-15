import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { CountryComponent } from './country/country.component';
import { TeamService } from './team/team.service';
import { CountryService } from './country/country.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TeamService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
