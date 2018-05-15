import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamComponentComponent } from './team/team-component.component';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponentComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
