import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent  {

  label = 'Active Profile';
  labelPosition: any = 'right';

  public errorMessages: any = {
    required: 'This Field is Required',
  };

  fakeForm = this._formBuilder.group({
    activeProfile: ['', Validators.requiredTrue ],
    rememberPassword: [true],
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  isBtnClicked($event: any) {
    console.log('>> fakeform value', this.fakeForm.value);
  }

  get formValidity(): any {
    return this.fakeForm.valid ? 'success' : 'danger';
  }

}
