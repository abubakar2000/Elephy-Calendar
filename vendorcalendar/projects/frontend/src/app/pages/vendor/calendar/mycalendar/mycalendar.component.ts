import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'projects/frontend/src/app/services/calendar.service';
import { slot } from './slot.model';

@Component({
  selector: 'app-mycalendar',
  templateUrl: './mycalendar.component.html',
  styleUrls: ['./mycalendar.component.scss']
})
export class MycalendarComponent implements OnInit {
  
  constructor(public calendarSrvs: CalendarService) { }

  ngOnInit(): void {
  }

  getSlots(): slot[] {
    return this.calendarSrvs.getSlots()
  }

}
