import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {
  users = [
    {
      userName: 'admin',
      password: 'admin',
      voted: [''],
    },
    {
      userName: 'test',
      password: 'test',
      voted: [''],
      cityVoted: [''],
      countryVoted: [''],
    },
  ];

  loggedInUserName = '';

  candidates = [
    {
      name: 'Imran Khan',
      city: 'Rawalpindi',
      countryPosition: 'Prime Minister',
      cityPosition: 'Chief Minister',
      cityVotes: 0,
      countryVotes: 0,
    },
    {
      name: 'Nawaz Sharif',
      city: 'Lahore',
      countryPosition: 'Prime Minister',
      cityPosition: 'Mayor',
      cityVotes: 0,
      countryVotes: 0,
    },
    {
      name: 'Altaf Hussain',
      city: 'Karachi',
      countryPosition: 'Prime Minister',
      cityPosition: 'Mayor',
      cityVotes: 0,
      countryVotes: 0,
    },
    {
      name: 'Asif Zardari',
      city: 'Karachi',
      countryPosition: 'President',
      cityPosition: 'Senator',
      cityVotes: 0,
      countryVotes: 0,
    },
    {
      name: 'Shahbaz Sharif',
      city: 'Lahore',
      countryPosition: 'President',
      cityPosition: 'Chief Minister',
      cityVotes: 0,
      countryVotes: 0,
    },
    {
      name: 'Sheikh Rasheed',
      city: 'Rawalpindi',
      countryPosition: 'Vice President',
      cityPosition: 'Senator',
      cityVotes: 0,
      countryVotes: 0,
    },
  ];

  positions = {
    city: [
      { name: 'Mayor', status: 'open', edit: true },
      { name: 'Chief Minister', status: 'open', edit: true },
      { name: 'Senator', status: 'open', edit: true },
    ],
    country: [
      { name: 'President', status: 'open', edit: true },
      { name: 'Vice President', status: 'open', edit: true },
      { name: 'Prime Minister', status: 'open', edit: true },
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
