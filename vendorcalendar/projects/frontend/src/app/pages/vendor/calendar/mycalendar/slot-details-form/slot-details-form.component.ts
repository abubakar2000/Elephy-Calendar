import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'projects/frontend/src/app/services/calendar.service';

@Component({
  selector: 'app-slot-details-form',
  templateUrl: './slot-details-form.component.html',
  styleUrls: ['./slot-details-form.component.scss']
})
export class SlotDetailsFormComponent implements OnInit {
  
  constructor(public slotSrvs: CalendarService) { }

  ngOnInit(): void {
  }

  reserveSlot(id: string) {
    this.slotSrvs.reserveSlotWith();
  }

}
