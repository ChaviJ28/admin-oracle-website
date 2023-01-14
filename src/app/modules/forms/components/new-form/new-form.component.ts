import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { FormService } from '../../forms.component';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {

  constructor(private api: FormService, private fb: FormBuilder, private dialogRef: MatDialogRef<NewFormComponent>) { }
  @Input() accessRights: any[] = [];
  selectedChips: string[] = [];

  ngOnInit(): void {
    // this.api.listAccessRights().subscribe((resp) => {
    //   console.log(resp);
    //   this.accessRights = resp.data
    // })
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
    if (chip.selected) {
      this.selectedChips.push(chip.value);
    } else {
      this.selectedChips = this.selectedChips.filter(e => e !== chip.value);
    }
  }

  newForm(email: string, name: string, username: string): void {
    console.log(email);
    console.log(name);
    console.log(username);
    console.log(this.selectedChips);
    // this.api.createUser(email, name, username, this.selectedChips).subscribe((resp) => {
    //   console.log(resp);
    // })
  }


}
