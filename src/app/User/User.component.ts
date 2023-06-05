import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent implements OnInit {
  user = '';
  constructor(private dataService: UserdataService, private router: Router) {}

  ngOnInit() {
    this.user = this.dataService.loggedInUserName;
  }

  navigateToResults() {
    this.router.navigateByUrl('/user/results');
  }
  navigateToPosition() {
    this.router.navigateByUrl('/user/position');
  }
  navigateToCandidates() {
    this.router.navigateByUrl('/user/candidates');
  }
  navigateToVoting() {
    this.router.navigateByUrl('/user/voting');
  }
  logout() {
    this.router.navigateByUrl('');
  }
}
