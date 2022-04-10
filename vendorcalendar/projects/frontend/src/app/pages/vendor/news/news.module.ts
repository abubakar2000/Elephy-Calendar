import { NgModule } from '@angular/core';
import { ShareModule } from 'ngx-sharebuttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';

import { SharedModule } from '../../../shared/shared.module';

import { VendorNewsRoutingModule } from './news-routing.module';

import { VendorNewsFormComponent } from './form/form.component';
import { VendorNewsListComponent } from './list/list.component';

@NgModule({
  declarations: [
    VendorNewsFormComponent,
    VendorNewsListComponent
  ],
  imports: [
    ShareModule,
    ShareIconsModule,
    ShareButtonsModule,
    SharedModule,
    VendorNewsRoutingModule
  ]
})
export class NewsModule { }
