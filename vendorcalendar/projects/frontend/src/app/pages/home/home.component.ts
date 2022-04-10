import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public home_banner_info: any = []
  public browse_shop_boxes: any = []
  public footer_info_boxes: any = []


  constructor(
  ) { }

  ngOnInit(): void {
    this.getHomePageContent();
  }

  async getHomePageContent(): Promise<void> {
   
  }

}
