import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppSettings } from '../config';

@Injectable()
export class CodoHttpClient {
  constructor(public _http: HttpClient) { }

  post(url: string, data: any = {}, headerData: any = {}): Observable<any> {
    const headers = new HttpHeaders({ 'Accept': 'application/json'});
    if (headerData != null) {
      for (const headerKey in headerData) {
        if (headerKey) {
          const headerValue = headerData[headerKey];
          headers.append(headerKey, headerValue);
        }
      }
    }

    return this._http.post( url, data, { headers });
  }

  postDownload(url: string, data: any = {}, headerData: any = {}) {
    return this._http.post( url, data, { headers: headerData, responseType: 'blob' });
  }

  get(url: string, data: any = {}, headerData: any = {}): Observable<any>{
    //{ 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' }
    const newHeaders = new HttpHeaders();
    if (headerData != null) {
      for (const headerKey in headerData) {
        if (headerData) {
          const headerValue = headerData[headerKey];
          newHeaders.set(headerKey, headerValue);
        }
      }
    }

    return this._http.get( url, { headers: newHeaders, params: data });
  }

  getDownload(url: string, data: any = {}, headerData: any = {}) {
    return this._http.get( url, { headers: headerData, params: data, responseType: 'blob' });
  }

  put(url: string, data: any = {}, extraData: any = {}): Observable<any> {
    return this._http.put( url, data, extraData);
  }

  patch(url: string, data: any = {}, extraData: any = {}): Observable<any> {
    return this._http.patch( url, data, extraData);
  }

  delete(url: string, data: any = {}, headerData: any = {}): Observable<any> {
    const httpOptions: any = {
      body: data
    };

    if (Object.keys(headerData).length) {
      httpOptions.headers = new HttpHeaders(headerData);
    }

    return this._http.delete(url,
      httpOptions
    );
  }

}
