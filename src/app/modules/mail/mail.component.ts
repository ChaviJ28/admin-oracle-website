import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import accounts from './mail.accounts.js';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent {
  displayedColumns: string[] = ['user', 'email', 'description', 'admin', 'action'];
  dataSource: MatTableDataSource<never>;

  constructor() {
    this.dataSource = new MatTableDataSource([]);
    // this.dataSource = ;

  }

  openInbox(email: any): void {
    console.log(email)
    window.open("https://mail.uomoracleclub.com/mail/?_user=" + email, "_blank");
  }

}

