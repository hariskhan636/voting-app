import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

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
    this.router.navigateByUrl('user/position');
  }
  navigateToCandidate() {
    this.router.navigateByUrl('user/candidates');
  }
  navigateToVoting() {
    this.router.navigateByUrl('user/voting');
  }

  logout() {
    this.router.navigate(['/']);
  }
}
