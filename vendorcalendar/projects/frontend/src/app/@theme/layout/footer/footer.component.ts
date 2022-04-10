import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elephy-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
