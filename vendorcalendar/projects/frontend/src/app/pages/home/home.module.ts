import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from '../../shared/shared.module'

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: []
})
export class HomeModule { }
