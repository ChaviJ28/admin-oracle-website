import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormService } from './forms.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewFormComponent } from './components/new-form/new-form.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'created_by', 'responses', 'url', 'end_date', 'status', 'actions'];
  dataSource: MatTableDataSource<never>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  statusOptions: { text: string; value: string; }[];

  constructor(public dialog: MatDialog, private api: FormService) {
    this.dataSource = new MatTableDataSource([]);
    this.statusOptions = [{ text: "Active", value: "active" }, { text: "Draft", value: "draft" }, { text: "Closed", value: "closed" }];

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.api.listFormResponse({}, true).subscribe((resp) => {
      console.log(resp);
      this.dataSource = resp['data'];
    })
  }

  newForm(): void {
    this.dialog.open(NewFormComponent, {
      width: '1300px',
      height: '800px',
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '200ms',
    });
  }

  viewForm(): void {
    throw new Error('Method not implemented.');
  }

  editForm(): void {
    throw new Error('Method not implemented.');
  }

  openForm(): void {
    throw new Error('Method not implemented.');
  }

  search(status: string): void {
    var searchCriteria: any = {};

    if (status) {
      searchCriteria.status = status;
    }

    this.api.listFormResponse(searchCriteria, true).subscribe((resp) => {
      console.log(resp);
      this.dataSource = resp['data'];
    })
  }

}
export { FormService };

