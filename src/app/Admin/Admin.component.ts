import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.router.navigateByUrl('');
  }
  navigateToCandidates() {
    this.router.navigateByUrl('/admin/candidates');
  }
  navigateToPosition() {
    this.router.navigateByUrl('/admin/position');
  }
}
