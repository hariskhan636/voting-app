import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  showAdd = false;
  showEdit = false;

  updateName = '';
  updateCity = '';
  updateCityPos = '';
  updateCountryPos = '';
  editIndex = 0;

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

  displayModal() {
    this.showAdd = true;
  }

  displayEdit(i: number) {
    this.showEdit = true;
    this.editIndex = i;
    this.updateName = this.data[i].name;
    this.updateCity = this.data[i].city;
    this.updateCityPos = this.data[i].cityPosition;
    this.updateCountryPos = this.data[i].countryPosition;
  }

  navigateToPosition() {
    this.router.navigate(['/position']);
  }
  navigateToResults() {
    this.router.navigate(['/results']);
  }
  navigateToVoting() {
    this.router.navigate(['/voting']);
  }

  logout() {
    this.router.navigate(['/']);
  }

  addCandidate() {
    this.showAdd = false;
    const candidate = this.candidateForm.getRawValue();
    this.dataService.candidates.push(candidate);
    this.candidateForm.reset();
  }

  delete(i: number) {
    this.dataService.candidates.splice(i, 1);
    console.log(this.dataService.candidates);
  }

  editCandidate() {
    let i = this.editIndex;
    this.dataService.candidates[i].name = this.updateName;
    this.dataService.candidates[i].city = this.updateCity;
    this.dataService.candidates[i].cityPosition = this.updateCityPos;
    this.dataService.candidates[i].countryPosition = this.updateCountryPos;
    this.showEdit = false;
    this.editIndex = 0;
    this.updateName = '';
    this.updateCity = '';
    this.updateCityPos = '';
    this.updateCountryPos = '';
  }
}
