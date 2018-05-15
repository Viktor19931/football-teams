import { Component, OnInit } from '@angular/core';

import { TeamService } from './team.service';
import { ITeam } from './team.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams: ITeam[];
  selectedClub: string;
  currentTeam: ITeam;

  constructor(private teamService: TeamService) {
    teamService.getTeamsMetaData();
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teams = this.teamService.getTeams();
    console.log(this.teams);
  }

  onChangeSelect(teamName: string) {
    this.selectedClub = teamName;
    for (const team of this.teams) {
      if (team.teamName === this.selectedClub) {
        this.currentTeam = team;
        this.teamService.selectedCountry.next(team.countyCode);
      }
    }
  }

}
