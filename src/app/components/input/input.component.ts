import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  public errorMessages: any = {
    required: 'This Field is Required',
    minLength: 'Min Lengh of 30 Character is Required',
    email: 'Please enter a valid email.'
  };

  fakeForm = this._formBuilder.group({
    firstName: ['Muhammad', Validators.required ],
    lastName: ['Ibrahim'],
    email: ['', [Validators.email, Validators.required]],
    password: ['password'],
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  isBtnClicked($event: any) {
    console.log('>> fakeform value', this.fakeForm.value);
  }
}
