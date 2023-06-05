import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  data: any = [];
  cityPos: any = [];
  countryPos: any = [];
  city: any = [];

  candidateForm!: FormGroup;

  ngOnInit(): void {
    this.candidateForm = new FormGroup({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      countryPosition: new FormControl('', Validators.required),
      cityPosition: new FormControl('', Validators.required),
      cityVotes: new FormControl(0),
      countryVotes: new FormControl(0),
    });
  }

  constructor(public dataService: UserdataService, private router: Router) {
    this.data = dataService.candidates;
    this.cityPos = dataService.positions.city;
    this.countryPos = dataService.positions.country;
    this.city = dataService.cities;
  }

  navigateToPosition() {
    this.router.navigateByUrl('user/position');
  }
  navigateToResults() {
    this.router.navigateByUrl('user/results');
  }
  navigateToVoting() {
    this.router.navigateByUrl('user/voting');
  }

  logout() {
    this.router.navigate(['/']);
  }
}
