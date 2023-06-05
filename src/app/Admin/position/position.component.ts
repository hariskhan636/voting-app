import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

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
  }

  ngOnInit() {}

  navigate() {
    this.router.navigateByUrl('admin/candidates');
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
    this.dataService.positions.city.push({
      name: val,
      status: status,
      edit: true,
    });
    this.displayCity = false;
    this.cityPos = '';
  }
  addCountryPos(val: string, status: string) {
    this.dataService.positions.country.push({
      name: val,
      status: status,
      edit: true,
    });
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
    this.updateUserArray(this.updateCityPos);
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
    this.updateUserArray(this.updateCityPosition);
    this.candidatePos = '';
  }

  updateUserArray(newValue: any) {
    this.dataService.users.forEach((u) => {
      for (let i = 0; i < u.voted.length; i++) {
        if (u.voted[i] == this.candidatePos) {
          u.voted[i] = newValue.toString();
        }
      }
    });
  }
}
