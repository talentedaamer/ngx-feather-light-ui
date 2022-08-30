import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent {

  public options: any[] = [
    {
      label: 'Pizza',
      value: 'pizza',
    },
    {
      label: 'Burger',
      value: 'burger',
    },
    {
      label: 'Fries',
      value: 'fries',
    },
  ];

  public genderList: any[] = [
    {
      label: 'Select Gender',
      value: '',
    },
    {
      label: 'Male',
      value: 0,
    },
    {
      label: 'Female',
      value: 1,
    },
  ];

  public errorMessages: any = {
    required: 'This Field is Required',
    minLength: 'Min Lengh of 30 Character is Required',
    email: 'Please enter a valid email.'
  };

  fakeForm = this._formBuilder.group({
    favFood: ['', Validators.required],
    gender: [1],
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  isBtnClicked($event: any) {
    console.log('>> fakeform value', this.fakeForm.value);
  }

}
