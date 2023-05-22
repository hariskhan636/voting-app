import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;

  constructor(private userds: UserdataService, private router: Router) {}

  ngOnInit() {
    this.regForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  sendCreds() {
    const data = this.regForm.getRawValue();
    let taken = false;
    for (let i = 0; i < this.userds.users.length; i++) {
      if (data.userName == this.userds.users[i].userName) {
        alert('User name is taken');
        taken = true;
      }
    }
    if (taken == false) {
      this.userds.pushUser(data);
      this.router.navigate(['/login']);
    }
  }

  navigate() {
    this.router.navigate(['/login']);
  }
}
