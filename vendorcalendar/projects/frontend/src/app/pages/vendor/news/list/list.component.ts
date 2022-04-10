import { Component, OnInit } from '@angular/core';
import { faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'elephy-vendor-news-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class VendorNewsListComponent implements OnInit {
  public faPenAltIcon = faPenAlt;
  public faTrashAltIcon = faTrashAlt;

  public vendorNews: any = [];
  public isLoading: boolean = true;

  constructor(
  ) { }

  ngOnInit(): void {
    this.getNewsListing()
  }

  getNewsListing() {
    
  }

  deleteNews(newsId: number): void {
   
  }

}
