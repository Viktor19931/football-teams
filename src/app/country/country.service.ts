import { ICountry } from './country.interface';

export class CountryService {
  countries: { [key: string]: ICountry };

  constructor() {
    console.log(this.getCountriesMetaData());
    this.countries = this.getCountriesMetaData();
  }

  getCountriesMetaData(): {[key: string]: ICountry } {
    return JSON.parse((<HTMLMetaElement>document.getElementsByName('countries')[0]).content);
  }

  getCountries(): { [key: string]: ICountry } {
    return this.countries;
  }

}
