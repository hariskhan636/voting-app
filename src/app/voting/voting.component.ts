import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css'],
})
export class VotingComponent implements OnInit {
  candidate: any = [];
  positions: any = [];

  constructor(public dataservice: UserdataService, private router: Router) {
    this.candidate = this.dataservice.candidates;
    this.positions = this.dataservice.positions;
  }

  ngOnInit() {}

  logout() {
    this.router.navigate(['/']);
  }
  navigateToPosition() {
    this.router.navigate(['/position']);
  }
  navigateToCandidate() {
    this.router.navigate(['/candidate']);
  }
  navigateToResults() {
    this.router.navigate(['/results']);
  }

  castCountryVote(i: number) {
    this.dataservice.users.forEach((u) => {
      if (
        u.userName == this.dataservice.loggedInUserName &&
        u.voted.includes(this.dataservice.candidates[i].countryPosition)
      ) {
        alert('You have already voted for this position');
      } else {
        this.dataservice.candidates[i].countryVotes++;
        u.voted.push(this.dataservice.candidates[i].countryPosition);
      }
    });
  }

  castCityVote(i: number) {
    this.dataservice.users.forEach((u) => {
      if (
        u.userName == this.dataservice.loggedInUserName &&
        u.voted.includes(this.dataservice.candidates[i].cityPosition)
      ) {
        alert('You have already voted for this position');
      } else {
        this.dataservice.candidates[i].cityVotes++;
        u.voted.push(this.dataservice.candidates[i].cityPosition);
      }
    });
  }
}
