import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-flui-input-preview',
  templateUrl: './flui-input-preview.component.html',
  styleUrls: ['./flui-input-preview.component.scss']
})
export class FluiInputPreviewComponent {

  public errorMessages: any = {
    required: 'This Field is Required',
    minLength: 'Min Lengh of 30 Character is Required'
  };

  fakeForm = this._formBuilder.group({
    firstName: ['Muhammad', Validators.required ],
    lastName: ['Ibrahim'],
    password: ['password'],
    active: [false, Validators.requiredTrue]
  })

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  isBtnClicked($event: any) {
    console.log('>> isBtnClicked', $event);
    console.log('>> fakeform value', this.fakeForm.value);
  }
}
