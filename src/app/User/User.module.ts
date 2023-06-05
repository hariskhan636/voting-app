import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './User.component';
import { CandidateComponent } from './candidate/candidate.component';
import { PositionComponent } from './position/position.component';
import { ResultsComponent } from './results/results.component';
import { VotingComponent } from './voting/voting.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
      {
        path: 'candidates',
        component: CandidateComponent,
      },
      {
        path: 'position',
        component: PositionComponent,
      },
      {
        path: 'results',
        component: ResultsComponent,
      },
      {
        path: 'voting',
        component: VotingComponent,
      },
    ]),
  ],
  declarations: [
    UserComponent,
    CandidateComponent,
    PositionComponent,
    ResultsComponent,
    VotingComponent,
  ],
})
export class UserModule {}
