import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from './appSettings';

@Injectable()
export class CodoHttpClient {
  constructor(private http: HttpClient) { }

  post(url: string, data: any = {}, headerData: any = {}) {
    const headers = new HttpHeaders({ 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' });
    if (headerData != null) {
      for (const headerKey in headerData) {
        if (headerKey) {
          const headerValue = headerData[headerKey];
          headers.append(headerKey, headerValue);
        }
      }
    }

    return this.http.post(AppSettings.API_ENDPOINT + url, data, { headers });
  }

  postDownload(url: string, data: any = {}, headerData: any = {}) {
    return this.http.post(AppSettings.API_ENDPOINT + url, data, { headers: headerData, responseType: 'blob' });
  }

  get(url: string, data: any = {}, headerData: any = {}) {
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

    return this.http.get(AppSettings.API_ENDPOINT + url, { headers: newHeaders, params: data });
  }

  getDownload(url: string, data: any = {}, headerData: any = {}) {
    return this.http.get(AppSettings.API_ENDPOINT + url, { headers: headerData, params: data, responseType: 'blob' });
  }

  put(url: string, data: any = {}, headerData: any = {}) {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    if (headerData != null) {
      for (const headerKey in headerData) {
        if (headerData) {
          const headerValue = headerData[headerKey];
          headers.append(headerKey, headerValue);
        }
      }
    }

    return this.http.put(AppSettings.API_ENDPOINT + url, data, { headers });
  }

  delete(url: string, data: any = {}, headerData: any = {}) {
    const httpOptions: any = {
      body: data
    };

    if (Object.keys(headerData).length) {
      httpOptions.headers = new HttpHeaders(headerData);
    }

    return this.http.delete(AppSettings.API_ENDPOINT + url,
      httpOptions
    );
  }
}
