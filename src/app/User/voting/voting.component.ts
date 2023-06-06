import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  candidate: any = [];
  positions: any = [];
  selectedCity: any = [];
  selectedCountry: any = [];

  constructor(public dataservice: UserdataService, private router: Router) {
    this.candidate = this.dataservice.candidates;
    this.positions = this.dataservice.positions;
    this.dataservice.users.forEach((u, j) => {
      if (u.userName == this.dataservice.loggedInUserName) {
        this.selectedCity = dataservice.users[j].cityVoted;
        this.selectedCountry = dataservice.users[j].countryVoted;
      }
    });
  }

  ngOnInit() {
    console.log(this.selectedCity);
    console.log(this.selectedCountry);
  }

  logout() {
    this.router.navigate(['/']);
  }
  navigateToPosition() {
    this.router.navigateByUrl('user/position');
  }
  navigateToCandidate() {
    this.router.navigateByUrl('user/candidates');
  }
  navigateToResults() {
    this.router.navigateByUrl('user/results');
  }

  castCountryVote(i: number, name: string) {
    let found = false;
    this.dataservice.users.forEach((u, j) => {
      if (
        u.userName == this.dataservice.loggedInUserName &&
        u.voted.includes(this.dataservice.candidates[i].countryPosition)
      ) {
        alert('You have already voted for this position');
        found = true;
      } else if (found == false && j == this.dataservice.users.length - 1) {
        this.dataservice.users[j].countryVoted?.push(
          this.dataservice.candidates[i].name
        );
        this.dataservice.candidates[i].countryVotes++;
        u.voted.push(this.dataservice.candidates[i].countryPosition);
        alert(
          `Vote Casted Successfully for ${this.dataservice.candidates[i].countryPosition}`
        );
      }
    });
    this.dataservice.positions.country.forEach((p) => {
      if (p.name == name) {
        p.edit = false;
      }
    });
  }

  castCityVote(i: number, name: string) {
    let found = false;
    this.dataservice.users.forEach((u, j) => {
      if (
        u.userName == this.dataservice.loggedInUserName &&
        u.voted.includes(this.dataservice.candidates[i].cityPosition)
      ) {
        alert('You have already voted for this position');
        found = true;
      } else if (found == false && j == this.dataservice.users.length - 1) {
        this.dataservice.users[j].cityVoted?.push(
          this.dataservice.candidates[i].name
        );
        this.dataservice.candidates[i].cityVotes++;
        u.voted.push(this.dataservice.candidates[i].cityPosition);
        alert(
          `Vote Casted Successfully for ${this.dataservice.candidates[i].cityPosition}`
        );
      }
    });
    this.dataservice.positions.city.forEach((p) => {
      if (p.name == name) {
        p.edit = false;
      }
    });
  }
}
