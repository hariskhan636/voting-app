import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  data: any = [];

  ngOnInit(): void {}

  constructor(public dataService: UserdataService) {
    this.data = dataService.candidates;
  }
}
