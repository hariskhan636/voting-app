import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
})
export class PositionComponent implements OnInit {
  positions: any = [];
  displayCity = false;
  displayCountry = false;
  editCity = false;
  editCountry = false;
  cityPos: string = '';
  conPos: string = '';
  updateCityPos = '';
  updateCityStatus = '';
  updateCountryPos = '';
  updateCountryStatus = '';
  editCityIndex = 0;
  editCountryIndex = 0;
  candidatePos = '';

  constructor(public dataService: UserdataService, private router: Router) {
    this.positions = dataService.positions;
    console.log(this.positions);
  }

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/candidate']);
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

  deleteCountryPos(i: number) {
    this.dataService.positions.country.splice(i, 1);
  }

  deleteCityPos(i: number) {
    this.dataService.positions.city.splice(i, 1);
  }

  addCityPos(val: string, status: string) {
    this.dataService.positions.city.push({ name: val, status: status });
    this.displayCity = false;
    this.cityPos = '';
  }
  addCountryPos(val: string, status: string) {
    this.dataService.positions.country.push({ name: val, status: status });
    this.displayCountry = false;
    this.conPos = '';
  }

  editCityBox(i: number) {
    this.editCity = true;
    this.editCityIndex = i;
    this.updateCityPos = this.dataService.positions.city[i].name;
    this.updateCityStatus = this.dataService.positions.city[i].status;
    this.candidatePos = this.dataService.positions.city[i].name;
  }
  updateCityPosition() {
    let i = this.editCityIndex;
    this.dataService.positions.city[i].name = this.updateCityPos;
    this.dataService.positions.city[i].status = this.updateCityStatus;
    this.editCity = false;
    this.editCityIndex = 0;
    this.dataService.candidates.forEach((c) => {
      if (c.cityPosition == this.candidatePos) {
        c.cityPosition = this.updateCityPos;
      }
    });
    this.dataService.users.forEach((u) => {
      if (u.voted.includes(this.candidatePos)) {
      }
    });
    this.candidatePos = '';
  }

  editCountryBox(i: number) {
    this.editCountry = true;
    this.editCountryIndex = i;
    this.updateCountryPos = this.dataService.positions.country[i].name;
    this.updateCountryStatus = this.dataService.positions.country[i].status;
    this.candidatePos = this.dataService.positions.country[i].name;
  }
  updateCountryPosition() {
    let i = this.editCountryIndex;
    this.dataService.positions.country[i].name = this.updateCountryPos;
    this.dataService.positions.country[i].status = this.updateCountryStatus;
    this.editCountry = false;
    this.editCountryIndex = 0;
    this.dataService.candidates.forEach((c) => {
      if (c.countryPosition == this.candidatePos) {
        c.countryPosition = this.updateCountryPos;
      }
    });
    this.candidatePos = '';
  }
}
