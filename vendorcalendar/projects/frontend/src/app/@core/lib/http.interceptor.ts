import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { ToastService } from './toast.service';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  constructor(
    private _toastService: ToastService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status !== 401) {
          this._toastService.showHttpError(error)
        }
        //console.log(error)
        return throwError(error);
      })
    )
  }
}
