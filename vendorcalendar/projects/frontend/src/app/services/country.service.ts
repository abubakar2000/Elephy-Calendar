import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Country, State } from '../_models';

const baseUrl = `${environment.apiUrl}/data`;

@Injectable({ providedIn: 'root' })
export class CountryService {
  constructor(private router: Router, private http: HttpClient) {}

  getAll() {
    return this.http.get<Country[]>(`${baseUrl}/country`);
  }

  getById(id: string) {
    return this.http.get<State[]>(`${baseUrl}/state/${id}`);
  }
}
