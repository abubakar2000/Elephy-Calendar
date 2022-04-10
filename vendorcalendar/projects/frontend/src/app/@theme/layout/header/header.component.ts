import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../../services';
import { Account, Role } from '../../../_models';

@Component({
  selector: 'elephy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //@Input() headerType: string = 'GUEST';
  public homePageURL: string = '/'
  public loggedUser: any;
  headerType: string = 'GUEST';
  account? : Account;

  constructor(private accountService: AccountService) { 
    this.accountService.account.subscribe(x => this.account = x);
  }

  ngOnInit(): void {

    /* console.log(this.loggedUser) */

  }

  logout() {
    this.accountService.logout();
  }


  

}
