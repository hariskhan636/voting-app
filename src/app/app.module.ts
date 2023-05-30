import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './userdata.service';
import { CandidateComponent } from './candidate/candidate.component';
import { PositionComponent } from './position/position.component';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting/voting.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CandidateComponent,
    PositionComponent,
    VotingComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'candidate',
        component: CandidateComponent,
      },
      {
        path: 'position',
        component: PositionComponent,
      },
      {
        path: 'voting',
        component: VotingComponent,
      },
      {
        path: 'results',
        component: ResultsComponent,
      },
    ]),
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
