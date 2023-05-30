import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: any = [];

  loginForm!: FormGroup;

  constructor(private userds: UserdataService, private router: Router) {}

  ngOnInit() {
    this.users = this.userds.getData();
    console.log(this.users);

    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.loginForm.reset();
  }

  checkCreds() {
    const data = this.loginForm.getRawValue();
    this.users.forEach((u: { userName: any; password: any }) => {
      if (u.userName == data.userName && u.password == data.password) {
        console.log('Verified');
        this.router.navigate(['/candidate']);
      } else {
        console.log('Invalid login details');
      }
    });
  }

  navigate() {
    this.router.navigate(['/register']);
  }
}
