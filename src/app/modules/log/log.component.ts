import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Log } from '../core/models/log.model';
import { LogService } from './log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'user_id', 'severity'];
  severityOptions: { text: string; value: string; }[];
  dataSource: MatTableDataSource<never>;



  constructor(private api: LogService) {
    this.dataSource = new MatTableDataSource([]);
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
    this.api.listLogResponse().subscribe((resp) => {
      console.log(resp);
      this.dataSource = resp['data'];
    })
  }

  search(): void {

  }


}
