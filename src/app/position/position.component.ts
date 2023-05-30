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
  cityPos: string = '';
  conPos: string = '';

  constructor(public dataService: UserdataService, private router: Router) {
    this.positions = dataService.positions;
    console.log(this.positions);
  }

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/candidate']);
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
}
