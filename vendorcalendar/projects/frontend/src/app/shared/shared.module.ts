import { ToastService } from './../@core/lib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal'
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';

import { ThemeModule } from '../@theme/theme.module'


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    EditorModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
    BreadcrumbModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ThemeModule,
    EditorModule,
    ModalModule,
    FontAwesomeModule,
    BreadcrumbModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    ToastService
  ],
})
export class SharedModule {
  constructor(private breadcrumbService: BreadcrumbService) { }
}
