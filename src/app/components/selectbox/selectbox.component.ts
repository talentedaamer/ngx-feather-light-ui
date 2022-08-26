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

  fakeForm = this._formBuilder.group({
    favFood: ['', Validators.required],
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  isBtnClicked($event: any) {
    console.log('>> fakeform value', this.fakeForm.value);
  }

}
