import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../core/components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    AppRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    MatIconModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
