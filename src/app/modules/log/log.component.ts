import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LogService } from './log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'user_id', 'severity'];
  severityOptions: { text: string; value: string; }[];
  dataSource: MatTableDataSource<never>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private api: LogService) {
    this.dataSource = new MatTableDataSource<never>;
    this.dataSource.paginator = this.paginator;
    this.severityOptions = [{ text: "Log", value: "log" }, { text: "Warning", value: "warning" }, { text: "Error", value: "error" }];

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.api.listLogResponse({}).subscribe((resp) => {
      console.log(resp);
      this.dataSource = resp['data'];
    })
  }

  search(userId: string, severity: string): void {
    var searchCriteria: any = {};

    if (userId) {
      searchCriteria.user_id = userId;
    }

    if (severity) {
      searchCriteria.severity = severity;
    }

    this.api.listLogResponse(searchCriteria).subscribe((resp) => {
      console.log(resp);
      this.dataSource = resp['data'];
    })
  }


}
