import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  data: any = [];
  positions: any = [];
  constructor(dataservice: UserdataService, private router: Router) {
    this.data = dataservice.candidates;
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
