import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './userdata.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
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
        path: 'admin',
        loadChildren: () =>
          import(`../app/Admin/Admin.module`).then((mod) => mod.AdminModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import(`../app/User/User.module`).then((mod) => mod.UserModule),
      },
    ]),
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
