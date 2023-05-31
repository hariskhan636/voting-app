import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {
  users = [
    {
      userName: 'test',
      password: 'test',
      voted: [''],
    },
  ];

  loggedInUserName = '';

  candidates = [
    {
      name: 'Imran Khan',
      city: 'Rawalpindi',
      countryPosition: 'Prime Minister',
      cityPosition: 'Chief Minister',
      cityVotes: 11000,
      countryVotes: 35000,
    },
    {
      name: 'Nawaz Sharif',
      city: 'Lahore',
      countryPosition: 'Prime Minister',
      cityPosition: 'Mayor',
      cityVotes: 1200,
      countryVotes: 65,
    },
    {
      name: 'Altaf Hussain',
      city: 'Karachi',
      countryPosition: 'Prime Minister',
      cityPosition: 'Mayor',
      cityVotes: 1350,
      countryVotes: 13,
    },
    {
      name: 'Asif Zardari',
      city: 'Karachi',
      countryPosition: 'President',
      cityPosition: 'Senator',
      cityVotes: 4200,
      countryVotes: 365,
    },
    {
      name: 'Shahbaz Sharif',
      city: 'Lahore',
      countryPosition: 'President',
      cityPosition: 'Chief Minister',
      cityVotes: 5590,
      countryVotes: 111,
    },
    {
      name: 'Sheikh Rasheed',
      city: 'Rawalpindi',
      countryPosition: 'Vice President',
      cityPosition: 'Senator',
      cityVotes: 19000,
      countryVotes: 2100,
    },
  ];

  positions = {
    city: [
      { name: 'Mayor', status: 'open' },
      { name: 'Chief Minister', status: 'open' },
      { name: 'Senator', status: 'open' },
    ],
    country: [
      { name: 'President', status: 'open' },
      { name: 'Vice President', status: 'open' },
      { name: 'Prime Minister', status: 'open' },
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
