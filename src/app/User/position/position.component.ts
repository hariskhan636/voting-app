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

  constructor(public dataService: UserdataService, private router: Router) {
    this.positions = dataService.positions;
  }

  ngOnInit() {}

  navigate() {
    this.router.navigateByUrl('user/candidates');
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
