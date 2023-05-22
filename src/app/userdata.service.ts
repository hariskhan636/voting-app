import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {
  users = [
    {
      userName: 'test',
      password: 'test',
    },
  ];

  constructor() {}

  pushUser(user: any) {
    this.users.push(user);
  }

  getData() {
    return this.users;
  }
}
