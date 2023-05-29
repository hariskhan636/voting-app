import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './userdata.service';
import { CandidateComponent } from './candidate/candidate.component';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CandidateComponent,
    PositionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
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
        path: 'country',
        loadChildren: () =>
          import('./country/country.module').then((mod) => mod.CountryModule),
      },
    ]),
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
