import { Subject } from 'rxjs/Subject';

import { ITeam } from './team.interface';

export class TeamService {
  teams: ITeam[];
  selectedCountry = new Subject<string>();
  constructor() {
    // console.log(this.getTeamsMetaData());
    this.teams = this.getTeamsMetaData();
  }

  getTeamsMetaData(): ITeam[] {
    return JSON.parse((<HTMLMetaElement>document.getElementsByName('footballClubs')[0]).content);
  }

  getTeams(): ITeam[] {
    return this.teams.slice();
  }
}
