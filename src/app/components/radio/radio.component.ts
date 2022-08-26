import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

  public favFood = [
    {
      label: 'Pizza',
      value: 'pizza'
    },
    {
      label: 'Burger',
      value: 'burger'
    },
    {
      label: 'Fries',
      value: 'fries'
    },
  ];

  fakeForm = this._formBuilder.group({
    favFood: ['pizza'],
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  isBtnClicked($event: any) {
    console.log('>> fakeform value', this.fakeForm.value);
  }

}