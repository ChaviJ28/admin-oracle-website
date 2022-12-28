import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Example } from '../core/models/example.model';
import { NewExampleComponent } from './components/new-example/new-example.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  examples: Example[] = [
    {
      id: 1,
      name: "tom",
      address: "Mauritius",
      age: 20,
      gender: "Male"
    },
    {
      id: 2,
      name: "tim",
      address: "Mauritius",
      age: 20,
      gender: "Male"
    },
    {
      id: 3,
      name: "tam",
      address: "Mauritius",
      age: 20,
      gender: "Male"
    },
    {
      id: 4,
      name: "wom",
      address: "Mauritius",
      age: 20,
      gender: "Male"
    },
    {
      id: 5,
      name: "som",
      address: "Mauritius",
      age: 20,
      gender: "Male"
    },
    {
      id: 6,
      name: "zom",
      address: "Mauritius",
      age: 20,
      gender: "Male"
    },
    {
      id: 7,
      name: "nom",
      address: "Mauritius",
      age: 20,
      gender: "Male"
    },
  ]

  displayedColumns: string[] = ['id', 'name', 'address', 'age', 'actions'];
  dataSource: MatTableDataSource<Example>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.examples);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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


