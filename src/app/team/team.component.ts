import { Component, OnInit } from '@angular/core';

import { TeamService } from './team.service';
import { ITeam } from './team.interface';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  selectedCountry = new Subject<string>();
  teams: ITeam[];
  selectedClub: string;
  currentTeam: ITeam;

  constructor(private team: TeamService) {
    team.getTeamsMetaData();

  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teams = this.team.getTeams();
    console.log(this.teams);
  }

  onChangeSelect(teamName: string) {
    this.selectedClub = teamName;
    for (const team of this.teams) {
      if (team.teamName === this.selectedClub) {
        this.currentTeam = team;
      }
    }
  }

}
