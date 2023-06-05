import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './Admin.component';
import { PositionComponent } from './position/position.component';
import { RouterModule } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, CandidateComponent, PositionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'candidates',
        component: CandidateComponent,
      },
      {
        path: 'position',
        component: PositionComponent,
      },
    ]),
  ],
})
export class AdminModule {}
