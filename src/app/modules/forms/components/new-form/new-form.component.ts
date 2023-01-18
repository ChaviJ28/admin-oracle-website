import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { FormService } from '../../forms.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {

  @Input() accessRights: any[] = [];
  selectedChips: string[] = [];
  DetailsForm: any;
  formDetails: any = {
    title: "",
    end_date: "",
    custom_url: "",
    status: "draft",
    form_fields: [],
    viewers: []
  }
  formfieldOptions: { text: string; value: string; }[];
  formFields: any = [];
  selectedOption = new FormControl('');

  constructor(private api: FormService, private fb: FormBuilder, private route: ActivatedRoute,) {
    this.formfieldOptions = [{ text: "Email", value: "email" }, { text: "Short Answer", value: "short_text" }, { text: "Long Answer", value: "long_text" }, { text: "Multiple Choice", value: "radio" }, { text: "Checkbox", value: "checkbox" }, { text: "Dropdown", value: "select" }]
  }

  RegForm = new FormGroup({
    Regf: new FormArray([])
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.DetailsForm = new FormGroup({
        formTitle: new FormControl(params['title']),
        formCustomUrl: new FormControl(params['url']),
        formEndDate: new FormControl(params['end_date'])
      });
    });
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
    if (chip.selected) {
      this.selectedChips.push(chip.value);
    } else {
      this.selectedChips = this.selectedChips.filter(e => e !== chip.value);
    }
  }

  remove(i: number) {
    this.RF.removeAt(i);
  }

  get RF() {
    return this.RegForm.get('Regf') as FormArray;
  }

  TF(i: number) {
    return this.RF.controls[i].get('option') as FormArray;
  }

  addOption(i: number) {
    this.TF(i).push(this.fb.control('option'));
  }

  removeOption(i: number, y: number) {
    this.TF(i).removeAt(y);
  }

  addFormField(chosenOpt: string) {
    var group: FormGroup;
    if ((chosenOpt === 'email') || (chosenOpt === 'short_text')) {
      group = new FormGroup({
        placeholder: new FormControl('placeholder'),
        label: new FormControl('label'),
        type: new FormControl(chosenOpt),
        req: new FormControl(false),
        SelectedOption: new FormControl("short_text"),
      });
    } else if (chosenOpt === 'long_text') {
      group = new FormGroup({
        placeholder: new FormControl('placeholder'),
        label: new FormControl('label'),
        type: new FormControl(chosenOpt),
        req: new FormControl(false),
        SelectedOption: new FormControl("textarea"),
      });
    } else if (chosenOpt === 'radio') {
      group = new FormGroup({
        placeholder: new FormControl('placeholder'),
        label: new FormControl('label'),
        type: new FormControl(chosenOpt),
        req: new FormControl(false),
        option: new FormArray([
          this.fb.control('option')
        ]),
        SelectedOption: new FormControl("Radio"),
      });
    } else if (chosenOpt === 'checkbox') {
      group = new FormGroup({
        placeholder: new FormControl('placeholder'),
        label: new FormControl('label'),
        type: new FormControl(chosenOpt),
        req: new FormControl(false),
        option: new FormArray([
          this.fb.control('option')
        ]),
        SelectedOption: new FormControl("Checkbox"),
      });
    } else {
      group = new FormGroup({
        placeholder: new FormControl('placeholder'),
        label: new FormControl('label'),
        type: new FormControl(chosenOpt),
        req: new FormControl(false),
        option: new FormArray([
          this.fb.control('option')
        ]),
        SelectedOption: new FormControl(chosenOpt),
      });
    }

    this.RF.push(group);
    this.selectedOption.reset();
  }

  submitNewForm(): void {
    var i = 0;
    var Opt: string[] = [];
    var formVal: {};

    this.formDetails.title = this.DetailsForm.controls.formTitle.value;
    this.formDetails.end_date = this.DetailsForm.controls.formEndDate.value;
    this.formDetails.custom_url = this.DetailsForm.controls.formCustomUrl.value;

    for (let control of this.RF.controls) {
      if ((control.value.type === "radio") || (control.value.type === "checkbox") || (control.value.type === "select")) {
        for (let x of this.TF(i).controls) {
          Opt.push(x.value)
        }
        formVal = {
          question: control.value.label,
          placeholder: control.value.placeholder,
          type: control.value.type,
          required: control.value.req,
          options: Opt
        }
      } else {
        formVal = {
          question: control.value.label,
          placeholder: control.value.placeholder,
          type: control.value.type,
          required: control.value.req,
        }
      }
      this.formFields.push(formVal);
      Opt = [];
      i++;
    }
    this.formDetails.form_fields = this.formFields
    console.log(this.formDetails);
    // console.log(this.formFields);
    this.api.createForm(this.formDetails).subscribe((resp) => {
      console.log(resp);
    })
  }


}
