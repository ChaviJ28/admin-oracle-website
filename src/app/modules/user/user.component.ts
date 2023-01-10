import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewExampleComponent } from '../dashboard/components/new-example/new-example.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'address', 'age', 'actions'];
  dataSource: MatTableDataSource<never>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  activeOptions: { text: string; value: string; }[];

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource([]);
    this.activeOptions = [{ text: "Yes", value: "yes" }, { text: "No", value: "no" }];

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  search(): void {

  }

  openDialog(): void {
    this.dialog.open(NewExampleComponent, {
      width: '350px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '200ms',
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
