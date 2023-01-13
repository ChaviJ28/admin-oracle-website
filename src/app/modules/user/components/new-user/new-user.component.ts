import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private api: UserService, private fb: FormBuilder, private dialogRef: MatDialogRef<NewUserComponent>) { }
  @Input() accessRights: any[] = [];
  selectedChips: string[] = [];

  ngOnInit(): void {
    this.api.listAccessRights().subscribe((resp) => {
      console.log(resp);
      this.accessRights = resp.data
    })
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
    if (chip.selected) {
      this.selectedChips.push(chip.value);
    } else {
      this.selectedChips = this.selectedChips.filter(e => e !== chip.value);
    }
  }

  newUser(email: string, name: string, username: string): void {
    console.log(email);
    console.log(name);
    console.log(username);
    console.log(this.selectedChips);
    this.api.createUser(email, name, username, this.selectedChips).subscribe((resp) => {
      console.log(resp);
    })
  }


}
