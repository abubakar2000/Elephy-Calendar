import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ImagePathPipe } from './pipes/image-path.pipe';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent
]

const PIPES = [
  ImagePathPipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    NgxNavbarModule
  ],
  exports: [...COMPONENTS, ...PIPES]
})
export class ThemeModule { }
