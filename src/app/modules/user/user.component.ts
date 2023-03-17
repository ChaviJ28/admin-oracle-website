import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['username', 'name', 'email', 'active', 'actions'];
  dataSource: MatTableDataSource<never>
  pagesSize = [2,4,6];

  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  activeOptions: { text: string; value: string; }[];

  constructor(public dialog: MatDialog,private api: UserService) {
    this.dataSource = new MatTableDataSource();
    this.activeOptions = [{ text: "Yes", value: "yes" }, { text: "No", value: "no" }];

  }
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.api.listUserResponse({}).subscribe((resp) => {
      console.log(resp);
      this.dataSource = resp['data'];
    })
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource()
    this.dataSource.paginator = this.paginator;
  }

  search(userId: string, email: string, active: string): void {
    var searchCriteria: any = {};

    if (userId) {
      searchCriteria.id = userId;
    }

    if (email) {
      searchCriteria.email = email;
    }

    if (active) {
      searchCriteria.active = active;
    }
    console.log("search:", searchCriteria);

    this.api.listUserResponse(searchCriteria).subscribe((resp) => {
      console.log(resp);
      this.dataSource = resp['data'];
    })
  }

  viewUser(): void {

  }

  newUser(): void {
    this.dialog.open(NewUserComponent, {
      width: '1050px',
      height: '300px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '200ms',
    });
  }

  editUser(): void {
    this.dialog.open(NewUserComponent, {
      width: '1050px',
      height: '300px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '200ms',
    });
  }

  registerSucess:boolean = false;


}
