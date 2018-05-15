import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CountryService } from './country.service';
import { TeamService } from '../team/team.service';
import { ICountry } from './country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  countries: {[key: string]: ICountry};
  selectedCountry: ICountry;

  constructor(private counriesService: CountryService, private teamService: TeamService) {
    this.counriesService.getCountriesMetaData();
  }

  ngOnInit() {
    this.countries = this.counriesService.getCountries();
    this.subscription = this.teamService.selectedCountry.subscribe(
      (countryCode: string) => {
        console.log(this.countries[countryCode]);
        this.selectedCountry = this.countries[countryCode];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
