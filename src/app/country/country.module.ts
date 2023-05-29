import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { RouterModule } from '@angular/router';
import { RawalpindiComponent } from './rawalpindi/rawalpindi.component';
import { LahoreComponent } from './lahore/lahore.component';
import { KarachiComponent } from './karachi/karachi.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'rawalpindi',
        component: RawalpindiComponent,
      },
      {
        path: 'lahore',
        component: LahoreComponent,
      },
      {
        path: 'karachi',
        component: KarachiComponent,
      },
    ]),
  ],
  declarations: [CountryComponent],
})
export class CountryModule {}
