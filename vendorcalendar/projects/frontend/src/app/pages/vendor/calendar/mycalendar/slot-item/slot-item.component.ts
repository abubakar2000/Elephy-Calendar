import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from 'projects/frontend/src/app/services/calendar.service';
import { slot } from '../slot.model';

@Component({
  selector: 'app-slot-item',
  templateUrl: './slot-item.component.html',
  styleUrls: ['./slot-item.component.scss']
})
export class SlotItemComponent implements OnInit {
  @Input('slotObject') slotObject: slot;
  @Input('index') index: number;
  constructor(public slotSrvs: CalendarService) { }

  ngOnInit(): void {
  }

  reserveSlot(id: slot) {
    this.slotSrvs.reserveSlotWith();
  }
  ApproveSlot(id: slot) {
    this.slotSrvs.approveSlotWith(id);
  }
  DisapproveSlot(id: slot) {
    this.slotSrvs.disapproveSlotWith(id);
  }

  SelectSlot(id: string) {
    this.slotSrvs.SelectSlot(id)
  }

  removeSlot(id:slot){
    this.slotSrvs.removeSlot(id);
  }
}
