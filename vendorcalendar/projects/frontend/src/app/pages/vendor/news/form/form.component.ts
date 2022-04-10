import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ToastService } from '../../../../@core/lib';
import { AppSettings } from '../../../../@core/config'
import { EMPTY, Observable, Observer, of } from 'rxjs';
import { map, mergeMap, mergeMapTo } from 'rxjs/operators';

@Component({
  selector: 'elephy-vendor-news-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class VendorNewsFormComponent implements OnInit {
  public faTrashAltIcon = faTrashAlt;

  private newsId: number = 0;
  public formType: string = 'ADD';
  public isProcessing: boolean = false;
  public isSubmitted: boolean = false;
  private newsStatus: number = 0;

  public mceConfig: any = {}

  public news: any = '';

  isBannerUploaded: boolean = false;
  newsBannerData: any = new FormData();
  newsBannerSrc: string = '';

  addUpdateForm = this._fb.group({
    news_heading: ['', Validators.required],
    news_content: ['', Validators.required],
  })

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _toastService: ToastService,
  ) {
    
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.newsId = params.newsId;
    });

    this._activatedRoute.data.subscribe((data: any) => {
      this.formType = data.action;
    });

    this.getNewsInfo();
  }

  get f() {
    return this.addUpdateForm.controls;
  }

  getNewsInfo(): void {
   
  }

  saveNews(): void {
    this.newsStatus = 0;
    this.onSaveProcess();
  }

  saveAndPublish(): void {
    this.newsStatus = 1;
    this.onSaveProcess();
  }

  onSaveProcess(): void {
    
  }



 

  

}
