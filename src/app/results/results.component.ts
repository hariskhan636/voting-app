import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  dataCity: any = [];
  dataCountry: any = [];
  positions: any = [];
  constructor(dataservice: UserdataService, private router: Router) {
    this.dataCity = dataservice.candidates;
    this.dataCountry = dataservice.candidates;
    this.dataCity.sort((a: any, b: any) => {
      return b.cityVotes - a.cityVotes;
    });
    this.dataCountry.sort((a: any, b: any) => {
      return b.countryVotes - a.countryVotes;
    });
    this.positions = dataservice.positions;
  }

  ngOnInit() {}

  navigateToPosition() {
    this.router.navigate(['/position']);
  }
  navigateToCandidate() {
    this.router.navigate(['/candidate']);
  }
  navigateToVoting() {
    this.router.navigate(['/voting']);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
