import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MycalendarComponent } from './mycalendar/mycalendar.component';

const routes: Routes = [
  {
    path: '',
    component: MycalendarComponent,
    data: {
      breadcrumb: {
        label: 'Calendar'
      }
    }
  },
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorCalendarRoutingModule { }
