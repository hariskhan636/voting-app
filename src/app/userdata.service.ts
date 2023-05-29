import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {
  users = [
    {
      userName: 'test',
      password: 'test',
      voted: false,
    },
  ];

  candidates = [
    {
      name: 'Imran Khan',
      city: 'Rawalpindi',
      countryPosition: 'Prime Minister',
      cityPosition: 'Chief Minister',
      edit: false,
    },
    {
      name: 'Nawaz Sharif',
      city: 'Lahore',
      countryPosition: 'Prime Minister',
      cityPosition: 'Mayor',
      edit: false,
    },
    {
      name: 'Altaf Hussain',
      city: 'Karachi',
      countryPosition: 'Prime Minister',
      cityPosition: 'Mayor',
      edit: false,
    },
    {
      name: 'Asif Zardari',
      city: 'Karachi',
      countryPosition: 'President',
      cityPosition: 'Senator',
      edit: false,
    },
    {
      name: 'Shahbaz Sharif',
      city: 'Lahore',
      countryPosition: 'President',
      cityPosition: 'Chief Minister',
      edit: false,
    },
    {
      name: 'Sheikh Rasheed',
      city: 'Rawalpindi',
      countryPosition: 'Vice President',
      cityPosition: 'Senator',
      edit: false,
    },
  ];

  positions = {
    city: [
      { name: 'Mayor', status: 'open', edit: false },
      { name: 'Chief Minister', status: 'open', edit: false },
      { name: 'Senator', status: 'open', edit: false },
    ],
    country: [
      { name: 'President', status: 'open', edit: false },
      { name: 'Vice President', status: 'open', edit: false },
      { name: 'Prime Minister', status: 'open', edit: false },
    ],
  };

  cities = ['Rawalpindi', 'Lahore', 'Karachi'];

  constructor() {}

  pushUser(user: any) {
    this.users.push(user);
  }

  getData() {
    return this.users;
  }
}
