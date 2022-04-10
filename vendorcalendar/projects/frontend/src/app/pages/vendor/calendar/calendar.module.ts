import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'ngx-sharebuttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

import { SharedModule } from '../../../shared/shared.module';

import { VendorCalendarRoutingModule } from './calendar-routing.module';

import { MycalendarComponent } from './mycalendar/mycalendar.component';
import { SlotItemComponent } from './mycalendar/slot-item/slot-item.component';
import { SlotDetailsFormComponent } from './mycalendar/slot-details-form/slot-details-form.component';



@NgModule({
  declarations: [
    MycalendarComponent,
    SlotItemComponent,
    SlotDetailsFormComponent
  ],
  imports: [
    ShareModule,
    ShareIconsModule,
    ShareButtonsModule,
    SharedModule,
    VendorCalendarRoutingModule
  ]
})
export class CalendarModule { }
