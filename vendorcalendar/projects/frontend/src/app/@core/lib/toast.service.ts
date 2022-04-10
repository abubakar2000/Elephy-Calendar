import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {
  private toastConfig = {};
  constructor(
    private _toastrService: ToastrService
  ) {
    this.toastConfig = {
      positionClass: 'toast-top-center',
      progressBar: true,
      closeButton: true
    }
  }

  public showToast(title: string, message: string, type: string = 'success') {
    switch (type) {
      case 'info':
        this._toastrService.info(message, '', this.toastConfig);
        break;
      case 'success':
        this._toastrService.success(message, '', this.toastConfig);
        break;
      case 'error':
        this._toastrService.error(message, '', this.toastConfig);
        break;
      case 'warning':
        this._toastrService.warning(message, '', this.toastConfig);
        break;
    }
  }

  public showHttpError(error: any) {
    const errorHeading = 'Error'
    const errorMsg = error.error?.errorMessage ? error.error.errorMessage : error.message;
    this.showToast(errorHeading, errorMsg, 'error');
  }
}
