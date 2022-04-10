import { Injectable } from '@angular/core';
import { slot } from '../pages/vendor/calendar/mycalendar/slot.model';
import * as uuid from 'uuid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public addSlot: boolean = false;
  public focusedSlot: slot = {
    addedBy: '',
    approved: false,
    date: '',
    description: '',
    id: '',
    requesterTelephone: '',
    requesterEmail: '',
    reservedWith: '',
    time: '',
    title: ''
  }

  public newSlot: slot = {
    approved: false,
    id: '',
    description: '',
    requesterEmail: '',
    requesterTelephone: '',
    title: '',
    reservedWith: '',
    addedBy: '',
    time: '',
    date: '',
  }

  public slots: slot[] = [
  ]

  constructor(private http: HttpClient) {
    this.loadSlots();
  }

  loadSlots() {
    this.http.get<slot[]>('http://localhost:4000/calendar/', { responseType: 'json' })
      .toPromise()
      .then(_ => {
        console.log(_);
        this.slots = _.reverse();
      })
      .catch(_ => {
        console.log(_);
      })
  }

  getSlots(): slot[] {
    this.loadSlots();
    return this.slots;
  }

  reserveSlotWith() {
    this.http.post<slot[]>('http://localhost:4000/calendar/reserve', this.focusedSlot, { responseType: 'json' })
      .toPromise()
      .then(_ => {
        this.loadSlots()
        this.addSlot = false;
      })
      .catch(_ => {
        console.log(_);
      })
  }

  approveSlotWith(slot: slot) {
    this.http.post<slot[]>('http://localhost:4000/calendar/approve', slot, { responseType: 'json' })
      .toPromise()
      .then(_ => {
        this.loadSlots()
        this.addSlot = false;
      })
      .catch(_ => {
        console.log(_);
      })
  }

  disapproveSlotWith(slot: slot) {
    this.http.post<slot[]>('http://localhost:4000/calendar/disapprove', slot, { responseType: 'json' })
      .toPromise()
      .then(_ => {
        this.loadSlots();
        this.addSlot = false;
      })
      .catch(_ => {
        console.log(_);
      })
  }
  SelectSlot(id: string) {
    this.focusedSlot = JSON.parse(JSON.stringify(this.slots.find(s => s.id === id)))
  }

  AddSlot() {
    this.http.post<slot[]>('http://localhost:4000/calendar/add', this.newSlot, { responseType: 'json' })
      .toPromise()
      .then(_ => {
        this.addSlot = false;
        this.loadSlots();
      })
      .catch(_ => {
        console.log(_);
      })
  }
  removeSlot(slot: slot) {
    this.http.post<slot[]>('http://localhost:4000/calendar/del', slot, { responseType: 'json' })
      .toPromise()
      .then(_ => {
        this.loadSlots();
        this.addSlot = false;
      })
      .catch(_ => {
        console.log(_);
      })
  }
}
